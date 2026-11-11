---
title: "Validating form input"
sidebar_position: 3
mdx:
  format: md
tags: [required]
---

**Required reading**

:::info[Source]

Adapted from [Validating form input](https://v20.angular.dev/guide/forms/form-validation) by the Angular team (Google), angular.dev (v20), licensed under [CC BY 4.0 (text), MIT (code samples)](https://angular.dev/license). Changes: converted to Markdown for offline use; code examples inlined; interactive embeds and site navigation removed.

:::

You can improve overall data quality by validating user input for accuracy and completeness. This page shows how to validate user input from the UI and display useful validation messages, in both reactive and template-driven forms.

## Validating input in template-driven forms

To add validation to a template-driven form, you add the same validation attributes as you would with [native HTML form validation](https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5/Constraint_validation). Angular uses directives to match these attributes with validator functions in the framework.

Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors that results in an `INVALID` status, or null, which results in a VALID status.

You can then inspect the control's state by exporting `ngModel` to a local template variable. The following example exports [`NgModel`](https://v20.angular.dev/api/forms/NgModel) into a variable called `name`:

**template/actor-form-template.component.html (name)**

```html
<div>

  <h2>Template-Driven Form</h2>
  <form #actorForm="ngForm" appUnambiguousRole>
    <div [hidden]="actorForm.submitted">
      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }

            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text"
                 id="role"
                 name="role"
                 #role="ngModel"
                 [(ngModel)]="actor.role"
                 [ngModelOptions]="{ updateOn: 'blur' }"
                 appUniqueRole>
          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert">
            Name cannot match role.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill"
                name="skill"
                required [(ngModel)]="actor.skill"
                #skill="ngModel">
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.errors && skill.touched) {
          <div class="alert">
            @if (skill.errors['required']) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button"
              (click)="actorForm.resetForm({})">Reset
      </button>
    </div>

    @if (actorForm.submitted) {
      <div class="submitted-message">
        <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
        <button type="button" (click)="actorForm.resetForm({})">Add new actor</button>
      </div>
    }
  </form>
</div>
```

Notice the following features illustrated by the example.

- The `<input>` element carries the HTML validation attributes: `required` and `minlength`. It also carries a custom validator directive, `forbiddenName`. For more information, see the [Custom validators](https://v20.angular.dev/#defining-custom-validators) section.

- `#name="ngModel"` exports [`NgModel`](https://v20.angular.dev/api/forms/NgModel) into a local variable called `name`. [`NgModel`](https://v20.angular.dev/api/forms/NgModel) mirrors many of the properties of its underlying [`FormControl`](https://v20.angular.dev/api/forms/FormControl) instance, so you can use this in the template to check for control states such as `valid` and `dirty`. For a full list of control properties, see the [AbstractControl](https://v20.angular.dev/api/forms/AbstractControl) API reference.

    - The outermost `@if` reveals a set of nested messages but only if the `name` is invalid and the control is either `dirty` or `touched`.

    - Each nested `@if` can present a custom message for one of the possible validation errors. There are messages for `required`, `minlength`, and `forbiddenName`.


:::tip

To prevent the validator from displaying errors before the user has a chance to edit the form, you should check for either the `dirty` or `touched` states in a control.

:::

- When the user changes the value in the watched field, the control is marked as "dirty"
- When the user blurs the form control element, the control is marked as "touched"

## Validating input in reactive forms

In a reactive form, the source of truth is the component class. Instead of adding validators through attributes in the template, you add validator functions directly to the form control model in the component class. Angular then calls these functions whenever the value of the control changes.

### Validator functions

Validator functions can be either synchronous or asynchronous.

| Validator type | Details |
| :-- | :-- |
| Sync validators | Synchronous functions that take a control instance and immediately return either a set of validation errors or `null`. Pass these in as the second argument when you instantiate a [`FormControl`](https://v20.angular.dev/api/forms/FormControl). |
| Async validators | Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or `null`. Pass these in as the third argument when you instantiate a [`FormControl`](https://v20.angular.dev/api/forms/FormControl). |

For performance reasons, Angular only runs async validators if all sync validators pass. Each must complete before errors are set.

### Built-in validator functions

You can choose to [write your own validator functions](https://v20.angular.dev/#defining-custom-validators), or you can use some of Angular's built-in validators.

The same built-in validators that are available as attributes in template-driven forms, such as `required` and `minlength`, are all available to use as functions from the [`Validators`](https://v20.angular.dev/api/forms/Validators) class. For a full list of built-in validators, see the [Validators](https://v20.angular.dev/api/forms/Validators) API reference.

To update the actor form to be a reactive form, use some of the same built-in validators —this time, in function form, as in the following example.

**reactive/actor-form-reactive.component.ts (validator functions)**

```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';

@Component({
  selector: 'app-actor-form-reactive',
  templateUrl: './actor-form-reactive.component.html',
  styleUrls: ['./actor-form-reactive.component.css'],
  imports: [ReactiveFormsModule],
})
export class HeroFormReactiveComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  actor = {name: 'Tom Cruise', role: 'Romeo', skill: this.skills[3]};

  actorForm = new FormGroup({
    name: new FormControl(this.actor.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
    ]),
    role: new FormControl(this.actor.role),
    skill: new FormControl(this.actor.skill, Validators.required),
  });

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skill');
  }
}
```

In this example, the `name` control sets up two built-in validators —[`Validators.required`](https://v20.angular.dev/api/forms/Validators#required) and [`Validators.minLength(4)`](https://v20.angular.dev/api/forms/Validators#minLength\(4\))— and one custom validator, `forbiddenNameValidator`.

All of these validators are synchronous, so they are passed as the second argument. Notice that you can support multiple validators by passing the functions in as an array.

This example also adds a few getter methods. In a reactive form, you can always access any form control through the `get` method on its parent group, but sometimes it's useful to define getters as shorthand for the template.

If you look at the template for the `name` input again, it is fairly similar to the template-driven example.

**reactive/actor-form-reactive.component.html (name with error msg)**

```html
<div class="container">

  <h2>Reactive Form</h2>

  <form [formGroup]="actorForm" #formDir="ngForm">

    <div [hidden]="formDir.submitted">

      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">

          <label for="name">Name</label>
          <input type="text" id="name" class="form-control"
                 formControlName="name" required>

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert alert-danger">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }
            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text" id="role" class="form-control"
                 formControlName="role">

          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert alert-danger role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert alert-danger">
            Name cannot match role or audiences will be confused.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill" class="form-control"
                formControlName="skill" required>
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.invalid && skill.touched) {
          <div class="alert alert-danger">
            @if (skill.hasError('required')) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              class="btn btn-default"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button" class="btn btn-default"
              (click)="formDir.resetForm({})">Reset
      </button>
    </div>
  </form>

  @if (formDir.submitted) {
    <div class="submitted-message">
      <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
      <button type="button" (click)="formDir.resetForm({})">Add new actor</button>
    </div>
  }
</div>
```

This form differs from the template-driven version in that it no longer exports any directives. Instead, it uses the `name` getter defined in the component class.

Notice that the `required` attribute is still present in the template. Although it's not necessary for validation, it should be retained for accessibility purposes.

## Defining custom validators

The built-in validators don't always match the exact use case of your application, so you sometimes need to create a custom validator.

Consider the `forbiddenNameValidator` function from the previous example. Here's what the definition of that function looks like.

**shared/forbidden-name.directive.ts (forbiddenNameValidator)**

```ts
import {Directive, forwardRef, input} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ForbiddenValidatorDirective),
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  readonly forbiddenName = input<string>('', {alias: 'appForbiddenName'});

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName(), 'i'))(control)
      : null;
  }
}
```

The function is a factory that takes a regular expression to detect a *specific* forbidden name and returns a validator function.

In this sample, the forbidden name is "bob", so the validator rejects any actor name containing "bob". Elsewhere it could reject "alice" or any name that the configuring regular expression matches.

The `forbiddenNameValidator` factory returns the configured validator function. That function takes an Angular control object and returns *either* null if the control value is valid *or* a validation error object. The validation error object typically has a property whose name is the validation key, `'forbiddenName'`, and whose value is an arbitrary dictionary of values that you could insert into an error message, `{name}`.

Custom async validators are similar to sync validators, but they must instead return a Promise or observable that later emits null or a validation error object. In the case of an observable, the observable must complete, at which point the form uses the last value emitted for validation.

### Adding custom validators to reactive forms

In reactive forms, add a custom validator by passing the function directly to the [`FormControl`](https://v20.angular.dev/api/forms/FormControl).

**reactive/actor-form-reactive.component.ts (validator functions)**

```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';

@Component({
  selector: 'app-actor-form-reactive',
  templateUrl: './actor-form-reactive.component.html',
  styleUrls: ['./actor-form-reactive.component.css'],
  imports: [ReactiveFormsModule],
})
export class HeroFormReactiveComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  actor = {name: 'Tom Cruise', role: 'Romeo', skill: this.skills[3]};

  actorForm = new FormGroup({
    name: new FormControl(this.actor.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
    ]),
    role: new FormControl(this.actor.role),
    skill: new FormControl(this.actor.skill, Validators.required),
  });

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skill');
  }
}
```

### Adding custom validators to template-driven forms

In template-driven forms, add a directive to the template, where the directive wraps the validator function. For example, the corresponding `ForbiddenValidatorDirective` serves as a wrapper around the `forbiddenNameValidator`.

Angular recognizes the directive's role in the validation process because the directive registers itself with the [`NG_VALIDATORS`](https://v20.angular.dev/api/forms/NG_VALIDATORS) provider, as shown in the following example. [`NG_VALIDATORS`](https://v20.angular.dev/api/forms/NG_VALIDATORS) is a predefined provider with an extensible collection of validators.

**shared/forbidden-name.directive.ts (providers)**

```ts
import {Directive, forwardRef, input} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ForbiddenValidatorDirective),
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  readonly forbiddenName = input<string>('', {alias: 'appForbiddenName'});

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName(), 'i'))(control)
      : null;
  }
}
```

The directive class then implements the [`Validator`](https://v20.angular.dev/api/forms/Validator) interface, so that it can easily integrate with Angular forms. Here is the rest of the directive to help you get an idea of how it all comes together.

**shared/forbidden-name.directive.ts (directive)**

```ts
import {Directive, forwardRef, input} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** An actor's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ForbiddenValidatorDirective),
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  readonly forbiddenName = input<string>('', {alias: 'appForbiddenName'});

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName(), 'i'))(control)
      : null;
  }
}
```

Once the `ForbiddenValidatorDirective` is ready, you can add its selector, `appForbiddenName`, to any input element to activate it. For example:

**template/actor-form-template.component.html (forbidden-name-input)**

```html
<div>

  <h2>Template-Driven Form</h2>
  <form #actorForm="ngForm" appUnambiguousRole>
    <div [hidden]="actorForm.submitted">
      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }

            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text"
                 id="role"
                 name="role"
                 #role="ngModel"
                 [(ngModel)]="actor.role"
                 [ngModelOptions]="{ updateOn: 'blur' }"
                 appUniqueRole>
          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert">
            Name cannot match role.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill"
                name="skill"
                required [(ngModel)]="actor.skill"
                #skill="ngModel">
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.errors && skill.touched) {
          <div class="alert">
            @if (skill.errors['required']) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button"
              (click)="actorForm.resetForm({})">Reset
      </button>
    </div>

    @if (actorForm.submitted) {
      <div class="submitted-message">
        <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
        <button type="button" (click)="actorForm.resetForm({})">Add new actor</button>
      </div>
    }
  </form>
</div>
```

:::tip

Notice that the custom validation directive is instantiated with `useExisting` rather than `useClass`. The registered validator must be *this instance* of the `ForbiddenValidatorDirective` —the instance in the form with its `forbiddenName` property bound to "bob".

:::

If you were to replace `useExisting` with `useClass`, then you'd be registering a new class instance, one that doesn't have a `forbiddenName`.

## Control status CSS classes

Angular automatically mirrors many control properties onto the form control element as CSS classes. Use these classes to style form control elements according to the state of the form. The following classes are currently supported.

- `.ng-valid`
- `.ng-invalid`
- `.ng-pending`
- `.ng-pristine`
- `.ng-dirty`
- `.ng-untouched`
- `.ng-touched`
- `.ng-submitted` (enclosing form element only)

In the following example, the actor form uses the `.ng-valid` and `.ng-invalid` classes to set the color of each form control's border.

**forms.css (status classes)**

```css
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}

.alert div {
  background-color: #fed3d3;
  color: #820000;
  padding: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: .5rem;
}

select {
  width: 100%;
  padding: .5rem;
}
```

## Cross-field validation

A cross-field validator is a [custom validator](https://v20.angular.dev/#defining-custom-validators "Read about custom validators") that compares the values of different fields in a form and accepts or rejects them in combination. For example, you might have a form that offers mutually incompatible options, so that if the user can choose A or B, but not both. Some field values might also depend on others; a user might be allowed to choose B only if A is also chosen.

The following cross validation examples show how to do the following:

- Validate reactive or template-based form input based on the values of two sibling controls,
- Show a descriptive error message after the user interacted with the form and the validation failed.

The examples use cross-validation to ensure that actors do not reuse the same name in their role by filling out the Actor Form. The validators do this by checking that the actor names and roles do not match.

### Adding cross-validation to reactive forms

The form has the following structure:

```css
const actorForm = new FormGroup({
'name': new FormControl(),
'role': new FormControl(),
'skill': new FormControl()
});
```

Notice that the `name` and `role` are sibling controls. To evaluate both controls in a single custom validator, you must perform the validation in a common ancestor control: the [`FormGroup`](https://v20.angular.dev/api/forms/FormGroup). You query the [`FormGroup`](https://v20.angular.dev/api/forms/FormGroup) for its child controls so that you can compare their values.

To add a validator to the [`FormGroup`](https://v20.angular.dev/api/forms/FormGroup), pass the new validator in as the second argument on creation.

```css
const actorForm = new FormGroup({
'name': new FormControl(),
'role': new FormControl(),
'skill': new FormControl()
}, { validators: unambiguousRoleValidator });
```

The validator code is as follows.

**shared/unambiguous-role.directive.ts**

```ts
import {Directive, forwardRef} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** An actor's name can't match the actor's role */
export const unambiguousRoleValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name = control.get('name');
  const role = control.get('role');

  return name && role && name.value === role.value ? {unambiguousRole: true} : null;
};

@Directive({
  selector: '[appUnambiguousRole]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UnambiguousRoleValidatorDirective),
      multi: true,
    },
  ],
})
export class UnambiguousRoleValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return unambiguousRoleValidator(control);
  }
}
```

The `unambiguousRoleValidator` validator implements the [`ValidatorFn`](https://v20.angular.dev/api/forms/ValidatorFn) interface. It takes an Angular control object as an argument and returns either null if the form is valid, or [`ValidationErrors`](https://v20.angular.dev/api/forms/ValidationErrors) otherwise.

The validator retrieves the child controls by calling the [`FormGroup`](https://v20.angular.dev/api/forms/FormGroup)'s [get](https://v20.angular.dev/api/forms/AbstractControl#get) method, then compares the values of the `name` and `role` controls.

If the values do not match, the role is unambiguous, both are valid, and the validator returns null. If they do match, the actor's role is ambiguous and the validator must mark the form as invalid by returning an error object.

To provide better user experience, the template shows an appropriate error message when the form is invalid.

**reactive/actor-form-template.component.html**

```html
<div class="container">

  <h2>Reactive Form</h2>

  <form [formGroup]="actorForm" #formDir="ngForm">

    <div [hidden]="formDir.submitted">

      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">

          <label for="name">Name</label>
          <input type="text" id="name" class="form-control"
                 formControlName="name" required>

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert alert-danger">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }
            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text" id="role" class="form-control"
                 formControlName="role">

          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert alert-danger role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert alert-danger">
            Name cannot match role or audiences will be confused.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill" class="form-control"
                formControlName="skill" required>
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.invalid && skill.touched) {
          <div class="alert alert-danger">
            @if (skill.hasError('required')) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              class="btn btn-default"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button" class="btn btn-default"
              (click)="formDir.resetForm({})">Reset
      </button>
    </div>
  </form>

  @if (formDir.submitted) {
    <div class="submitted-message">
      <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
      <button type="button" (click)="formDir.resetForm({})">Add new actor</button>
    </div>
  }
</div>
```

This `@if` displays the error if the [`FormGroup`](https://v20.angular.dev/api/forms/FormGroup) has the cross validation error returned by the `unambiguousRoleValidator` validator, but only if the user finished [interacting with the form](https://v20.angular.dev/#control-status-css-classes).

### Adding cross-validation to template-driven forms

For a template-driven form, you must create a directive to wrap the validator function. You provide that directive as the validator using the [](https://v20.angular.dev/api/forms/NG_VALIDATORS)[`NG_VALIDATORS`](https://v20.angular.dev/api/forms/NG_VALIDATORS) token, as shown in the following example.

**shared/unambiguous-role.directive.ts**

```ts
import {Directive, forwardRef} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/** An actor's name can't match the actor's role */
export const unambiguousRoleValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name = control.get('name');
  const role = control.get('role');

  return name && role && name.value === role.value ? {unambiguousRole: true} : null;
};

@Directive({
  selector: '[appUnambiguousRole]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UnambiguousRoleValidatorDirective),
      multi: true,
    },
  ],
})
export class UnambiguousRoleValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return unambiguousRoleValidator(control);
  }
}
```

You must add the new directive to the HTML template. Because the validator must be registered at the highest level in the form, the following template puts the directive on the `form` tag.

**template/actor-form-template.component.html**

```html
<div>

  <h2>Template-Driven Form</h2>
  <form #actorForm="ngForm" appUnambiguousRole>
    <div [hidden]="actorForm.submitted">
      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }

            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text"
                 id="role"
                 name="role"
                 #role="ngModel"
                 [(ngModel)]="actor.role"
                 [ngModelOptions]="{ updateOn: 'blur' }"
                 appUniqueRole>
          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert">
            Name cannot match role.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill"
                name="skill"
                required [(ngModel)]="actor.skill"
                #skill="ngModel">
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.errors && skill.touched) {
          <div class="alert">
            @if (skill.errors['required']) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button"
              (click)="actorForm.resetForm({})">Reset
      </button>
    </div>

    @if (actorForm.submitted) {
      <div class="submitted-message">
        <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
        <button type="button" (click)="actorForm.resetForm({})">Add new actor</button>
      </div>
    }
  </form>
</div>
```

To provide better user experience, an appropriate error message appears when the form is invalid.

**template/actor-form-template.component.html**

```html
<div>

  <h2>Template-Driven Form</h2>
  <form #actorForm="ngForm" appUnambiguousRole>
    <div [hidden]="actorForm.submitted">
      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }

            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text"
                 id="role"
                 name="role"
                 #role="ngModel"
                 [(ngModel)]="actor.role"
                 [ngModelOptions]="{ updateOn: 'blur' }"
                 appUniqueRole>
          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert">
            Name cannot match role.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill"
                name="skill"
                required [(ngModel)]="actor.skill"
                #skill="ngModel">
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.errors && skill.touched) {
          <div class="alert">
            @if (skill.errors['required']) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button"
              (click)="actorForm.resetForm({})">Reset
      </button>
    </div>

    @if (actorForm.submitted) {
      <div class="submitted-message">
        <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
        <button type="button" (click)="actorForm.resetForm({})">Add new actor</button>
      </div>
    }
  </form>
</div>
```

This is the same in both template-driven and reactive forms.

## Creating asynchronous validators

Asynchronous validators implement the [`AsyncValidatorFn`](https://v20.angular.dev/api/forms/AsyncValidatorFn) and [`AsyncValidator`](https://v20.angular.dev/api/forms/AsyncValidator) interfaces. These are very similar to their synchronous counterparts, with the following differences.

- The `validate()` functions must return a Promise or an observable,
- The observable returned must be finite, meaning it must complete at some point. To convert an infinite observable into a finite one, pipe the observable through a filtering operator such as `first`, `last`, `take`, or `takeUntil`.

Asynchronous validation happens after the synchronous validation, and is performed only if the synchronous validation is successful. This check lets forms avoid potentially expensive async validation processes (such as an HTTP request) if the more basic validation methods have already found invalid input.

After asynchronous validation begins, the form control enters a `pending` state. Inspect the control's `pending` property and use it to give visual feedback about the ongoing validation operation.

A common UI pattern is to show a spinner while the async validation is being performed. The following example shows how to achieve this in a template-driven form.

```html
<input [(ngModel)]="name" #model="ngModel" appSomeAsyncValidator>
@if(model.pending) {
<app-spinner />
}
```

### Implementing a custom async validator

In the following example, an async validator ensures that actors are cast for a role that is not already taken. New actors are constantly auditioning and old actors are retiring, so the list of available roles cannot be retrieved ahead of time. To validate the potential role entry, the validator must initiate an asynchronous operation to consult a central database of all currently cast actors.

The following code creates the validator class, `UniqueRoleValidator`, which implements the [`AsyncValidator`](https://v20.angular.dev/api/forms/AsyncValidator) interface.

```ts
import {Directive, forwardRef, inject, Injectable} from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {ActorsService} from './actors.service';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UniqueRoleValidator implements AsyncValidator {
  private readonly actorsService = inject(ActorsService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.actorsService.isRoleTaken(control.value).pipe(
      map((isTaken) => (isTaken ? {uniqueRole: true} : null)),
      catchError(() => of(null)),
    );
  }
}

@Directive({
  selector: '[appUniqueRole]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueRoleValidatorDirective),
      multi: true,
    },
  ],
})
export class UniqueRoleValidatorDirective implements AsyncValidator {
  private readonly validator = inject(UniqueRoleValidator);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
```

The `actorsService` property is initialized with an instance of the `ActorsService` token, which defines the following interface.

```ts
interface ActorsService {
  isRoleTaken: (role: string) => Observable<boolean>;
}
```

In a real world application, the `ActorsService` would be responsible for making an HTTP request to the actor database to check if the role is available. From the validator's point of view, the actual implementation of the service is not important, so the example can just code against the `ActorsService` interface.

As the validation begins, the `UnambiguousRoleValidator` delegates to the `ActorsService` `isRoleTaken()` method with the current control value. At this point the control is marked as `pending` and remains in this state until the observable chain returned from the `validate()` method completes.

The `isRoleTaken()` method dispatches an HTTP request that checks if the role is available, and returns `Observable<boolean>` as the result. The `validate()` method pipes the response through the `map` operator and transforms it into a validation result.

The method then, like any validator, returns `null` if the form is valid, and [`ValidationErrors`](https://v20.angular.dev/api/forms/ValidationErrors) if it is not. This validator handles any potential errors with the `catchError` operator. In this case, the validator treats the `isRoleTaken()` error as a successful validation, because failure to make a validation request does not necessarily mean that the role is invalid. You could handle the error differently and return the `ValidationError` object instead.

After some time passes, the observable chain completes and the asynchronous validation is done. The `pending` flag is set to `false`, and the form validity is updated.

### Adding async validators to reactive forms

To use an async validator in reactive forms, begin by injecting the validator into a property of the component class.

```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';
import {UniqueRoleValidator} from '../shared/role.directive';

@Component({
  selector: 'app-actor-form-reactive',
  templateUrl: './actor-form-reactive.component.html',
  styleUrls: ['./actor-form-reactive.component.css'],
  imports: [ReactiveFormsModule],
})
export class HeroFormReactiveComponent {
  roleValidator = inject(UniqueRoleValidator);

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  actor = {name: 'Tom Cruise', role: 'Romeo', skill: this.skills[3]};

  actorForm!: FormGroup;

  ngOnInit(): void {
    const roleControl = new FormControl('', {
      asyncValidators: [this.roleValidator.validate.bind(this.roleValidator)],
      updateOn: 'blur',
    });
    roleControl.setValue(this.actor.role);

    this.actorForm = new FormGroup({
      name: new FormControl(this.actor.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      ]),
      role: roleControl,
      skill: new FormControl(this.actor.skill, Validators.required),
    });
  }

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skill');
  }

  get role() {
    return this.actorForm.get('role');
  }
}
```

Then, pass the validator function directly to the [`FormControl`](https://v20.angular.dev/api/forms/FormControl) to apply it.

In the following example, the `validate` function of `UnambiguousRoleValidator` is applied to `roleControl` by passing it to the control's `asyncValidators` option and binding it to the instance of `UnambiguousRoleValidator` that was injected into `ActorFormReactiveComponent`. The value of `asyncValidators` can be either a single async validator function, or an array of functions. To learn more about [`FormControl`](https://v20.angular.dev/api/forms/FormControl) options, see the [AbstractControlOptions](https://v20.angular.dev/api/forms/AbstractControlOptions) API reference.

```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';
import {UniqueRoleValidator} from '../shared/role.directive';

@Component({
  selector: 'app-actor-form-reactive',
  templateUrl: './actor-form-reactive.component.html',
  styleUrls: ['./actor-form-reactive.component.css'],
  imports: [ReactiveFormsModule],
})
export class HeroFormReactiveComponent {
  roleValidator = inject(UniqueRoleValidator);

  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  actor = {name: 'Tom Cruise', role: 'Romeo', skill: this.skills[3]};

  actorForm!: FormGroup;

  ngOnInit(): void {
    const roleControl = new FormControl('', {
      asyncValidators: [this.roleValidator.validate.bind(this.roleValidator)],
      updateOn: 'blur',
    });
    roleControl.setValue(this.actor.role);

    this.actorForm = new FormGroup({
      name: new FormControl(this.actor.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      ]),
      role: roleControl,
      skill: new FormControl(this.actor.skill, Validators.required),
    });
  }

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skill');
  }

  get role() {
    return this.actorForm.get('role');
  }
}
```

### Adding async validators to template-driven forms

To use an async validator in template-driven forms, create a new directive and register the [`NG_ASYNC_VALIDATORS`](https://v20.angular.dev/api/forms/NG_ASYNC_VALIDATORS) provider on it.

In the example below, the directive injects the `UniqueRoleValidator` class that contains the actual validation logic and invokes it in the `validate` function, triggered by Angular when validation should happen.

```ts
import {Directive, forwardRef, inject, Injectable} from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {ActorsService} from './actors.service';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UniqueRoleValidator implements AsyncValidator {
  private readonly actorsService = inject(ActorsService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.actorsService.isRoleTaken(control.value).pipe(
      map((isTaken) => (isTaken ? {uniqueRole: true} : null)),
      catchError(() => of(null)),
    );
  }
}

@Directive({
  selector: '[appUniqueRole]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueRoleValidatorDirective),
      multi: true,
    },
  ],
})
export class UniqueRoleValidatorDirective implements AsyncValidator {
  private readonly validator = inject(UniqueRoleValidator);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
```

Then, as with synchronous validators, add the directive's selector to an input to activate it.

**template/actor-form-template.component.html (unique-unambiguous-role-input)**

```html
<div>

  <h2>Template-Driven Form</h2>
  <form #actorForm="ngForm" appUnambiguousRole>
    <div [hidden]="actorForm.submitted">
      <div class="cross-validation"
           [class.cross-validation-error]="actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">

          @if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">

              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }

            </div>
          }
        </div>

        <div class="form-group">
          <label for="role">Role</label>
          <input type="text"
                 id="role"
                 name="role"
                 #role="ngModel"
                 [(ngModel)]="actor.role"
                 [ngModelOptions]="{ updateOn: 'blur' }"
                 appUniqueRole>
          @if (role.pending) {
            <div>Validating...</div>
          }
          @if (role.invalid) {
            <div class="alert role-errors">
              @if (role.hasError('uniqueRole')) {
                <div>
                  Role is already taken.
                </div>
              }
            </div>
          }
        </div>

        @if (actorForm.hasError('unambiguousRole') && (actorForm.touched || actorForm.dirty)) {
          <div class="cross-validation-error-message alert">
            Name cannot match role.
          </div>
        }
      </div>

      <div class="form-group">
        <label for="skill">Skill</label>
        <select id="skill"
                name="skill"
                required [(ngModel)]="actor.skill"
                #skill="ngModel">
          @for (skill of skills; track $index) {
            <option [value]="skill">{{ skill }}</option>
          }
        </select>

        @if (skill.errors && skill.touched) {
          <div class="alert">
            @if (skill.errors['required']) {
              <div>Skill is required.</div>
            }
          </div>
        }
      </div>

      <p>Complete the form to enable the Submit button.</p>
      <button type="submit"
              [disabled]="actorForm.invalid">Submit
      </button>
      <button type="button"
              (click)="actorForm.resetForm({})">Reset
      </button>
    </div>

    @if (actorForm.submitted) {
      <div class="submitted-message">
        <p>You've submitted your actor, {{ actorForm.value.name }}!</p>
        <button type="button" (click)="actorForm.resetForm({})">Add new actor</button>
      </div>
    }
  </form>
</div>
```

### Optimizing performance of async validators

By default, all validators run after every form value change. With synchronous validators, this does not normally have a noticeable impact on application performance. Async validators, however, commonly perform some kind of HTTP request to validate the control. Dispatching an HTTP request after every keystroke could put a strain on the backend API, and should be avoided if possible.

You can delay updating the form validity by changing the `updateOn` property from `change` (default) to `submit` or `blur`.

With template-driven forms, set the property in the template.

```html
<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">
```

With reactive forms, set the property in the [`FormControl`](https://v20.angular.dev/api/forms/FormControl) instance.

```ts
new FormControl('', {updateOn: 'blur'});
```

## Interaction with native HTML form validation

By default, Angular disables [native HTML form validation](https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation) by adding the `novalidate` attribute on the enclosing `<form>` and uses directives to match these attributes with validator functions in the framework. If you want to use native validation **in combination** with Angular-based validation, you can re-enable it with the `ngNativeValidate` directive. See the [API docs](https://v20.angular.dev/api/forms/NgForm#native-dom-validation-ui) for details.
