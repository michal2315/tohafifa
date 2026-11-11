---
title: "Angular Routing"
sidebar_position: 1
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Angular Routing](https://v20.angular.dev/guide/routing) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Angular Router (`@angular/router`) is the official library for managing navigation in Angular applications and a core part of the framework. It is included by default in all projects created by Angular CLI.

## Why is routing necessary in a SPA?

When you navigate to a URL in your web browser, the browser normally makes a network request to a web server and displays the returned HTML page. When you navigate to a different URL, such as clicking a link, the browser makes another network request and replaces the entire page with a new one.

A single-page application (SPA) differs in that the browser only makes a request to a web server for the first page, the `index.html`. After that, a client-side router takes over, controlling which content displays based on the URL. When a user navigates to a different URL, the router updates the page's content in place without triggering a full-page reload.

## How Angular manages routing

Routing in Angular is comprised of three primary parts:

1. **Routes** define which component displays when a user visits a specific URL.
2. **Outlets** are placeholders in your templates that dynamically load and render components based on the active route.
3. **Links** provide a way for users to navigate between different routes in your application without triggering a full page reload.

In addition, the Angular Routing library offers additional functionality such as:

- Nested routes
- Programmatic navigation
- Route params, queries and wildcards
- Activated route information with [`ActivatedRoute`](https://v20.angular.dev/api/router/ActivatedRoute)
- View transition effects
- Navigation guards

## Next steps

Learn about how you can [define routes using Angular router](./02-define-routes.md).
