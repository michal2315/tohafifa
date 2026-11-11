---
title: "Component host elements"
sidebar_position: 7
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Component host elements](https://v20.angular.dev/guide/components/host-elements) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

This guide assumes you've already read the [Essentials Guide](../01-essentials/01-overview.md). Read that first if you're new to Angular.

:::

Angular creates an instance of a component for every HTML element that matches the component's selector. The DOM element that matches a component's selector is that component's **host element**. The contents of a component's template are rendered inside its host element.

```ts
// Component source
@Component({
  selector: 'profile-photo',
  template: `
    <img src="profile-photo.jpg" alt="Your profile photo" />
  `,
})
export class ProfilePhoto {}
```

```html
<!-- Using the component -->
<h3>Your profile photo</h3>
<profile-photo />
<button>Upload a new profile photo</button>
```

```html
<!-- Rendered DOM -->
<h3>Your profile photo</h3>
<profile-photo>
  <img src="profile-photo.jpg" alt="Your profile photo" />
</profile-photo>
<button>Upload a new profile photo</button>
```

In the above example, `<profile-photo>` is the host element of the `ProfilePhoto` component.

## Binding to the host element

A component can bind properties, attributes, styles and events to its host element. This behaves identically to bindings on elements inside the component's template, but instead defined with the `host` property in the [`@Component`](https://v20.angular.dev/api/core/Component) decorator:

```ts
@Component({
  ...,
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[style.background]' : `hasError() ? 'red' : 'green'`,
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class CustomSlider {
  value: number = 0;
  disabled: boolean = false;
  isActive = signal(false);
  hasError = signal(false);
  updateValue(event: KeyboardEvent) { /* ... */ }

  /* ... */
}
```

## The `@HostBinding` and `@HostListener` decorators

You can alternatively bind to the host element by applying the [`@HostBinding`](https://v20.angular.dev/api/core/HostBinding) and [`@HostListener`](https://v20.angular.dev/api/core/HostListener) decorator to class members.

[`@HostBinding`](https://v20.angular.dev/api/core/HostBinding) lets you bind host properties and attributes to properties and getters:

```ts
@Component({
  /* ... */
})
export class CustomSlider {
  @HostBinding('attr.aria-valuenow')
  value: number = 0;

  @HostBinding('tabIndex')
  get tabIndex() {
    return this.disabled ? -1 : 0;
  }

  /* ... */
}
```

[`@HostListener`](https://v20.angular.dev/api/core/HostListener) lets you bind event listeners to the host element. The decorator accepts an event name and an optional array of arguments:

```ts
export class CustomSlider {
  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    /* ... */
  }
}
```

:::danger[Prefer using the host property over the decorators]

**Always prefer using the `host` property over [`@HostBinding`](https://v20.angular.dev/api/core/HostBinding) and [`@HostListener`](https://v20.angular.dev/api/core/HostListener).** These decorators exist exclusively for backwards compatibility.

:::

## Binding collisions

When you use a component in a template, you can add bindings to that component instance's element. The component may *also* define host bindings for the same properties or attributes.

```ts
@Component({
  ...,
  host: {
    'role': 'presentation',
    '[id]': 'id',
  }
})
export class ProfilePhoto { /* ... */ }
```

```html
<profile-photo role="group" [id]="otherId" />
```

In cases like this, the following rules determine which value wins:

- If both values are static, the instance binding wins.
- If one value is static and the other dynamic, the dynamic value wins.
- If both values are dynamic, the component's host binding wins.

## Styling with CSS custom properties

Developers often rely on [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) to enable a flexible configuration of their component's styles. You can set such custom properties on a host element with a \[style binding\][style binding](../03-templates/02-binding.md#css-style-properties).

```ts
@Component({
  /* ... */
  host: {
    '[style.--my-background]': 'color()',
  }
})
export class MyComponent {
  color = signal('lightgreen');
}
```

In this example, the `--my-background` CSS custom property is bound to the `color` signal. The value of the custom property will automatically update whenever the `color` signal changes. This will affect the current component and all its children that rely on this custom property.

### Setting custom properties on children compoents

Alternatively, it is also possible to set css custom properties on the host element of children components with a [style binding](../03-templates/02-binding.md#css-style-properties).

```ts
@Component({
  selector: 'my-component',
  template: `<my-child [style.--my-background]="color()">`,
})
export class MyComponent {
  color = signal('lightgreen');
}
```

## Injecting host element attributes

Components and directives can read static attributes from their host element by using [`HostAttributeToken`](https://v20.angular.dev/api/core/HostAttributeToken) together with the [`inject`](https://v20.angular.dev/api/core/inject) function.

```ts
import { Component, HostAttributeToken, inject } from '@angular/core';

@Component({
  selector: 'app-button',
  ...,
})
export class Button {
  variation = inject(new HostAttributeToken('variation'));
}
```

```html
<app-button variation="primary">Click me</app-button>
```

:::tip

[`HostAttributeToken`](https://v20.angular.dev/api/core/HostAttributeToken) throws an error if the attribute is missing, unless the injection is marked as optional.

:::
