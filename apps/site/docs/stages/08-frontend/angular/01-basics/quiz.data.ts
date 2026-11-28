import { defineQuiz } from '@site/src/components/Quiz';

export default defineQuiz({
  id: 'frontend/angular-basics',
  title: 'Angular basics',
  questions: [
    {
      type: 'find-bug',
      prompt: 'Clicking the button never changes the number of likes. Find the line with the bug.',
      code: {
        language: 'ts',
        code: `@Component({
  selector: 'app-like-button',
  template: \`
    <button (click)="like">Like ({{ likes() }})</button>
  \`,
})
export class LikeButton {
  likes = signal(0);

  like() {
    this.likes.update((count) => count + 1);
  }
}`,
      },
      bugLine: 4,
      explanation:
        'An event binding runs the statement inside the quotes when the event fires. `like` only refers to the method without calling it, so nothing happens - and Angular reports no error. The binding must call it: `(click)="like()"`.',
    },
    {
      type: 'fill-in',
      prompt:
        'Complete the post card: it receives a post from its parent, and tells the parent when the post is liked.',
      code: {
        language: 'ts',
        code: `export class PostCard {
  post = ___<Post>();
  liked = ___<string>();
}`,
      },
      blanks: [['input', 'input.required'], ['output']],
      explanation:
        '`input()` declares a property the parent sets in its template (`[post]="..."`); `input.required()` also makes the parent pass it. `output()` declares an event the parent listens to (`(liked)="..."`). Data goes down through inputs, and events go up through outputs.',
    },
    {
      type: 'choice',
      prompt: 'What is `track post.id` for in this template?',
      code: {
        language: 'html',
        code: `@for (post of posts(); track post.id) {
  <app-post-card [post]="post" />
}`,
      },
      options: [
        'It tells Angular which item is which, so when the list changes it updates only the posts that changed',
        'It sorts the posts by their id',
        'It skips posts that have no id',
        'It saves the id of the post the user last clicked',
      ],
      answer: 0,
      explanation:
        'With a key for each item, Angular can match the items of the new list to the ones already on the page. When posts are added, removed or reordered, it moves or creates only the elements that need it, instead of rebuilding the whole list.',
    },
    {
      type: 'multi',
      prompt: 'Which statements about signals are true?',
      options: [
        'You read a signal by calling it, e.g. `likes()`',
        'A `computed` signal updates when the signals it reads change',
        'You can change a `computed` signal with `set()`',
        'When a signal changes, Angular re-renders every component in the app',
      ],
      answers: [0, 1],
      explanation:
        'Signals are functions: calling one returns its value and lets Angular track who read it. A `computed` signal derives its value from other signals and is read-only, so it has no `set()`. Because Angular knows where each signal is read, it updates only the places that depend on the signal that changed.',
    },
    {
      type: 'choice',
      prompt:
        'Both the feed and the profile page call `inject(PostsService)`. How many `PostsService` objects does the app create?',
      code: {
        language: 'ts',
        code: `@Injectable({ providedIn: 'root' })
export class PostsService {
  // ...
}`,
      },
      options: [
        'One, shared by both pages',
        'Two, one for each page',
        'A new one for every call to a method',
      ],
      answer: 0,
      explanation:
        "`providedIn: 'root'` registers the service in the application's root injector, which creates it once, the first time something injects it. Every component that injects it gets the same instance - which is also what lets services share state between components.",
    },
  ],
});
