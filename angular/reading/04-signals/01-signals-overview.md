---
title: "Angular Signals"
sidebar_position: 1
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Angular Signals](https://v20.angular.dev/guide/signals) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

Check out Angular's [Essentials](../01-essentials/04-signals.md) before diving into this comprehensive guide.

:::

## What are signals?

A **signal** is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.

You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

Signals may be either *writable* or *read-only*.

### Writable signals

Writable signals provide an API for updating their values directly. You create writable signals by calling the [`signal`](https://v20.angular.dev/api/core/signal) function with the signal's initial value:

```ts
const count = signal(0);

// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```

To change the value of a writable signal, either `.set()` it directly:

```ts
count.set(3);
```

or use the `.update()` operation to compute a new value from the previous one:

```ts
// Increment the count by 1.
count.update(value => value + 1);
```

Writable signals have the type [`WritableSignal`](https://v20.angular.dev/api/core/WritableSignal).

### Computed signals

**Computed signal** are read-only signals that derive their value from other signals. You define computed signals using the [`computed`](https://v20.angular.dev/api/core/computed) function and specifying a derivation:

```ts
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

The `doubleCount` signal depends on the `count` signal. Whenever `count` updates, Angular knows that `doubleCount` needs to update as well.

#### Computed signals are both lazily evaluated and memoized

`doubleCount`'s derivation function does not run to calculate its value until the first time you read `doubleCount`. The calculated value is then cached, and if you read `doubleCount` again, it will return the cached value without recalculating.

If you then change `count`, Angular knows that `doubleCount`'s cached value is no longer valid, and the next time you read `doubleCount` its new value will be calculated.

As a result, you can safely perform computationally expensive derivations in computed signals, such as filtering arrays.

#### Computed signals are not writable signals

You cannot directly assign values to a computed signal. That is,

```ts
doubleCount.set(3);
```

produces a compilation error, because `doubleCount` is not a [`WritableSignal`](https://v20.angular.dev/api/core/WritableSignal).

#### Computed signal dependencies are dynamic

Only the signals actually read during the derivation are tracked. For example, in this [`computed`](https://v20.angular.dev/api/core/computed) the `count` signal is only read if the `showCount` signal is true:

```ts
const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
```

When you read `conditionalCount`, if `showCount` is `false` the "Nothing to see here!" message is returned *without* reading the `count` signal. This means that if you later update `count` it will *not* result in a recomputation of `conditionalCount`.

If you set `showCount` to `true` and then read `conditionalCount` again, the derivation will re-execute and take the branch where `showCount` is `true`, returning the message which shows the value of `count`. Changing `count` will then invalidate `conditionalCount`'s cached value.

Note that dependencies can be removed during a derivation as well as added. If you later set `showCount` back to `false`, then `count` will no longer be considered a dependency of `conditionalCount`.

## Reading signals in `OnPush` components

When you read a signal within an `OnPush` component's template, Angular tracks the signal as a dependency of that component. When the value of that signal changes, Angular automatically [marks](https://v20.angular.dev/api/core/ChangeDetectorRef#markforcheck) the component to ensure it gets updated the next time change detection runs. Refer to the [Skipping component subtrees](https://v20.angular.dev/best-practices/skipping-subtrees) guide for more information about `OnPush` components.

## Effects

Signals are useful because they notify interested consumers when they change. An **effect** is an operation that runs whenever one or more signal values change. You can create an effect with the [`effect`](https://v20.angular.dev/api/core/effect) function:

```ts
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

Effects always run **at least once.** When an effect runs, it tracks any signal value reads. Whenever any of these signal values change, the effect runs again. Similar to computed signals, effects keep track of their dependencies dynamically, and only track signals which were read in the most recent execution.

Effects always execute **asynchronously**, during the change detection process.

### Use cases for effects

Effects are rarely needed in most application code, but may be useful in specific circumstances. Here are some examples of situations where an [`effect`](https://v20.angular.dev/api/core/effect) might be a good solution:

- Logging data being displayed and when it changes, either for analytics or as a debugging tool.
- Keeping data in sync with `window.localStorage`.
- Adding custom DOM behavior that can't be expressed with template syntax.
- Performing custom rendering to a `<canvas>`, charting library, or other third party UI library.

:::danger[When not to use effects]

Avoid using effects for propagation of state changes. This can result in `ExpressionChangedAfterItHasBeenChecked` errors, infinite circular updates, or unnecessary change detection cycles.

Instead, use [`computed`](https://v20.angular.dev/api/core/computed) signals to model state that depends on other state.

:::

### Injection context

By default, you can only create an [`effect()`](https://v20.angular.dev/api/core/effect) within an [injection context](https://v20.angular.dev/guide/di/dependency-injection-context) (where you have access to the `inject` function). The easiest way to satisfy this requirement is to call [`effect`](https://v20.angular.dev/api/core/effect) within a component, directive, or service `constructor`:

```ts
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
  }
}
```

Alternatively, you can assign the effect to a field (which also gives it a descriptive name).

```ts
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);

  private loggingEffect = effect(() => {
    console.log(`The count is: ${this.count()}`);
  });
}
```

To create an effect outside the constructor, you can pass an [`Injector`](https://v20.angular.dev/api/core/Injector) to [`effect`](https://v20.angular.dev/api/core/effect) via its options:

```ts
@Component({...})
export class EffectiveCounterComponent {
  readonly count = signal(0);
  private injector = inject(Injector);

  initializeLogging(): void {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
    }, {injector: this.injector});
  }
}
```

### Destroying effects

When you create an effect, it is automatically destroyed when its enclosing context is destroyed. This means that effects created within components are destroyed when the component is destroyed. The same goes for effects within directives, services, etc.

Effects return an [`EffectRef`](https://v20.angular.dev/api/core/EffectRef) that you can use to destroy them manually, by calling the `.destroy()` method. You can combine this with the `manualCleanup` option to create an effect that lasts until it is manually destroyed. Be careful to actually clean up such effects when they're no longer required.

## Advanced topics

### Signal equality functions

When creating a signal, you can optionally provide an equality function, which will be used to check whether the new value is actually different than the previous one.

```ts
import _ from 'lodash';

const data = signal(['test'], {equal: _.isEqual});

// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(['test']);
```

Equality functions can be provided to both writable and computed signals.

:::tip

By default, signals use referential equality ([`Object.is()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison).

:::

### Reading without tracking dependencies

Rarely, you may want to execute code which may read signals within a reactive function such as [`computed`](https://v20.angular.dev/api/core/computed) or [`effect`](https://v20.angular.dev/api/core/effect) *without* creating a dependency.

For example, suppose that when `currentUser` changes, the value of a `counter` should be logged. You could create an [`effect`](https://v20.angular.dev/api/core/effect) which reads both signals:

```ts
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${counter()}`);
});
```

This example will log a message when *either* `currentUser` or `counter` changes. However, if the effect should only run when `currentUser` changes, then the read of `counter` is only incidental and changes to `counter` shouldn't log a new message.

You can prevent a signal read from being tracked by calling its getter with [`untracked`](https://v20.angular.dev/api/core/untracked):

```ts
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${untracked(counter)}`);
});
```

[`untracked`](https://v20.angular.dev/api/core/untracked) is also useful when an effect needs to invoke some external code which shouldn't be treated as a dependency:

```ts
effect(() => {
  const user = currentUser();
  untracked(() => {
    // If the `loggingService` reads signals, they won't be counted as
    // dependencies of this effect.
    this.loggingService.log(`User set to ${user}`);
  });
});
```

### Effect cleanup functions

Effects might start long-running operations, which you should cancel if the effect is destroyed or runs again before the first operation finished. When you create an effect, your function can optionally accept an `onCleanup` function as its first parameter. This `onCleanup` function lets you register a callback that is invoked before the next run of the effect begins, or when the effect is destroyed.

```ts
effect((onCleanup) => {
  const user = currentUser();

  const timer = setTimeout(() => {
    console.log(`1 second ago, the user became ${user}`);
  }, 1000);

  onCleanup(() => {
    clearTimeout(timer);
  });
});
```

## Using signals with RxJS

See [RxJS interop with Angular signals](./02-signals-interop.md) for details on interoperability between signals and RxJS.
