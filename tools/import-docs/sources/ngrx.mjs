// The NgRx documentation (https://github.com/ngrx/platform, projects/www).
// Page option `from`: the page's path under projects/www/src/app/pages, without ".md",
// e.g. "guide/store/actions". "guide/store/index" is the Store overview.
import fs from 'node:fs';
import path from 'node:path';

import {
  admonition,
  codeInfo,
  convertImages,
  convertLinks,
  internalLink,
  toMdx,
  warnUnhandledTags,
} from '../lib/markdown.mjs';
import { dedent, fence } from '../lib/mdx.mjs';
import { convertFenceInfo, extractRegion } from './angular.mjs';

const wwwDir = (srcRoot) => path.join(srcRoot, 'ngrx/projects/www');
const pagesDir = (srcRoot) => path.join(wwwDir(srcRoot), 'src/app/pages');
const examplesDir = (srcRoot) => path.join(wwwDir(srcRoot), 'src/app/examples');

/** The page's path on ngrx.io: "guide/store/index" -> "guide/store". */
const sitePath = (from) => from.replace(/\/index$/, '');

/** <ngrx-docs-alert type="..."> -> admonition type. */
const ALERT_TYPES = { help: 'tip', inform: 'note', warn: 'warning', error: 'danger' };

export default {
  attribution: 'ngrx',
  sourceName: 'the NgRx documentation',

  linkKey: (page) => sitePath(page.from),

  convert(page, ctx) {
    const source = fs.readFileSync(path.join(pagesDir(ctx.srcRoot), `${page.from}.md`), 'utf8');
    const markdown = ctx.select(source);
    const title = markdown.match(/^# (.+)$/m)?.[1] ?? 'Untitled';

    const text = convertNgrxTags(markdown.replace(/^# .+\n/m, ''), ctx);
    warnUnhandledTags(text, /<ngrx-[a-z-]+/g, ctx);

    return {
      title,
      kind: 'reading',
      body: toMdx(text, {
        info: convertFenceInfo,
        prose: (prose) =>
          convertImages(
            convertLinks(prose, (href) => internalLink(href, ctx)),
            (src) => ctx.copyImage(path.join(wwwDir(ctx.srcRoot), 'public', src)),
          ),
      }),
      url: `https://ngrx.io/${sitePath(page.from)}`,
    };
  },
};

const attribute = (attrs, name) => attrs.match(new RegExp(`${name}="([^"]*)"`))?.[1];

function convertNgrxTags(text, ctx) {
  return (
    text
      // Live StackBlitz embeds need the internet.
      .replace(/<ngrx-docs-stackblitz[^>]*>\s*<\/ngrx-docs-stackblitz>/g, '')
      .replace(/<ngrx-docs-install\s([^>]*)>\s*<\/ngrx-docs-install>/g, (_, attrs) =>
        fence('bash', `npm install ${attribute(attrs, 'package-name')}`),
      )
      .replace(/<ngrx-docs-alert\s([^>]*)>([\s\S]*?)<\/ngrx-docs-alert>/g, (_, attrs, content) =>
        admonition(ALERT_TYPES[attribute(attrs, 'type')] ?? 'note', dedent(content)),
      )
      // A code block with a file name, written inline or loaded from the docs' examples.
      .replace(
        /<ngrx-code-example\b([^>]*)>([\s\S]*?)<\/ngrx-code-example>/g,
        (_, attrs, content) => codeExample(attrs, content, ctx),
      )
  );
}

function codeExample(attrs, content, ctx) {
  const title = attribute(attrs, 'header');
  const examplePath = attribute(attrs, 'path');
  if (!examplePath) {
    // The code is a fenced block inside the tag: give it the tag's header as its title.
    // (convertFenceInfo turns the header into a title when the page is converted.)
    if (!title) return content;
    return content.replace(
      /```(\S*)([^\n]*)/,
      (_, language, meta) => '```' + `${language} {header: ${JSON.stringify(title)}}${meta}`,
    );
  }
  const file = path.join(examplesDir(ctx.srcRoot), examplePath);
  if (!fs.existsSync(file)) {
    ctx.warn(`example file not found: ${examplePath}`);
    return '';
  }
  const code = extractRegion(fs.readFileSync(file, 'utf8'), attribute(attrs, 'region'));
  return '\n' + fence(codeInfo({ language: path.extname(file).slice(1), title }), code) + '\n';
}
