# Angular stage: resources

Material for the Angular stage. Trainees rebuild the Instagram feed from the HTML & SCSS stage in Angular 20, add a profile page and comments, and connect it to their NestJS API through an NgRx store. PrimeNG is used in styled mode. The stage takes 3–4 weeks, with a mini boss review every week. Everything here works on the closed network.

## What's here

```
angular/
├── guide/        the project: what to build each week, the component tree, store data flow (start here)
├── reading/      94 reading pages from angular.dev, NgRx and RxJS docs, grouped in 13 modules
├── quizzes/      76 questions: an end-of-module quiz per topic and a final review (see quizzes/README.md)
├── games/        RxMarbles and RxViz, offline (see games/README.md)
├── videos.md     recommended videos, with length and what each one covers
└── SOURCES.md    where every item came from, its version and license
```

The full offline docs for Angular, NgRx, PrimeNG and NestJS are in `documentation/` at the repo root. Team-specific rules, like Tavor's naming and folder conventions, live in each team's folder and are not part of this stage.

## Guide

| Page | Level | When |
|---|---|---|
| `01-the-project.md` | Required | Day 1 |
| `02-smart-and-presentational.md` | Required | Week 1 |
| `03-instagram-component-tree.md` | Required | Week 1 |
| `04-store-data-flow.md` | Required | Week 2 |
| `05-atomic-design.md` | Optional | Teams that use atomic design |
| `06-primeng-styled-mode.md` | Required | Week 3 |

## Reading pages

| Folder | Module | Pages | Week |
|---|---|---|---|
| `01-essentials` | 1. Angular essentials | 5 | 1 |
| `02-components` | 2. Components | 9 | 1 |
| `03-templates` | 3. Templates | 10 | 1 |
| `04-signals` | 4. Signals & RxJS interop | 5 | 1 |
| `05-services-and-di` | 5. Services & dependency injection | 4 | 1 |
| `06-routing` | 6. Routing | 7 | 1 |
| `07-forms` | 7. Forms | 4 | 1 |
| `08-http` | 8. HTTP | 4 | 1 |
| `09-architecture` | 9. Architecture | 2 | 1 |
| `10-rxjs` | 10. RxJS | 18 | 2 |
| `11-ngrx-store` | 11. NgRx Store | 11 | 2 |
| `12-ngrx-effects` | 12. NgRx Effects | 5 | 2 |
| `13-ngrx-entity-and-devtools` | 13. NgRx Entity & DevTools | 10 | 2–3 |

Pages use the same format as the HTML & SCSS reading: a level line, front matter for Docusaurus, and a **Source** box with the attribution the licenses require. Don't remove it.

## Suggested order for week 1

1. `guide/01-the-project.md`
2. Reading module 1, then quiz `00-essentials`
3. Reading modules 2–3, then quiz `01-components-and-templates`
4. `guide/02-smart-and-presentational.md` and `guide/03-instagram-component-tree.md`
5. Reading modules 4–8, then quizzes `02-signals`, `03-routing-and-forms`, `04-http-and-services`

Week 2 starts with RxJS (module 10, RxMarbles and RxViz, quiz `05-rxjs`), then NgRx (modules 11–13, `guide/04-store-data-flow.md`, quiz `06-ngrx`). Quiz `07-architecture` comes after reading module 9 and the store data flow guide.

Week 3: `guide/06-primeng-styled-mode.md`, then quiz `08-primeng`. Quiz `09-final-review` mixes every topic: take it before the last mini boss review.
