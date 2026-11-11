---
title: "Tavor Angular conventions"
sidebar_position: 1
mdx:
  format: md
tags: [tavor, required]
---

**Required reading for Tavor.** These are the rules for every Angular project in the Tavor team. In code review, a convention break counts the same as a bug.

The general Angular reading teaches what Angular allows. This page says which of those options we choose. When the two disagree, this page wins.

The examples use the Instagram project from the training.

## Components

- **Standalone components only.** No NgModules. In Angular 20 components are standalone by default, so you don't write `standalone: true`.
- **Every component has its own SCSS file**, written with the HTML & SCSS conventions: wrapped in `:host`, classes only, kebab-case, no comments.

## Naming

| What | Rule | Example |
|---|---|---|
| Signals | `$camelCase` | `$posts`, `$callState` |
| Observables | `camelCase$` | `actions$` |
| Private members | `_camelCase` | `_store`, `_apiUrl` |
| Booleans | start with `is`, `should`, `has` or `can` | `$isOwnProfile`, `$canComment`, `hasMorePosts` |

```ts
export class ProfileComponent {
  private readonly _store = inject(Store);

  readonly $profile = this._store.selectSignal(selectProfile);
  readonly $isOwnProfile = this._store.selectSignal(selectIsOwnProfile);
}
```

## Folder structure

```text
src/app/
  core/
    guards/
    interceptors/
    services/
    store/
  features/
    feed/
      components/
        atoms/
        molecules/
        organisms/
      pipes/
      services/
      store/
      types/
    profile/
      ...
  shared/
```

- **`core/`** is for things the whole app needs exactly once: guards, interceptors, app-wide services, and app-wide store slices such as auth.
- **`features/`** has one folder per feature. Inside it, components follow atomic design:
  - **atoms:** one small element that can't be split further, e.g. `like-button`, `avatar`.
  - **molecules:** a few atoms working together, e.g. `post-header` (avatar + username + time).
  - **organisms:** a complete section of the UI, e.g. `post-card`, `comments-section`.
- **`shared/`** is for things used by more than one feature. A component used only in the feed stays in the feed.

### File suffixes

Besides Angular's usual suffixes (`.component.ts`, `.service.ts`, `.pipe.ts`…), we use:

| Suffix | Holds | Example |
|---|---|---|
| `.type.ts` | Interfaces and types | `post.type.ts` |
| `.consts.ts` | Constants | `feed.consts.ts` |
| `.util.ts` | Pure helper functions | `count-format.util.ts` |
| `.label-map.ts` | Maps from a value to the text shown in the UI | `post-visibility.label-map.ts` |

```ts
export const POST_VISIBILITY_LABEL_MAP: Record<PostVisibility, string> = {
  public: 'Everyone',
  followers: 'Followers only',
  private: 'Only me',
};
```

## State (NgRx)

### A slice is five files

Every store slice has exactly these five files, named after the slice:

```text
store/posts/
  posts.actions.ts
  posts.effects.ts
  posts.reducer.ts
  posts.selectors.ts
  posts.state.ts
```

### Actions: `createActionGroup`

```ts
export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Feed': emptyProps(),
    'Load Feed Success': props<{ posts: Post[] }>(),
    'Load Feed Failure': props<{ errorMessage: string }>(),
  },
});
```

### Effects: functional only

No effect classes. Each effect is a constant created with `{ functional: true }`, and it gets its dependencies with `inject()` as default parameters.

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
```

### Reading state: `selectSignal`, as a field

Components read the store with `Store.selectSignal`, assigned once to a class field. Never call `selectSignal` inside a method, a getter or the template.

```ts
export class FeedComponent {
  private readonly _store = inject(Store);

  readonly $posts = this._store.selectSignal(selectAllPosts);
  readonly $isLoading = this._store.selectSignal(selectIsFeedLoading);
}
```

### Loading states: `CallState`

A slice tracks requests with a `callState` field. Never add your own `isLoading` or `hasError` booleans to state. When a component needs a boolean, derive it with a selector.

```ts
export enum LoadingState {
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
}

export interface ErrorState {
  errorMessage: string;
}

export type CallState = LoadingState | ErrorState;
```

```ts
export interface PostsState extends EntityState<Post> {
  callState: CallState;
}
```

```ts
export const selectIsFeedLoading = createSelector(
  selectPostsCallState,
  (callState) => callState === LoadingState.Loading,
);
```

## HTTP

### Thin API services

An API service only makes HTTP calls: no state, no error handling, no mapping logic. It is `providedIn: 'root'`, and its URL is a relative `private readonly _apiUrl`.

```ts
@Injectable({ providedIn: 'root' })
export class PostsApiService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = '/api/posts';

  getFeed(): Observable<Post[]> {
    return this._http.get<Post[]>(this._apiUrl).pipe(timeout({ each: 90000 }));
  }
}
```

- **No API base URL in `environments`.** The dev server proxy sends `/api` to the NestJS server:

  ```json
  {
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
  }
  ```

- **Every HTTP call has `timeout({ each: 90000 })`.**

### Auth header: one interceptor

The JWT is added as a `Bearer` token by a single auth interceptor in `core/interceptors`. A service never sets the `Authorization` header itself.

```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(Store).selectSignal(selectAuthToken)();
  return next(token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req);
};
```

## Forms

**Reactive forms only.** No `ngModel` and no `FormsModule`.

```ts
export class CommentFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  readonly commentForm = this._formBuilder.group({
    text: ['', [Validators.required, Validators.maxLength(300)]],
  });
}
```

## Quick review checklist

- [ ] Standalone component with its own `:host`-wrapped SCSS file
- [ ] Signals `$name`, private members `_name`, booleans `is`/`should`/`has`/`can`
- [ ] File is in the right folder: `core`, `features/<feature>/…` with atoms/molecules/organisms, or `shared`
- [ ] Types in `.type.ts`, constants in `.consts.ts`, helpers in `.util.ts`, UI labels in `.label-map.ts`
- [ ] The slice has all five files; actions use `createActionGroup`; effects are functional
- [ ] Store read with `selectSignal` in a field
- [ ] Request status in `callState`, no `isLoading` booleans in state
- [ ] API service is thin, uses a relative `_apiUrl`, and has `timeout({ each: 90000 })`
- [ ] No `Authorization` header outside the auth interceptor
- [ ] Reactive forms only
