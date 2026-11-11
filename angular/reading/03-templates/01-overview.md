---
title: "Template syntax"
sidebar_position: 1
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Template syntax](https://v20.angular.dev/guide/templates) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

Check out Angular's [Essentials](../01-essentials/03-templates.md) before diving into this comprehensive guide.

:::

Every Angular component has a **template** that defines the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) that the component renders onto the page. By using templates, Angular is able to automatically keep your page up-to-date as data changes.

Templates are usually found within either the `template` property of a `*.component.ts` file or the `*.component.html` file. To learn more, check out the [in-depth components guide](../02-components/01-anatomy-of-components.md).

## How do templates work?

Templates are based on [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) syntax, with additional features such as built-in template functions, data binding, event listening, variables, and more.

Angular compiles templates into JavaScript in order to build up an internal understanding of your application. One of the benefits of this are built-in rendering optimizations that Angular applies to your application automatically.

### Differences from standard HTML

Some differences between templates and standard HTML syntax include:

- Comments in the template source code are not included in the rendered output
- Component and directive elements can be self-closed (e.g., `<UserProfile />`)
- Attributes with certain characters (i.e., `[]`, `()`, etc.) have special meaning to Angular. See [binding docs](./02-binding.md) and [adding event listeners docs](./03-event-listeners.md) for more information.
- The `@` character has a special meaning to Angular for adding dynamic behavior, such as [control flow](./05-control-flow.md), to templates. You can include a literal `@` character by escaping it as an HTML entity code (`&commat;` or `&#64;`).
- Angular ignores and collapses unnecessary whitespace characters. See [whitespace in templates](https://v20.angular.dev/guide/templates/whitespace) for more details.
- Angular may add comment nodes to a page as placeholders for dynamic content, but developers can ignore these.

In addition, while most HTML syntax is valid template syntax, Angular does not support `<script>` element in templates. For more information, see the [Security](https://v20.angular.dev/best-practices/security) page.

## What's next?

You might also be interested in the following:

| Topics | Details |
| :-- | :-- |
| [Binding dynamic text, properties, and attributes](./02-binding.md) | Bind dynamic data to text, properties and attributes. |
| [Adding event listeners](./03-event-listeners.md) | Respond to events in your templates. |
| [Two-way binding](./04-two-way-binding.md) | Simultaneously binds a value and propagate changes. |
| [Control flow](./05-control-flow.md) | Conditionally show, hide and repeat elements. |
| [Pipes](./06-pipes.md) | Transform data declaratively. |
| [Slotting child content with ng-content](https://v20.angular.dev/guide/templates/ng-content) | Control how components render content. |
| [Create template fragments with ng-template](./08-ng-template.md) | Declare a template fragment. |
| [Grouping elements with ng-container](./09-ng-container.md) | Group multiple elements together or mark a location for rendering. |
| [Variables in templates](./07-variables.md) | Learn about variable declarations. |
| [Deferred loading with @defer](./10-defer.md) | Create deferrable views with `@defer`. |
| [Expression syntax](https://v20.angular.dev/guide/templates/expression-syntax) | Learn similarities and differences between Angular expressions and standard JavaScript. |
| [Whitespace in templates](https://v20.angular.dev/guide/templates/whitespace) | Learn how Angular handles whitespace. |
