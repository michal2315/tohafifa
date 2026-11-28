// A README (or other Markdown file) from a GitHub repository, downloaded by fetch-sources.sh.
// Page options:
// - `from`: the file's path in the sources folder, e.g. "react-atomic-design/README.md".
//   Images the README loads from the web must be downloaded next to it (fetch-sources.sh).
// - `url`: the repository's page, for the credit line.
// - `attribution`: the key of the repository in <SourceAttribution> (its license and authors).
// - `title`: the page title.
import fs from 'node:fs';
import path from 'node:path';

import { convertImages, convertLinks, toMdx } from '../lib/markdown.mjs';

export default {
  sourceName: 'a GitHub repository',

  convert(page, ctx) {
    const file = path.join(ctx.srcRoot, page.from);
    const markdown = ctx.select(fs.readFileSync(file, 'utf8'));

    const body = toMdx(markdown.replace(/^# .+\n/m, ''), {
      prose: (prose) =>
        convertImages(
          // Links point to GitHub or the web - both are outside the network.
          convertLinks(prose, () => null),
          // fetch-sources.sh saves the images next to the README, under their file names.
          (src) =>
            ctx.copyImage(path.join(path.dirname(file), path.basename(src.split(/[?#]/)[0]))),
        ),
    });

    return {
      title: page.title,
      kind: 'reading',
      body,
      url: page.url,
      attribution: page.attribution,
    };
  },
};
