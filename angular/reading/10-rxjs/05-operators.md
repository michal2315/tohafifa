---
title: "RxJS Operators"
sidebar_position: 5
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [RxJS Operators](https://rxjs.dev/guide/operators) by the RxJS team and contributors, RxJS documentation (v7), licensed under [Apache 2.0](https://github.com/ReactiveX/rxjs/blob/7.x/LICENSE.txt). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

RxJS is mostly useful for its _operators_, even though the Observable is the foundation. Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.

## What are operators?

Operators are **functions**. There are two kinds of operators:

**Pipeable Operators** are the kind that can be piped to Observables using the syntax `observableInstance.pipe(operator)` or, more commonly, `observableInstance.pipe(operatorFactory())`. Operator factory functions include, [`filter(...)`](https://rxjs.dev/api/operators/filter), and [`mergeMap(...)`](https://rxjs.dev/api/operators/mergeMap).

When Pipeable Operators are called, they do not _change_ the existing Observable instance. Instead, they return a _new_ Observable, whose subscription logic is based on the first Observable.

*A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous Observable stays unmodified.*

*A Pipeable Operator Factory is a function that can take parameters to set the context and return a Pipeable Operator. The factory’s arguments belong to the operator’s lexical scope.*

A Pipeable Operator is essentially a pure function which takes one Observable as input and generates another Observable as output. Subscribing to the output Observable will also subscribe to the input Observable.

**Creation Operators** are the other kind of operator, which can be called as standalone functions to create a new Observable. For example: `of(1, 2, 3)` creates an observable that will emit 1, 2, and 3, one right after another. Creation operators will be discussed in more detail in a later section.

For example, the operator called [`map`](https://rxjs.dev/api/operators/map) is analogous to the Array method of the same name. Just as `[1, 2, 3].map(x => x * x)` will yield `[1, 4, 9]`, the Observable created like this:

```ts
import { of, map } from 'rxjs';

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9
```

will emit `1`, `4`, `9`. Another useful operator is [`first`](https://rxjs.dev/api/operators/first):

```ts
import { of, first } from 'rxjs';

of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
```

Note that `map` logically must be constructed on the fly, since it must be given the mapping function to. By contrast, `first` could be a constant, but is nonetheless constructed on the fly. As a general practice, all operators are constructed, whether they need arguments or not.

## Piping

Pipeable operators are functions, so they _could_ be used like ordinary functions: `op()(obs)` — but in practice, there tend to be many of them convolved together, and quickly become unreadable: `op4()(op3()(op2()(op1()(obs))))`. For that reason, Observables have a method called `.pipe()` that accomplishes the same thing while being much easier to read:

```ts
obs.pipe(op1(), op2(), op3(), op4());
```

As a stylistic matter, `op()(obs)` is never used, even if there is only one operator; `obs.pipe(op())` is universally preferred.

## Creation Operators

**What are creation operators?** Distinct from pipeable operators, creation operators are functions that can be used to create an Observable with some common predefined behavior or by joining other Observables.

A typical example of a creation operator would be the `interval` function. It takes a number (not an Observable) as input argument, and produces an Observable as output:

```ts
import { interval } from 'rxjs';

const observable = interval(1000 /* number of milliseconds */);
```

See the list of all static creation operators [here](#creation-operators-list).

## Higher-order Observables

Observables most commonly emit ordinary values like strings and numbers, but surprisingly often, it is necessary to handle Observables _of_ Observables, so-called higher-order Observables. For example, imagine you had an Observable emitting strings that were the URLs of files you wanted to see. The code might look like this:

```ts
const fileObservable = urlObservable.pipe(map((url) => http.get(url)));
```

`http.get()` returns an Observable (of string or string arrays probably) for each individual URL. Now you have an Observable _of_ Observables, a higher-order Observable.

But how do you work with a higher-order Observable? Typically, by _flattening_: by (somehow) converting a higher-order Observable into an ordinary Observable. For example:

```ts
const fileObservable = urlObservable.pipe(
  map((url) => http.get(url)),
  concatAll()
);
```

The [`concatAll()`](https://rxjs.dev/api/operators/concatAll) operator subscribes to each "inner" Observable that comes out of the "outer" Observable, and copies all the emitted values until that Observable completes, and goes on to the next one. All of the values are in that way concatenated. Other useful flattening operators (called [_join operators_](#join-operators)) are

- [`mergeAll()`](https://rxjs.dev/api/operators/mergeAll) — subscribes to each inner Observable as it arrives, then emits each value as it arrives
- [`switchAll()`](https://rxjs.dev/api/operators/switchAll) — subscribes to the first inner Observable when it arrives, and emits each value as it arrives, but when the next inner Observable arrives, unsubscribes to the previous one, and subscribes to the new one.
- [`exhaustAll()`](https://rxjs.dev/api/operators/exhaustAll) — subscribes to the first inner Observable when it arrives, and emits each value as it arrives, discarding all newly arriving inner Observables until that first one completes, then waits for the next inner Observable.

Just as many array libraries combine [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`flat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) (or `flatten()`) into a single [`flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), there are mapping equivalents of all the RxJS flattening operators [`concatMap()`](https://rxjs.dev/api/operators/concatMap), [`mergeMap()`](https://rxjs.dev/api/operators/mergeMap), [`switchMap()`](https://rxjs.dev/api/operators/switchMap), and [`exhaustMap()`](https://rxjs.dev/api/operators/exhaustMap).

## Marble diagrams

To explain how operators work, textual descriptions are often not enough. Many operators are related to time, they may for instance delay, sample, throttle, or debounce value emissions in different ways. Diagrams are often a better tool for that. _Marble Diagrams_ are visual representations of how operators work, and include the input Observable(s), the operator and its parameters, and the output Observable.

*In a marble diagram, time flows to the right, and the diagram describes how values ("marbles") are emitted on the Observable execution.*

Below you can see the anatomy of a marble diagram.

![](./img/05-operators/marble-diagram-anatomy.svg)

Throughout this documentation site, we extensively use marble diagrams to explain how operators work. They may be really useful in other contexts too, like on a whiteboard or even in our unit tests (as ASCII diagrams).

## Categories of operators

There are operators for different purposes, and they may be categorized as: creation, transformation, filtering, joining, multicasting, error handling, utility, etc. In the following list you will find all the operators organized in categories.

For a complete overview, see the [references page](https://rxjs.dev/api).

### Creation Operators {#creation-operators-list}

- [`ajax`](https://rxjs.dev/api/ajax/ajax)
- [`bindCallback`](https://rxjs.dev/api/index/function/bindCallback)
- [`bindNodeCallback`](https://rxjs.dev/api/index/function/bindNodeCallback)
- [`defer`](https://rxjs.dev/api/index/function/defer)
- [`empty`](https://rxjs.dev/api/index/function/empty)
- [`from`](https://rxjs.dev/api/index/function/from)
- [`fromEvent`](https://rxjs.dev/api/index/function/fromEvent)
- [`fromEventPattern`](https://rxjs.dev/api/index/function/fromEventPattern)
- [`generate`](https://rxjs.dev/api/index/function/generate)
- [`interval`](https://rxjs.dev/api/index/function/interval)
- [`of`](https://rxjs.dev/api/index/function/of)
- [`range`](https://rxjs.dev/api/index/function/range)
- [`throwError`](https://rxjs.dev/api/index/function/throwError)
- [`timer`](https://rxjs.dev/api/index/function/timer)
- [`iif`](https://rxjs.dev/api/index/function/iif)

### Join Creation Operators {#join-creation-operators}

These are Observable creation operators that also have join functionality -- emitting values of multiple source Observables.

- [`combineLatest`](https://rxjs.dev/api/index/function/combineLatest)
- [`concat`](https://rxjs.dev/api/index/function/concat)
- [`forkJoin`](https://rxjs.dev/api/index/function/forkJoin)
- [`merge`](https://rxjs.dev/api/index/function/merge)
- [`partition`](https://rxjs.dev/api/index/function/partition)
- [`race`](https://rxjs.dev/api/index/function/race)
- [`zip`](https://rxjs.dev/api/index/function/zip)

### Transformation Operators

- [`buffer`](https://rxjs.dev/api/operators/buffer)
- [`bufferCount`](https://rxjs.dev/api/operators/bufferCount)
- [`bufferTime`](https://rxjs.dev/api/operators/bufferTime)
- [`bufferToggle`](https://rxjs.dev/api/operators/bufferToggle)
- [`bufferWhen`](https://rxjs.dev/api/operators/bufferWhen)
- [`concatMap`](https://rxjs.dev/api/operators/concatMap)
- [`concatMapTo`](https://rxjs.dev/api/operators/concatMapTo)
- [`exhaust`](https://rxjs.dev/api/operators/exhaust)
- [`exhaustMap`](https://rxjs.dev/api/operators/exhaustMap)
- [`expand`](https://rxjs.dev/api/operators/expand)
- [`groupBy`](https://rxjs.dev/api/operators/groupBy)
- [`map`](https://rxjs.dev/api/operators/map)
- [`mapTo`](https://rxjs.dev/api/operators/mapTo)
- [`mergeMap`](https://rxjs.dev/api/operators/mergeMap)
- [`mergeMapTo`](https://rxjs.dev/api/operators/mergeMapTo)
- [`mergeScan`](https://rxjs.dev/api/operators/mergeScan)
- [`pairwise`](https://rxjs.dev/api/operators/pairwise)
- [`partition`](https://rxjs.dev/api/operators/partition)
- [`pluck`](https://rxjs.dev/api/operators/pluck)
- [`scan`](https://rxjs.dev/api/operators/scan)
- [`switchScan`](https://rxjs.dev/api/operators/switchScan)
- [`switchMap`](https://rxjs.dev/api/operators/switchMap)
- [`switchMapTo`](https://rxjs.dev/api/operators/switchMapTo)
- [`window`](https://rxjs.dev/api/operators/window)
- [`windowCount`](https://rxjs.dev/api/operators/windowCount)
- [`windowTime`](https://rxjs.dev/api/operators/windowTime)
- [`windowToggle`](https://rxjs.dev/api/operators/windowToggle)
- [`windowWhen`](https://rxjs.dev/api/operators/windowWhen)

### Filtering Operators

- [`audit`](https://rxjs.dev/api/operators/audit)
- [`auditTime`](https://rxjs.dev/api/operators/auditTime)
- [`debounce`](https://rxjs.dev/api/operators/debounce)
- [`debounceTime`](https://rxjs.dev/api/operators/debounceTime)
- [`distinct`](https://rxjs.dev/api/operators/distinct)
- [`distinctUntilChanged`](https://rxjs.dev/api/operators/distinctUntilChanged)
- [`distinctUntilKeyChanged`](https://rxjs.dev/api/operators/distinctUntilKeyChanged)
- [`elementAt`](https://rxjs.dev/api/operators/elementAt)
- [`filter`](https://rxjs.dev/api/operators/filter)
- [`first`](https://rxjs.dev/api/operators/first)
- [`ignoreElements`](https://rxjs.dev/api/operators/ignoreElements)
- [`last`](https://rxjs.dev/api/operators/last)
- [`sample`](https://rxjs.dev/api/operators/sample)
- [`sampleTime`](https://rxjs.dev/api/operators/sampleTime)
- [`single`](https://rxjs.dev/api/operators/single)
- [`skip`](https://rxjs.dev/api/operators/skip)
- [`skipLast`](https://rxjs.dev/api/operators/skipLast)
- [`skipUntil`](https://rxjs.dev/api/operators/skipUntil)
- [`skipWhile`](https://rxjs.dev/api/operators/skipWhile)
- [`take`](https://rxjs.dev/api/operators/take)
- [`takeLast`](https://rxjs.dev/api/operators/takeLast)
- [`takeUntil`](https://rxjs.dev/api/operators/takeUntil)
- [`takeWhile`](https://rxjs.dev/api/operators/takeWhile)
- [`throttle`](https://rxjs.dev/api/operators/throttle)
- [`throttleTime`](https://rxjs.dev/api/operators/throttleTime)

### Join Operators {#join-operators}

Also see the [Join Creation Operators](#join-creation-operators) section above.

- [`combineLatestAll`](https://rxjs.dev/api/operators/combineLatestAll)
- [`concatAll`](https://rxjs.dev/api/operators/concatAll)
- [`exhaustAll`](https://rxjs.dev/api/operators/exhaustAll)
- [`mergeAll`](https://rxjs.dev/api/operators/mergeAll)
- [`switchAll`](https://rxjs.dev/api/operators/switchAll)
- [`startWith`](https://rxjs.dev/api/operators/startWith)
- [`withLatestFrom`](https://rxjs.dev/api/operators/withLatestFrom)

### Multicasting Operators

- [`multicast`](https://rxjs.dev/api/operators/multicast)
- [`publish`](https://rxjs.dev/api/operators/publish)
- [`publishBehavior`](https://rxjs.dev/api/operators/publishBehavior)
- [`publishLast`](https://rxjs.dev/api/operators/publishLast)
- [`publishReplay`](https://rxjs.dev/api/operators/publishReplay)
- [`share`](https://rxjs.dev/api/operators/share)

### Error Handling Operators

- [`catchError`](https://rxjs.dev/api/operators/catchError)
- [`retry`](https://rxjs.dev/api/operators/retry)
- [`retryWhen`](https://rxjs.dev/api/operators/retryWhen)

### Utility Operators

- [`tap`](https://rxjs.dev/api/operators/tap)
- [`delay`](https://rxjs.dev/api/operators/delay)
- [`delayWhen`](https://rxjs.dev/api/operators/delayWhen)
- [`dematerialize`](https://rxjs.dev/api/operators/dematerialize)
- [`materialize`](https://rxjs.dev/api/operators/materialize)
- [`observeOn`](https://rxjs.dev/api/operators/observeOn)
- [`subscribeOn`](https://rxjs.dev/api/operators/subscribeOn)
- [`timeInterval`](https://rxjs.dev/api/operators/timeInterval)
- [`timestamp`](https://rxjs.dev/api/operators/timestamp)
- [`timeout`](https://rxjs.dev/api/operators/timeout)
- [`timeoutWith`](https://rxjs.dev/api/operators/timeoutWith)
- [`toArray`](https://rxjs.dev/api/operators/toArray)

### Conditional and Boolean Operators

- [`defaultIfEmpty`](https://rxjs.dev/api/operators/defaultIfEmpty)
- [`every`](https://rxjs.dev/api/operators/every)
- [`find`](https://rxjs.dev/api/operators/find)
- [`findIndex`](https://rxjs.dev/api/operators/findIndex)
- [`isEmpty`](https://rxjs.dev/api/operators/isEmpty)

### Mathematical and Aggregate Operators

- [`count`](https://rxjs.dev/api/operators/count)
- [`max`](https://rxjs.dev/api/operators/max)
- [`min`](https://rxjs.dev/api/operators/min)
- [`reduce`](https://rxjs.dev/api/operators/reduce)

## Creating custom operators

### Use the `pipe()` function to make new operators

If there is a commonly used sequence of operators in your code, use the `pipe()` function to extract the sequence into a new operator. Even if a sequence is not that common, breaking it out into a single operator can improve readability.

For example, you could make a function that discarded odd values and doubled even values like this:

```ts
import { pipe, filter, map } from 'rxjs';

function discardOddDoubleEven() {
  return pipe(
    filter((v) => !(v % 2)),
    map((v) => v + v)
  );
}
```

(The `pipe()` function is analogous to, but not the same thing as, the `.pipe()` method on an Observable.)

### Creating new operators from scratch

It is more complicated, but if you have to write an operator that cannot be made from a combination of existing operators (a rare occurrence), you can write an operator from scratch using the Observable constructor, like this:

```ts
import { Observable, of } from 'rxjs';

function delay<T>(delayInMillis: number) {
  return (observable: Observable<T>) =>
    new Observable<T>((subscriber) => {
      // this function will be called each time this
      // Observable is subscribed to.
      const allTimerIDs = new Set();
      let hasCompleted = false;
      const subscription = observable.subscribe({
        next(value) {
          // Start a timer to delay the next value
          // from being pushed.
          const timerID = setTimeout(() => {
            subscriber.next(value);
            // after we push the value, we need to clean up the timer timerID
            allTimerIDs.delete(timerID);
            // If the source has completed, and there are no more timers running,
            // we can complete the resulting observable.
            if (hasCompleted && allTimerIDs.size === 0) {
              subscriber.complete();
            }
          }, delayInMillis);

          allTimerIDs.add(timerID);
        },
        error(err) {
          // We need to make sure we're propagating our errors through.
          subscriber.error(err);
        },
        complete() {
          hasCompleted = true;
          // If we still have timers running, we don't want to complete yet.
          if (allTimerIDs.size === 0) {
            subscriber.complete();
          }
        },
      });

      // Return the finalization logic. This will be invoked when
      // the result errors, completes, or is unsubscribed.
      return () => {
        subscription.unsubscribe();
        // Clean up our timers.
        for (const timerID of allTimerIDs) {
          clearTimeout(timerID);
        }
      };
    });
}

// Try it out!
of(1, 2, 3).pipe(delay(1000)).subscribe(console.log);
```

Note that you must

1. implement all three Observer functions, `next()`, `error()`, and `complete()` when subscribing to the input Observable.
2. implement a "finalization" function that cleans up when the Observable completes (in this case by unsubscribing and clearing any pending timeouts).
3. return that finalization function from the function passed to the Observable constructor.

Of course, this is only an example; the [`delay()`](https://rxjs.dev/api/operators/delay) operator already exists.
