# Angular quiz bank

42 questions for the Angular stage. Each one shows code with a real bug: it fails the build, throws, or quietly does the wrong thing in Angular 20. All code is from the Instagram project and follows the shared HTML & SCSS conventions. It doesn't use any team's Angular conventions: those quizzes live in each team's folder (for example `tavor/quizzes`).

| File | Module | Questions | Reading |
|---|---|---|---|
| `01-components-and-templates.json` | 1. Components & templates | 8 | `02-components`, `03-templates` |
| `02-signals.json` | 2. Signals | 6 | `04-signals` |
| `03-routing-and-forms.json` | 3. Routing & forms | 8 | `06-routing`, `07-forms` |
| `04-http-and-services.json` | 4. HTTP & services | 7 | `05-services-and-di`, `08-http` |
| `05-rxjs.json` | 5. RxJS | 6 | `10-rxjs` |
| `06-ngrx.json` | 6. NgRx | 7 | `11-ngrx-store` to `13-ngrx-entity-and-devtools` |

There's no placement quiz: Angular is new for most trainees.

The format is the same as the HTML & SCSS quiz bank. See `html&css/quizzes/README.md` for the question types and how to check answers.

## Editing questions

Edit `src/*.yaml`, never the JSON. Then rebuild and validate:

```bash
cd _tools/quiz-build
npm install
node build.mjs ../../angular/quizzes
node review.cjs ../../angular/quizzes quiz-review.md
```

The build also lints every code sample:
- HTML and SCSS follow our conventions.
- TypeScript has no comments, no `@Input()`/`@Output()` decorators and no NgModules.
