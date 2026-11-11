# RxJS playgrounds

Two interactive tools for seeing what RxJS operators do. Both work fully offline (tested with all internet access blocked).

| Tool | What trainees do | When |
|---|---|---|
| **RxMarbles** | Pick an operator and drag the marbles (values) along the input timelines. The output timeline updates live. | RxJS module, while reading about the basic operators: `map`, `filter`, `take`, `debounceTime`, `distinctUntilChanged`, `combineLatest`, `merge`, `scan`… |
| **RxViz** | Write real RxJS code, press ▶ and watch the result animate over time. Observables that emit observables are drawn as nested timelines. | RxJS module, when reaching `switchMap`, `mergeMap`, `concatMap` and `exhaustMap`, right before effects |

## How to open

**RxMarbles:** open `rxmarbles/index.html` in the browser. No server needed.

**RxViz** needs a small local server (Node.js only, no install):

```bash
cd angular/games
node serve.mjs rxviz
```

Then open the address it prints (http://localhost:4201).

## Good to know

- **RxMarbles is built on RxJS 5**, so the labels use the old chained syntax: `Observable.of(1)`, `obs1$.switchMap(...)`. What each operator does is the same in RxJS 7, where you'd write `of(1)` and `obs1$.pipe(switchMap(...))`.
- **RxViz runs RxJS 6.** Write code the way its examples do:

  ```js
  const { interval, of } = Rx;
  const { switchMap, take } = RxOperators;

  interval(1000).pipe(
    switchMap((n) => of(n * 10)),
    take(5)
  )
  ```

  The last expression is the observable it draws. The **Share** button and **Feedback** link need the internet and don't work offline.
- **Exercise idea for RxViz:** paste the same code four times, swapping `switchMap`, `mergeMap`, `concatMap` and `exhaustMap`. Have trainees explain the difference in the drawings, then say which one fits "load feed", "add comment" and "like a post".

## Sources and licenses

| Tool | Source | License |
|---|---|---|
| RxMarbles | [staltz/rxmarbles](https://github.com/staltz/rxmarbles), the built site from the `gh-pages` branch. Fonts and a stylesheet copied into `vendor/`, Google Analytics removed. | BSD 3-Clause, © 2014 André Staltz, see `rxmarbles/LICENSE` |
| RxViz | [moroshko/rxviz](https://github.com/moroshko/rxviz), recorded from the live site (rx-viz.vercel.app) on 2026-11-11. Fonts copied into `rxviz/_ext/`. | MIT, © Misha Moroshko, see `rxviz/LICENSE` |
