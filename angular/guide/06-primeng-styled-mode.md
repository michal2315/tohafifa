---
title: "PrimeNG in styled mode"
sidebar_position: 6
mdx:
  format: md
tags: [guide, required]
---

**Required reading.** Week 3, before you replace your own buttons and avatars with PrimeNG.

PrimeNG gives you ready-made components: buttons, avatars, dialogs, menus. In **styled mode** each component comes with its own look, taken from a theme. Your job is to make that look match the Instagram design without fighting the library.

Everything on this page is checked against PrimeNG 20.4. The full docs are offline: `cd documentation && node serve.mjs primeng`, then open http://localhost:4204/theming.

## How a theme works

A theme has two parts:

- **The base**: PrimeNG's CSS rules. They use CSS variables instead of fixed values, for example `background: var(--p-button-primary-background)`.
- **The preset**: the values for those variables, called **design tokens**. PrimeNG ships four presets: Aura, Material, Lara and Nora. We use Aura.

Tokens come in three tiers. Each tier points to the one below it:

| Tier | Example | What it means |
|---|---|---|
| Primitive | `blue.500` | A color from the palette. No meaning on its own. |
| Semantic | `primary.color` | A role in the design. Points to a primitive: `primary.color` → `emerald.500`. |
| Component | `button.primary.background` | One part of one component. Points to a semantic token. |

Every token becomes a CSS variable with the `--p-` prefix: `button.primary.background` is `--p-button-primary-background`. That's the key to everything below.

## Setup

```bash
npm install primeng @primeuix/themes primeicons
```

```ts
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { AppPreset } from './app-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
```

In `styles.scss`, for the `pi pi-*` icons:

```scss
@import "primeicons/primeicons.css";
```

Import each component in the component that uses it, like any standalone component: `imports: [ButtonModule]` from `primeng/button`, then `<p-button label="Follow" />`.

> **Why `darkModeSelector: false`?** By default PrimeNG switches to its dark colors when the user's operating system is in dark mode. Our design has no dark mode, so on a laptop set to dark, the PrimeNG parts of the page would turn dark and the rest wouldn't. Turning it off keeps one look. If you build a dark mode later, set it to a class such as `'.app-dark'` and toggle that class on `<html>`.

## The problem: your SCSS can't reach inside

Remember the rule from the components reading: with Angular's default view encapsulation, a component's styles apply only to elements in **its own template**.

```html
<div class="profile-actions">
  <p-button class="follow-button" label="Follow" />
</div>
```

The `<p-button>` element is in your template. The real `<button>` is inside PrimeNG's template, so your SCSS can't select it:

```scss
:host {
  .follow-button {
    .p-button {
      border-radius: 8px;
    }
  }
}
```

This does nothing. You may find answers online that fix it with `::ng-deep`. Don't: the Angular docs strongly discourage it and keep it only for backwards compatibility. It turns your rule into a global style that leaks into every component on the page.

Use one of the ways below instead. They go from global to local. Pick the first one that does the job.

## 1. The app preset: the whole app at once

Most of the design belongs here: the main color, the rounding, the focus ring. Create your own preset from Aura with `definePreset`, and only list what changes.

```ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#0095f6',
          hoverColor: '#1877f2',
          activeColor: '#1877f2',
        },
      },
      dark: {
        primary: {
          color: '#0095f6',
          hoverColor: '#1877f2',
          activeColor: '#1877f2',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '8px',
      },
    },
  },
});
```

Values in braces, like `'{blue.500}'`, point to another token. Plain values like `'#0095f6'` are used as they are.

> **The common pitfall: an override that does nothing.** If Aura defines a token per color scheme (under `colorScheme.light` and `colorScheme.dark`), your override must use the same structure. A plain value is ignored, because the color-scheme value wins. That's why `primary.color` above sits under `colorScheme`, while the `primary` palette doesn't. When an override doesn't apply, look up how Aura defines that token. The source of every preset is in `node_modules/@primeuix/themes`.

## 2. Scoped tokens: one instance

When one component on one page looks different, pass tokens to that instance with the `dt` input. Only this instance changes.

```ts
@Component({
  selector: 'app-story-avatar',
  imports: [AvatarModule],
  templateUrl: './story-avatar.component.html',
  styleUrl: './story-avatar.component.scss',
})
export class StoryAvatarComponent {
  readonly imageUrl = input.required<string>();

  readonly storyAvatarTokens = {
    root: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
    },
  };
}
```

```html
<p-avatar [image]="imageUrl()" [dt]="storyAvatarTokens" />
```

The keys are the component's tokens without the component name: `avatar.root.width` becomes `root.width`. Each component's docs page lists its tokens under the **Theming** tab.

## 3. CSS variables: from your own SCSS

CSS variables are inherited, and encapsulation doesn't stop that. Set a PrimeNG variable on an element in **your** template, and the PrimeNG component inside picks it up.

```html
<div class="profile-actions">
  <p-button class="follow-button" label="Follow" />
  <p-button class="message-button" label="Message" severity="secondary" />
</div>
```

```scss
:host {
  .profile-actions {
    display: flex;
    gap: 8px;
  }

  .follow-button {
    --p-button-primary-background: #0095f6;
    --p-button-primary-border-color: #0095f6;
    --p-button-primary-hover-background: #1877f2;
    --p-button-primary-hover-border-color: #1877f2;
  }
}
```

This stays in the component's SCSS file, follows our conventions, and needs no TypeScript. To find a variable's name, inspect the element in DevTools: the **Styles** panel shows which `var(--p-…)` each property uses.

Use the preset for the design as a whole, `dt` or variables for one place. Variables are the most comfortable choice when you're already writing SCSS for that component anyway.

## 4. The host element: layout

The PrimeNG element itself, like `<p-button>` or `<p-avatar>`, **is** in your template, so your SCSS reaches it. Use that for layout: margins, width, `flex`, and position in a grid. Leave colors and inner spacing to tokens.

```html
<form class="comment-form" [formGroup]="commentForm" (ngSubmit)="submit()">
  <input class="comment-input" pInputText formControlName="text" />
  <p-button class="post-button" type="submit" label="Post" [text]="true" />
</form>
```

```scss
:host {
  .comment-form {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .comment-input {
    flex: 1;
  }

  .post-button {
    flex-shrink: 0;
  }
}
```

Some components put PrimeNG's own class on the host. `<p-avatar>` does: its host is `.p-avatar`. Others, like `<p-button>`, render an inner element. Check in DevTools before you style the host.

## 5. PassThrough: attributes on inner elements

The `pt` input lets you put attributes on a component's inner elements: `aria-*`, `data-*`, `id`, event listeners, and classes.

```html
<p-button label="Follow" [pt]="{ root: { 'aria-label': 'Follow ' + username() } }" />
```

Use it for attributes, not for styling. A class you add with `pt` lands on PrimeNG's element, which isn't in your template, so the rules for it in your component's SCSS won't match. They would have to be global styles, and we keep styles in the component.

## Quick decision table

| You want to… | Use |
|---|---|
| Change the main color, the rounding or the focus ring everywhere | The app preset (1) |
| Make one instance look different | `[dt]` (2), or CSS variables in your SCSS (3) |
| Place or size a PrimeNG component | Classes on the host element (4) |
| Add `aria-*`, `data-*` or an `id` inside a component | `pt` (5) |
| Use `::ng-deep` | Never. Use one of the above. |

## Read more, offline

On http://localhost:4204:

- `/theming`: tokens, presets, `definePreset`, scoped tokens, dark mode
- `/passthrough`: the `pt` API
- Each component's page, **Theming** tab: the list of its tokens
