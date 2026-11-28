// Steps of the official "Learn Angular" tutorial (adev/src/content/tutorials/learn-angular),
// as one practice page. On angular.dev the steps run in an online editor; here every step is an
// <Exercise> with the starting files to copy into a local app, and the answer as its <Solution>.
//
// Page options: `steps` (step folder names, e.g. "8-input"), `title`, and optionally `intro`
// (Markdown shown before the first step - say how to set up the local app).
import fs from 'node:fs';
import path from 'node:path';

import { codeInfo } from '../lib/markdown.mjs';
import { fence } from '../lib/mdx.mjs';
import { angularRepo, convertAngularMarkdown } from './angular.mjs';

const stepsDir = (srcRoot) =>
  path.join(angularRepo(srcRoot), 'adev/src/content/tutorials/learn-angular/steps');

/**
 * The tutorial cheers the reader on ("P.S. you are doing great 🎉"). Our trainees don't need
 * it, so those sentences and emoji are removed.
 */
function removeCheering(markdown) {
  return markdown
    .replace(/^(P\.S\.|Great job)[^\n]*\n?/gm, '')
    .replace(/\s*-?\s*by the way, you're doing a great job so far/g, '')
    .replace(/\s*[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]️?/gu, '');
}

export default {
  attribution: 'angular',
  sourceName: 'the Angular documentation',

  convert(page, ctx) {
    const steps = page.steps.map((step) => convertStep(step, ctx));
    return {
      title: page.title,
      kind: 'practice',
      body: [page.intro ?? '', ...steps].join('\n\n'),
      url: 'https://angular.dev/tutorials/learn-angular',
      attributionTitle: 'Learn Angular in your browser',
    };
  },
};

function convertStep(step, ctx) {
  const dir = path.join(stepsDir(ctx.srcRoot), step);
  const { title: configTitle, openFiles = [] } = JSON.parse(
    fs.readFileSync(path.join(dir, 'config.json'), 'utf8'),
  );
  const read = (file) => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const readme = removeCheering(read(path.join(dir, 'README.md')));
  const title = readme.match(/^# (.+)$/m)?.[1] ?? configTitle;
  // The step's own headings become one level lower, under the step's "## title".
  const text = readme.replace(/^# .+\n/m, '').replace(/^(#{2,5}) /gm, '#$1 ');

  // `openFiles` are paths like "src/app/app.ts": in the step folder, and in its answer/ folder.
  const files = (root) =>
    openFiles
      .filter((file) => fs.existsSync(path.join(root, file)))
      .map((file) => {
        const language = path.extname(file).slice(1);
        return fence(codeInfo({ language, title: file }), read(path.join(root, file)).trim());
      })
      .join('\n\n');

  return `## ${title}

${convertAngularMarkdown(text, ctx).trim()}

<Exercise title="Do it in your practice app">

Start from these files:

${files(dir)}

<Solution>

${files(path.join(dir, 'answer'))}

</Solution>

</Exercise>`;
}
