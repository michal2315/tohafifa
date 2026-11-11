---
title: "Dependency Injection"
sidebar_position: 5
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Dependency Injection](https://v20.angular.dev/essentials/dependency-injection) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

When you need to share logic between components, Angular leverages the design pattern of [dependency injection](../05-services-and-di/01-di-overview.md) that allows you to create a “service” which allows you to inject code into components while managing it from a single source of truth.

## What are services?

Services are reusable pieces of code that can be injected.

Similar to defining a component, services are comprised of the following:

- A **TypeScript decorator** that declares the class as an Angular service via [`@Injectable`](https://v20.angular.dev/api/core/Injectable) and allows you to define what part of the application can access the service via the `providedIn` property (which is typically `'root'`) to allow a service to be accessed anywhere within the application.
- A **TypeScript class** that defines the desired code that will be accessible when the service is injected

Here is an example of a `Calculator` service.

```ts
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}
```

## How to use a service

When you want to use a service in a component, you need to:

1. Import the service
2. Declare a class field where the service is injected. Assign the class field to the result of the call of the built-in function `inject` which creates the service

Here’s what it might look like in the `Receipt` component:

```ts
import { Component, inject } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})

export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}
```

In this example, the `Calculator` is being used by calling the Angular function `inject` and passing in the service to it.

## Next Step

**Read next:**

- [Next Steps After Essentials](https://v20.angular.dev/essentials/next-steps)
- [In-depth dependency injection guide](../05-services-and-di/01-di-overview.md)
