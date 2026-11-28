// The "Sass Basics" guide from the Sass site (https://github.com/sass/sass-site).
// No page options: there is only one guide.
import fs from 'node:fs';
import path from 'node:path';

import { dedent, escapeForMdx, parseFrontmatter, splitFences } from '../lib/mdx.mjs';

export default {
  attribution: 'sass',
  sourceName: 'the Sass documentation',

  convert(page, ctx) {
    const source = fs.readFileSync(path.join(ctx.srcRoot, 'sass-guide.md'), 'utf8');
    const { body } = parseFrontmatter(source);

    let text = body
      .replace(/\{%-?\s*#[^%]*-?%\}/g, '') // template comments
      .replace(/\{%\s*render[^%]*%\}/g, '') // shared snippets from the Sass site
      .replace(/<\/?section[^>]*>/g, '')
      .replace(/<span id="[^"]*"><\/span>/g, '')
      .replace(/^<hr>$/gm, '')
      .replace(/\{%\s*funFact\s*%\}([\s\S]*?)\{%\s*endfunFact\s*%\}/g, (_, content) => {
        // We import only the SCSS version of each example, and that is the syntax we use.
        const note = dedent(content)
          .trim()
          .replace(/All our examples are available in both\s+syntaxes\./, 'We only use SCSS.');
        return `:::tip[Fun fact]\n\n${note}\n\n:::`;
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
    if (leftovers) ctx.warn(`unhandled tags: ${leftovers.join(' ')}`);

    const parts = splitFences(text).map((part) =>
      part.type === 'code'
        ? '```' + part.info + '\n' + part.code + '```'
        : escapeForMdx(part.value),
    );

    return {
      title: 'Sass Basics',
      kind: 'reading',
      body: parts.join(''),
      url: 'https://sass-lang.com/guide/',
    };
  },
};
