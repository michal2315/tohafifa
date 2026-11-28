// MDN Web Docs (https://github.com/mdn/content), "Learn web development" core lessons.
// Page option `from`: the lesson folder under files/en-us/learn_web_development/core.
import fs from 'node:fs';
import path from 'node:path';

import { replaceFillerText } from '../filler.mjs';
import {
  escapeForMdx,
  inlineCode,
  keepJsx,
  parseFrontmatter,
  removeSections,
  splitFences,
} from '../lib/mdx.mjs';

const lessonsDir = (srcRoot) => path.join(srcRoot, 'mdn/files/en-us/learn_web_development/core');

function readLesson(page, ctx) {
  const sourcePath = path.join(lessonsDir(ctx.srcRoot), page.from, 'index.md');
  return parseFrontmatter(fs.readFileSync(sourcePath, 'utf8'));
}

export default {
  attribution: 'mdn',
  sourceName: 'MDN Web Docs',

  /** Other MDN pages link to a lesson by its slug. */
  linkKey: (page, ctx) => readLesson(page, ctx).fields.slug.toLowerCase(),

  convert(page, ctx) {
    const { fields, body: mdnBody } = readLesson(page, ctx);
    const body = replaceFillerText(mdnBody);
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

    // Tasks embed their starting code as "<task>-start" and the result as "<task>-finish".
    // The start becomes a sandbox to solve the task in, so its code blocks are not repeated.
    const sandboxIds = new Set(
      [...body.matchAll(macro('EmbedLiveSample'))]
        .map((m) => macroArgs(m[1])[0])
        .filter((id) => id.endsWith('-start') && samples.has(id.replace(/-start$/, '-finish'))),
    );

    const out = parts.map((part) => {
      if (part.type === 'code') {
        const { language, hidden, samples: ids } = parseFenceInfo(part.info);
        if (hidden || ids.some((id) => sandboxIds.has(id))) return '';
        return '```' + language + '\n' + part.code + '```';
      }
      return convertText(part.value, { ...ctx, page, samples, sandboxIds });
    });

    let mdx = out.join('');
    mdx = removeSections(mdx, ['Interactive challenge']);

    return {
      title: fields.title,
      sidebarLabel: fields['short-title'],
      // MDN's "Test your skills" pages are exercises; everything else is reading.
      kind: fields['page-type'] === 'learn-module-assessment' ? 'practice' : 'reading',
      body: mdx,
      url: `https://developer.mozilla.org/en-US/docs/${fields.slug}`,
    };
  },
};

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

function convertText(text, ctx) {
  const { page, samples, sandboxIds, warn } = ctx;

  // HTML comments are not valid in MDX.
  text = text.replace(/<!--[\s\S]*?-->/g, '');

  // Navigation and external embeds.
  text = text.replace(
    /\{\{\s*(PreviousMenuNext|PreviousMenu|NextMenu|LearnSidebar)[^}]*\}\}/gi,
    '',
  );
  text = text.replace(/\{\{\s*EmbedYouTube[^}]*\}\}/gi, '');
  text = text.replace(/<mdn-scrim-inline[\s\S]*?<\/(mdn-)?scrim-inline>/g, '');

  // Tasks: the trainee solves them in a sandbox, instead of copying the code somewhere else.
  text = text.replace(/The starting point of the task looks like this:/g, 'Solve the task here:');
  text = text.replace(/Here's the underlying code for this starting point:\s*/g, '');

  // Live samples.
  text = text.replace(macro('EmbedLiveSample'), (_, args) => {
    const [id, , height] = macroArgs(args);
    const sample = samples.get(id);
    if (!sample) {
      warn(`live sample "${id}" has no code`);
      return '';
    }
    if (sandboxIds.has(id)) {
      const finish = samples.get(id.replace(/-start$/, '-finish'));
      const code = ({ html, css, js }) => (js ? { html, css, js } : { html, css });
      // Saved work is stored under the id, so it includes the stage, page and task.
      const sandboxId = [
        path.basename(ctx.stageDir),
        page.output.replace(/\.mdx$/, ''),
        id.replace(/-start$/, ''),
      ].join('/');
      const props = [
        `id=${JSON.stringify(sandboxId)}`,
        'title="Your solution"',
        ...Object.entries(code(sample)).map(([key, value]) => `${key}={${JSON.stringify(value)}}`),
        `solution={${JSON.stringify(code(finish))}}`,
      ];
      return '\n' + keepJsx(`<Sandbox ${props.join(' ')} />`) + '\n';
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
  text = text.replace(/\{\{[^}]*\}\}/g, (unknown) => {
    warn(`dropped unknown macro ${unknown}`);
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
      const target = ctx.linkTo(slug.toLowerCase());
      return target ? `[${label}](${target}${hash ?? ''})` : label;
    },
  );

  // Images next to the source page: copy them and point at the copy.
  text = text.replace(
    /!\[([^\]]*)\]\(([^)\s:]+\.(?:png|jpe?g|gif|svg|webp))\)/gi,
    (_, alt, file) => {
      // "/shared-assets/..." images come from MDN's shared-assets repo, downloaded next to mdn/.
      const sourceImage = file.startsWith('/shared-assets/')
        ? path.join(ctx.srcRoot, file)
        : path.join(lessonsDir(ctx.srcRoot), page.from, file);
      const src = ctx.copyImage(sourceImage);
      return src ? `![${alt}](${src})` : '';
    },
  );

  // Typo in some MDN lesson headers: "<ul>" where "</ul>" was meant. Browsers forgive it; MDX doesn't.
  text = text.replace(/(<\/li>\s*)<ul>(\s*<\/td>)/g, '$1</ul>$2');

  // JSX-isms: void elements must self-close, class -> className.
  text = text.replace(/<(br|hr)\s*>/g, '<$1 />');
  text = text.replace(/(<[a-z][^>]*?)\sclass="/g, '$1 className="');

  return addHeadingIds(escapeForMdx(text));
}
