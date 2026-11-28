// The RxJS guide (https://github.com/ReactiveX/rxjs, apps/rxjs.dev/content/guide).
// Page option `from`: the page's path under apps/rxjs.dev/content, without ".md",
// e.g. "guide/observable".
import fs from 'node:fs';
import path from 'node:path';

import { convertImages, convertLinks, internalLink, toMdx } from '../lib/markdown.mjs';
import { inlineCode } from '../lib/mdx.mjs';

const siteDir = (srcRoot) => path.join(srcRoot, 'rxjs/apps/rxjs.dev');

export default {
  attribution: 'rxjs',
  sourceName: 'the RxJS documentation',

  linkKey: (page) => page.from,

  convert(page, ctx) {
    const source = fs.readFileSync(
      path.join(siteDir(ctx.srcRoot), 'content', `${page.from}.md`),
      'utf8',
    );
    const markdown = ctx.select(source);
    const title = markdown.match(/^# (.+)$/m)?.[1] ?? 'Untitled';

    return {
      title,
      kind: 'reading',
      body: toMdx(markdown.replace(/^# .+\n/m, ''), {
        prose: (prose) =>
          convertImages(
            convertLinks(convertRxjsMarkup(prose), (href) => internalLink(href, ctx)),
            (src) => ctx.copyImage(path.join(siteDir(ctx.srcRoot), 'src', src)),
          ),
      }),
      url: `https://rxjs.dev/${page.from}`,
    };
  },
};

function convertRxjsMarkup(text) {
  return (
    text
      // API references: {@link Observable} or {@link Observable label}.
      .replace(/\{@link\s+([^\s}]+)(?:\s+([^}]+))?\}/g, (_, name, label) =>
        inlineCode((label ?? name).trim()),
      )
      .replace(/<span class="informal">([\s\S]*?)<\/span>/g, '_$1_')
      .replace(/<a id="[^"]*"><\/a>/g, '')
  );
}
