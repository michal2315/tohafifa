// What the trainer guides contain beyond what's read from the repo: the schedule, games, and descriptions
// for pages whose headings don't say what they cover. Times are minutes.
//
// Schedule items:
//   { reading: '02', from: 1, to: 7 }   required pages of a reading module (optionally a page range)
//   { guide: '01' }                      a page in <stage>/guide
//   { videos: '2' }                      the videos of a module (the "Module" column of videos.md)
//   { game: 'css-diner' }                a game from `games` below
//   { quiz: '02-css-fundamentals-and-layout' } or { quiz: 'placement' }
//   { task: 'text', min: 60 }            anything else, with an estimate
//   { build: 'text' }                    project work for the rest of the day (no estimate)

export const stages = {
  html: {
    dir: 'html&css',
    name: 'HTML & SCSS',
    out: 'html&css/trainer-guide.docx',
    days: 10,
    intro: [
      'The stage ends with the Instagram feed page, built from the XD design with our conventions. Trainees learn from the reading pages, short videos, three games and a quiz after every module. This guide says what each item covers, how long it takes, and when to give it.',
      "**The stage length is an assumption.** Nothing in the repo fixes it, so the plan below is 2 weeks (10 days). Each day lists the learning items with their time. The rest of the day is practice and the project. If your stage is longer, stretch the build days, not the reading.",
    ],
    modules: {
      '01': { name: '1. Semantic HTML & accessibility' },
      '02': { name: '2. CSS fundamentals & layout' },
      '03': { name: '3. Modern CSS' },
      '04': { name: '4. SCSS' },
      '05': { name: '5. From design to code', extra: 'One imported page. Add your own pages on reading the XD design: measurements, exporting assets, turning the design colors and fonts into SCSS variables.' },
      '06': { name: '6. Our conventions', extra: 'No imported pages: you write these. The quiz `06-team-conventions` is a code review of every rule.' },
    },
    quizFor: { '01': '01-html', '02': '02-css-fundamentals-and-layout', '03': '03-modern-css', '04': '04-scss', '05': '05-design-to-code', '06': '06-team-conventions' },
    games: {
      'css-diner': { name: 'CSS Diner', folder: 'games/css-diner', min: 30, what: 'Writing selectors: type, class, id, descendant, sibling, `:first-child`, `:nth-child`, `:not`, attribute selectors', when: 'After Selectors (module 2)', levels: 'Levels 15–32 for everyone; 1–14 too if the placement quiz showed weak selectors' },
      'flexbox-froggy': { name: 'Flexbox Froggy', folder: 'games/flexbox-froggy', min: 30, what: '`justify-content`, `align-items`, `flex-direction`, `order`, `align-self`, `flex-wrap`, `flex-flow`, `align-content`', when: 'After Flexbox (module 2)', levels: 'All 24 levels' },
      'grid-garden': { name: 'Grid Garden', folder: 'games/grid-garden', min: 40, what: 'Placing items with `grid-column` and `grid-row`, `span`, `order`, `grid-template-columns` and `grid-template-rows`, `fr`', when: 'After Grid (module 2)', levels: 'All 28 levels. 18–28 matter most for the feed layout' },
    },
    covers: {
      '03-modern-css/07-aspect-ratio.md': '`aspect-ratio`: keeping a box at a fixed ratio (square post images, round avatars), what happens with a fixed width, and falling back to the natural ratio of an image',
      '04-scss/14-sass-map-module.md': 'Reference of the `sass:map` functions: `map.get`, `map.set`, `map.merge`, `map.deep-merge`, `map.remove`, `map.has-key`, `map.keys`, `map.values`',
    },
    schedule: [
      { week: 'Week 1: HTML and CSS' },
      { day: 1, title: 'Placement and HTML', items: [{ task: 'Welcome, tools, how the stage works', min: 30 }, { quiz: 'placement' }, { task: 'Go over the placement scores with each trainee and mark modules as skim / required pages / full', min: 15 }, { reading: '01' }, { videos: '1' }, { quiz: '01-html' }] },
      { day: 2, title: 'The cascade and selectors', items: [{ reading: '02', from: 1, to: 7 }, { videos: '2', match: /box model|cascade/i }, { game: 'css-diner' }] },
      { day: 3, title: 'Flexbox and grid', items: [{ reading: '02', from: 8, to: 14 }, { videos: '2', match: /flexbox|grid/i, not: /layout/i }, { game: 'flexbox-froggy' }, { game: 'grid-garden' }] },
      { day: 4, title: 'Text, color and responsive design', items: [{ reading: '02', from: 15, to: 29 }, { videos: '2', match: /layout|responsive/i }, { quiz: '02-css-fundamentals-and-layout' }] },
      { day: 5, title: 'Modern CSS', items: [{ reading: '03' }, { videos: '3' }, { quiz: '03-modern-css' }, { task: 'Check-in with the trainer: questions from the week, weak quiz topics', min: 30 }] },
      { week: 'Week 2: SCSS and the feed' },
      { day: 6, title: 'SCSS', items: [{ reading: '04' }, { videos: '4' }, { quiz: '04-scss' }] },
      { day: 7, title: 'From design to code', items: [{ reading: '05' }, { task: 'Walk through the XD design together: measurements, assets, colors, fonts', min: 60 }, { quiz: '05-design-to-code' }, { build: 'Start the feed: page structure and the main layout' }] },
      { day: 8, title: 'Our conventions', items: [{ task: 'Module 6: your conventions pages', min: 45 }, { quiz: '06-team-conventions' }, { build: 'Build the feed components: post card, header, actions, stories strip' }] },
      { day: 9, title: 'Build the feed', items: [{ build: 'Finish the feed: responsive layout, states, details from the design' }] },
      { day: 10, title: 'Review and demo', items: [{ task: 'Code review with the trainer against our conventions', min: 60 }, { task: 'Fixes from the review, then a short demo', min: 120 }] },
    ],
  },

  angular: {
    dir: 'angular',
    name: 'Angular',
    out: 'angular/trainer-guide.docx',
    days: 20,
    intro: [
      'Trainees rebuild the Instagram feed from the HTML & SCSS stage in Angular 20, add a profile page and comments, and connect it to their NestJS API through an NgRx store. PrimeNG is used in styled mode. The stage takes 4 weeks and each week ends with a **mini boss**: a code review where the trainee walks you through what they built and explains their choices.',
      'Each day lists the learning items with their time. The rest of the day is the project. The week plan matches `guide/01-the-project.md`, which trainees read on day 1.',
    ],
    modules: {
      '01': { name: '1. Angular essentials' },
      '02': { name: '2. Components' },
      '03': { name: '3. Templates' },
      '04': { name: '4. Signals & RxJS interop' },
      '05': { name: '5. Services & dependency injection' },
      '06': { name: '6. Routing' },
      '07': { name: '7. Forms' },
      '08': { name: '8. HTTP' },
      '09': { name: '9. Architecture' },
      '10': { name: '10. RxJS' },
      '11': { name: '11. NgRx Store' },
      '12': { name: '12. NgRx Effects' },
      '13': { name: '13. NgRx Entity & DevTools' },
    },
    videoModule: { Architecture: '9', PrimeNG: 'primeng' },
    quizFor: { '01': '00-essentials', '03': '01-components-and-templates', '04': '02-signals', '07': '03-routing-and-forms', '08': '04-http-and-services', '10': '05-rxjs', '13': '06-ngrx', '09': '07-architecture' },
    games: {
      'rxjs-fruits': { name: 'RxJS Fruits', folder: 'games/rxjs-fruits', min: 60, what: 'A game: write RxJS code that sends the right fruits to the blender. Operators one level at a time', when: 'RxJS, first day: warm-up before the reading or homework', levels: 'All 16 levels. Run with `node serve.mjs rxjs-fruits`' },
      rxmarbles: { name: 'RxMarbles', folder: 'games/rxmarbles', min: 20, what: 'Drag marbles on the input timelines of an operator and watch the output change: `map`, `filter`, `take`, `debounceTime`, `combineLatest`, `merge`, `scan`…', when: 'While reading the basic operators', levels: 'Open `rxmarbles/index.html`' },
      rxviz: { name: 'RxViz', folder: 'games/rxviz', min: 30, what: 'Write real RxJS code and watch it animate. Shows nested timelines for `switchMap`, `mergeMap`, `concatMap` and `exhaustMap`', when: 'Higher-order operators, right before effects', levels: 'Run with `node serve.mjs rxviz`' },
      'store-kitchen': { name: 'Store Kitchen', folder: 'games/store-kitchen', min: 90, what: 'A visualizer that animates each NgRx action through reducer, store, selectors and effects, and Kitchen Rush: 10 levels of real NgRx code checked by tests', when: 'NgRx: the visualizer as the opening demo, the game after the reading', levels: 'Visualizer and 10 game levels. How to open: `angular/games/README.md`' },
    },
    covers: {
      '01-essentials/01-overview.md': 'What the Essentials pages cover, and what trainees should know first: JavaScript classes, TypeScript basics and decorators',
      '11-ngrx-store/05-walkthrough.md': 'Hands-on tutorial: a book list and a collection with actions, two reducers, `provideStore`, selectors, an API service and the components that dispatch and select',
      '12-ngrx-effects/04-effects-operators.md': '`ofType`: letting an effect react only to the actions it cares about',
      '04-signals/03-take-until-destroyed.md': '`takeUntilDestroyed` from `@angular/core/rxjs-interop`: ending a subscription when the component is destroyed, inside and outside the injection context',
      '10-rxjs/03-observer.md': 'What an Observer is: the `next`, `error` and `complete` callbacks, and passing only some of them to `subscribe`',
      '10-rxjs/04-subscription.md': 'What a Subscription is, `unsubscribe()`, and grouping subscriptions so one call ends them all',
      '10-rxjs/07-higher-order-observables.md': 'Observables that emit observables (an action that starts an HTTP call) and flattening them, and a first look at `concatMap`, `mergeMap`, `switchMap` and `exhaustMap`, the four operators on the next pages',
      '11-ngrx-store/04-architecture.md': "**This page is empty**: the original is only an interactive diagram, which doesn't work offline. Show the loop diagram in `guide/04-store-data-flow.md` instead, or skip it.",
      '13-ngrx-entity-and-devtools/05-entity-adapter-with-feature-creator.md': 'Recipe: adding the entity adapter selectors (`selectAll`, `selectEntities`…) to a `createFeature` with `extraSelectors`',
    },
    noTime: ['11-ngrx-store/04-architecture.md'],
    schedule: [
      { week: 'Week 1: Components (mock data)' },
      { day: 1, title: 'The project and the essentials', items: [{ guide: '01' }, { reading: '01' }, { videos: '1' }, { quiz: '00-essentials' }, { build: 'Create the project, copy the SCSS from the HTML stage' }] },
      { day: 2, title: 'Components and templates', items: [{ reading: '02' }, { reading: '03' }, { videos: '2' }, { quiz: '01-components-and-templates' }, { guide: '02' }, { guide: '03' }, { videos: '9' }] },
      { day: 3, title: 'Signals and services', items: [{ reading: '04' }, { reading: '05' }, { videos: '4' }, { quiz: '02-signals' }, { build: 'Presentational components with mock data' }] },
      { day: 4, title: 'Routing and forms', items: [{ reading: '06' }, { reading: '07' }, { videos: '6' }, { videos: '7' }, { quiz: '03-routing-and-forms' }, { build: 'Feed and profile routes, the comment form' }] },
      { day: 5, title: 'HTTP and architecture', items: [{ reading: '08' }, { reading: '09' }, { quiz: '04-http-and-services' }, { task: 'Team conventions page and quiz, if the team has one (e.g. `tavor/`)', min: 45 }, { task: '**Mini boss 1**: components, inputs and outputs, routes', min: 60 }] },
      { week: 'Week 2: The store (posts)' },
      { day: 6, title: 'RxJS basics', items: [{ game: 'rxjs-fruits' }, { reading: '10', from: 1, to: 6 }, { reading: '10', from: 12, to: 18 }, { game: 'rxmarbles' }] },
      { day: 7, title: 'Higher-order observables', items: [{ reading: '10', from: 7, to: 11 }, { videos: '10' }, { game: 'rxviz' }, { quiz: '05-rxjs' }] },
      { day: 8, title: 'NgRx Store', items: [{ task: 'Store Kitchen visualizer as the opening demo', min: 15 }, { videos: '11' }, { reading: '11' }, { guide: '04' }] },
      { day: 9, title: 'Effects and entity', items: [{ reading: '12' }, { reading: '13' }, { videos: '13' }, { game: 'store-kitchen' }, { quiz: '06-ngrx' }, { quiz: '07-architecture' }] },
      { day: 10, title: 'The posts slice', items: [{ build: 'Together with the trainer: posts actions, reducer, selectors, effect. Switch the container from mock data to the store' }, { task: '**Mini boss 2**: the posts slice, explained with Redux DevTools open', min: 60 }] },
      { week: 'Week 3: On their own' },
      { day: 11, title: 'PrimeNG', items: [{ guide: '06' }, { videos: 'primeng' }, { quiz: '08-primeng' }, { build: 'Replace hand-made controls with PrimeNG, styled to the design' }] },
      { day: 12, title: 'Comments slice', items: [{ build: 'The comments slice, alone, with the posts slice as the example' }] },
      { day: 13, title: 'Comments slice', items: [{ build: 'Finish comments: add, load, errors' }] },
      { day: 14, title: 'Profile slice', items: [{ build: 'The profile slice: loading by route parameter' }] },
      { day: 15, title: 'Review', items: [{ task: '**Mini boss 3**: comments and profile slices, PrimeNG styling', min: 60 }] },
      { week: 'Week 4: Polish and demo' },
      { day: 16, title: 'Loading and error states', items: [{ build: 'Loading, error and empty states for every page' }] },
      { day: 17, title: 'Edge cases', items: [{ build: 'Edge cases and fixes from the reviews' }] },
      { day: 18, title: 'Final review quiz', items: [{ quiz: '09-final-review' }, { task: 'Go over the weak topics from all the quizzes', min: 60 }] },
      { day: 19, title: 'Code freeze', items: [{ build: 'Last fixes, prepare the demo' }] },
      { day: 20, title: 'Demo', items: [{ task: '**Mini boss 4**: demo and final code review', min: 90 }] },
    ],
  },
};
