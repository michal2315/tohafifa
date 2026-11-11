---
title: "Smart and presentational components"
sidebar_position: 2
mdx:
  format: md
tags: [guide, required]
---

**Required reading.**

Most components in the project are **presentational**. A few are **smart**, also called containers. Getting this split right is what makes the store easy to add in week 2.

| | Presentational | Smart (container) |
|---|---|---|
| Job | Show data and report what the user did | Get data and decide what happens |
| Gets data from | `input()` only | The store (`store.selectSignal`) |
| Reports actions with | `output()` | `store.dispatch(...)` |
| Injects | Nothing, or only UI helpers | `Store`, `ActivatedRoute`… |
| Knows about NgRx, HTTP, routes | No | Yes |
| How many | Most of them | Usually one per page |

## Example: the post card

The post card doesn't know where posts come from or what a like does. It shows a post and says "the user liked this".

```ts
@Component({
  selector: 'app-post-card',
  imports: [PostHeaderComponent, LikeButtonComponent, CommentsSectionComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  readonly post = input.required<Post>();
  readonly comments = input<Comment[]>([]);
  readonly liked = output<void>();
  readonly commentAdded = output<string>();
}
```

```html
<div class="post-card">
  <app-post-header [author]="post().author" [createdAt]="post().createdAt" />
  <img class="post-image" [src]="post().imageUrl" [alt]="post().caption">
  <app-like-button [isLiked]="post().isLiked" [likes]="post().likes" (liked)="liked.emit()" />
  <app-comments-section [comments]="comments()" (commentAdded)="commentAdded.emit($event)" />
</div>
```

The feed page is the container. It's the only place that knows about the store:

```ts
@Component({
  selector: 'app-feed-page',
  imports: [PostCardComponent],
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.scss',
})
export class FeedPageComponent {
  private readonly store = inject(Store);

  readonly posts = this.store.selectSignal(selectAllPosts);
  readonly commentsByPost = this.store.selectSignal(selectCommentsByPostId);

  constructor() {
    this.store.dispatch(PostsActions.loadFeed());
  }

  like(postId: string) {
    this.store.dispatch(PostsActions.like({ postId }));
  }

  addComment(postId: string, text: string) {
    this.store.dispatch(CommentsActions.add({ postId, text }));
  }
}
```

```html
@for (post of posts(); track post.id) {
  <app-post-card
    [post]="post"
    [comments]="commentsByPost()[post.id] ?? []"
    (liked)="like(post.id)"
    (commentAdded)="addComment(post.id, $event)"
  />
}
```

## Week 1: the same container, with mock data

```ts
export class FeedPageComponent {
  readonly posts = signal<Post[]>(MOCK_POSTS);

  like(postId: string) {
    this.posts.update((posts) =>
      posts.map((post) => (post.id === postId ? { ...post, isLiked: true, likes: post.likes + 1 } : post)),
    );
  }
}
```

In week 2, `posts` becomes `this.store.selectSignal(selectAllPosts)` and `like` dispatches an action. Comments work the same way: a mock `commentsByPost` signal in week 1, a selector later. The template and every presentational component stay exactly the same.

## Checklist: is this component presentational?

- [ ] No `inject(Store)`, `inject(HttpClient)`, API services or `ActivatedRoute`
- [ ] All data comes in through `input()`
- [ ] Everything the user does goes out through `output()`
- [ ] You could show it in a design gallery with made-up data and it would work

## Watch

- [Are your Angular components DUMB enough?](https://youtu.be/9QU_GzcU184), Joshua Morony, 5 min
- [How Angular components should communicate in 2025](https://youtu.be/fTejxZ6W-90), Brian Treese, 8 min
