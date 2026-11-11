---
title: "Signals"
sidebar_position: 4
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Signals](https://v20.angular.dev/essentials/signals) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

In Angular, you use *signals* to create and manage state. A signal is a lightweight wrapper around a value.

Use the [`signal`](https://v20.angular.dev/api/core/signal) function to create a signal for holding local state:

```ts
import {signal} from '@angular/core';

// Create a signal with the `signal` function.
const firstName = signal('Morgan');

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update(name => name.toUpperCase());
```

Angular tracks where signals are read and when they're updated. The framework uses this information to do additional work, such as updating the DOM with new state. This ability to respond to changing signal values over time is known as *reactivity*.

## Computed expressions

A [`computed`](https://v20.angular.dev/api/core/computed) is a signal that produces its value based on other signals.

```ts
import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());

console.log(firstNameCapitalized()); // MORGAN
```

A [`computed`](https://v20.angular.dev/api/core/computed) signal is read-only; it does not have a `set` or an `update` method. Instead, the value of the [`computed`](https://v20.angular.dev/api/core/computed) signal automatically changes when any of the signals it reads change:

```ts
import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN

firstName.set('Jaime');
console.log(firstNameCapitalized()); // JAIME
```

## Using signals in components

Use [`signal`](https://v20.angular.dev/api/core/signal) and [`computed`](https://v20.angular.dev/api/core/computed) inside your components to create and manage state:

```ts
@Component({/* ... */})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
}
```

:::tip

Want to know more about Angular Signals? See the [In-depth Signals guide](../04-signals/01-signals-overview.md) for the full details.

:::

## Next Step

Now that you have learned how to declare and manage dynamic data, it's time to learn how to use that data inside of templates.

**Read next:**

- [Dynamic interfaces with templates](./03-templates.md)
- [In-depth signals guide](../04-signals/01-signals-overview.md)
