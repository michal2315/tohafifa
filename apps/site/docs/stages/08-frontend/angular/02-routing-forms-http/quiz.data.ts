import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'frontend/angular-routing-forms-http',
  title: 'Routing, forms & HTTP',
  questions: [
    {
      type: 'choice',
      prompt: 'With these routes, what does the app show at `/users/dana`?',
      code: {
        language: 'ts',
        code: `export const routes: Routes = [
  { path: '**', component: NotFound },
  { path: '', component: Feed },
  { path: 'users/:username', component: Profile },
];`,
      },
      options: ['`NotFound`', '`Profile`', '`Feed`', 'Nothing - the routes are invalid'],
      answer: 0,
      explanation:
        'The router uses the first route that matches, in the order they are listed. The wildcard `**` matches every URL, so no route after it is ever reached. Put the wildcard route last.',
    },
    {
      type: 'fill-in',
      prompt: 'Link to the explore page without reloading the whole app.',
      code: {
        language: 'html',
        code: `<a ___="/explore">Explore</a>`,
      },
      blanks: [['routerLink']],
      explanation:
        'A plain `href` makes the browser load the page again from the server, so the app restarts and loses its state. `routerLink` lets the Angular router change the URL and swap the routed component instead.',
    },
    {
      type: 'find-bug',
      prompt: 'Clicking "Publish" never sends a request to the server. Find the line with the bug.',
      code: {
        language: 'ts',
        code: `export class UploadPost {
  private readonly http = inject(HttpClient);

  publish(caption: string) {
    this.http.post('/api/posts', { caption });
  }
}`,
      },
      bugLine: 5,
      explanation:
        '`HttpClient` methods return an Observable that does nothing until something subscribes to it. Without `.subscribe()` (or the `async` pipe, or `toSignal`), the request is never sent.',
    },
    {
      type: 'choice',
      prompt:
        'The user typed "Sunset" as the caption and left the location empty. What is `form.valid`?',
      code: {
        language: 'ts',
        code: `form = new FormGroup({
  caption: new FormControl('', Validators.maxLength(30)),
  location: new FormControl('', Validators.required),
});`,
      },
      options: ['`false`', '`true`', '`null` until the form is submitted'],
      answer: 0,
      explanation:
        'A form group is valid only when all its controls are valid. The caption is valid, but `location` is required and empty, so the whole group is invalid. Use this to disable the submit button: `[disabled]="form.invalid"`.',
    },
    {
      type: 'choice',
      prompt: 'Where do you make `HttpClient` available to a standalone Angular app?',
      options: [
        'Add `provideHttpClient()` to the `providers` of the application config',
        'Add `HttpClient` to the `imports` of every component that uses it',
        'Create it with `new HttpClient()` in each service',
      ],
      answer: 0,
      explanation:
        '`provideHttpClient()` registers `HttpClient` with dependency injection once, for the whole app. After that, any service or component can get it with `inject(HttpClient)`. Creating it yourself would skip the configuration, such as interceptors.',
    },
  ],
});
