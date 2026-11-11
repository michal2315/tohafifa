---
title: "@ngrx/store-devtools"
sidebar_position: 6
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Keep Redux DevTools open while you work. If you cannot explain an action in the log, something is wrong.

:::info[Source]

Adapted from [@ngrx/store-devtools](https://v20.ngrx.io/guide/store-devtools) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Store Devtools provides developer tools and instrumentation for [Store](../11-ngrx-store/02-store-overview.md).

## Installation

Detailed installation instructions can be found on the [Installation](./07-devtools-install.md) page.

## Setup

Instrumentation with the Chrome / Firefox Extension

1. Download the [Redux Devtools Extension](https://github.com/reduxjs/redux-devtools/)

2. Provide the `provideStoreDevtools` to the application config:

**main.ts**

```ts
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
  ],
});
```

> More extension options and explanation, refer to [Redux Devtools Documentation](https://github.com/reduxjs/redux-devtools#documentation)
