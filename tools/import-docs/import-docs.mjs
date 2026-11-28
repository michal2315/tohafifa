// Imports documentation pages from open-licensed sources into a stage as MDX. See README.md.
// Usage: node tools/import-docs/import-docs.mjs <stage-config> <sources-dir>
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { applyReplacements, dropSections, GENERATED_MARKER, keepSections } from './lib/mdx.mjs';
import angular from './sources/angular.mjs';
import angularTutorial from './sources/angular-tutorial.mjs';
import githubReadme from './sources/github-readme.mjs';
import mdn from './sources/mdn.mjs';
import ngrx from './sources/ngrx.mjs';
import rxjs from './sources/rxjs.mjs';
import sass from './sources/sass.mjs';

/** Every source a page can come from. To add one, write an adapter in sources/ (see README). */
const SOURCES = {
  mdn,
  sass,
  angular,
  'angular-tutorial': angularTutorial,
  ngrx,
  rxjs,
  'github-readme': githubReadme,
};

const [configPath, srcRootArg] = process.argv.slice(2);
if (!configPath || !srcRootArg) {
  console.error('Usage: node tools/import-docs/import-docs.mjs <stage-config> <sources-dir>');
  process.exit(1);
}

const srcRoot = path.resolve(srcRootArg);
const { default: config } = await import(pathToFileURL(path.resolve(configPath)).href);
const stageDir = path.resolve(config.stageDir);
const pages = config.pages;

for (const page of pages) {
  if (!SOURCES[page.source]) throw new Error(`${page.output}: unknown source "${page.source}"`);
}

const warnings = [];

/** Every image this run copied - anything else in the generated img/ folders is stale. */
const copiedImages = new Set();

// ---------- links between imported pages ----------

/** "<source>:<link key>" -> output file, so links between imported pages stay inside the site. */
const outputByLinkKey = new Map();
for (const page of pages) {
  const { linkKey } = SOURCES[page.source];
  // A page can have more than one key, e.g. "guide/signals" and "guide/signals/overview".
  for (const key of [linkKey?.(page, { srcRoot }) ?? []].flat()) {
    outputByLinkKey.set(`${page.source}:${key}`, page.output);
  }
}

/** A relative link from `page` to the imported page with that key, or null if we didn't import it. */
function linkTo(page, key) {
  const target = outputByLinkKey.get(`${page.source}:${key}`);
  if (!target) return null;
  const relative = path.posix.relative(path.posix.dirname(page.output), target);
  return relative.startsWith('.') ? relative : './' + relative;
}

// ---------- images ----------

/** Copies an image next to the page (img/<page name>/) and returns the path to use in the page. */
function copyImage(page, sourceImage, warn) {
  if (!fs.existsSync(sourceImage)) {
    warn(`image not found: ${path.relative(srcRoot, sourceImage)}`);
    return null;
  }
  const pageName = path.basename(page.output, '.mdx');
  const imageDir = path.join(path.dirname(page.output), 'img', pageName);
  const target = path.join(stageDir, imageDir, path.basename(sourceImage));
  copiedImages.add(target);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (sourceImage.endsWith('.svg')) {
    // Drop the XML prolog (declaration, comments, doctype) so image tools find the <svg> tag.
    // Also drop draw.io's embedded editor copy of the diagram (a huge "content" attribute).
    const svg = fs.readFileSync(sourceImage, 'utf8');
    fs.writeFileSync(target, svg.slice(svg.indexOf('<svg')).replace(/\scontent="[^"]*"/, ''));
  } else {
    fs.copyFileSync(sourceImage, target);
  }
  return `./${path.posix.join('img', pageName, path.basename(sourceImage))}`;
}

// ---------- page rendering ----------

function renderPage(page, adapter, converted) {
  const kind = page.kind ?? converted.kind;
  const customProps = page.track
    ? `{ kind: ${kind}, track: ${JSON.stringify(page.track)} }`
    : `{ kind: ${kind} }`;
  const title = page.title ?? converted.title;
  const sidebarLabel = page.sidebarLabel ?? converted.sidebarLabel;
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    sidebarLabel ? `sidebar_label: ${JSON.stringify(sidebarLabel)}` : null,
    page.position !== undefined ? `sidebar_position: ${page.position}` : null,
    `sidebar_custom_props: ${customProps}`,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  const body = converted.body.replace(/\n{3,}/g, '\n\n').trim();
  const attributionTitle = converted.attributionTitle ?? converted.title;
  // Most adapters always credit the same source; a README's credit depends on its repository.
  const attribution = converted.attribution ?? adapter.attribution;

  return `${frontmatter}

{/* ${GENERATED_MARKER} from ${adapter.sourceName} - do not edit the text by hand. */}

${body}

<SourceAttribution source="${attribution}" title=${JSON.stringify(attributionTitle)} url="${converted.url}" />
`;
}

// ---------- run ----------

for (const [folder, label] of Object.entries(config.categories ?? {})) {
  const dir = path.join(stageDir, folder);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, '_category_.json'), JSON.stringify({ label }, null, 2) + '\n');
}

// Pages are overwritten in place (deleting and recreating trips file watchers on Windows).
const generatedPages = new Set();
for (const page of pages) {
  const adapter = SOURCES[page.source];
  const warn = (message) => warnings.push(`${page.output}: ${message}`);
  const ctx = {
    srcRoot,
    stageDir,
    warn,
    linkTo: (key) => linkTo(page, key),
    copyImage: (sourceImage) => copyImage(page, sourceImage, warn),
    /** Applies the page's `replace`, `sections` and `dropSections` options to the source markdown. */
    select(markdown) {
      let text = applyReplacements(markdown.replace(/\r\n/g, '\n'), page.replace, warn);
      if (page.sections) {
        const { markdown: kept, missing } = keepSections(text, page.sections);
        missing.forEach((title) => warn(`section not found: "${title}"`));
        text = kept;
      }
      if (page.dropSections) {
        const { markdown: kept, missing } = dropSections(text, page.dropSections);
        missing.forEach((title) => warn(`section not found: "${title}"`));
        text = kept;
      }
      return text;
    },
  };

  const filePath = path.join(stageDir, page.output);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, renderPage(page, adapter, adapter.convert(page, ctx)));
  generatedPages.add(filePath);
}

// Remove leftovers of earlier imports: generated pages and images that are no longer part of
// the import. Hand-written pages next to them (quizzes, videos) don't have the marker and stay.
const generatedDirs = new Set([
  ...Object.keys(config.categories ?? {}).map((folder) => path.join(stageDir, folder)),
  ...pages.map((page) => path.dirname(path.join(stageDir, page.output))),
]);
for (const dir of generatedDirs) {
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.mdx'))) {
    const filePath = path.join(dir, file);
    if (!fs.readFileSync(filePath, 'utf8').includes(GENERATED_MARKER)) continue;
    if (!generatedPages.has(filePath)) fs.rmSync(filePath);
    // Images live in img/<page name>/ - hand-written pages' images are never touched.
    removeStaleFiles(path.join(dir, 'img', path.basename(file, '.mdx')));
  }
  const imgDir = path.join(dir, 'img');
  if (fs.existsSync(imgDir) && fs.readdirSync(imgDir).length === 0) fs.rmdirSync(imgDir);
}

/** Deletes files under `dir` that this import didn't copy, then empty folders. */
function removeStaleFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) removeStaleFiles(entryPath);
    else if (!copiedImages.has(entryPath)) fs.rmSync(entryPath);
  }
  if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

console.log(`Imported ${pages.length} pages into ${stageDir}.`);
if (warnings.length) console.log('Warnings:\n  ' + warnings.join('\n  '));
