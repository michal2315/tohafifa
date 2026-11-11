---
title: "Installation"
sidebar_position: 2
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Installation](https://v20.ngrx.io/guide/entity/install) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

## Installing with `ng add`

You can install the Entity package to your project with the following `ng add` command <a href="https://angular.dev/cli/add" target="_blank">(details here)</a>:

```sh
ng add @ngrx/entity@latest
```

This command will automate the following steps:

1. Update `package.json` > `dependencies` with `@ngrx/entity`.
2. Run `npm install` to install those dependencies.

## Installing with `npm`

For more information on using `npm` check out the docs <a href="https://docs.npmjs.com/cli/install" target="_blank">here</a>.

```sh
npm install @ngrx/entity --save
```

## Installing with `yarn`

For more information on using `yarn` check out the docs <a href="https://yarnpkg.com/getting-started/usage#installing-all-the-dependencies" target="_blank">here</a>.

```sh
yarn add @ngrx/entity
```
