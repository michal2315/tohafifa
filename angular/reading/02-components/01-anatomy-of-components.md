---
title: "Anatomy of a component"
sidebar_position: 1
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Anatomy of a component](https://v20.angular.dev/guide/components) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

This guide assumes you've already read the [Essentials Guide](../01-essentials/01-overview.md). Read that first if you're new to Angular.

:::

Every component must have:

- A TypeScript class with *behaviors* such as handling user input and fetching data from a server
- An HTML template that controls what renders into the DOM
- A [CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors) that defines how the component is used in HTML

You provide Angular-specific information for a component by adding a [`@Component`](https://v20.angular.dev/api/core/Component) [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) on top of the TypeScript class:

```ts
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto { }
```

For full details on writing Angular templates, including data binding, event handling, and control flow, see the [Templates guide](../03-templates/01-overview.md).

The object passed to the [`@Component`](https://v20.angular.dev/api/core/Component) decorator is called the component's **metadata**. This includes the `selector`, `template`, and other properties described throughout this guide.

Components can optionally include a list of CSS styles that apply to that component's DOM:

```ts
@Component({
  selector: 'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
  styles: `img { border-radius: 50%; }`,
})
export class ProfilePhoto { }
```

By default, a component's styles only affect elements defined in that component's template. See [Styling Components](./03-styling.md) for details on Angular's approach to styling.

You can alternatively choose to write your template and styles in separate files:

```ts
@Component({
  selector: 'profile-photo',
  templateUrl: 'profile-photo.html',
  styleUrl: 'profile-photo.css',
})
export class ProfilePhoto { }
```

This can help separate the concerns of *presentation* from *behavior* in your project. You can choose one approach for your entire project, or you decide which to use for each component.

Both `templateUrl` and `styleUrl` are relative to the directory in which the component resides.

## Using components

### Imports in the `@Component` decorator

To use a component, [directive](https://v20.angular.dev/guide/directives), or [pipe](../03-templates/06-pipes.md), you must add it to the `imports` array in the [`@Component`](https://v20.angular.dev/api/core/Component) decorator:

```ts
import {ProfilePhoto} from './profile-photo';

@Component({
  // Import the `ProfilePhoto` component in
  // order to use it in this component's template.
  imports: [ProfilePhoto],
  /* ... */
})
export class UserProfile { }
```

By default, Angular components are *standalone*, meaning that you can directly add them to the `imports` array of other components. Components created with an earlier version of Angular may instead specify `standalone: false` in their [`@Component`](https://v20.angular.dev/api/core/Component) decorator. For these components, you instead import the [`NgModule`](https://v20.angular.dev/api/core/NgModule) in which the component is defined. See the full [](https://v20.angular.dev/guide/ngmodules)[`NgModule`](https://v20.angular.dev/api/core/NgModule) guide for details.

Important: In Angular versions before 19.0.0, the `standalone` option defaults to `false`.

### Showing components in a template

Every component defines a [CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors):

```ts
@Component({
  selector: 'profile-photo',
  ...
})
export class ProfilePhoto { }
```

See [Component Selectors](./02-selectors.md) for details about which types of selectors Angular supports and guidance on choosing a selector.

You show a component by creating a matching HTML element in the template of *other* components:

```ts
@Component({
  selector: 'profile-photo',
})
export class ProfilePhoto { }

@Component({
imports: [ProfilePhoto],
template: `<profile-photo />`
})
export class UserProfile { }
```

Angular creates an instance of the component for every matching HTML element it encounters. The DOM element that matches a component's selector is referred to as that component's **host element**. The contents of a component's template are rendered inside its host element.

The DOM rendered by a component, corresponding to that component's template, is called that component's **view**.

In composing components in this way, **you can think of your Angular application as a tree of components**.

![Diagram](./img/01-anatomy-of-components/diagram-1.svg)

This tree structure is important to understanding several other Angular concepts, including [dependency injection](../05-services-and-di/01-di-overview.md) and [child queries](./09-queries.md).
