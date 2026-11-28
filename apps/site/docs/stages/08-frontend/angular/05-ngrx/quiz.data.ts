import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'frontend/angular-ngrx',
  title: 'NgRx Store',
  questions: [
    {
      type: 'find-bug',
      prompt:
        'After liking a post, the like button does not update, even though the action is dispatched. Find the line with the bug.',
      code: {
        language: 'ts',
        code: `export const postsReducer = createReducer(
  initialState,
  on(PostsActions.postLiked, (state, { postId }) => {
    state.likedIds.push(postId);
    return state;
  }),
);`,
      },
      bugLine: 4,
      explanation:
        'Reducers must be pure: they return a new state object instead of changing the current one. Selectors compare state by reference, so a mutated array looks unchanged and nothing updates. Return a copy: `{ ...state, likedIds: [...state.likedIds, postId] }`.',
    },
    {
      type: 'choice',
      prompt:
        'Opening the feed page has to load the posts from the API. Where does the HTTP call go?',
      options: [
        'In an effect that listens for the "feed opened" action',
        'In the reducer that handles the "feed opened" action',
        'In a selector that returns the posts',
      ],
      answer: 0,
      explanation:
        'Reducers and selectors must be pure and synchronous, so they cannot call an API. An effect listens for actions, does the side effect (the request), and dispatches a new action with the result - for example "posts loaded" - which a reducer then puts in the state.',
    },
    {
      type: 'fill-in',
      prompt: 'Tell the store that the feed page was opened, and read the posts from the store.',
      code: {
        language: 'ts',
        code: `export class FeedPage {
  private readonly store = inject(Store);
  protected readonly posts = this.store.___(selectPosts);

  constructor() {
    this.store.___(FeedPageActions.opened());
  }
}`,
      },
      blanks: [['selectSignal'], ['dispatch']],
      explanation:
        '`selectSignal` returns the selected state as a signal, which the template reads with `posts()`. (`select` returns the same as an Observable.) `dispatch` sends an action to the store; the reducers and effects decide what happens next. Components never change the state directly.',
    },
    {
      type: 'multi',
      prompt: 'Which statements about selectors are true?',
      options: [
        'They are pure functions that derive data from the state',
        'They can be combined: `createSelector` builds one selector from others',
        'They are memoized: they recalculate only when the state they use changes',
        'They can dispatch actions when the data they select changes',
      ],
      answers: [0, 1, 2],
      explanation:
        'Selectors only read: they take the state and return a piece of it, or something computed from it. `createSelector` composes them and remembers the last result, so components can select derived data cheaply. Reacting to changes with new actions is what effects are for.',
    },
    {
      type: 'choice',
      prompt: 'Which action follows the guidelines in the NgRx docs best?',
      options: [
        "`createAction('[Feed Page] Opened')`",
        "`createAction('SET_POSTS')`",
        "`createAction('loadPostsAndShowSpinner')`",
      ],
      answer: 0,
      explanation:
        'A good action describes a unique event - what happened and where (`[Source] Event`) - not a command for how the state should change. That makes the action log readable in the DevTools, and lets several reducers and effects respond to the same event.',
    },
  ],
});
