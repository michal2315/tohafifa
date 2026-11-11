---
title: "@ngrx/router-store"
sidebar_position: 9
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [@ngrx/router-store](https://v20.ngrx.io/guide/router-store) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Bindings to connect the Angular Router with [Store](../11-ngrx-store/02-store-overview.md). During each router navigation cycle, multiple [actions](https://v20.ngrx.io/guide/router-store/actions) are dispatched that allow you to listen for changes in the router's state. You can then select data from the state of the router to provide additional information to your application.

## Installation

Detailed installation instructions can be found on the [Installation](https://v20.ngrx.io/guide/router-store/install) page.

## Setup

**app.config.ts**

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import {
  provideRouterStore,
  routerReducer,
} from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      // routes
    ]),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
  ],
};
```

:::tip

An example of the `@ngrx/router-store` setup in module-based applications is available at the [following link](https://v17.ngrx.io/guide/router-store#setup).

:::
