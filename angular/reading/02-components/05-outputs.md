---
title: "Custom events with outputs"
sidebar_position: 5
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Use the `output()` function, not the `@Output()` decorator.

:::info[Source]

Adapted from [Custom events with outputs](https://v20.angular.dev/guide/components/outputs) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

This guide assumes you've already read the [Essentials Guide](../01-essentials/01-overview.md). Read that first if you're new to Angular.

:::

Angular components can define custom events by assigning a property to the [`output`](https://v20.angular.dev/api/core/output) function:

```ts
@Component({/*...*/})
export class ExpandablePanel {
  panelClosed = output<void>();
}
```

```html
<expandable-panel (panelClosed)="savePanelState()" />
```

The [`output`](https://v20.angular.dev/api/core/output) function returns an [`OutputEmitterRef`](https://v20.angular.dev/api/core/OutputEmitterRef). You can emit an event by calling the `emit` method on the [`OutputEmitterRef`](https://v20.angular.dev/api/core/OutputEmitterRef):

```ts
  this.panelClosed.emit();
```

Angular refers to properties initialized with the [`output`](https://v20.angular.dev/api/core/output) function as **outputs**. You can use outputs to raise custom events, similar to native browser events like `click`.

**Angular custom events do not bubble up the DOM**.

**Output names are case-sensitive.**

When extending a component class, **outputs are inherited by the child class.**

The [`output`](https://v20.angular.dev/api/core/output) function has special meaning to the Angular compiler. **You can exclusively call [`output`](https://v20.angular.dev/api/core/output) in component and directive property initializers.**

## Emitting event data

You can pass event data when calling `emit`:

```ts
// You can emit primitive values.
this.valueChanged.emit(7);

// You can emit custom event objects
this.thumbDropped.emit({
  pointerX: 123,
  pointerY: 456,
})
```

When defining an event listener in a template, you can access the event data from the `$event` variable:

```html
<custom-slider (valueChanged)="logValue($event)" />
```

Receive the event data in the parent component:

```ts
@Component({
 /*...*/
})
export class App {
  logValue(value: number) {
    ...
  }
}
```

## Customizing output names

The [`output`](https://v20.angular.dev/api/core/output) function accepts a parameter that lets you specify a different name for the event in a template:

```ts
@Component({/*...*/})
export class CustomSlider {
  changed = output({alias: 'valueChanged'});
}
```

```html
<custom-slider (valueChanged)="saveVolume()" />
```

This alias does not affect usage of the property in TypeScript code.

While you should generally avoid aliasing outputs for components, this feature can be useful for renaming properties while preserving an alias for the original name or for avoiding collisions with the name of native DOM events.

## Subscribing to outputs programmatically

When creating a component dynamically, you can programmatically subscribe to output events from the component instance. The [`OutputRef`](https://v20.angular.dev/api/core/OutputRef) type includes a `subscribe` method:

```ts
const someComponentRef: ComponentRef<SomeComponent> = viewContainerRef.createComponent(/*...*/);

someComponentRef.instance.someEventProperty.subscribe(eventData => {
  console.log(eventData);
});
```

Angular automatically cleans up event subscriptions when it destroys components with subscribers. Alternatively, you can manually unsubscribe from an event. The `subscribe` function returns an [`OutputRefSubscription`](https://v20.angular.dev/api/core/OutputRefSubscription) with an `unsubscribe` method:

```ts
const eventSubscription = someComponent.someEventProperty.subscribe(eventData => {
  console.log(eventData);
});

// ...

eventSubscription.unsubscribe();
```

## Choosing event names

Avoid choosing output names that collide with events on DOM elements like HTMLElement. Name collisions introduce confusion about whether the bound property belongs to the component or the DOM element.

Avoid adding prefixes for component outputs like you would with component selectors. Since a given element can only host one component, any custom properties can be assumed to belong to the component.

Always use [camelCase](https://en.wikipedia.org/wiki/Camel_case) output names. Avoid prefixing output names with "on".

## Using outputs with RxJS

See [RxJS interop with component and directive outputs](https://v20.angular.dev/ecosystem/rxjs-interop/output-interop) for details on interoperability between outputs and RxJS.

## Declaring outputs with the `@Output` decorator

:::tip

While the Angular team recommends using the [`output`](https://v20.angular.dev/api/core/output) function for new projects, the original decorator-based [`@Output`](https://v20.angular.dev/api/core/Output) API remains fully supported.

:::

You can alternatively define custom events by assigning a property to a new [`EventEmitter`](https://v20.angular.dev/api/core/EventEmitter) and adding the [`@Output`](https://v20.angular.dev/api/core/Output) decorator:

```ts
@Component({/*...*/})
export class ExpandablePanel {
  @Output() panelClosed = new EventEmitter<void>();
}
```

You can emit an event by calling the `emit` method on the [`EventEmitter`](https://v20.angular.dev/api/core/EventEmitter).

### Aliases with the `@Output` decorator

The [`@Output`](https://v20.angular.dev/api/core/Output) decorator accepts a parameter that lets you specify a different name for the event in a template:

```ts
@Component({/*...*/})
export class CustomSlider {
  @Output('valueChanged') changed = new EventEmitter<number>();
}
```

```html
<custom-slider (valueChanged)="saveVolume()" />
```

This alias does not affect usage of the property in TypeScript code.

## Specify outputs in the `@Component` decorator

In addition to the [`@Output`](https://v20.angular.dev/api/core/Output) decorator, you can also specify a component's outputs with the `outputs` property in the [`@Component`](https://v20.angular.dev/api/core/Component) decorator. This can be useful when a component inherits a property from a base class:

```ts
// `CustomSlider` inherits the `valueChanged` property from `BaseSlider`.
@Component({
  /*...*/
  outputs: ['valueChanged'],
})
export class CustomSlider extends BaseSlider {}
```

You can additionally specify an output alias in the `outputs` list by putting the alias after a colon in the string:

```ts
// `CustomSlider` inherits the `valueChanged` property from `BaseSlider`.
@Component({
  /*...*/
  outputs: ['valueChanged: volumeChanged'],
})
export class CustomSlider extends BaseSlider {}
```
