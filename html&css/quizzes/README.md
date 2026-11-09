# HTML & SCSS quiz bank

77 questions for the HTML & SCSS stage, ready for the Docusaurus quiz component.

Spot-the-bug questions in modules 1–4 show code that is actually broken: it renders wrong or doesn't compile. Module 6 is a code-review quiz about our conventions. Every SCSS answer was checked with the Sass compiler and the tricky CSS answers in a browser.

## Our conventions in the code samples

Trainees only ever see code written our way, so every code sample follows these rules (except in module 6, where breaking them is the point):

- Component SCSS is wrapped in `:host { }`. Only `@use`, variables and mixin definitions sit above it.
- Classes for everything. No styling of tags (`img`, `span`, `body`…), and no tags we don't use (headings, `body`, `p`, semantic elements).
- No useless wrappers: no `div` or `span` that wraps a single element.
- No comments.
- kebab-case for classes, ids, variables and mixins. No BEM.
- `vh`/`vw` only in the top-level app container. Inside components: `%` for sizes that follow the parent, `px` for fixed values from the design.
- All colors in lowercase hex, 8-digit hex for transparency (`#00000080`).

The build checks most of these automatically (all except useless wrappers, which need a human eye) and fails if a code sample breaks one. A question that breaks a rule on purpose sets `lint: false`.

| File | Module | Questions | In placement quiz |
|---|---|---|---|
| `01-html.json` | 1. HTML | 7 | 4 |
| `02-css-fundamentals-and-layout.json` | 2. CSS fundamentals & layout | 22 | 8 |
| `03-modern-css.json` | 3. Modern CSS | 12 | 6 |
| `04-scss.json` | 4. SCSS | 16 | 6 |
| `05-design-to-code.json` | 5. From design to code (XD) | 8 | 0 |
| `06-team-conventions.json` | 6. Our conventions (code review) | 12 | 0 |
| `placement.json` | Placement quiz (day 1) | 24 | – |
| `index.json` | Summary of all files | – | – |

## Editing questions

**Edit the YAML files in `src/`, never the JSON.** The JSON files are generated. After editing, rebuild and validate:

```bash
cd _tools/quiz-build
npm install
node build.mjs "../../html&css/quizzes"
node review.cjs "../../html&css/quizzes" quiz-review.md
```

The second command is optional: it writes `quiz-review.md`, a readable list of all questions with the answers marked, for reviewing the bank.

Options have no letters or ids. Each one says whether it's right or wrong (`correct: true` / `correct: false`), so the order in the file doesn't matter and the app can shuffle the options every time.

The build fails with a clear message if a question is broken, for example a single-choice question with zero or two correct options, an option missing `correct`, two options with the same text, a duplicate id, a spot-the-bug line number outside the code, or a `reference` to a reading page that doesn't exist.

## How the two quizzes work

**Placement quiz** (`placement.json`): taken on day 1, before any reading. It has 24 questions from modules 1–4 (4, 8, 6 and 6). Score each module separately:

| Score in a module | Result |
|---|---|
| ≥ 80% | Module becomes **skim** |
| 50–79% | **Required pages only** |
| < 50% | **Full module** |

During placement, show only the score per module: no correct answers, no explanations. Then the same questions stay useful for the next trainee. Modules 5 and 6 aren't in the placement quiz, because the design-to-code material and our conventions are new for everyone.

**Module quizzes** (`0X-….json`): at the end of each module. Show the explanation after every answer, link to the `reference` page, and allow retakes.

## Question format

Every question has these fields:

| Field | Meaning |
|---|---|
| `id` | Unique, e.g. `css-06`. Use it to store results. |
| `type` | `single`, `multiple`, `predict`, `spot-the-bug` or `text` (see below) |
| `topic` | Short tag, e.g. `flexbox`. Use it to show "weak areas" in the results. |
| `difficulty` | `1` easy, `2` medium, `3` hard |
| `placement` | `true` if the question is in the placement quiz |
| `prompt` | The question, in Markdown (inline code with backticks) |
| `code` | Optional `{ lang, label, source }` snippet shown under the prompt. `label` is a file name like `post-card.component.scss`. For spot-the-bug, this is the block the trainee clicks in. |
| `context` | Optional second `{ lang, label, source }` block, shown **before** `code`, read-only. Usually the HTML for an SCSS question or the other way round, like the two files of a component. |
| `options` | For `single`, `multiple` and `predict`: `[{ text, correct }]`, `text` in Markdown, `correct` is `true` or `false` |
| `answer` | Only for `spot-the-bug` and `text` (see below) |
| `explanation` | Shown after answering (module quizzes only) |
| `reference` | Optional path of the reading page, relative to `html&css/reading/` |

### The five types

| Type | What the trainee does | How the right answer is stored |
|---|---|---|
| `single` | Picks one option | Exactly one option has `correct: true` |
| `multiple` | Picks all correct options | One or more options have `correct: true`. Count it right only if the trainee picked exactly those. |
| `predict` | Reads `code`, picks what happens | Like `single`, but always has `code` |
| `spot-the-bug` | Clicks the wrong line in `code` (a bug, or in module 6 a line that breaks our conventions) | `answer`: line number, starting at 1, e.g. `6` |
| `text` | Types a short answer (a selector or declaration) | `answer`: `{ accept: [...], normalized: [...] }` |

Example of a choice question in the JSON:

```json
{
  "id": "css-05",
  "type": "multiple",
  "prompt": "You set these properties on `.post`. Which ones are inherited…?",
  "options": [
    { "text": "`color`", "correct": true },
    { "text": "`border`", "correct": false },
    { "text": "`line-height`", "correct": true }
  ]
}
```

### Checking `text` answers

The build pre-computes `answer.normalized`. Normalize what the trainee typed the same way and check whether it's in that list:

```js
function normalizeTextAnswer(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/["']/g, '"')                    // ' and " are the same
    .replace(/\s+/g, ' ')                     // collapse whitespace
    .replace(/\s*([:;,>+~(){}=])\s*/g, '$1')  // ignore spaces around punctuation
    .replace(/;+$/, '');                      // trailing semicolon is optional
}

const correct = question.answer.normalized.includes(normalizeTextAnswer(input));
```

For example, `grid-template-columns:repeat( 3 , 1fr );` matches. `.menu li` doesn't match `.menu > li`, because the space between selectors is meaningful.
