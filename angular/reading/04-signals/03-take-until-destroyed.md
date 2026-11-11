---
title: "Unsubscribing with takeUntilDestroyed"
sidebar_position: 3
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Unsubscribing with takeUntilDestroyed](https://v20.angular.dev/ecosystem/rxjs-interop/take-until-destroyed) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

:::tip

This guide assumes you're familiar with [component and directive lifecycle](../02-components/08-lifecycle.md).

:::

The [`takeUntilDestroyed`](https://v20.angular.dev/api/core/rxjs-interop/takeUntilDestroyed) operator, from `@angular/core/rxjs-interop`, provides a concise and reliable way to automatically unsubscribe from an Observable when a component or directive is destroyed. This prevents common memory leaks with RxJS subscriptions. It works similarly to the RxJS [`takeUntil`](https://rxjs.dev/api/operators/takeUntil) operator but without the need for a separate Subject.

```ts
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NotificationDispatcher, CustomPopupShower} from './some-shared-project-code';

@Component(/* ... */)
export class UserProfile {
  private dispatcher = inject(NotificationDispatcher);
  private popup = inject(CustomPopupShower);

  constructor() {
    // This subscription the 'notifications' Observable is automatically
    // unsubscribed when the 'UserProfile' component is destroyed.
    const messages: Observable<string> = this.dispatcher.notifications;
    messages.pipe(takeUntilDestroyed()).subscribe(message => {
      this.popup.show(message);
    });
  }
}
```

The [`takeUntilDestroyed`](https://v20.angular.dev/api/core/rxjs-interop/takeUntilDestroyed) operator accepts a single optional [](https://angular.dev/api/core/DestroyRef)[`DestroyRef`](https://v20.angular.dev/api/core/DestroyRef) argument. The operator uses [`DestroyRef`](https://v20.angular.dev/api/core/DestroyRef) to know when the component or directive has been destroyed. You can omit this argument when calling [`takeUntilDestroyed`](https://v20.angular.dev/api/core/rxjs-interop/takeUntilDestroyed) in an [injection context](https://angular.dev/guide/di/dependency-injection-context), typically the constructor of a component or directive. Always provide a [`DestroyRef`](https://v20.angular.dev/api/core/DestroyRef) if your code may call [`takeUntilDestroyed`](https://v20.angular.dev/api/core/rxjs-interop/takeUntilDestroyed) outside of an injection context.

```ts
@Component(/* ... */)
export class UserProfile {
  private dispatcher = inject(NotificationDispatcher);
  private popup = inject(CustomPopupShower);
  private destroyRef = inject(DestroyRef);

  startListeningToNotifications() {
    // Always pass a `DestroyRef` if you call `takeUntilDestroyed` outside
    // of an injection context.
    const messages: Observable<string> = this.dispatcher.notifications;
    messages.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(message => {
      this.popup.show(message);
    });
  }
}
```
