// Helpers every source adapter uses to turn Markdown into MDX that our site can build.

/** Marks generated pages, so a re-import replaces them and leaves hand-written pages alone. */
export const GENERATED_MARKER = 'Imported by tools/import-docs';

export function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { fields: {}, body: source };
  const fields = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) fields[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
  return { fields, body: source.slice(match[0].length) };
}

/** Splits markdown into fenced code blocks and text, so text-only transforms skip code. */
export function splitFences(body) {
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

/** Applies `transform` to the text between code blocks, and `transformCode` to the code blocks. */
export function mapText(body, transform, transformCode = (part) => fence(part.info, part.code)) {
  return splitFences(body)
    .map((part) => (part.type === 'code' ? transformCode(part) : transform(part.value)))
    .join('');
}

export function fence(info, code) {
  return '```' + info + '\n' + code.replace(/\n?$/, '\n') + '```';
}

export function inlineCode(text) {
  return '`' + text + '`';
}

/** JSX we generate is set aside while escaping, then put back. */
const generatedJsx = [];

export function keepJsx(jsx) {
  generatedJsx.push(jsx);
  return `@@JSX${generatedJsx.length - 1}@@`;
}

function restoreJsx(text) {
  return text.replace(/@@JSX(\d+)@@/g, (_, i) => generatedJsx[Number(i)]);
}

/** Escapes characters MDX would treat as JSX/expressions, outside inline code spans. */
export function escapeForMdx(text) {
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

export function dedent(text) {
  const lines = text.replace(/^\n+/, '').split('\n');
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
  return lines.map((l) => l.slice(indent)).join('\n');
}

/** A `## Heading` regex source that also matches headings that already carry an id. */
const sectionHeading = (title) =>
  `^## ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?: \\{#[^}]*\\})?[ \\t]*\\n`;

/** Removes "## Heading" sections (up to the next ## heading) by title. */
export function removeSections(mdx, titles) {
  for (const title of titles) {
    mdx = mdx.replace(
      new RegExp(`${sectionHeading(title)}[\\s\\S]*?(?=^## |$(?![\\s\\S]))`, 'm'),
      '',
    );
  }
  return mdx;
}

/**
 * Keeps the introduction (everything before the first ## heading) and the listed "## Heading"
 * sections, in their original order. Returns the titles that were not found, too.
 */
export function keepSections(markdown, titles) {
  return filterSections(markdown, titles, (title) => titles.includes(title));
}

/** The opposite of keepSections: removes the listed "## Heading" sections. */
export function dropSections(markdown, titles) {
  return filterSections(markdown, titles, (title) => !titles.includes(title));
}

function filterSections(markdown, titles, keep) {
  const chunks = splitSections(markdown);
  const kept = chunks.filter((chunk, i) => i === 0 || keep(chunk.title));
  const missing = titles.filter((title) => !chunks.some((chunk) => chunk.title === title));
  return { markdown: kept.map((chunk) => chunk.text).join(''), missing };
}

/** Splits markdown at "## " headings that are not inside code blocks. */
function splitSections(markdown) {
  const chunks = [{ title: null, text: '' }];
  let inFence = false;
  for (const line of markdown.split(/(?<=\n)/)) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    const heading = !inFence && line.match(/^## (.+?)\s*$/);
    if (heading) chunks.push({ title: heading[1], text: '' });
    chunks[chunks.length - 1].text += line;
  }
  return chunks;
}

/**
 * Text replacements a stage config asks for, e.g. typo fixes. `from` is exact text, or a RegExp
 * for longer passages. Warns if one didn't match, so changes upstream don't go unnoticed.
 */
export function applyReplacements(text, replacements = [], warn) {
  for (const [from, to] of replacements) {
    const found = from instanceof RegExp ? from.test(text) : text.includes(from);
    if (!found) warn(`replacement not found: ${from}`);
    text =
      from instanceof RegExp
        ? text.replace(new RegExp(from.source, from.flags.replace('g', '') + 'g'), to)
        : text.replaceAll(from, to);
  }
  return text;
}
