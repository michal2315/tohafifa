---
title: "Unhandled errors in Angular"
sidebar_position: 2
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Unhandled errors in Angular](https://v20.angular.dev/best-practices/error-handling) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

As your Angular application runs, some of your code may throw an error. If left unhandled, these errors can lead to unexpected behavior and a nonresponsive UI. This guide covers how Angular deals with errors that are not explicitly caught by your application code. For guidance on writing your own error handling logic within your application, consult best practices for error handling in JavaScript and Angular.

A fundamental principle in Angular's error handling strategy is that errors should be surfaced to developers at the callsite whenever possible. This approach ensures that the code which initiated an operation has the context necessary to understand the error, handle it appropriately, and decide what the appropriate application state should be. By making errors visible at their origin, developers can implement error handling that is specific to the failed operation and has access to relevant information for recovery or providing informative feedback to the end-user. This also helps to avoid the "Overly general error" smell, where errors are reported without sufficient context to understand their cause.

For example, consider a component that fetches user data from an API. The code responsible for making the API call should include error handling (e.g., using a `try...catch` block or the `catchError` operator in RxJS) to manage potential network issues or errors returned by the API. This allows the component to display a user-friendly error message or retry the request, rather than letting the error propagate unhandled.

## Unhandled errors are reported to the `ErrorHandler`

Angular reports unhandled errors to the application's root [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler). When providing a custom [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler), provide it in your `ApplicationConfig` as part of calling [`bootstrapApplication`](https://v20.angular.dev/api/platform-browser/bootstrapApplication).

When building an Angular application, often you write code that is called automatically *by* the framework. For example, Angular is responsible for calling a component's constructor and lifecycle methods when that component appears in a template. When the framework runs your code, there's nowhere you could reasonably add a `try` block to gracefully handle errors. In situations like this, Angular catches errors and sends them to the [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler).

Angular does *not* catch errors inside of APIs that are called directly by your code. For example, if you have a service with a method that throws an error and you call that method in your component, Angular will not automatically catch that error. You are responsible for handling it using mechanisms like `try...catch`.

Angular catches *asynchronous* errors from user promises or observables only when:

- There is an explicit contract for Angular to wait for and use the result of the asynchronous operation, and
- When errors are not presented in the return value or state.

For example, [`AsyncPipe`](https://v20.angular.dev/api/common/AsyncPipe) and [`PendingTasks.run`](https://v20.angular.dev/api/core/PendingTasks#run) forward errors to the [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler), whereas [`resource`](https://v20.angular.dev/api/core/resource) presents the error in the `status` and `error` properties.

Errors that Angular reports to the [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler) are *unexpected* errors. These errors may be unrecoverable or an indication that the state of the application is corrupted. Applications should provide error handling using `try` blocks or appropriate error handling operators (like `catchError` in RxJS) where the error occurs whenever possible rather than relying on the [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler), which is most frequently and appropriately used only as a mechanism to report potentially fatal errors to the error tracking and logging infrastructure.

```ts
export class GlobalErrorHandler implements ErrorHandler {
  private readonly analyticsService = inject(AnalyticsService);
  private readonly router = inject(Router);

  handleError(error: any) {
    const url = this.router.url;
    const errorMessage = error?.message ?? 'unknown';

    this.analyticsService.trackEvent({
      eventName: 'exception',
      description: `Screen: ${url} | ${errorMessage}`,
    });

    console.error(GlobalErrorHandler.name, { error });
  }
}
```

### `TestBed` rethrows errors by default

In many cases, [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler) may only log errors and otherwise allow the application to continue running. In tests, however, you almost always want to surface these errors. Angular's [`TestBed`](https://v20.angular.dev/api/core/testing/TestBed) rethrows unexpected errors to ensure that errors caught by the framework cannot be unintentionally missed or ignored. In rare circumstances, a test may specifically attempt to ensure errors do not cause the application to be unresponsive or crash. In these situations, you can [configure](https://v20.angular.dev/api/core/testing/TestModuleMetadata#rethrowApplicationErrors) [`TestBed`](https://v20.angular.dev/api/core/testing/TestBed) to *not* rethrow application errors with [`TestBed.configureTestingModule({rethrowApplicationErrors: false})`](https://v20.angular.dev/api/core/testing/TestBed#configureTestingModule\({rethrowApplicationErrors:%20false}\)).

## Global error listeners

Errors that are caught neither by the application code nor by the framework's application instance may reach the global scope. Errors reaching the global scope can have unintended consequences if not accounted for. In non-browser environments, they may cause the process to crash. In the browser, these errors may go unreported and site visitors may see the errors in the browser console. Angular provides global listeners for both environments to account for these issues.

### Client-side rendering

Adding [](https://v20.angular.dev/api/core/provideBrowserGlobalErrorListeners)[`provideBrowserGlobalErrorListeners()`](https://v20.angular.dev/api/core/provideBrowserGlobalErrorListeners) to the [ApplicationConfig](https://v20.angular.dev/guide/di/dependency-injection#at-the-application-root-level-using-applicationconfig) adds the `'error'` and `'unhandledrejection'` listeners to the browser window and forwards those errors to [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler). The Angular CLI generates new applications with this provider by default. The Angular team recommends handling these global errors for most applications, either with the framework's built-in listeners or with your own custom listeners. If you provide custom listeners, you can remove [`provideBrowserGlobalErrorListeners`](https://v20.angular.dev/api/core/provideBrowserGlobalErrorListeners).

### Server-side and hybrid rendering

When using [Angular with SSR](https://v20.angular.dev/guide/ssr), Angular automatically adds the `'unhandledRejection'` and `'uncaughtException'` listeners to the server process. These handlers prevent the server from crashing and instead log captured errors to the console.

:::warning

If the application is using Zone.js, only the `'unhandledRejection'` handler is added. When Zone.js is present, errors inside the Application's Zone are already forwarded to the application [`ErrorHandler`](https://v20.angular.dev/api/core/ErrorHandler) and do not reach the server process.

:::
