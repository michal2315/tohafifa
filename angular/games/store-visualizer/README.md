# Store Visualizer

The simplest picture of NgRx, set in a restaurant kitchen. Written for tohafifa.

One button: **Order 🍝**. The ticket goes waiter (component) → action → chef (reducer) → board (store) → screen (selector) → back to the table. Then the runner (effect) takes it to the kitchen (API) and comes back with a second action, `Order Ready`. **Clear table** shows a short trip that no effect listens for. Each step has one sentence, and the store state is on the right.

## How to open

Open `index.html` in a browser. No server and no internet needed. Or:

```bash
cd angular/games
node serve.mjs store-visualizer
```

Then go to http://localhost:4212.

## Good to know

- Use **Step by step** to teach it in front of the class: each step waits for **Next ▶**.
- Show it at the start of the NgRx module, before any code. Then trainees play [Kitchen Rush](../kitchen-rush/README.md).
- It runs on a small NgRx and RxJS written for these pages (`shared/mini-ngrx.js`).
