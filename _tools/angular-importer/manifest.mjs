// Curated reading list for the Angular stage (Angular 20, NgRx 20, RxJS 7).
// level: 'required' | 'skim'
// src prefixes:
//   ng:   page on v20.angular.dev (rendered HTML)
//   ngrx: Markdown source of the NgRx docs (ngrx/platform, branch 20.1.x)
//   rx:   Markdown source of the RxJS guide (ReactiveX/rxjs, branch 7.x)
//   lrx:  Markdown source of Learn RxJS (btroncone/learn-rxjs)

export const modules = [
  {
    dir: '01-essentials',
    label: '1. Angular essentials',
    pages: [
      { src: 'ng:essentials', name: 'overview', level: 'required' },
      { src: 'ng:essentials/components', level: 'required' },
      { src: 'ng:essentials/templates', level: 'required' },
      { src: 'ng:essentials/signals', level: 'required' },
      { src: 'ng:essentials/dependency-injection', level: 'required' },
    ],
  },
  {
    dir: '02-components',
    label: '2. Components',
    pages: [
      { src: 'ng:guide/components', name: 'anatomy-of-components', level: 'required' },
      { src: 'ng:guide/components/selectors', level: 'required' },
      { src: 'ng:guide/components/styling', level: 'required', note: 'Important for our conventions: this is where `:host` and view encapsulation come from. Every component SCSS file is wrapped in `:host { }`.' },
      { src: 'ng:guide/components/inputs', level: 'required', note: 'Use the signal-based `input()` function, not the `@Input()` decorator.' },
      { src: 'ng:guide/components/outputs', level: 'required', note: 'Use the `output()` function, not the `@Output()` decorator.' },
      { src: 'ng:guide/components/content-projection', level: 'required' },
      { src: 'ng:guide/components/host-elements', level: 'required' },
      { src: 'ng:guide/components/lifecycle', level: 'required' },
      { src: 'ng:guide/components/queries', level: 'skim' },
    ],
  },
  {
    dir: '03-templates',
    label: '3. Templates',
    pages: [
      { src: 'ng:guide/templates', name: 'overview', level: 'required' },
      { src: 'ng:guide/templates/binding', level: 'required' },
      { src: 'ng:guide/templates/event-listeners', level: 'required' },
      { src: 'ng:guide/templates/two-way-binding', level: 'required' },
      { src: 'ng:guide/templates/control-flow', level: 'required', note: 'Use `@if` / `@for` / `@switch`. `*ngIf` and `*ngFor` are deprecated. Always give `@for` a real `track` (for posts: `track post.id`).' },
      { src: 'ng:guide/templates/pipes', level: 'required' },
      { src: 'ng:guide/templates/variables', level: 'required' },
      { src: 'ng:guide/templates/ng-template', level: 'skim' },
      { src: 'ng:guide/templates/ng-container', level: 'skim' },
      { src: 'ng:guide/templates/defer', level: 'skim' },
    ],
  },
  {
    dir: '04-signals',
    label: '4. Signals & RxJS interop',
    pages: [
      { src: 'ng:guide/signals', name: 'signals-overview', level: 'required' },
      { src: 'ng:ecosystem/rxjs-interop', name: 'signals-interop', level: 'required', note: '`toSignal` is how components read observables. With the store you will mostly use `store.selectSignal(...)`, which gives you a signal directly.' },
      { src: 'ng:ecosystem/rxjs-interop/take-until-destroyed', level: 'required' },
      { src: 'ng:guide/signals/linked-signal', level: 'skim' },
      { src: 'ng:guide/signals/resource', level: 'skim', note: 'Good to know it exists. In this project all data loading goes through NgRx effects, not `resource`.' },
    ],
  },
  {
    dir: '05-services-and-di',
    label: '5. Services & dependency injection',
    pages: [
      { src: 'ng:guide/di', name: 'di-overview', level: 'required' },
      { src: 'ng:guide/di/creating-and-using-services', level: 'required' },
      { src: 'ng:guide/di/defining-dependency-providers', level: 'skim' },
      { src: 'ng:guide/di/hierarchical-dependency-injection', level: 'skim' },
    ],
  },
  {
    dir: '06-routing',
    label: '6. Routing',
    pages: [
      { src: 'ng:guide/routing', name: 'routing-overview', level: 'required' },
      { src: 'ng:guide/routing/define-routes', level: 'required', note: 'The project has at least two routes: the feed and `/profile/:username`. Lazy-load the profile page.' },
      { src: 'ng:guide/routing/show-routes-with-outlets', level: 'required' },
      { src: 'ng:guide/routing/navigate-to-routes', level: 'required' },
      { src: 'ng:guide/routing/read-route-state', level: 'required', note: 'This is how the profile page gets the username from the URL.' },
      { src: 'ng:guide/routing/route-guards', level: 'skim' },
      { src: 'ng:guide/routing/data-resolvers', level: 'skim' },
    ],
  },
  {
    dir: '07-forms',
    label: '7. Forms',
    pages: [
      { src: 'ng:guide/forms', name: 'forms-overview', level: 'required' },
      { src: 'ng:guide/forms/reactive-forms', level: 'required', note: 'The "add a comment" form is a reactive form.' },
      { src: 'ng:guide/forms/form-validation', level: 'required' },
      { src: 'ng:guide/forms/typed-forms', level: 'skim' },
    ],
  },
  {
    dir: '08-http',
    label: '8. HTTP',
    pages: [
      { src: 'ng:guide/http', name: 'http-overview', level: 'required' },
      { src: 'ng:guide/http/setup', level: 'required' },
      { src: 'ng:guide/http/making-requests', level: 'required', note: 'In this project, only API services use `HttpClient`, and only effects call those services. No component calls HTTP directly.' },
      { src: 'ng:guide/http/interceptors', level: 'required', note: 'Use an interceptor to add the auth token from the NestJS API to every request.' },
    ],
  },
  {
    dir: '09-architecture',
    label: '9. Architecture',
    pages: [
      { src: 'ng:style-guide', level: 'required' },
      { src: 'ng:best-practices/error-handling', level: 'skim' },
    ],
  },
  {
    dir: '10-rxjs',
    label: '10. RxJS',
    pages: [
      { src: 'rx:overview', name: 'rxjs-overview', level: 'required' },
      { src: 'rx:observable', level: 'required' },
      { src: 'rx:observer', level: 'required' },
      { src: 'rx:subscription', level: 'required' },
      { src: 'rx:operators', level: 'required' },
      { src: 'rx:subject', level: 'skim' },
      { src: 'rx:higher-order-observables', level: 'required', note: 'Effects are higher-order observables: an action comes in, an API call (another observable) goes out. The next four pages are the four ways to flatten them.' },
      { src: 'lrx:operators/transformation/switchmap', level: 'required' },
      { src: 'lrx:operators/transformation/mergemap', level: 'required' },
      { src: 'lrx:operators/transformation/concatmap', level: 'required' },
      { src: 'lrx:operators/transformation/exhaustmap', level: 'required' },
      { src: 'lrx:operators/transformation/map', level: 'required' },
      { src: 'lrx:operators/filtering/filter', level: 'required' },
      { src: 'lrx:operators/utility/do', name: 'tap', level: 'required' },
      { src: 'lrx:operators/error_handling/catch', name: 'catcherror', level: 'required', note: 'Every effect that calls the API needs `catchError` inside the inner observable, or one failed request kills the effect.' },
      { src: 'lrx:operators/filtering/debouncetime', level: 'skim' },
      { src: 'lrx:operators/filtering/distinctuntilchanged', level: 'skim' },
      { src: 'lrx:operators/combination/combinelatest', level: 'skim' },
    ],
  },
  {
    dir: '11-ngrx-store',
    label: '11. NgRx Store',
    pages: [
      { src: 'ngrx:store/why', level: 'required' },
      { src: 'ngrx:store/index', name: 'store-overview', level: 'required', note: 'Read the key concepts and the diagram. Skip the counter tutorial at the end: it uses the old NgModule setup. The walkthrough two pages ahead is the up-to-date version.' },
      { src: 'ngrx:store/install', level: 'required' },
      { src: 'ngrx:store/architecture', level: 'required' },
      { src: 'ngrx:store/walkthrough', level: 'required', note: 'Do this one hands-on in a scratch project before you add the store to Instagram.' },
      { src: 'ngrx:store/actions', level: 'required' },
      { src: 'ngrx:store/action-groups', level: 'required', note: 'We define actions with `createActionGroup`.' },
      { src: 'ngrx:store/reducers', level: 'required' },
      { src: 'ngrx:store/selectors', level: 'required' },
      { src: 'ngrx:store/feature-creators', level: 'required', note: 'Each slice (posts, comments, profile) is one `createFeature`.' },
      { src: 'ngrx:store/configuration/runtime-checks', level: 'skim' },
    ],
  },
  {
    dir: '12-ngrx-effects',
    label: '12. NgRx Effects',
    pages: [
      { src: 'ngrx:effects/index', name: 'effects-overview', level: 'required' },
      { src: 'ngrx:effects/install', name: 'effects-install', level: 'required' },
      { src: 'ngrx:effects/lifecycle', level: 'skim' },
      { src: 'ngrx:effects/operators', name: 'effects-operators', level: 'required' },
      { src: 'ngrx:operators/operators', name: 'concat-latest-from', level: 'skim' },
    ],
  },
  {
    dir: '13-ngrx-entity-and-devtools',
    label: '13. NgRx Entity & DevTools',
    pages: [
      { src: 'ngrx:entity/index', name: 'entity-overview', level: 'required' },
      { src: 'ngrx:entity/install', name: 'entity-install', level: 'required' },
      { src: 'ngrx:entity/interfaces', level: 'required' },
      { src: 'ngrx:entity/adapter', level: 'required', note: 'Posts and comments are both entity collections.' },
      { src: 'ngrx:entity/recipes/entity-adapter-with-feature-creator', level: 'required' },
      { src: 'ngrx:store-devtools/index', name: 'devtools-overview', level: 'required', note: 'Keep Redux DevTools open while you work. If you cannot explain an action in the log, something is wrong.' },
      { src: 'ngrx:store-devtools/install', name: 'devtools-install', level: 'required' },
      { src: 'ngrx:store-devtools/config', name: 'devtools-config', level: 'skim' },
      { src: 'ngrx:router-store/index', name: 'router-store-overview', level: 'skim' },
      { src: 'ngrx:router-store/selectors', name: 'router-store-selectors', level: 'skim' },
    ],
  },
];
