# Tavor

Material for the Tavor team only. Everything else in this repo is shared by all teams. What's here adds to it, and where the two disagree, Tavor's rules win for Tavor trainees.

| Folder | What |
|---|---|
| `reading/01-angular-conventions.md` | Our Angular conventions, with examples from the Instagram project and a review checklist |
| `quizzes/` | Conventions quiz: 21 code-review questions. Same format as the HTML & SCSS quiz bank, see `html&css/quizzes/README.md` |

Suggested timing: trainees take the conventions quiz in week 1 of the Angular stage, after reading the conventions page, and again before their first mini boss review.

## Editing the quiz

Edit `quizzes/src/*.yaml`, never the JSON. Then rebuild:

```bash
cd _tools/quiz-build
npm install
node build.mjs ../../tavor/quizzes
```

Questions that show a convention break on purpose set `lint: false`. Every other code sample is checked automatically: no comments, no `@Input()`/`@Output()` decorators, no NgModules, and the HTML & SCSS rules for templates and styles.
