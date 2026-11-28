/**
 * Which documentation pages make up the frontend stage: the Angular track, and the Atomic Design
 * page some teams use. See ../README.md for the options.
 */
const angular = (output, from, options = {}) => ({ output, source: 'angular', from, ...options });
const ngrx = (output, from, options = {}) => ({ output, source: 'ngrx', from, ...options });
const rxjs = (output, from, options = {}) => ({ output, source: 'rxjs', from, ...options });
const tutorial = (output, title, steps) => ({
  output,
  source: 'angular-tutorial',
  title,
  steps,
  intro: TUTORIAL_INTRO,
});

/** Shown at the top of each tutorial practice page. */
const TUTORIAL_INTRO = `Each exercise below is a step of the official Angular tutorial. To do them, create a
practice app with \`ng new practice\`, then replace the files the exercise shows in \`src/app/\`.
Run \`ng serve\` and check the result in the browser.`;

export default {
  stageDir: 'apps/site/docs/stages/08-frontend',

  /** Generated folders inside the stage, and their sidebar labels. */
  categories: {
    'angular/01-basics': 'Angular basics',
    'angular/02-routing-forms-http': 'Routing, forms & HTTP',
    'angular/03-rxjs': 'RxJS',
    'angular/04-project-structure': 'Project structure',
    'angular/05-ngrx': 'NgRx Store',
  },

  pages: [
    // ---------- Angular basics ----------
    angular('angular/01-basics/01-components.mdx', 'introduction/essentials/components', {
      dropSections: ['Next Step'],
    }),
    angular('angular/01-basics/02-templates.mdx', 'introduction/essentials/templates', {
      dropSections: ['Next Step'],
    }),
    angular('angular/01-basics/03-signals.mdx', 'introduction/essentials/signals', {
      dropSections: ['Next Step'],
    }),
    angular(
      'angular/01-basics/04-dependency-injection.mdx',
      'introduction/essentials/dependency-injection',
      { dropSections: ['Next Step'] },
    ),
    tutorial('angular/01-basics/05-practice.mdx', 'Practice: Angular basics', [
      '1-components-in-angular',
      '2-updating-the-component-class',
      '3-composing-components',
      '4-control-flow-if',
      '5-control-flow-for',
      '6-property-binding',
      '7-event-handling',
      '8-input',
      '9-output',
      '19-creating-an-injectable-service',
      '20-inject-based-di',
    ]),

    // ---------- Routing, forms & HTTP ----------
    angular('angular/02-routing-forms-http/01-routing.mdx', 'guide/routing/overview'),
    angular('angular/02-routing-forms-http/02-define-routes.mdx', 'guide/routing/define-routes', {
      sections: [
        'What are routes?',
        'Route URL Paths',
        'How Angular matches URLs',
        'Redirects',
        'Nested Routes',
      ],
    }),
    angular(
      'angular/02-routing-forms-http/03-navigate-to-routes.mdx',
      'guide/routing/navigate-to-routes',
      { sections: ['How to use RouterLink', 'Programmatic navigation to routes'] },
    ),
    angular(
      'angular/02-routing-forms-http/04-read-route-state.mdx',
      'guide/routing/read-route-state',
      {
        sections: [
          'Get information about the current route with ActivatedRoute',
          'Reading parameters on a route',
        ],
      },
    ),
    angular('angular/02-routing-forms-http/05-reactive-forms.mdx', 'guide/forms/reactive-forms', {
      sections: [
        'Overview of reactive forms',
        'Adding a basic form control',
        'Grouping form controls',
        'Using the FormBuilder service to generate controls',
        'Validating form input',
      ],
    }),
    angular('angular/02-routing-forms-http/06-http-setup.mdx', 'guide/http/setup', {
      sections: ['Providing `HttpClient` through dependency injection'],
    }),
    angular('angular/02-routing-forms-http/07-http-requests.mdx', 'guide/http/making-requests', {
      sections: [
        'Fetching JSON data',
        'Mutating server state',
        'Setting URL parameters',
        'Setting request headers',
        'Handling request failure',
        'HTTP `Observable`s',
        'Best practices',
      ],
    }),
    tutorial('angular/02-routing-forms-http/08-practice.mdx', 'Practice: Routing and forms', [
      '12-enable-routing',
      '13-define-a-route',
      '14-routerLink',
      '17-reactive-forms',
      '18-forms-validation',
    ]),

    // ---------- RxJS (what NgRx and HttpClient build on) ----------
    rxjs('angular/03-rxjs/01-introduction.mdx', 'guide/overview', { title: 'RxJS introduction' }),
    rxjs('angular/03-rxjs/02-observable.mdx', 'guide/observable', {
      sections: ['Pull versus Push', 'Anatomy of an Observable'],
    }),
    rxjs('angular/03-rxjs/03-operators.mdx', 'guide/operators', {
      sections: [
        'What are operators?',
        'Piping',
        'Creation Operators',
        'Higher-order Observables',
        'Marble diagrams',
      ],
    }),

    // ---------- Project structure ----------
    angular('angular/04-project-structure/01-style-guide.mdx', 'best-practices/style-guide'),

    // ---------- NgRx Store ----------
    ngrx('angular/05-ngrx/01-why.mdx', 'guide/store/why', { sidebarLabel: 'Why NgRx Store?' }),
    ngrx('angular/05-ngrx/02-store.mdx', 'guide/store/index', {
      title: 'NgRx Store',
      dropSections: ['Installation'],
      replace: [
        // The tutorial starts from an online StackBlitz project: use a local app instead.
        [
          'Generate a new project using the <ngrx-docs-stackblitz name="ngrx-start"></ngrx-docs-stackblitz>.',
          'Generate a new project with `ng new`, and add NgRx with `npm install @ngrx/store`.',
        ],
        ['Right click on the `src` folder in StackBlitz and create', 'In the `src` folder, create'],
      ],
    }),
    ngrx('angular/05-ngrx/03-actions.mdx', 'guide/store/actions'),
    ngrx('angular/05-ngrx/04-reducers.mdx', 'guide/store/reducers', {
      dropSections: ['Standalone API in module-based apps', 'Next Steps'],
    }),
    ngrx('angular/05-ngrx/05-selectors.mdx', 'guide/store/selectors', {
      dropSections: [
        'Resetting Memoized Selectors',
        'Using Store Without Type Generic',
        'Advanced Usage',
      ],
    }),
    ngrx('angular/05-ngrx/06-effects.mdx', 'guide/effects/index', {
      title: 'Effects',
      dropSections: ['Installation', 'Using Other Observable Sources for Effects'],
    }),
    ngrx('angular/05-ngrx/07-walkthrough.mdx', 'guide/store/walkthrough', {
      title: 'Store walkthrough',
      kind: 'practice',
      replace: [
        // The online StackBlitz projects are not available inside the network.
        ['The full example is available on StackBlitz:\n\n', ''],
        [
          'Generate a new project using the <ngrx-docs-stackblitz name="ngrx-start"></ngrx-docs-stackblitz>',
          'Generate a new project with `ng new`, add NgRx with `npm install @ngrx/store`,',
        ],
        // Upstream numbers the second step "1." too.
        ['1. Right click on the `app` folder', '2. Right click on the `app` folder'],
      ],
    }),

    // ---------- Atomic Design (only for the teams that use it) ----------
    {
      output: 'atomic-design.mdx',
      source: 'github-readme',
      from: 'react-atomic-design/README.md',
      url: 'https://github.com/danilowoz/react-atomic-design',
      attribution: 'react-atomic-design',
      title: 'Atomic Design',
      position: 50,
      // TODO: the teams that use Atomic Design. The options are in packages/shared/src/tracks.ts.
      track: { team: ['team-1'] },
      // Section titles after `replace` renamed them.
      sections: ['What is Atomic Design?', 'Rules for components'],
      replace: [
        // Keep the overview image at the top, but not the README's intro and table of contents.
        [/^# react-atomic-design\n[\s\S]*?(?=^## What is Atomic Design\?)/m, ''],
        // The page is for every framework, and the original has a few typos.
        ['## React + Atomic Design', '## Rules for components'],
        [
          'When we started to use Atomic Design within React',
          'When we started to use Atomic Design',
        ],
        ['or event color pallets', 'or even color palettes'],
        ['to be reusable in any content', 'to be used in any content'],
        ['the navigate parts of the application', 'the parts of the application you navigate to'],
      ],
    },
  ],
};
