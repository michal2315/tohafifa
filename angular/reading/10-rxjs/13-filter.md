---
title: "filter"
sidebar_position: 13
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [filter](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter) by Brian Troncone and contributors, Learn RxJS, licensed under [MIT](https://github.com/btroncone/learn-rxjs/blob/master/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

#### signature: `filter(select: Function, thisArg: any): Observable`

## Emit values that pass the provided condition.

---

💡 If you would like to complete an observable when a condition fails, check out
[takeWhile](https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile)!

---

### Why use `filter`?

This operator is your go-to when you need to sift out unwanted values from an observable stream. Think of it as a fisherman's net, catching only the types of fish you desire while allowing others to slip through.

**The critical point to remember** is that `filter` will only emit values that meet the specified condition. If no values in the observable satisfy the condition, nothing gets emitted. It's a strict bouncer at a club's entrance, only letting in those who fit the criteria.

Also, for scenarios where you not only want to filter values but also transform them, [`map`](./12-map.md) is an ideal companion to `filter`. Use them in tandem to both shape and refine your data streams.

### Examples

##### Example 1: filter for even numbers

(
[StackBlitz](https://stackblitz.com/edit/typescript-4g4cys?file=index.ts&devtoolsheight=100)
| [jsBin](http://jsbin.com/vafogoluye/1/edit?js,console) |
[jsFiddle](https://jsfiddle.net/btroncone/tkz0fuy2/) )

```js
// RxJS v6+
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//filter out non-even numbers
const example = source.pipe(filter(num => num % 2 === 0));
//output: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));
```

##### Example 2: filter objects based on property

(
[StackBlitz](https://stackblitz.com/edit/typescript-n73fsn?file=index.ts&devtoolsheight=100)
| [jsBin](http://jsbin.com/qihagaxuso/1/edit?js,console) |
[jsFiddle](https://jsfiddle.net/btroncone/yjdsoug1/) )

```js
// RxJS v6+
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([
  { name: 'Joe', age: 31 },
  { name: 'Bob', age: 25 }
]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));
```

##### Example 3: filter for number greater than specified value

(
[StackBlitz](https://stackblitz.com/edit/typescript-eyvvfu?file=index.ts&devtoolsheight=100)
| [jsBin](http://jsbin.com/rakabaheyu/1/edit?js,console) |
[jsFiddle](https://jsfiddle.net/btroncone/g1tgreha/) )

```js
// RxJS v6+
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit every second
const source = interval(1000);
//filter out all values until interval is greater than 5
const example = source.pipe(filter(num => num > 5));
/*
  "Number greater than 5: 6"
  "Number greater than 5: 7"
  "Number greater than 5: 8"
  "Number greater than 5: 9"
*/
const subscribe = example.subscribe(val =>
  console.log(`Number greater than 5: ${val}`)
);
```

### Related Recipes

- [Battleship Game](https://www.learnrxjs.io/learn-rxjs/recipes/battleship-game)
- [HTTP Polling](https://www.learnrxjs.io/learn-rxjs/recipes/http-polling)
- [Game Loop](https://www.learnrxjs.io/learn-rxjs/recipes/gameloop)
- [Lockscreen](https://www.learnrxjs.io/learn-rxjs/recipes/lockscreen)
- [Mine Sweeper Game](https://www.learnrxjs.io/learn-rxjs/recipes/mine-sweeper-game)
- [Save Indicator](https://www.learnrxjs.io/learn-rxjs/recipes/save-indicator)

### Additional Resources

- [filter](https://rxjs.dev/api/operators/filter) 📰 - Official docs
- [Adding conditional logic with filter](https://egghead.io/lessons/rxjs-adding-conditional-logic-with-filter?course=step-by-step-async-javascript-with-rxjs)
  🎥 💵 - John Linquist
- [Filtering operator: filter](https://egghead.io/lessons/rxjs-filtering-operator-filter?course=rxjs-beyond-the-basics-operators-in-depth)
  🎥 💵 - André Staltz

---

> 📁 Source Code:
> [https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/filter.ts](https://github.com/ReactiveX/rxjs/blob/master/packages/rxjs/src/internal/operators/filter.ts)
