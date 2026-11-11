# Kitchen Rush

An NgRx game set in a restaurant kitchen, in three parts. Written for tohafifa.

| Part | Levels | What trainees do |
|---|---|---|
| 1 · Understand | 3 | Questions: who does what (with a table of the roles), the order things happen in, and the rules (no mutation, good action names, no API calls in reducers, selectors over filtering in components). |
| 2 · Write the code | 8 | Real NgRx code with tests: actions, dispatch with `inject(Store)`, reducers, update and remove without mutation, selectors and memoization, selector factories, an effect, `catchError`. |
| 3 · Think like the store | 3 | Questions: which flattening operator (switchMap, exhaustMap, concatMap, mergeMap), bugs in effects, and same-or-new references. |

## How to open

Open `index.html` in a browser. No server and no internet needed. Or:

```bash
cd angular/games
node serve.mjs kitchen-rush
```

Then go to http://localhost:4213.

## Good to know

- Show the [Store Visualizer](../store-visualizer/README.md) first.
- In the code levels, TypeScript generics (`props<{ id: string }>()`) and `private readonly` work. Type annotations on parameters don't: leave them out.
- In the question levels, a wrong answer shows only "try again". The explanation appears when the answer is right.
- Code and progress are saved in the browser (localStorage). **Reset code** brings back a level's starting code.
- It runs on a small NgRx and RxJS written for these pages (`shared/mini-ngrx.js`), with the same names and behavior as the real ones for what the levels use.
