# Angular stage: videos

Fifteen short videos that go with the reading, in the order trainees meet the topics. They repeat the reading in a different format, so a trainee can watch one before or after the matching module.

These are links to YouTube and need internet access.

| Module | Video | Length | What it covers | Note |
|---|---|---|---|---|
| 1. Essentials | [Angular v20: all new features](https://youtu.be/LrEqJUCwEyY), Code with Ahsan | 14 min | What's new in v20: stable signals, new template syntax, zoneless, deprecations | Good first video: shows which version we teach and why |
| 2. Components | [How Angular components should communicate in 2025](https://youtu.be/fTejxZ6W-90), Brian Treese | 8 min | Parent and child components with `input()`, `output()` and `model()` | |
| 2. Components | [Angular styling secrets: `:host` and `:host-context`](https://youtu.be/qHge5-9zm2M), Brian Treese | 5 min | Styling the component's own element, and conditional styles with a class on the host | Our SCSS is always wrapped in `:host` |
| 4. Signals | [Angular Signals: what? why? and how?](https://youtu.be/oqYQG7QMdzw), Deborah Kurata | 27 min | Why signals, creating, reading, setting and updating them, `computed` | From 2023 (v16). Skip the part about `mutate()`, which was removed |
| 6. Routing | [Angular routing essentials](https://youtu.be/BUDQTd1DQAg), Monsterlessons Academy | 21 min | Routes, nested routes, `router-outlet`, reading route and query params with signals, guards, resolvers | |
| 7. Forms | [Angular reactive forms: all needed use cases](https://youtu.be/U9Xo0wXZIAg), Monsterlessons Academy | 16 min | Building a reactive form, validation, showing error messages | From 2022, before `@if` existed, so templates use the older `*ngIf` |
| 10. RxJS | [switchMap vs concatMap vs mergeMap… Oh My!](https://youtu.be/RSf7DlJXoGQ), Deborah Kurata | 7 min | One scenario run with each flattening operator | Then try them in RxViz (`angular/games`) |
| 11. NgRx Store | [What is NgRx?](https://youtu.be/L60Pc69ktxg), Deborah Kurata | 3 min | The redux pattern in three minutes | Watch before the store reading |
| 11. NgRx Store | [I bet you can understand NgRx after watching this video](https://youtu.be/kx0VTgTtSBg), Joshua Morony | 23 min | The whole flow in a todo app: actions, reducers, dispatching, selectors, effects | From 2021: actions, effects and setup are written the older way. The flow is the same |
| 11. NgRx Store | [Creating actions with NgRx just got even easier](https://youtu.be/rk83ZMqEDV4), Brandon Roberts (NgRx team) | 6 min | `createActionGroup` | |
| 11. NgRx Store | [NgRx: how to use Feature Creator](https://youtu.be/bHw8SV4SNUU), Decoded Frontend | 12 min | `createFeature` and the selectors it generates | |
| 13. Entity | [NgRx Entity: simplify your NgRx state](https://youtu.be/XIWFh0wN9Zs), Monsterlessons Academy | 10 min | Entity state, the adapter and its selectors | |
| Architecture | [Are your Angular components DUMB enough?](https://youtu.be/9QU_GzcU184), Joshua Morony | 5 min | Splitting a component that does everything into a smart container and presentational components | Week 1: exactly how the feed is built |
| PrimeNG | [PrimeNG v18 preview](https://youtu.be/KoNtRy3C5uY), Cagatay Civici (PrimeNG creator) | 10 min | Styled mode and theming with design tokens | Same theming system as v20 |
| PrimeNG | [PrimeNG PassThrough attributes](https://youtu.be/ehHZ2ip8RXQ), Cagatay Civici | 11 min | Adding your own classes to a component's inner elements | How to style PrimeNG with our classes |

Total: about 3 hours.
