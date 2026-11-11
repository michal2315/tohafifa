---
title: "Store data flow"
sidebar_position: 4
mdx:
  format: md
tags: [guide, required]
---

**Required reading** for week 2. We build the posts slice together, and you build comments and profile the same way in week 3.

## The loop

```text
 component ──dispatch(loadFeed)──▶ store
                                   │
                    reducer: status = 'loading'
                                   │
                    effect hears loadFeed ──▶ PostsApiService ──▶ NestJS
                                   │
                    effect dispatches loadFeedSuccess({ posts })
                                   │
                    reducer: posts saved, status = 'loaded'
                                   │
 component ◀──selectSignal(selectAllPosts)── selector
```

The component never waits for the API. It says what happened ("the feed opened") and shows whatever the store holds.

## 1. Actions: what happened

```ts
export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Feed': emptyProps(),
    'Load Feed Success': props<{ posts: Post[] }>(),
    'Load Feed Failure': props<{ errorMessage: string }>(),
    'Like': props<{ postId: string }>(),
    'Like Success': props<{ post: Post }>(),
    'Like Failure': props<{ errorMessage: string }>(),
  },
});
```

Name actions as events, not commands: `Load Feed` from the feed page, not `Set Posts`.

## 2. State and reducer: what the store holds

```ts
export type LoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface PostsState extends EntityState<Post> {
  status: LoadStatus;
  errorMessage: string | null;
}

export const postsAdapter = createEntityAdapter<Post>();

const initialState: PostsState = postsAdapter.getInitialState({
  status: 'idle',
  errorMessage: null,
});

export const postsFeature = createFeature({
  name: 'posts',
  reducer: createReducer(
    initialState,
    on(PostsActions.loadFeed, (state) => ({ ...state, status: 'loading' as const, errorMessage: null })),
    on(PostsActions.loadFeedSuccess, (state, { posts }) => postsAdapter.setAll(posts, { ...state, status: 'loaded' as const })),
    on(PostsActions.loadFeedFailure, (state, { errorMessage }) => ({ ...state, status: 'error' as const, errorMessage })),
    on(PostsActions.likeSuccess, (state, { post }) => postsAdapter.setOne(post, state)),
  ),
});
```

One `status` field instead of separate `isLoading` and `hasError` booleans: the state can't be "loading and failed" at the same time. Your team may have its own shape for this. Use it if so.

## 3. Selectors: what the component reads

```ts
const { selectAll } = postsAdapter.getSelectors(postsFeature.selectPostsState);

export const selectAllPosts = selectAll;
export const selectPostsStatus = postsFeature.selectStatus;
export const selectIsFeedLoading = createSelector(selectPostsStatus, (status) => status === 'loading');
```

`createFeature` gives you a selector for every top-level field, like `selectStatus`. Build anything else with `createSelector`.

## 4. Effects: where the API is called

```ts
export const loadFeed = createEffect(
  (actions$ = inject(Actions), postsApi = inject(PostsApiService)) =>
    actions$.pipe(
      ofType(PostsActions.loadFeed),
      switchMap(() =>
        postsApi.getFeed().pipe(
          map((posts) => PostsActions.loadFeedSuccess({ posts })),
          catchError((error: HttpErrorResponse) => of(PostsActions.loadFeedFailure({ errorMessage: error.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const like = createEffect(
  (actions$ = inject(Actions), postsApi = inject(PostsApiService)) =>
    actions$.pipe(
      ofType(PostsActions.like),
      mergeMap(({ postId }) =>
        postsApi.like(postId).pipe(
          map((post) => PostsActions.likeSuccess({ post })),
          catchError((error: HttpErrorResponse) => of(PostsActions.likeFailure({ errorMessage: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
```

Two rules that catch everyone:

- `catchError` goes **inside** the inner `pipe`. Outside, one failed request ends the effect for good.
- Pick the flattening operator on purpose: `switchMap` for loading (only the latest matters), `mergeMap` for likes on different posts, `concatMap` when order matters, `exhaustMap` for login.

## 5. Register it

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideStore(),
    provideState(postsFeature),
    provideEffects(postsEffects),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
```

`postsEffects` is the file imported as a whole: `import * as postsEffects from './store/posts/posts.effects'`.

## 6. The container

```ts
export class FeedPageComponent {
  private readonly store = inject(Store);

  readonly posts = this.store.selectSignal(selectAllPosts);
  readonly isLoading = this.store.selectSignal(selectIsFeedLoading);

  constructor() {
    this.store.dispatch(PostsActions.loadFeed());
  }

  like(postId: string) {
    this.store.dispatch(PostsActions.like({ postId }));
  }
}
```

## Loading by route parameter: the profile page

The profile page must load again when the user goes from one profile to another, because Angular reuses the component. React to the input, not to the constructor:

```ts
export class ProfilePageComponent {
  private readonly store = inject(Store);

  readonly username = input.required<string>();
  readonly profile = this.store.selectSignal(selectProfile);

  constructor() {
    effect(() => {
      this.store.dispatch(ProfileActions.open({ username: this.username() }));
    });
  }
}
```

The profile effect then uses `switchMap`, so a late answer for the old profile is dropped.

## Debug it with Redux DevTools

Install the Redux DevTools browser extension. Every action shows up in order, with the state before and after. If the screen doesn't change, check the DevTools:

| What you see | What's wrong |
|---|---|
| The action isn't there | The component never dispatched it |
| The action is there, the state didn't change | The reducer has no `on(...)` for it, or the feature isn't registered |
| The state changed, the screen didn't | The selector or the template is wrong |
| No success or failure action follows | The effect isn't registered, or `ofType` listens to the wrong action |
| The same action repeats forever | The effect dispatches the action it listens to |

## Checklist for your own slice (week 3)

- [ ] Actions named as events, grouped with `createActionGroup`
- [ ] A `status` field, set in the trigger, success and failure handlers
- [ ] The reducer returns new objects and never changes `state`
- [ ] Selectors for everything the components read
- [ ] Every effect has `catchError` inside the inner pipe, and a failure action
- [ ] The feature and the effects are registered
- [ ] Only the page component injects `Store`
