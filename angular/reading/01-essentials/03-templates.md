---
title: "Templates"
sidebar_position: 3
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Templates](https://v20.angular.dev/essentials/templates) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Component templates aren't just static HTML— they can use data from your component class and set up handlers for user interaction.

## Showing dynamic text

In Angular, a *binding* creates a dynamic connection between a component's template and its data. This connection ensures that changes to the component's data automatically update the rendered template.

You can create a binding to show some dynamic text in a template by using double curly-braces:

```ts
@Component({
  selector: 'user-profile',
  template: `<h1>Profile for {{userName()}}</h1>`,
})
export class UserProfile {
  userName = signal('pro_programmer_123');
}
```

When Angular renders the component, you see:

```html
<h1>Profile for pro_programmer_123</h1>
```

Angular automatically keeps the binding up-to-date when the value of the signal changes. Building on the example above, if we update the value of the `userName` signal:

```ts
this.userName.set('cool_coder_789');
```

The rendered page updates to reflect the new value:

```html
<h1>Profile for cool_coder_789</h1>
```

## Setting dynamic properties and attributes

Angular supports binding dynamic values into DOM properties with square brackets:

```ts
@Component({
  /*...*/
  // Set the `disabled` property of the button based on the value of `isValidUserId`.
  template: `<button [disabled]="!isValidUserId()">Save changes</button>`,
})
export class UserProfile {
  isValidUserId = signal(false);
}
```

You can also bind to HTML *attributes* by prefixing the attribute name with `attr.`:

```html
<!-- Bind the `role` attribute on the `<ul>` element to value of `listRole`. -->
<ul [attr.role]="listRole()">
```

Angular automatically updates DOM properties and attributes when the bound value changes.

## Handling user interaction

Angular lets you add event listeners to an element in your template with parentheses:

```ts
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method.
  template: `<button (click)="cancelSubscription()">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */

  cancelSubscription() { /* Your event handling code goes here. */  }
}
```

If you need to pass the [event](https://developer.mozilla.org/docs/Web/API/Event) object to your listener, you can use Angular's built-in `$event` variable inside the function call:

```ts
@Component({
  /*...*/
  // Add an 'click' event handler that calls the `cancelSubscription` method.
  template: `<button (click)="cancelSubscription($event)">Cancel subscription</button>`,
})
export class UserProfile {
  /* ... */

  cancelSubscription(event: Event) { /* Your event handling code goes here. */  }
}
```

## Control flow with `@if` and `@for`

You can conditionally hide and show parts of a template with Angular's `@if` block:

```html
<h1>User profile</h1>

@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
}
```

The `@if` block also supports an optional `@else` block:

```html
<h1>User profile</h1>

@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
} @else {
  <h2>User settings</h2>
  <!-- ... -->
}
```

You can repeat part of a template multiple times with Angular's `@for` block:

```html
<h1>User profile</h1>

<ul class="user-badge-list">
  @for (badge of badges(); track badge.id) {
    <li class="user-badge">{{badge.name}}</li>
  }
</ul>
```

Angular's uses the `track` keyword, shown in the example above, to associate data with the DOM elements created by `@for`. See [*Why is track in @for blocks important?*](../03-templates/05-control-flow.md#why-is-track-in-for-blocks-important) for more info.

:::tip

Want to know more about Angular templates? See the [In-depth Templates guide](../03-templates/01-overview.md) for the full details.

:::

## Next Step

Now that you have dynamic data and templates in the application, it's time to learn how to enhance templates by conditionally hiding or showing certain elements, looping over elements, and more.

**Read next:**

- [Modular design with dependency injection](./05-dependency-injection.md)
- [In-depth template guide](../03-templates/01-overview.md)
