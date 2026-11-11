---
title: "Setting up HttpClient"
sidebar_position: 2
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Setting up HttpClient](https://v20.angular.dev/guide/http/setup) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Before you can use [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) in your app, you must configure it using [dependency injection](../05-services-and-di/01-di-overview.md).

## Providing `HttpClient` through dependency injection

[`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) is provided using the [`provideHttpClient`](https://v20.angular.dev/api/common/http/provideHttpClient) helper function, which most apps include in the application `providers` in `app.config.ts`.

```css
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

If your app is using NgModule-based bootstrap instead, you can include [`provideHttpClient`](https://v20.angular.dev/api/common/http/provideHttpClient) in the providers of your app's NgModule:

```ts
@NgModule({
  providers: [
    provideHttpClient(),
  ],
  // ... other application configuration
})
export class AppModule {}
```

You can then inject the [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) service as a dependency of your components, services, or other classes:

```ts
@Injectable({providedIn: 'root'})
export class ConfigService {
  private http = inject(HttpClient);
  // This service can now make HTTP requests via `this.http`.
}
```

## Configuring features of `HttpClient`

[`provideHttpClient`](https://v20.angular.dev/api/common/http/provideHttpClient) accepts a list of optional feature configurations, to enable or configure the behavior of different aspects of the client. This section details the optional features and their usages.

### `withFetch`

```css
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
  ]
};
```

By default, [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) uses the [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest) API to make requests. The [`withFetch`](https://v20.angular.dev/api/common/http/withFetch) feature switches the client to use the [`fetch`](https://developer.mozilla.org/docs/Web/API/Fetch_API) API instead.

`fetch` is a more modern API and is available in a few environments where `XMLHttpRequest` is not supported. It does have a few limitations, such as not producing upload progress events.

### `withInterceptors(...)`

[`withInterceptors`](https://v20.angular.dev/api/common/http/withInterceptors) configures the set of interceptor functions which will process requests made through [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient). See the [interceptor guide](./04-interceptors.md) for more information.

### `withInterceptorsFromDi()`

[`withInterceptorsFromDi`](https://v20.angular.dev/api/common/http/withInterceptorsFromDi) includes the older style of class-based interceptors in the [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) configuration. See the [interceptor guide](./04-interceptors.md) for more information.

:::tip

Functional interceptors (through [`withInterceptors`](https://v20.angular.dev/api/common/http/withInterceptors)) have more predictable ordering and we recommend them over DI-based interceptors.

:::

### `withRequestsMadeViaParent()`

By default, when you configure [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) using [`provideHttpClient`](https://v20.angular.dev/api/common/http/provideHttpClient) within a given injector, this configuration overrides any configuration for [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) which may be present in the parent injector.

When you add [`withRequestsMadeViaParent()`](https://v20.angular.dev/api/common/http/withRequestsMadeViaParent), [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) is configured to instead pass requests up to the [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) instance in the parent injector, once they've passed through any configured interceptors at this level. This is useful if you want to *add* interceptors in a child injector, while still sending the request through the parent injector's interceptors as well.

:::danger

You must configure an instance of [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) above the current injector, or this option is not valid and you'll get a runtime error when you try to use it.

:::

### `withJsonpSupport()`

Including [`withJsonpSupport`](https://v20.angular.dev/api/common/http/withJsonpSupport) enables the `.jsonp()` method on [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient), which makes a GET request via the [JSONP convention](https://en.wikipedia.org/wiki/JSONP) for cross-domain loading of data.

:::tip

Prefer using [CORS](https://developer.mozilla.org/docs/Web/HTTP/CORS) to make cross-domain requests instead of JSONP when possible.

:::

### `withXsrfConfiguration(...)`

Including this option allows for customization of [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient)'s built-in XSRF security functionality. See the [security guide](https://v20.angular.dev/best-practices/security) for more information.

### `withNoXsrfProtection()`

Including this option disables [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient)'s built-in XSRF security functionality. See the [security guide](https://v20.angular.dev/best-practices/security) for more information.

## `HttpClientModule`\-based configuration

Some applications may configure [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) using the older API based on NgModules.

This table lists the NgModules available from `@angular/common/http` and how they relate to the provider configuration functions above.

| **NgModule** | [`provideHttpClient()`](https://v20.angular.dev/api/common/http/provideHttpClient) equivalent |
| --- | --- |
| [`HttpClientModule`](https://v20.angular.dev/api/common/http/HttpClientModule) | `provideHttpClient(withInterceptorsFromDi())` |
| [`HttpClientJsonpModule`](https://v20.angular.dev/api/common/http/HttpClientJsonpModule) | [`withJsonpSupport()`](https://v20.angular.dev/api/common/http/withJsonpSupport) |
| `HttpClientXsrfModule.withOptions(...)` | `withXsrfConfiguration(...)` |
| [`HttpClientXsrfModule.disable()`](https://v20.angular.dev/api/common/http/HttpClientXsrfModule#disable) | [`withNoXsrfProtection()`](https://v20.angular.dev/api/common/http/withNoXsrfProtection) |

:::warning[Use caution when using HttpClientModule in multiple injectors]

When [`HttpClientModule`](https://v20.angular.dev/api/common/http/HttpClientModule) is present in multiple injectors, the behavior of interceptors is poorly defined and depends on the exact options and provider/import ordering.

Prefer [`provideHttpClient`](https://v20.angular.dev/api/common/http/provideHttpClient) for multi-injector configurations, as it has more stable behavior. See the [`withRequestsMadeViaParent`](https://v20.angular.dev/api/common/http/withRequestsMadeViaParent) feature above.

:::
