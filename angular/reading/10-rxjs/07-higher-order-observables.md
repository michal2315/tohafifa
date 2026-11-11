---
title: "Higher-order Observables"
sidebar_position: 7
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Effects are higher-order observables: an action comes in, an API call (another observable) goes out. The next four pages are the four ways to flatten them.

:::info[Source]

Adapted from [Higher-order Observables](https://rxjs.dev/guide/higher-order-observables) by the RxJS team and contributors, RxJS documentation (v7), licensed under [Apache 2.0](https://github.com/ReactiveX/rxjs/blob/7.x/LICENSE.txt). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Observables most commonly emit ordinary values like strings and numbers, but surprisingly often, it is necessary to handle Observables *of* Observables, so-called higher-order Observables. For example, imagine you have an Observable emitting strings that are the URLs of files you want to fetch. The code might look like this:

```ts
const fileObservable = urlObservable.pipe(
   map(url => http.get(url)),
);
```

`http.get()` returns an Observable for each URL. Now you have an Observable *of* Observables, a higher-order Observable.

But how do you work with a higher-order Observable? Typically, by _flattening_: by converting a higher-order Observable into an ordinary Observable. For example:

```ts
const fileObservable = urlObservable.pipe(
   concatMap(url => http.get(url)),
);
```

The Observable returned in the `concatMap` function is usually referred to as a so-called "inner" Observable, while in this context the `urlObservable` is the so-called "outer" Observable.

The [`concatMap()`](https://rxjs.dev/api/operators/concatMap) operator subscribes to each "inner" Observable, buffers all further emissions of the "outer" Observable, and copies all the emitted values until the inner Observable completes, and continues processing the values of the "outer Observable". All of the values are in that way concatenated.  Other useful flattening operators are

* [`mergeMap()`](https://rxjs.dev/api/operators/mergeMap) — subscribes to each inner Observable as it arrives, then emits each value as it arrives
* [`switchMap()`](https://rxjs.dev/api/operators/switchMap) — subscribes to the first inner Observable when it arrives, and emits each value as it arrives, but when the next inner Observable arrives, unsubscribes to the previous one, and subscribes to the new one.
* [`exhaustMap()`](https://rxjs.dev/api/operators/exhaustMap) — subscribes to the first inner Observable when it arrives, and emits each value as it arrives, discarding all newly arriving inner Observables until that first one completes, then waits for the next inner Observable.
