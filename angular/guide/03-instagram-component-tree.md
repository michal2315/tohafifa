---
title: "The component tree"
sidebar_position: 3
mdx:
  format: md
tags: [guide, required]
---

**Required reading** before you start week 1.

This is one way to split the Instagram app. You can name things differently, but the split between containers and presentational components should look like this.

## The tree

```text
AppComponent                      shell: top bar + <router-outlet>
├── TopBarComponent               presentational: logo, link to my profile
│
├── FeedPageComponent             CONTAINER, route /
│   └── PostCardComponent         one per post
│       ├── PostHeaderComponent   avatar, username (links to profile), date
│       ├── LikeButtonComponent   heart + like count
│       └── CommentsSectionComponent
│           ├── CommentItemComponent   one per comment
│           └── CommentFormComponent   reactive form, emits the text
│
└── ProfilePageComponent          CONTAINER, route /profile/:username
    ├── ProfileHeaderComponent    avatar, name, bio, post count
    └── PostGridComponent         grid of thumbnails
```

Only the two page components inject the `Store`. Everything under them gets data through `input()` and reports through `output()`.

## What each component receives and emits

| Component | Inputs | Outputs |
|---|---|---|
| `PostCardComponent` | `post`, `comments` | `liked`, `commentAdded` |
| `PostHeaderComponent` | `author`, `createdAt` | – |
| `LikeButtonComponent` | `isLiked`, `likes` | `liked` |
| `CommentsSectionComponent` | `comments` | `commentAdded` |
| `CommentItemComponent` | `comment` | – |
| `CommentFormComponent` | – | `submitted` (the text) |
| `ProfileHeaderComponent` | `profile` | – |
| `PostGridComponent` | `posts` | – |

The username in `PostHeaderComponent` can use `routerLink` directly. Navigation is part of the template, not state, so a presentational component may link.

## Folders

```text
src/app/
├── app.config.ts
├── app.routes.ts
├── models/              post.ts, comment.ts, profile.ts
├── api/                 posts-api.service.ts, comments-api.service.ts, profiles-api.service.ts
├── store/
│   ├── posts/           actions, reducer, selectors, effects
│   ├── comments/
│   └── profile/
├── feed/
│   ├── feed-page/
│   ├── post-card/
│   ├── post-header/
│   ├── like-button/
│   └── comments-section/   (with comment-item and comment-form inside)
├── profile/
│   ├── profile-page/
│   ├── profile-header/
│   └── post-grid/
└── shared/
    └── top-bar/
```

Each component folder holds its `.ts`, `.html` and `.scss`. If your team has its own folder rules, use those instead. Tavor's are in `tavor/reading`.

## Routes

```ts
export const routes: Routes = [
  { path: '', component: FeedPageComponent },
  { path: 'profile/:username', component: ProfilePageComponent },
  { path: '**', redirectTo: '' },
];
```

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};
```

With `withComponentInputBinding()`, the profile page gets the route parameter as an input:

```ts
export class ProfilePageComponent {
  readonly username = input.required<string>();
}
```

The page then dispatches a load action whenever `username` changes. See [Store data flow](./04-store-data-flow.md).

## The SCSS comes with you

Each block of your HTML & SCSS feed becomes the template and styles of one component. The classes stay the same, and the styles move into the component's `.scss` file, wrapped in `:host`. If the Angular feed doesn't look exactly like your HTML feed, something was lost in the move.
