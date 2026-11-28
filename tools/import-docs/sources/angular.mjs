// The Angular documentation (https://github.com/angular/angular, adev/src/content).
// Page option `from`: the page's path under adev/src/content, without ".md",
// e.g. "guide/routing/define-routes" or "introduction/essentials/signals".
import fs from 'node:fs';
import path from 'node:path';

import {
  admonition,
  codeInfo,
  convertImages,
  convertLinks,
  convertPrefixCallouts,
  internalLink,
  toMdx,
  warnUnhandledTags,
} from '../lib/markdown.mjs';
import { dedent, fence } from '../lib/mdx.mjs';

export const angularRepo = (srcRoot) => path.join(srcRoot, 'angular');
const contentDir = (srcRoot) => path.join(angularRepo(srcRoot), 'adev/src/content');

/** The page's path on angular.dev, which is also how other pages link to it. */
function sitePath(from) {
  return from
    .replace(/^introduction\/essentials\//, 'essentials/')
    .replace(/^introduction\//, '')
    .replace(/^best-practices\/style-guide$/, 'style-guide')
    .replace(/\/overview$/, '');
}

export default {
  attribution: 'angular',
  sourceName: 'the Angular documentation',

  linkKey: (page) => [sitePath(page.from), page.from],

  convert(page, ctx) {
    const source = fs.readFileSync(path.join(contentDir(ctx.srcRoot), `${page.from}.md`), 'utf8');
    const { title, markdown } = extractTitle(ctx.select(source));

    return {
      title,
      kind: 'reading',
      body: convertAngularMarkdown(markdown, ctx),
      url: `https://angular.dev/${sitePath(page.from)}`,
    };
  },
};

/** The page title is its "# Heading" or, on overview pages, the decorative header's title. */
function extractTitle(markdown) {
  const header = markdown.match(/<docs-decorative-header\s[^>]*title="([^"]*)"/);
  const heading = markdown.match(/^# (.+)$/m);
  return {
    title: heading?.[1] ?? header?.[1] ?? 'Untitled',
    markdown: markdown.replace(/^# .+\n/m, ''),
  };
}

/** Converts Angular-docs markdown (also used by the tutorial adapter) to MDX. */
export function convertAngularMarkdown(markdown, ctx) {
  const text = convertDocsTags(markdown, ctx);
  warnUnhandledTags(text, /<docs-[a-z-]+/g, ctx);

  return toMdx(text, {
    info: convertFenceInfo,
    prose: (prose) =>
      convertPrefixCallouts(
        convertImages(
          convertLinks(prose, (href) => internalLink(href, ctx)),
          (src) => ctx.copyImage(path.join(angularRepo(ctx.srcRoot), 'adev/src', src)),
        ),
      ),
  });
}

// ---------- the docs site's custom tags ----------

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w-]+)(?:="([^"]*)")?/g)].map(([, name, value]) => [name, value ?? true]),
  );
}

function convertDocsTags(text, ctx) {
  return (
    text
      // Decoration and "related pages" link pills.
      .replace(/<docs-decorative-header[\s\S]*?<\/docs-decorative-header>/g, '')
      .replace(/<docs-pill-row[\s\S]*?<\/docs-pill-row>/g, '')
      .replace(/<docs-pill\s[^>]*\/>/g, '')
      // Several files shown as tabs: we show them one after another.
      .replace(/<\/?docs-code-multifile[^>]*>/g, '')
      .replace(/<docs-code\s([^>]*?)\/>/g, (_, attrs) => docsCode(attributes(attrs), null, ctx))
      .replace(/<docs-code\s([^>]*)>([\s\S]*?)<\/docs-code>/g, (_, attrs, code) =>
        docsCode(attributes(attrs), code, ctx),
      )
      .replace(/<docs-callout\s([^>]*)>([\s\S]*?)<\/docs-callout>/g, (_, attrs, content) => {
        const { title, important, critical, helpful } = attributes(attrs);
        const type = critical ? 'danger' : important ? 'warning' : helpful ? 'tip' : 'note';
        return admonition(type, dedent(content), title);
      })
      .replace(/<docs-workflow>([\s\S]*?)<\/docs-workflow>/g, (_, steps) => workflow(steps))
  );
}

/** A numbered list of steps: each step is a bold numbered title followed by its text. */
function workflow(steps) {
  let number = 0;
  return steps.replace(/<docs-step\s([^>]*)>([\s\S]*?)<\/docs-step>/g, (_, attrs, content) => {
    number += 1;
    return `\n**${number}. ${attributes(attrs).title}**\n\n${dedent(content).trim()}\n`;
  });
}

/** <docs-code>: inline code, or a region of a file from the docs' examples. */
function docsCode(attrs, inlineCode, ctx) {
  const highlight = parseList(attrs.highlight);
  if (inlineCode !== null) {
    const code = dedent(inlineCode.replace(/^\n+|\s+$/g, ''));
    return (
      '\n' +
      fence(codeInfo({ language: attrs.language, title: attrs.header, highlight }), code) +
      '\n'
    );
  }

  const file = path.join(angularRepo(ctx.srcRoot), attrs.path);
  if (!fs.existsSync(file)) {
    ctx.warn(`example file not found: ${attrs.path}`);
    return '';
  }
  const code = extractRegion(fs.readFileSync(file, 'utf8'), attrs.region);
  const language = attrs.language ?? path.extname(file).slice(1);
  return '\n' + fence(codeInfo({ language, title: attrs.header, highlight }), code) + '\n';
}

/** "[1, 3-4]" -> ["1", "3-4"] */
function parseList(value) {
  if (typeof value !== 'string') return [];
  return value
    .replace(/[[\]\s]/g, '')
    .split(',')
    .filter(Boolean);
}

const REGION_MARKER = /#(?:end)?docregion|#docplaster/;

/**
 * The docs' examples mark the parts pages show with "#docregion name" ... "#enddocregion".
 * Returns that region (or the whole file without the markers), dedented.
 */
export function extractRegion(source, region) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const names = (line, marker) =>
    (line.match(new RegExp(`#${marker}\\s+([\\w\\s,-]+)`))?.[1] ?? '')
      .split(/[\s,]+/)
      .filter(Boolean);

  let kept = lines;
  if (region) {
    kept = [];
    let inRegion = false;
    for (const line of lines) {
      if (/#docregion/.test(line) && names(line, 'docregion').includes(region)) inRegion = true;
      else if (/#enddocregion/.test(line)) {
        const ended = names(line, 'enddocregion');
        if (ended.length === 0 || ended.includes(region)) inRegion = false;
      } else if (inRegion) kept.push(line);
    }
  }
  return dedent(
    kept
      .filter((line) => !REGION_MARKER.test(line))
      .join('\n')
      .trim(),
  );
}

/**
 * "angular-ts {header: 'app.ts', highlight: [3]}" -> 'ts title="app.ts" {3}'.
 * Info strings already in that form (from code blocks we generated) stay the same.
 */
export function convertFenceInfo(info) {
  const [language = '', ...rest] = info.split(/\s+/);
  const meta = rest.join(' ');
  const header =
    meta.match(/header\s*:\s*["']([^"']*)["']/)?.[1] ?? meta.match(/title="([^"]*)"/)?.[1];
  const verdict = /\bprefer\b/.test(meta) ? 'Prefer' : /\bavoid\b/.test(meta) ? 'Avoid' : null;
  const highlight =
    meta.match(/highlight\s*:\s*(\[[^\]]*\])/)?.[1] ?? meta.match(/\{([\d,\s-]+)\}/)?.[1];
  return codeInfo({
    language,
    title: [verdict, header].filter(Boolean).join(': ') || undefined,
    highlight: parseList(highlight),
  });
}
