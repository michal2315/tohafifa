import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'frontend/angular-rxjs',
  title: 'RxJS',
  questions: [
    {
      type: 'choice',
      prompt: 'This is all the code that runs. What does it log?',
      code: {
        language: 'ts',
        code: `const posts$ = new Observable((subscriber) => {
  console.log('Fetching posts');
  subscriber.next(['Beach day', 'New camera']);
  subscriber.complete();
});`,
      },
      options: ['Nothing', '`Fetching posts`', '`Fetching posts`, then the two posts'],
      answer: 0,
      explanation:
        'Observables are lazy: the function passed to `new Observable` runs only when something subscribes, and again for every new subscriber. Until then it is just a description of work. This is why an HTTP request is not sent until you subscribe.',
    },
    {
      type: 'choice',
      prompt: 'What values does this Observable emit?',
      code: {
        language: 'ts',
        code: `of(1, 2, 3, 4).pipe(
  filter((n) => n % 2 === 0),
  map((n) => n * 10),
);`,
      },
      options: ['20, 40', '10, 20, 30, 40', '10, 30', '2, 4'],
      answer: 0,
      explanation:
        'Operators in `pipe()` run in order on every value. `filter` passes only the even numbers (2 and 4), then `map` multiplies those by 10.',
    },
    {
      type: 'multi',
      prompt: 'Which statements are true for Observables, but not for Promises?',
      options: [
        'They can deliver many values over time',
        'They do nothing until you subscribe',
        'You can cancel them by unsubscribing',
        'They always deliver their values asynchronously',
      ],
      answers: [0, 1, 2],
      explanation:
        'A Promise resolves once and starts its work as soon as it is created. An Observable can emit any number of values, starts only on subscribe, and stops when you unsubscribe. Observables are not always asynchronous: `of(1, 2, 3)` emits its values synchronously, during the call to `subscribe()`.',
    },
    {
      type: 'fill-in',
      prompt:
        'The component refreshes the feed every 30 seconds. Stop the timer when it is destroyed.',
      code: {
        language: 'ts',
        code: `private readonly refresh = interval(30_000).subscribe(() => this.loadFeed());

ngOnDestroy() {
  this.refresh.___();
}`,
      },
      blanks: [['unsubscribe', 'unsubscribe()']],
      explanation:
        '`subscribe()` returns a Subscription. An interval never completes, so without `unsubscribe()` it keeps running - and calling `loadFeed` - after the component is gone. In Angular you can also use `takeUntilDestroyed()` to do this for you.',
    },
    {
      type: 'choice',
      prompt:
        'A search box sends a request on every change. Which operator makes sure only the latest search result is shown, by cancelling the request before it?',
      options: ['`switchMap`', '`mergeMap`', '`concatMap`', '`map`'],
      answer: 0,
      explanation:
        '`switchMap` maps each value to an inner Observable (the request) and switches to it, unsubscribing from the previous one. `mergeMap` keeps all requests running, so an old response can arrive last and overwrite the new one. `concatMap` waits for each request in turn. `map` does not subscribe to inner Observables at all.',
    },
  ],
});
