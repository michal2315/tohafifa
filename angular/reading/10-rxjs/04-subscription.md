---
title: "Subscription"
sidebar_position: 4
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Subscription](https://rxjs.dev/guide/subscription) by the RxJS team and contributors, RxJS documentation (v7), licensed under [Apache 2.0](https://github.com/ReactiveX/rxjs/blob/7.x/LICENSE.txt). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

**What is a Subscription?** A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, `unsubscribe`, that takes no argument and just disposes the resource held by the subscription. In previous versions of RxJS, Subscription was called "Disposable".

```ts
import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```

*A Subscription essentially just has an `unsubscribe()` function to release resources or cancel Observable executions.*

Subscriptions can also be put together, so that a call to an `unsubscribe()` of one Subscription may unsubscribe multiple Subscriptions. You can do this by "adding" one subscription into another:

```ts
import { interval } from 'rxjs';

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
```

When executed, we see in the console:
```none
second: 0
first: 0
second: 1
first: 1
second: 2
```

Subscriptions also have a `remove(otherSubscription)` method, in order to undo the addition of a child Subscription.
