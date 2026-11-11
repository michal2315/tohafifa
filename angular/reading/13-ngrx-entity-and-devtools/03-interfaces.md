---
title: "Entity Interfaces"
sidebar_position: 3
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Entity Interfaces](https://v20.ngrx.io/guide/entity/interfaces) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

## `EntityState<T>`

The Entity State is a predefined generic interface for a given entity collection with the following interface:

**EntityState Interface**

```ts
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```

- `ids`: An array of all the primary ids in the collection
- `entities`: A dictionary of entities in the collection indexed by the primary id

Extend this interface to provide any additional properties for the entity state.

Usage:

**user.reducer.ts**

```ts
export interface User {
  id: string;
  name: string;
}

export interface State extends EntityState<User> {
  // additional entity state properties
  selectedUserId: string | null;
}
```

## `EntityAdapter<T>`

Provides a generic type interface for the provided entity adapter. The entity adapter provides many collection methods for managing the entity state.

Usage:

**user.reducer.ts**

```ts
export const adapter: EntityAdapter<User> =
  createEntityAdapter<User>();
```
