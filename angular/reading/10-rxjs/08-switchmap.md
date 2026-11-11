---
title: "switchMap"
sidebar_position: 8
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [switchMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap) by Brian Troncone and contributors, Learn RxJS, licensed under [MIT](https://github.com/btroncone/learn-rxjs/blob/master/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

#### signature: `switchMap(project: function: Observable, resultSelector: function(outerValue, innerValue, outerIndex, innerIndex): any): Observable`

## Map to observable, complete previous inner observable, emit values.

---

💡 If you would like more than one inner subscription to be maintained, try
[`mergeMap`](./09-mergemap.md)!

💡 This operator is generally considered a safer default to
[`mergeMap`](./09-mergemap.md)!

💡 This operator can cancel in-flight network requests!

---

### Why use `switchMap`?

The main difference between `switchMap` and other flattening operators is the
cancelling effect. On each emission the previous inner observable (the result of
the function you supplied) is cancelled and the new observable is subscribed.
You can remember this by the phrase **switch to a new observable**.

This works perfectly for scenarios like
[typeaheads](https://angular-2-training-book.rangle.io/handout/http/search_with_switchmap.html)
where you are no longer concerned with the response of the previous request when
a new input arrives. This also is a safe option in situations where a long lived
inner observable could cause memory leaks, for instance if you used
[mergeMap](./09-mergemap.md) with an interval and forgot to properly dispose of inner
subscriptions. Remember, `switchMap` maintains only one inner subscription at a
time, this can be seen clearly in the
[first example](#example-1-restart-interval-every-5-seconds).

Be careful though, you probably want to avoid `switchMap` in scenarios where
every request needs to complete, think writes to a database. `switchMap` could
cancel a request if the source emits quickly enough. In these scenarios
[mergeMap](./09-mergemap.md) is the correct option.

### Examples

##### Example 1: Restart interval on every click

(
[StackBlitz](https://stackblitz.com/edit/typescript-s4pvix?file=index.ts&devtoolsheight=100)
)

```js
// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);
```

##### Example 2: Countdown timer with pause and resume

( [StackBlitz](https://stackblitz.com/edit/typescript-ivdebg?file=index.ts) )

```js
// RxJS v6+
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

const COUNTDOWN_SECONDS = 10;

// elem refs
const remainingLabel = document.getElementById('remaining');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');

// streams
const interval$ = interval(1000).pipe(mapTo(-1));
const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

const timer$ = merge(pause$, resume$)
  .pipe(
    startWith(true),
    switchMap(val => (val ? interval$ : empty())),
    scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
    takeWhile(v => v >= 0)
  )
  .subscribe((val: any) => (remainingLabel.innerHTML = val));
```

##### Example 3: Using a `resultSelector` function

(
[StackBlitz](https://stackblitz.com/edit/typescript-bmibzi?file=index.ts&devtoolsheight=100)
)

```js
// RxJS v6+
import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// switch to new inner observable when source emits, emit result of project function
timer(0, 5000)
  .pipe(
    switchMap(
      _ => interval(2000),
      (outerValue, innerValue, outerIndex, innerIndex) => ({
        outerValue,
        innerValue,
        outerIndex,
        innerIndex
      })
    )
  )
  /*
	Output:
	{outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
	{outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
	{outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
	{outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
*/
  .subscribe(console.log);
```

### Related Recipes

- [Alphabet Invasion Game](https://www.learnrxjs.io/learn-rxjs/recipes/alphabet-invasion-game)
- [Battleship Game](https://www.learnrxjs.io/learn-rxjs/recipes/battleship-game)
- [Car Racing Game](https://www.learnrxjs.io/learn-rxjs/recipes/car-racing-game)
- [Catch The Dot Game](https://www.learnrxjs.io/learn-rxjs/recipes/catch-the-dot-game)
- [HTTP Polling](https://www.learnrxjs.io/learn-rxjs/recipes/http-polling)
- [Lockscreen](https://www.learnrxjs.io/learn-rxjs/recipes/lockscreen)
- [Memory Game](https://www.learnrxjs.io/learn-rxjs/recipes/memory-game)
- [Mine Sweeper Game](https://www.learnrxjs.io/learn-rxjs/recipes/mine-sweeper-game)
- [Platform Jumper Game](https://www.learnrxjs.io/learn-rxjs/recipes/platform-jumper-game)
- [Progress Bar](https://www.learnrxjs.io/learn-rxjs/recipes/progressbar)
- [Smart Counter](https://www.learnrxjs.io/learn-rxjs/recipes/smartcounter)
- [Stop Watch](https://www.learnrxjs.io/learn-rxjs/recipes/stop-watch)
- [Typeahead](https://www.learnrxjs.io/learn-rxjs/recipes/type-ahead)

### Additional Resources

- [switchMap](https://rxjs.dev/api/operators/switchMap) 📰 - Official docs
- [Avoiding switchMap-Related Bugs](https://blog.angularindepth.com/switchmap-bugs-b6de69155524) -
  Nicholas Jamieson
- [Starting a stream with switchMap](https://egghead.io/lessons/rxjs-starting-a-stream-with-switchmap?course=step-by-step-async-javascript-with-rxjs)
  🎥 💵 - John Linquist
- [Use RxJS switchMap to map and flatten higher order observables](https://egghead.io/lessons/rxjs-use-rxjs-switchmap-to-map-and-flatten-higher-order-observables?course=use-higher-order-observables-in-rxjs-effectively)
  🎥 💵 - André Staltz
- [Use switchMap as a safe default to flatten observables in RxJS](https://egghead.io/lessons/rxjs-use-switchmap-as-a-safe-default-to-flatten-observables-in-rxjs?course=use-higher-order-observables-in-rxjs-effectively)
  🎥 💵 - André Staltz

---

> 📁 Source Code:
> [https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/switchMap.ts](https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/switchMap.ts)
