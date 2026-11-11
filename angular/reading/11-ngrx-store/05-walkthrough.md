---
title: "Walkthrough"
sidebar_position: 5
mdx:
  format: md
tags: [required]
---

**Required reading**

> **Trainer note:** Do this one hands-on in a scratch project before you add the store to Instagram.

:::info[Source]

Adapted from [Walkthrough](https://v20.ngrx.io/guide/store/walkthrough) by the NgRx team and contributors, NgRx documentation (v20), licensed under [MIT](https://github.com/ngrx/platform/blob/main/LICENSE). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

The following example more extensively utilizes the key concepts of store to manage the state of book list, and how the user can add a book to and remove it from their collection within an Angular component. To build the example, follow the steps in the tutorial below.

The full example is available on StackBlitz:

:::note[Live example not available offline]

The original page embeds a StackBlitz demo here. The full code is on this page.

:::

## Tutorial

1. Generate a new project using the StackBlitz starter project and create a folder named `book-list` inside the `src` folder. This folder is used to hold the book list component later in the tutorial. For now, let's start with adding a file named `book.ts` to reference different aspects of a book in the book list.

**src/book-list/book.ts**

```ts
export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}
```

1. Right click on the `app` folder to create a state management folder `state`. Within the new folder, create a new file `books.actions.ts` to describe the book actions. Book actions include the book list retrieval, and the add and remove book actions.

**src/state/books.actions.ts**

```ts
import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/book';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
```

3. Right click on the `state` folder and create a new file labeled `books.reducer.ts`. Within this file, define a reducer function to handle the retrieval of the book list from the state and consequently, update the state.

**src/state/books.reducer.ts**

```ts
import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../book-list/book';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
```

4. Create another file named `collection.reducer.ts` in the `state` folder to handle actions that alter the user's book collection. Define a reducer function that handles the add action by appending the book's ID to the collection, including a condition to avoid duplicate book IDs. Define the same reducer to handle the remove action by filtering the collection array with the book ID.

**src/state/collection.reducer.ts**

```ts
import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
```

5. Add the `provideStore` function in the `providers` array of your `app.config.ts` with an object containing the `books` and `booksReducer`, as well as the `collection` and `collectionReducer` that manage the state of the book list and the collection. The `provideStore` function registers the global providers needed to access the `Store` throughout your application.

**src/app.config.ts**

```ts
import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideStore({
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
};
```

6. Create the book list and collection selectors to ensure we get the correct information from the store. As you can see, the `selectBookCollection` selector combines two other selectors in order to build its return value.

**src/state/books.selectors.ts**

```ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/book';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
```

7. In the `book-list` folder, we want to have a service that fetches the data needed for the book list from an API. Create a file in the `book-list` folder named `books.service.ts`, which will call the Google Books API and return a list of books.

**src/book-list/books-service.ts**

```ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private readonly http = inject(HttpClient);

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{
        items: Book[];
      }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
```

8. Add the `HttpClient` module using the `provideHttpClient` provider in the `app.config.ts` file in order to make HTTP requests using the `HttpClient`.

**src/app.config.ts**

```ts
import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideStore({
      books: booksReducer,
      collection: collectionReducer,
    }),
  ],
};
```

9. In the same folder (`book-list`), create the `BookList` with the following template. Update the `BookList` class to dispatch the `add` event.

**src/book-list/book-list.ts**

```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-list',
  template: `
    @for (book of books; track book) {
      <div class="book-item">
        <p>{{ book.volumeInfo.title }}</p>
        <span> by {{ book.volumeInfo.authors }}</span>
        <button (click)="add.emit(book.id)">Add to Collection</button>
      </div>
    }
  `,
})
export class BookList {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
```

10. Create a new _Component_ named `book-collection` in the `app` folder. Update the `BookCollection` template and class.

**src/book-collection/book-collection.ts**

```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/book';

@Component({
  selector: 'app-book-collection',
  template: `
    @for (book of books; track book) {
      <div class="book-item">
        <p>{{ book.volumeInfo.title }}</p>
        <span> by {{ book.volumeInfo.authors }}</span>
        <button (click)="remove.emit(book.id)">Remove from Collection</button>
      </div>
    }
  `,
})
export class BookCollection {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
```

11. Add `BookList` and `BookCollection` to your `App` template, and to your imports in `app.ts` as well.

**src/app.ts**

```ts
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books-service';
import { BookList } from './book-list/book-list';
import { BookCollection } from './book-collection/book-collection';

@Component({
  selector: 'app-root',
  template: `
    <h1>Oliver Sacks Books Collection</h1>

    <h2>Books</h2>
    <app-book-list [books]="books()!" (add)="onAdd($event)" />

    <h2>My Collection</h2>
    <app-book-collection
      [books]="bookCollection()!"
      (remove)="onRemove($event)"
    />
  `,
  imports: [BookList, BookCollection],
})
export class App implements OnInit {
  private readonly booksService = inject(GoogleBooksService);
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);
  protected bookCollection = this.store.selectSignal(selectBookCollection);

  protected onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  protected onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
```

12. In the `App` class, add the selectors and corresponding actions to dispatch on `add` or `remove` method calls. Then subscribe to the Google Books API in order to update the state. (This should probably be handled by NgRx Effects, which you can read about [here](../12-ngrx-effects/01-effects-overview.md). For the sake of this demo, NgRx Effects is not being included).

**src/app.ts**

```ts
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books-service';
import { BookList } from './book-list/book-list';
import { BookCollection } from './book-collection/book-collection';

@Component({
  selector: 'app-root',
  template: `
    <h1>Oliver Sacks Books Collection</h1>

    <h2>Books</h2>
    <app-book-list [books]="books()!" (add)="onAdd($event)" />

    <h2>My Collection</h2>
    <app-book-collection
      [books]="bookCollection()!"
      (remove)="onRemove($event)"
    />
  `,
  imports: [BookList, BookCollection],
})
export class App implements OnInit {
  private readonly booksService = inject(GoogleBooksService);
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);
  protected bookCollection = this.store.selectSignal(selectBookCollection);

  protected onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  protected onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
```

And that's it! Click the add and remove buttons to change the state.

Let's cover what you did:

- Defined actions to express events.
- Defined two reducer functions to manage different parts of the state.
- Registered the global state container that is available throughout your application.
- Defined the state, as well as selectors that retrieve specific parts of the state.
- Created two distinct components, as well as a service that fetches from the Google Books API.
- Injected the `Store` and Google Books API services to dispatch actions and select the current state.
