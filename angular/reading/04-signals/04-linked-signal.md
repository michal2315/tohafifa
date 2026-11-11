---
title: "Dependent state with linkedSignal"
sidebar_position: 4
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Dependent state with linkedSignal](https://v20.angular.dev/guide/signals/linked-signal) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

You can use the [`signal`](https://v20.angular.dev/api/core/signal) function to hold some state in your Angular code. Sometimes, this state depends on some *other* state. For example, imagine a component that lets the user select a shipping method for an order:

```ts
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();

  // Select the first shipping option by default.
  selectedOption = signal(this.shippingOptions()[0]);

  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }
}
```

In this example, the `selectedOption` defaults to the first option, but changes if the user selects another option. But `shippingOptions` is a signal— its value may change! If `shippingOptions` changes, `selectedOption` may contain a value that is no longer a valid option.

**The [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) function lets you create a signal to hold some state that is intrinsically *linked* to some other state.** Revisiting the example above, [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) can replace [`signal`](https://v20.angular.dev/api/core/signal):

```ts
@Component({/* ... */})
export class ShippingMethodPicker {
  shippingOptions: Signal<ShippingMethod[]> = getShippingOptions();

  // Initialize selectedOption to the first shipping option.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }
}
```

[`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) works similarly to [`signal`](https://v20.angular.dev/api/core/signal) with one key difference— instead of passing a default value, you pass a *computation function*, just like [`computed`](https://v20.angular.dev/api/core/computed). When the value of the computation changes, the value of the [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) changes to the computation result. This helps ensure that the [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) always has a valid value.

The following example shows how the value of a [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) can change based on its linked state:

```ts
const shippingOptions = signal(['Ground', 'Air', 'Sea']);
const selectedOption = linkedSignal(() => shippingOptions()[0]);
console.log(selectedOption()); // 'Ground'

selectedOption.set(shippingOptions()[2]);
console.log(selectedOption()); // 'Sea'

shippingOptions.set(['Email', 'Will Call', 'Postal service']);
console.log(selectedOption()); // 'Email'
```

## Accounting for previous state

In some cases, the computation for a [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) needs to account for the previous value of the [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal).

In the example above, `selectedOption` always updates back to the first option when `shippingOptions` changes. You may, however, want to preserve the user's selection if their selected option is still somewhere in the list. To accomplish this, you can create a [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) with a separate *source* and *computation*:

```ts
interface ShippingMethod {
  id: number;
  name: string;
}

@Component({/* ... */})
export class ShippingMethodPicker {
  constructor() {
    this.changeShipping(2);
    this.changeShippingOptions();
    console.log(this.selectedOption()); // {"id":2,"name":"Postal Service"}
  }

  shippingOptions = signal<ShippingMethod[]>([
    { id: 0, name: 'Ground' },
    { id: 1, name: 'Air' },
    { id: 2, name: 'Sea' },
  ]);

  selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
    // `selectedOption` is set to the `computation` result whenever this `source` changes.
    source: this.shippingOptions,
    computation: (newOptions, previous) => {
      // If the newOptions contain the previously selected option, preserve that selection.
      // Otherwise, default to the first option.
      return (
        newOptions.find((opt) => opt.id === previous?.value.id) ?? newOptions[0]
      );
    },
  });

  changeShipping(index: number) {
    this.selectedOption.set(this.shippingOptions()[index]);
  }

  changeShippingOptions() {
    this.shippingOptions.set([
      { id: 0, name: 'Email' },
      { id: 1, name: 'Sea' },
      { id: 2, name: 'Postal Service' },
    ]);
  }
}
```

When you create a [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal), you can pass an object with separate `source` and `computation` properties instead of providing just a computation.

The `source` can be any signal, such as a [`computed`](https://v20.angular.dev/api/core/computed) or component [`input`](https://v20.angular.dev/api/core/input). When the value of `source` changes, [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) updates its value to the result of the provided `computation`.

The `computation` is a function that receives the new value of `source` and a `previous` object. The `previous` object has two properties— `previous.source` is the previous value of `source`, and `previous.value` is the previous value of the [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal). You can use these previous values to decide the new result of the computation.

:::tip

When using the `previous` parameter, it is necessary to provide the generic type arguments of [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) explicitly. The first generic type corresponds with the type of `source` and the second generic type determines the output type of `computation`.

:::

## Custom equality comparison

[`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal), as any other signal, can be configured with a custom equality function. This function is used by downstream dependencies to determine if that value of the [`linkedSignal`](https://v20.angular.dev/api/core/linkedSignal) (result of a computation) changed:

```ts
const activeUser = signal({id: 123, name: 'Morgan', isAdmin: true});

const activeUserEditCopy = linkedSignal(() => activeUser(), {
  // Consider the user as the same if it's the same `id`.
  equal: (a, b) => a.id === b.id,
});

// Or, if separating `source` and `computation`
const activeUserEditCopy = linkedSignal({
  source: activeUser,
  computation: user => user,
  equal: (a, b) => a.id === b.id,
});
```
