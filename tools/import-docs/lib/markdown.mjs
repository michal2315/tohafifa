// Conversions shared by the sources that are plain GitHub-style Markdown (Angular, NgRx, RxJS,
// READMEs). Each adapter handles its own custom tags first, then uses these.
import { escapeForMdx, fence, mapText, splitFences } from './mdx.mjs';

/** Language names our site highlights, for the names other docs sites use. */
const LANGUAGE_ALIASES = {
  'angular-ts': 'ts',
  'angular-html': 'html',
  typescript: 'ts',
  javascript: 'js',
  shell: 'bash',
  sh: 'bash',
  mermaid: 'text', // we have no diagram renderer; the source of a small diagram still reads fine
};

/**
 * Builds the info string of a code block in Docusaurus syntax:
 * language, `title="..."` and line highlights `{1,3-4}`.
 */
export function codeInfo({ language = '', title, highlight = [] }) {
  const parts = [LANGUAGE_ALIASES[language] ?? language];
  if (title) parts.push(`title=${JSON.stringify(title)}`);
  if (highlight.length) parts.push(`{${highlight.join(',')}}`);
  return parts.filter(Boolean).join(' ');
}

/** Warns about a docs site's custom tags (matched by `pattern`) left in the prose. */
export function warnUnhandledTags(markdown, pattern, ctx) {
  const prose = splitFences(markdown)
    .filter((part) => part.type === 'text')
    .map((part) => part.value)
    .join('\n');
  const leftovers = prose.match(pattern);
  if (leftovers) ctx.warn(`unhandled tags: ${[...new Set(leftovers)].join(' ')}`);
}

/** Removes things that are never valid or useful in our MDX. */
export function cleanUp(text) {
  return (
    text
      // HTML comments are not valid in MDX.
      .replace(/<!--[\s\S]*?-->/g, '')
      // Void elements must self-close in MDX.
      .replace(/<br\s*\/?>/g, '<br />')
      .replace(/^\s*<hr\s*\/?>\s*$/gm, '')
      // HTML that Markdown can say itself: inline code, and links (their targets are on the web).
      .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/g, (_, code) => '`' + code + '`')
      .replace(/<a\s[^>]*>([\s\S]*?)<\/a>/g, '$1')
      // Layout wrappers around images and text.
      .replace(/<\/?(?:figure|figcaption|div|center)\b[^>]*>/g, '')
  );
}

/**
 * Rewrites Markdown links. `resolve(href)` returns the link to use, or null to keep only the
 * label: links outside the site are dead inside the closed network.
 */
export function convertLinks(text, resolve) {
  return text.replace(
    /(?<!!)\[([^\]]+)\]\(([^)\s]+)(?:\s+(?:"[^"]*"|'[^']*'))?\)/g,
    (_, label, href) => {
      const target = resolve(href);
      return target ? `[${label}](${target})` : label;
    },
  );
}

/**
 * For convertLinks(): links to pages we imported point inside our site, keeping their "#hash".
 * Links to other sites, or to pages we didn't import, return null. `ctx` is the adapter's context.
 */
export function internalLink(href, ctx) {
  if (href.startsWith('#')) return href;
  if (/^[a-z]+:/i.test(href)) return null;
  const [linkPath, hash] = href.replace(/^\.?\/+/, '').split('#');
  const target = ctx.linkTo(linkPath.replace(/\/$/, ''));
  return target ? target + (hash ? `#${hash}` : '') : null;
}

/**
 * Rewrites images - Markdown `![alt](src)` and HTML `<img>` - to local copies.
 * `copy(src)` returns the path to use, or null to drop the image.
 */
export function convertImages(text, copy) {
  const image = (alt, src) => {
    const local = copy(src);
    return local ? `![${alt}](${local})` : '';
  };
  return text
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => image(alt, src))
    .replace(/<img\b([^>]*?)\/?>/g, (_, attributes) => {
      const src = attributes.match(/\ssrc="([^"]*)"/)?.[1];
      const alt = attributes.match(/\salt="([^"]*)"/)?.[1] ?? '';
      return src ? image(alt, src) : '';
    });
}

/** "TYPE: text" paragraphs (the Angular docs' callouts) -> admonitions. */
const PREFIX_CALLOUTS = {
  NOTE: 'note',
  TIP: 'tip',
  HELPFUL: 'tip',
  IMPORTANT: 'warning',
  CRITICAL: 'danger',
};

export function convertPrefixCallouts(text) {
  return text.replace(
    new RegExp(
      `^(${Object.keys(PREFIX_CALLOUTS).join('|')}): ([\\s\\S]*?)(?=\\n\\s*\\n|$(?![\\s\\S]))`,
      'gm',
    ),
    (_, prefix, content) => admonition(PREFIX_CALLOUTS[prefix], content.trim()),
  );
}

export function admonition(type, content, title) {
  return `\n:::${type}${title ? `[${title}]` : ''}\n\n${content.trim()}\n\n:::\n`;
}

/**
 * Prose (outside code blocks) gets the shared conversions and is escaped for MDX; code blocks
 * get their info string converted by `info(info)`.
 */
export function toMdx(markdown, { prose = (text) => text, info = (value) => value }) {
  const mdx = mapText(
    markdown,
    (text) => escapeForMdx(escapeTags(prose(cleanUp(text)))),
    (part) => fence(info(part.info), part.code),
  );
  return removeDeadAnchorLinks(mdx);
}

/** The id Docusaurus gives a heading (like GitHub): "Using `inject()`" -> "using-inject". */
function headingSlug(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .trim()
    .replace(/\s/g, '-');
}

/** "#anchor" links to headings that are not on the page (e.g. a section we left out) -> text. */
function removeDeadAnchorLinks(mdx) {
  const ids = new Set(
    splitFences(mdx)
      .filter((part) => part.type === 'text')
      .flatMap((part) => [...part.value.matchAll(/^#{2,6} (.+)$/gm)].map((m) => headingSlug(m[1]))),
  );
  return mapText(mdx, (text) =>
    text.replace(/(?<!!)\[([^\]]+)\]\(#([^)\s]+)\)/g, (link, label, id) =>
      ids.has(id) ? link : label,
    ),
  );
}

/**
 * These docs mention elements like <app-root> in plain prose, which MDX would parse as JSX.
 * Every "<" outside inline code becomes text, except the <br /> that cleanUp() writes.
 */
function escapeTags(text) {
  return text
    .split(/(`+[^`\n]*`+)/)
    .map((piece, i) => (i % 2 === 1 ? piece : piece.replace(/<(?!br \/>)(?=[a-zA-Z/!])/g, '&lt;')))
    .join('');
}
