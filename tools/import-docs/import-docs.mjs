// Imports documentation pages (MDN, the Sass guide) into a stage as MDX. See README.md.
// Usage: node tools/import-docs/import-docs.mjs <stage-config> <sources-dir>
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [configPath, srcRoot] = process.argv.slice(2);
if (!configPath || !srcRoot) {
  console.error('Usage: node tools/import-docs/import-docs.mjs <stage-config> <sources-dir>');
  process.exit(1);
}

const { default: config } = await import(pathToFileURL(path.resolve(configPath)).href);
const stageDir = path.resolve(config.stageDir);
const mdnCore = path.join(srcRoot, 'mdn/files/en-us/learn_web_development/core');
const { categories: CATEGORIES, mdnPages: MDN_PAGES, sassGuide: SASS_GUIDE_OUTPUT } = config;

const warnings = [];
const warn = (file, message) => warnings.push(`${file}: ${message}`);

// ---------- helpers ----------

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  const fields = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) fields[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
  return { fields, body: source.slice(match[0].length) };
}

/** Splits markdown into fenced code blocks and text, so text-only transforms skip code. */
function splitFences(body) {
  const parts = [];
  const re = /^```([^\n]*)\n([\s\S]*?)^```[ \t]*$/gm;
  let last = 0;
  for (const m of body.matchAll(re)) {
    parts.push({ type: 'text', value: body.slice(last, m.index) });
    parts.push({ type: 'code', info: m[1].trim(), code: m[2] });
    last = m.index + m[0].length;
  }
  parts.push({ type: 'text', value: body.slice(last) });
  return parts;
}

function parseFenceInfo(info) {
  const tokens = info.split(/\s+/).filter(Boolean);
  const language = (tokens[0] ?? '').replace(/-nolint$/, '').replace(/^plain$/, 'text');
  const samples = tokens.filter((t) => t.startsWith('live-sample___')).map((t) => t.slice(14));
  return { language, samples, hidden: tokens.includes('hidden') };
}

const macroArgs = (args) =>
  [...args.matchAll(/"([^"]*)"|'([^']*)'|(\d+)/g)].map((m) => m[1] ?? m[2] ?? m[3]);

/** Matches {{name(args)}} - args may themselves contain parentheses, e.g. ":where()". */
const macro = (names) => new RegExp(`\\{\\{\\s*(?:${names})\\((.*?)\\)\\s*\\}\\}`, 'gi');

/** The id MDN gives a heading, e.g. "\<br>: the line break element" -> "br_the_line_break_element". */
function headingId(heading) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9 _-]/g, '')
    .trim()
    .replace(/\s+/g, '_');
}

/** Gives headings MDN's ids, so MDN's own "#anchor" links keep working. Run after escaping. */
function addHeadingIds(text) {
  return text.replace(
    /^(#{2,6}) (.+)$/gm,
    (_, hashes, title) => `${hashes} ${title} {#${headingId(title)}}`,
  );
}

/**
 * Older MDN pages embed a live sample by heading id instead of tagging code blocks:
 * the sample is every code block in that heading's section.
 */
function collectHeadingSamples(body) {
  const samples = new Map();
  const lines = body.split('\n');
  let current = null;
  let inFence = false;
  let fence = null;

  for (const line of lines) {
    const fenceMatch = line.match(/^```(\S*)/);
    if (fenceMatch && !inFence) {
      inFence = true;
      fence = { language: fenceMatch[1].replace(/-nolint$/, ''), code: '' };
      continue;
    }
    if (line.startsWith('```') && inFence) {
      inFence = false;
      if (current && fence.language in current.sample) current.sample[fence.language] += fence.code;
      continue;
    }
    if (inFence) {
      fence.code += line + '\n';
      continue;
    }
    const heading = line.match(/^(#{2,6})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      if (current && level <= current.level) current = null;
      const sample = { html: '', css: '', js: '' };
      samples.set(headingId(heading[2]), sample);
      current = { level, sample };
    }
  }
  return samples;
}

function inlineCode(text) {
  return '`' + text + '`';
}

// ---------- page conversion ----------

/** MDN slug (lowercase) -> output file, for rewriting links between imported pages. */
const slugToOutput = new Map();

function convertMdnPage(outputFile, sourceFolder) {
  const sourcePath = path.join(mdnCore, sourceFolder, 'index.md');
  const { fields, body } = parseFrontmatter(fs.readFileSync(sourcePath, 'utf8'));
  const parts = splitFences(body);

  // Collect live sample code across the whole page (solutions may come after the embed).
  const samples = collectHeadingSamples(body);
  const tagged = new Set();
  for (const part of parts.filter((p) => p.type === 'code')) {
    const { language, samples: ids } = parseFenceInfo(part.info);
    for (const id of ids) {
      // Explicitly tagged code blocks replace any heading-based sample with the same id.
      if (!tagged.has(id)) samples.delete(id);
      tagged.add(id);
      const sample = samples.get(id) ?? { html: '', css: '', js: '' };
      if (language in sample) sample[language] += part.code;
      samples.set(id, sample);
    }
  }

  const imageDir = path.join(path.dirname(outputFile), 'img', path.basename(outputFile, '.mdx'));
  const out = parts.map((part) => {
    if (part.type === 'code') {
      const { language, hidden } = parseFenceInfo(part.info);
      return hidden ? '' : '```' + language + '\n' + part.code + '```';
    }
    return convertText(part.value, { outputFile, sourceFolder, samples, imageDir });
  });

  let mdx = out.join('');
  mdx = removeSections(mdx, ['Interactive challenge']);
  mdx = mdx.replace(/\n{3,}/g, '\n\n').trim();

  const sourceUrl = `https://developer.mozilla.org/en-US/docs/${fields.slug}`;
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(fields.title)}`,
    fields['short-title'] ? `sidebar_label: ${JSON.stringify(fields['short-title'])}` : null,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  return `${frontmatter}

{/* Imported from MDN Web Docs by an import script - do not edit the text by hand. */}

${mdx}

<SourceAttribution source="mdn" title=${JSON.stringify(fields.title)} url="${sourceUrl}" />
`;
}

/** Removes "## Heading" sections (up to the next ## heading) by title. */
function removeSections(mdx, titles) {
  for (const title of titles) {
    mdx = mdx.replace(new RegExp(`^## ${title}\\n[\\s\\S]*?(?=^## |$(?![\\s\\S]))`, 'm'), '');
  }
  return mdx;
}

function convertText(text, ctx) {
  const { outputFile, sourceFolder, samples, imageDir } = ctx;

  // HTML comments are not valid in MDX.
  text = text.replace(/<!--[\s\S]*?-->/g, '');

  // Navigation and external embeds.
  text = text.replace(
    /\{\{\s*(PreviousMenuNext|PreviousMenu|NextMenu|LearnSidebar)[^}]*\}\}/gi,
    '',
  );
  text = text.replace(/\{\{\s*EmbedYouTube[^}]*\}\}/gi, '');
  text = text.replace(/<mdn-scrim-inline[\s\S]*?<\/(mdn-)?scrim-inline>/g, '');

  // Live samples.
  text = text.replace(macro('EmbedLiveSample'), (_, args) => {
    const [id, , height] = macroArgs(args);
    const sample = samples.get(id);
    if (!sample) {
      warn(outputFile, `live sample "${id}" has no code`);
      return '';
    }
    const props = [`html={${JSON.stringify(sample.html)}}`, `css={${JSON.stringify(sample.css)}}`];
    if (sample.js) props.push(`js={${JSON.stringify(sample.js)}}`);
    if (height)
      props.push(`height=${JSON.stringify(/^\d+$/.test(height) ? height + 'px' : height)}`);
    return '\n' + keepJsx(`<LiveExample ${props.join(' ')} />`) + '\n';
  });

  // Cross-reference macros become inline code / plain text.
  text = text.replace(macro('cssxref|domxref|jsxref|httpheader|htmlattrxref'), (_, a) => {
    const [name, label] = macroArgs(a);
    return inlineCode(label || name);
  });
  text = text.replace(macro('htmlelement'), (_, a) => {
    const [name, label] = macroArgs(a);
    return inlineCode(label || `<${name}>`);
  });
  text = text.replace(macro('glossary'), (_, a) => {
    const [term, label] = macroArgs(a);
    return label || term;
  });
  text = text.replace(/\{\{[^}]*\}\}/g, (macro) => {
    warn(outputFile, `dropped unknown macro ${macro}`);
    return '';
  });

  // Callouts: "> [!NOTE]" blockquotes -> admonitions.
  text = text.replace(/^> \[!(NOTE|WARNING|CALLOUT)\]\n((?:>.*\n?)*)/gm, (_, kind, content) => {
    const type = { NOTE: 'note', WARNING: 'warning', CALLOUT: 'tip' }[kind];
    const inner = content.replace(/^> ?/gm, '').trim();
    return `:::${type}\n\n${inner}\n\n:::\n`;
  });

  // Links in HTML: MDN anchors become plain text.
  text = text.replace(/<a\s+href="\/en-US\/docs\/[^"]*"\s*>([\s\S]*?)<\/a\s*>/g, '$1');

  // Markdown links to MDN: internal if we imported the page, otherwise plain text.
  text = text.replace(
    /\[([^\]]+)\]\(\/en-US\/docs\/([^)#\s]+)(#[^)\s]*)?\)/g,
    (_, label, slug, hash) => {
      const target = slugToOutput.get(slug.toLowerCase());
      if (!target) return label;
      const relative = path.posix.relative(path.posix.dirname(outputFile), target);
      return `[${label}](${relative.startsWith('.') ? relative : './' + relative}${hash ?? ''})`;
    },
  );

  // Images next to the source page: copy them and point at the copy.
  text = text.replace(
    /!\[([^\]]*)\]\(([^)\s:]+\.(?:png|jpe?g|gif|svg|webp))\)/gi,
    (_, alt, file) => {
      // "/shared-assets/..." images come from MDN's shared-assets repo, downloaded next to mdn/.
      const sourceImage = file.startsWith('/shared-assets/')
        ? path.join(srcRoot, file)
        : path.join(mdnCore, sourceFolder, file);
      if (!fs.existsSync(sourceImage)) {
        warn(outputFile, `image not found: ${file}`);
        return '';
      }
      const target = path.join(stageDir, imageDir, path.basename(file));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      if (file.endsWith('.svg')) {
        // Drop the XML prolog (declaration, comments, doctype) so image tools find the <svg> tag.
        // Also drop draw.io's embedded editor copy of the diagram (a huge "content" attribute).
        const svg = fs.readFileSync(sourceImage, 'utf8');
        fs.writeFileSync(target, svg.slice(svg.indexOf('<svg')).replace(/\scontent="[^"]*"/, ''));
      } else {
        fs.copyFileSync(sourceImage, target);
      }
      const relative = path.posix.join(
        'img',
        path.basename(outputFile, '.mdx'),
        path.basename(file),
      );
      return `![${alt}](./${relative})`;
    },
  );

  // Typo in some MDN lesson headers: "<ul>" where "</ul>" was meant. Browsers forgive it; MDX doesn't.
  text = text.replace(/(<\/li>\s*)<ul>(\s*<\/td>)/g, '$1</ul>$2');

  // JSX-isms: void elements must self-close, class -> className.
  text = text.replace(/<(br|hr)\s*>/g, '<$1 />');
  text = text.replace(/(<[a-z][^>]*?)\sclass="/g, '$1 className="');

  return addHeadingIds(escapeForMdx(text));
}

/** JSX we generate is set aside while escaping, then put back. */
const generatedJsx = [];
function keepJsx(jsx) {
  generatedJsx.push(jsx);
  return `@@JSX${generatedJsx.length - 1}@@`;
}
function restoreJsx(text) {
  return text.replace(/@@JSX(\d+)@@/g, (_, i) => generatedJsx[Number(i)]);
}

/** Escapes characters MDX would treat as JSX/expressions, outside inline code spans. */
function escapeForMdx(text) {
  const escaped = text
    .split(/(`+[^`\n]*`+)/)
    .map((piece, i) =>
      i % 2 === 1
        ? piece // inline code
        : piece.replace(/[{}]/g, (brace) => '\\' + brace).replace(/<(?=[\s\d=])/g, '&lt;'),
    )
    .join('');
  return restoreJsx(escaped);
}

// ---------- Sass guide ----------

function convertSassGuide() {
  const source = fs.readFileSync(path.join(srcRoot, 'sass-guide.md'), 'utf8');
  const { body } = parseFrontmatter(source);

  let text = body
    .replace(/\{%-?\s*#[^%]*-?%\}/g, '') // template comments
    .replace(/\{%\s*render[^%]*%\}/g, '') // shared snippets from the Sass site
    .replace(/<\/?section[^>]*>/g, '')
    .replace(/<span id="[^"]*"><\/span>/g, '')
    .replace(/^<hr>$/gm, '')
    .replace(/\{%\s*funFact\s*%\}([\s\S]*?)\{%\s*endfunFact\s*%\}/g, (_, content) => {
      return `:::tip[Fun fact]\n\n${dedent(content).trim()}\n\n:::`;
    })
    .replace(/\{%\s*codeExample[^%]*%\}([\s\S]*?)\{%\s*endcodeExample\s*%\}/g, (_, content) => {
      // The first variant is SCSS; the others are the indented syntax and compiled CSS.
      const scss = dedent(content.split(/^\s*===\s*$/m)[0]).trim();
      return '```scss\n' + scss + '\n```';
    })
    // Links to other pages of the Sass site would be dead inside the network.
    .replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, '$1');

  // Same for reference-style links ("[functions][]" + "[functions]: /documentation/...").
  const deadReferences = [...text.matchAll(/^\[([^\]]+)\]:\s*\/\S*\s*$/gm)].map((m) => m[1]);
  text = text.replace(/^\[[^\]]+\]:\s*\/\S*\s*$/gm, '');
  for (const name of deadReferences) {
    text = text.replaceAll(`[${name}][]`, name);
  }

  const leftovers = text.match(/\{%[^%]*%\}/g);
  if (leftovers) warn(SASS_GUIDE_OUTPUT, `unhandled tags: ${leftovers.join(' ')}`);

  const parts = splitFences(text).map((part) =>
    part.type === 'code' ? '```' + part.info + '\n' + part.code + '```' : escapeForMdx(part.value),
  );

  return `---
title: "Sass Basics"
---

{/* Imported from the Sass documentation by an import script - do not edit the text by hand. */}

${parts
  .join('')
  .replace(/\n{3,}/g, '\n\n')
  .trim()}

<SourceAttribution source="sass" title="Sass Basics" url="https://sass-lang.com/guide/" />
`;
}

function dedent(text) {
  const lines = text.replace(/^\n+/, '').split('\n');
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
  return lines.map((l) => l.slice(indent)).join('\n');
}

// ---------- run ----------

for (const [output, folder] of MDN_PAGES) {
  const { fields } = parseFrontmatter(
    fs.readFileSync(path.join(mdnCore, folder, 'index.md'), 'utf8'),
  );
  slugToOutput.set(fields.slug.toLowerCase(), output);
}

// The category folders are fully generated: they are wiped and rewritten on every import.
for (const [folder, label] of Object.entries(CATEGORIES)) {
  const dir = path.join(stageDir, folder);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, '_category_.json'), JSON.stringify({ label }, null, 2) + '\n');
}

for (const [output, folder] of MDN_PAGES) {
  fs.writeFileSync(path.join(stageDir, output), convertMdnPage(output, folder));
}
if (SASS_GUIDE_OUTPUT) {
  fs.writeFileSync(path.join(stageDir, SASS_GUIDE_OUTPUT), convertSassGuide());
}

console.log(`Imported ${MDN_PAGES.length + (SASS_GUIDE_OUTPUT ? 1 : 0)} pages into ${stageDir}.`);
if (warnings.length) console.log('Warnings:\n  ' + warnings.join('\n  '));
