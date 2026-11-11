---
title: "Understanding communicating with backend services using HTTP"
sidebar_position: 1
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Understanding communicating with backend services using HTTP](https://v20.angular.dev/guide/http) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the [`HttpClient`](https://v20.angular.dev/api/common/http/HttpClient) service class in `@angular/common/http`.

## HTTP client service features

The HTTP client service offers the following major features:

- The ability to request [typed response values](./03-making-requests.md#fetching-json-data)
- Streamlined [error handling](./03-making-requests.md#handling-request-failure)
- Request and response [interception](./04-interceptors.md)
- Robust [testing utilities](https://v20.angular.dev/guide/http/testing)

## What's next

**Read next:**

- [Setting up HttpClient](./02-setup.md)
- [Making HTTP requests](./03-making-requests.md)
