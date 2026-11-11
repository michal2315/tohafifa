---
title: "Router selectors"
sidebar_position: 10
mdx:
  format: md
tags: [skim]
---

**Skim**: read the headings and examples, come back when you need it.

:::info[Source]

Adapted from [Router selectors](https://v20.ngrx.io/guide/router-store/selectors) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

The `getRouterSelectors` method supplied within `@ngrx/router-store` provides functions for selecting common information from the router state.

The default behavior of `getRouterSelectors` selects the router state for the `router` state key.
If the default router state config is overwritten with a different router state key, the `getRouterSelectors` method takes a selector function to select the piece of state where the router state is being stored.
The example below shows how to provide a selector for the top level `router` key in your state object.

**Note:** The `getRouterSelectors` method works with the `routerReducer` provided by `@ngrx/router-store`. If you use a [custom serializer](https://v20.ngrx.io/guide/router-store/configuration#custom-router-state-serializer), you'll need to provide your own selectors.

Usage:

:::tip

You can see the full example at StackBlitz: StackBlitz starter project

:::

## Creating a Selector for A Single Entity With Id As Route Param

**router.selectors.ts**

```ts
// #docregion routerSelectors
import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

// `router` is used as the default feature name. You can use the feature name
// of your choice by creating a feature selector and pass it to the `getRouterSelectors` function
// export const selectRouter = createFeatureSelector<RouterReducerState>('yourFeatureName');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectRouteDataParam, // factory function to select a route data param
  selectUrl, // select the current url
  selectTitle, // select the title if available
} = getRouterSelectors();
// #enddocregion routerSelectors
```

**car.reducer.ts**

```ts
// #docregion carReducer
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { appInit } from './car.actions';

export interface Car {
  id: string;
  year: string;
  make: string;
  model: string;
}

export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (car) => car.id,
});

const initialState = carAdapter.getInitialState();

export const reducer = createReducer<CarState>(
  initialState,
  on(appInit, (state, { cars }) => carAdapter.addMany(cars, state))
);
// #enddocregion carReducer
```

**car.selectors.ts**

```ts
// #docregion carSelectors
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '../router.selectors';
import { carAdapter, CarState } from './car.reducer';

export const carsFeatureSelector = createFeatureSelector<CarState>('cars');

const { selectEntities, selectAll } = carAdapter.getSelectors();

export const selectCarEntities = createSelector(
  carsFeatureSelector,
  selectEntities
);

export const selectCars = createSelector(carsFeatureSelector, selectAll);

// you can combine the `selectRouteParams` with `selectCarEntities`
// to get a selector for the active car for this component based
// on the route
export const selectCar = createSelector(
  selectCarEntities,
  selectRouteParams,
  (cars, { carId }) => cars[carId]
);
// #enddocregion carSelectors
```

**car.component.ts**

```ts
// #docregion carComponent
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCar } from './car.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  imports: [AsyncPipe, JsonPipe],
})
export class CarComponent {
  private store = inject(Store);
  car$ = this.store.select(selectCar);
}
// #enddocregion carComponent
```

## Extracting all params in the current route

The `selectRouteParam{s}` selector extracts params from the **leaf child** route segment only.

It means that when using nested routes with the Angular router (use of the `children` property), only params from the leaf of the matching URL Tree will be extracted.

If the routes are defined as:

```typescript
[
  {
    path: 'my/:urlPath',
    component: /* ... */,
    children: [
      {
        path: 'is/:matched',
        component: /* ... */,
      },
    ],
  },
]
```

Using `selectRouteParam{s}` will get the `matched` param but not the `urlPath` param, because it is not located in a leaf of the URL Tree.

If all params in the URL Tree need to be extracted (both `urlPath` and `matched`), the following custom selector can be used. It accumulates params of all the segments in the matched route:

```ts
import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';

export const selectRouteNestedParams = createSelector(
  selectRouter,
  (router) => {
    let currentRoute = router?.state?.root;
    let params: Params = {};
    while (currentRoute?.firstChild) {
      currentRoute = currentRoute.firstChild;
      params = {
        ...params,
        ...currentRoute.params,
      };
    }
    return params;
  }
);

export const selectRouteNestedParam = (param: string) =>
  createSelector(
    selectRouteNestedParams,
    (params) => params && params[param]
  );
```

:::info

Beware of using this accumulation technique when two params with the same name exist in the route (e.g. `my/:route/:id/with/another/:id`). Only the rightmost value is accessible because leftmost values are overwritten by the rightmost one in the traversal.

:::
