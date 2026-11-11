---
title: "tap / do"
sidebar_position: 14
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [tap / do](https://www.learnrxjs.io/learn-rxjs/operators/utility/do) by Brian Troncone and contributors, Learn RxJS, licensed under [MIT](https://github.com/btroncone/learn-rxjs/blob/master/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

#### signature: `tap(nextOrObserver: function, error: function, complete: function): Observable`

## Transparently perform actions or side-effects, such as logging.

---

💡 If you are using and old version of RxJS, `tap` used to be known as `do`!

---

### Why use `tap`?

Think of `tap` as a surveillance camera in a shopping mall. It doesn't interfere with the shoppers (values) moving around but merely observes and records their actions. This operator is best for side effects: actions you want to take in response to values in an observable, without affecting the values themselves.

One of the superpowers of `tap` is its utility in debugging. **When things aren't going as planned with your observable**, instead of tearing apart your chain or inserting numerous logs, simply sprinkle in some `tap` operators. It's like adding checkpoints in a video game, helping you swiftly pinpoint issues without disrupting the main flow.

However, a word of caution: **remember that `tap` is solely for side effects**. If you find yourself tempted to modify data within a `tap`, it's generally best to resist. That's not its purpose, and you're better off with [`map`](./12-map.md) or other transformational operators in these cases.

Lastly, it's best to ensure that the side effects you introduce via `tap` are not critical to the main logic of your observable chain, keeping them non-intrusive and harmless.

### Examples

##### Example 1: Logging with tap

(
[StackBlitz](https://stackblitz.com/edit/typescript-cd2gjp?file=index.ts&devtoolsheight=100)
| [jsBin](http://jsbin.com/jimazuriva/1/edit?js,console) |
[jsFiddle](https://jsfiddle.net/btroncone/qtyakorq/) )

```js
// RxJS v6+
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example = source.pipe(
  tap(val => console.log(`BEFORE MAP: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subscribe = example.subscribe(val => console.log(val));
```

##### Example 2: Using tap with object

(
[StackBlitz](https://stackblitz.com/edit/typescript-3xykpb?file=index.ts&devtoolsheight=100))

```js
// RxJS v6+
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);

// tap also accepts an object map to log next, error, and complete
const example = source
  .pipe(
    map(val => val + 10),
    tap({
      next: val => {
        // on next 11, etc.
        console.log('on next', val);
      },
      error: error => {
        console.log('on error', error.message);
      },
      complete: () => console.log('on complete')
    })
  )
  // output: 11, 12, 13, 14, 15
  .subscribe(val => console.log(val));
```

### Related Recipes

- [Battleship Game](https://www.learnrxjs.io/learn-rxjs/recipes/battleship-game)
- [Breakout Game](https://www.learnrxjs.io/learn-rxjs/recipes/breakout-game)
- [Car Racing Game](https://www.learnrxjs.io/learn-rxjs/recipes/car-racing-game)
- [Catch The Dot Game](https://www.learnrxjs.io/learn-rxjs/recipes/catch-the-dot-game)
- [Click Ninja Game](https://www.learnrxjs.io/learn-rxjs/recipes/click-ninja-game)
- [Flappy Bird Game](https://www.learnrxjs.io/learn-rxjs/recipes/flappy-bird-game)
- [Horizontal Scroll Indicator](https://www.learnrxjs.io/learn-rxjs/recipes/horizontal-scroll-indicator)
- [Lockscreen](https://www.learnrxjs.io/learn-rxjs/recipes/lockscreen)
- [Memory Game](https://www.learnrxjs.io/learn-rxjs/recipes/memory-game)
- [Mine Sweeper Game](https://www.learnrxjs.io/learn-rxjs/recipes/mine-sweeper-game)
- [Platform Jumper Game](https://www.learnrxjs.io/learn-rxjs/recipes/platform-jumper-game)
- [Save Indicator](https://www.learnrxjs.io/learn-rxjs/recipes/save-indicator)
- [Space Invaders Game](https://www.learnrxjs.io/learn-rxjs/https://raw.githubusercontent.com/recipes/space-invaders-game)
- [Stop Watch](https://www.learnrxjs.io/learn-rxjs/recipes/stop-watch)
- [Swipe To Refresh](https://www.learnrxjs.io/learn-rxjs/https://raw.githubusercontent.com/recipes/swipe-to-refresh)
- [Tank Battle Game](https://www.learnrxjs.io/learn-rxjs/recipes/tank-battle-game)
- [Tetris Game](https://www.learnrxjs.io/learn-rxjs/recipes/tetris-game)
- [Type Ahead](https://www.learnrxjs.io/learn-rxjs/recipes/type-ahead)
- [Uncover Image Game](https://www.learnrxjs.io/learn-rxjs/recipes/uncover-image-game)

### Additional Resources

- [tap](https://rxjs.dev/api/operators/tap) 📰 - Official docs
- [Logging a stream with do](https://egghead.io/lessons/rxjs-logging-a-stream-with-do?course=step-by-step-async-javascript-with-rxjs)
  🎥 💵 - John Linquist
- [Utility operator: do](https://egghead.io/lessons/rxjs-utility-operator-do?course=rxjs-beyond-the-basics-operators-in-depth)
  🎥 💵 - André Staltz

---

> 📁 Source Code:
> [https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/tap.ts](https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/tap.ts)
