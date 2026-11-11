---
title: "Components"
sidebar_position: 2
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Components](https://v20.angular.dev/essentials/components) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Components are the main building blocks of Angular applications. Each component represents a part of a larger web page. Organizing an application into components helps provide structure to your project, clearly separating code into specific parts that are easy to maintain and grow over time.

## Defining a component

Every component has a few main parts:

1. A [`@Component`](https://v20.angular.dev/api/core/Component)[decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) that contains some configuration used by Angular.
2. An HTML template that controls what renders into the DOM.
3. A [CSS selector](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors) that defines how the component is used in HTML.
4. A TypeScript class with behaviors, such as handling user input or making requests to a server.

Here is a simplified example of a `UserProfile` component.

```ts
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})
export class UserProfile { /* Your component code goes here */ }
```

The [`@Component`](https://v20.angular.dev/api/core/Component) decorator also optionally accepts a `styles` property for any CSS you want to apply to your template:

```ts
// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfile { /* Your component code goes here */ }
```

### Separating HTML and CSS into separate files

You can define a component's HTML and CSS in separate files using `templateUrl` and `styleUrl`:

```ts
// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}
```

```html
<!-- user-profile.html -->
<h1>User profile</h1>
<p>This is the user profile page</p>
```

```css
/* user-profile.css */
h1 {
  font-size: 3em;
}
```

## Using components

You build an application by composing multiple components together. For example, if you are building a user profile page, you might break the page up into several components like this:

![Diagram](./img/02-components/diagram-1.svg)

Here, the `UserProfile` component uses several other components to produce the final page.

To import and use a component, you need to:

1. In your component's TypeScript file, add an `import` statement for the component you want to use.
2. In your [`@Component`](https://v20.angular.dev/api/core/Component) decorator, add an entry to the `imports` array for the component you want to use.
3. In your component's template, add an element that matches the selector of the component you want to use.

Here's an example of a `UserProfile` component importing a `ProfilePhoto` component:

```ts
// user-profile.ts
import {ProfilePhoto} from 'profile-photo.ts';

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  // Component behavior is defined in here
}
```

:::tip

Want to know more about Angular components? See the [In-depth Components guide](../02-components/01-anatomy-of-components.md) for the full details.

:::

## Next Step

Now that you know how components work in Angular, it's time to learn how we add and manage dynamic data in our application.

**Read next:**

- [Reactivity with signals](./04-signals.md)
- [In-depth components guide](../02-components/01-anatomy-of-components.md)
