# Angular quiz bank

76 questions for the Angular stage: one quiz at the end of each group of modules, and a final review before the last mini boss. Questions use all eleven types (see the HTML & SCSS quiz README). Most show code with a real bug: it fails the build, throws, or quietly does the wrong thing in Angular 20. All code is from the Instagram project and follows the shared HTML & SCSS conventions. It doesn't use any team's Angular conventions: those quizzes live in each team's folder (for example `tavor/quizzes`).

| File | Module | Questions | Reading |
|---|---|---|---|
| `00-essentials.json` | 0. Essentials | 6 | `01-essentials` |
| `01-components-and-templates.json` | 1. Components & templates | 9 | `02-components`, `03-templates` |
| `02-signals.json` | 2. Signals | 6 | `04-signals` |
| `03-routing-and-forms.json` | 3. Routing & forms | 9 | `06-routing`, `07-forms` |
| `04-http-and-services.json` | 4. HTTP & services | 8 | `05-services-and-di`, `08-http` |
| `05-rxjs.json` | 5. RxJS | 6 | `10-rxjs` |
| `06-ngrx.json` | 6. NgRx | 9 | `11-ngrx-store` to `13-ngrx-entity-and-devtools` |
| `07-architecture.json` | 7. Architecture | 7 | `09-architecture`, `guide/02` to `guide/04` |
| `08-primeng.json` | 8. PrimeNG | 8 | `guide/06-primeng-styled-mode.md` |
| `09-final-review.json` | 9. Final review | 8 | Everything: new questions that mix the topics |

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
