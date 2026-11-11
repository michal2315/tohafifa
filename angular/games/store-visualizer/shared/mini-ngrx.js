(function (global) {
  'use strict';

  const runTeardown = (t) => {
    if (typeof t === 'function') t();
    else if (t && typeof t.unsubscribe === 'function') t.unsubscribe();
  };

  class Subscription {
    constructor() {
      this.closed = false;
      this._teardowns = [];
    }

    add(t) {
      if (!t) return;
      if (this.closed) runTeardown(t);
      else this._teardowns.push(t);
    }

    unsubscribe() {
      if (this.closed) return;
      this.closed = true;
      const list = this._teardowns;
      this._teardowns = [];
      list.forEach(runTeardown);
    }
  }

  class Subscriber extends Subscription {
    constructor(observer) {
      super();
      this._observer = typeof observer === 'function' ? { next: observer } : observer || {};
      this.stopped = false;
    }

    next(value) {
      if (!this.stopped && this._observer.next) this._observer.next(value);
    }

    error(err) {
      if (this.stopped) return;
      this.stopped = true;
      try {
        if (this._observer.error) this._observer.error(err);
        else setTimeout(() => { throw err; });
      } finally {
        this.unsubscribe();
      }
    }

    complete() {
      if (this.stopped) return;
      this.stopped = true;
      try {
        if (this._observer.complete) this._observer.complete();
      } finally {
        this.unsubscribe();
      }
    }
  }

  class Observable {
    constructor(subscribeFn) {
      this._subscribeFn = subscribeFn;
    }

    subscribe(observer) {
      const subscriber = new Subscriber(observer);
      try {
        subscriber.add(this._subscribeFn(subscriber));
      } catch (err) {
        subscriber.error(err);
      }
      return subscriber;
    }

    pipe(...operators) {
      return operators.reduce((source, operator) => {
        if (typeof operator !== 'function') {
          throw new StoreError('pipe() takes operators, like map(...) or switchMap(...). One of the arguments is not an operator.');
        }
        return operator(source);
      }, this);
    }
  }

  const forward = (subscriber) => ({
    next: (v) => subscriber.next(v),
    error: (e) => subscriber.error(e),
    complete: () => subscriber.complete(),
  });

  class Subject extends Observable {
    constructor() {
      super((subscriber) => {
        if (this._stopped) {
          if (this._hasError) subscriber.error(this._error);
          else subscriber.complete();
          return undefined;
        }
        this._observers.add(subscriber);
        this._onSubscribe(subscriber);
        return () => this._observers.delete(subscriber);
      });
      this._observers = new Set();
      this._stopped = false;
    }

    _onSubscribe() {}

    next(value) {
      if (this._stopped) return;
      [...this._observers].forEach((s) => s.next(value));
    }

    error(err) {
      if (this._stopped) return;
      this._stopped = true;
      this._hasError = true;
      this._error = err;
      [...this._observers].forEach((s) => s.error(err));
    }

    complete() {
      if (this._stopped) return;
      this._stopped = true;
      [...this._observers].forEach((s) => s.complete());
    }

    asObservable() {
      return new Observable((subscriber) => this.subscribe(forward(subscriber)));
    }
  }

  class BehaviorSubject extends Subject {
    constructor(value) {
      super();
      this._value = value;
    }

    get value() {
      return this._value;
    }

    _onSubscribe(subscriber) {
      subscriber.next(this._value);
    }

    next(value) {
      this._value = value;
      super.next(value);
    }
  }

  const isObservable = (x) => x instanceof Observable;

  function from(x, operatorName) {
    if (isObservable(x)) return x;
    if (Array.isArray(x)) return of(...x);
    if (x && typeof x.then === 'function') {
      return new Observable((s) => {
        x.then((v) => { s.next(v); s.complete(); }, (e) => s.error(e));
      });
    }
    throw new StoreError(
      `${operatorName || 'This operator'} must return an observable, but the function returned ${describe(x)}. ` +
      'Wrap a plain value with of(...), or use map(...) instead.'
    );
  }

  function describe(x) {
    if (x === undefined) return 'undefined (did you forget "return"?)';
    if (x === null) return 'null';
    if (x && typeof x.type === 'string') return `an action ("${x.type}")`;
    if (typeof x === 'function') return 'a function';
    return typeof x === 'object' ? 'an object' : JSON.stringify(x);
  }

  const of = (...values) => new Observable((s) => {
    for (const v of values) {
      if (s.closed) return;
      s.next(v);
    }
    s.complete();
  });

  const EMPTY = new Observable((s) => s.complete());

  const throwError = (factory) => new Observable((s) => s.error(typeof factory === 'function' ? factory() : factory));

  const timer = (ms) => new Observable((s) => {
    const id = setTimeout(() => { s.next(0); s.complete(); }, ms);
    return () => clearTimeout(id);
  });

  const simple = (name, handle) => (fn) => {
    if (fn !== undefined && typeof fn !== 'function' && name !== 'take' && name !== 'delay') {
      throw new StoreError(`${name}() takes a function.`);
    }
    return (source) => new Observable((s) => source.subscribe({
      next: (v) => handle(s, v, fn),
      error: (e) => s.error(e),
      complete: () => s.complete(),
    }));
  };

  const map = simple('map', (s, v, fn) => {
    let r;
    try { r = fn(v); } catch (e) { s.error(e); return; }
    s.next(r);
  });

  const filter = simple('filter', (s, v, fn) => {
    let keep;
    try { keep = fn(v); } catch (e) { s.error(e); return; }
    if (keep) s.next(v);
  });

  const tap = simple('tap', (s, v, fn) => {
    try { if (fn) fn(v); } catch (e) { s.error(e); return; }
    s.next(v);
  });

  const distinctUntilChanged = () => (source) => new Observable((s) => {
    let first = true;
    let last;
    return source.subscribe({
      next: (v) => {
        if (first || v !== last) { first = false; last = v; s.next(v); }
      },
      error: (e) => s.error(e),
      complete: () => s.complete(),
    });
  });

  const take = (count) => (source) => new Observable((s) => {
    let seen = 0;
    if (count <= 0) { s.complete(); return undefined; }
    const sub = source.subscribe({
      next: (v) => {
        seen += 1;
        s.next(v);
        if (seen >= count) s.complete();
      },
      error: (e) => s.error(e),
      complete: () => s.complete(),
    });
    return sub;
  });

  const delay = (ms) => (source) => new Observable((s) => {
    const ids = new Set();
    let done = false;
    const sub = source.subscribe({
      next: (v) => {
        const id = setTimeout(() => {
          ids.delete(id);
          s.next(v);
          if (done && !ids.size) s.complete();
        }, ms);
        ids.add(id);
      },
      error: (e) => s.error(e),
      complete: () => { done = true; if (!ids.size) s.complete(); },
    });
    return () => { sub.unsubscribe(); ids.forEach(clearTimeout); };
  });

  const finalize = (fn) => (source) => new Observable((s) => {
    const sub = source.subscribe(forward(s));
    return () => { sub.unsubscribe(); fn(); };
  });

  function flattening(name, mode) {
    return (project) => {
      if (typeof project !== 'function') {
        throw new StoreError(`${name}() takes a function that returns an observable, like ${name}((action) => api.call(...)).`);
      }
      return (source) => new Observable((s) => {
        const inners = new Set();
        const queue = [];
        let outerDone = false;
        let index = 0;

        const checkDone = () => {
          if (outerDone && inners.size === 0 && queue.length === 0) s.complete();
        };

        const startInner = (value) => {
          let inner;
          try {
            inner = from(project(value, index++), `The function inside ${name}()`);
          } catch (e) {
            s.error(e);
            return;
          }
          const holder = { sub: null };
          inners.add(holder);
          holder.sub = inner.subscribe({
            next: (v) => s.next(v),
            error: (e) => s.error(e),
            complete: () => {
              inners.delete(holder);
              if (mode === 'concat' && queue.length) startInner(queue.shift());
              checkDone();
            },
          });
        };

        const outer = source.subscribe({
          next: (value) => {
            if (mode === 'merge') startInner(value);
            else if (mode === 'concat') {
              if (inners.size) queue.push(value);
              else startInner(value);
            } else if (mode === 'switch') {
              inners.forEach((h) => h.sub && h.sub.unsubscribe());
              inners.clear();
              startInner(value);
            } else if (mode === 'exhaust') {
              if (!inners.size) startInner(value);
            }
          },
          error: (e) => s.error(e),
          complete: () => { outerDone = true; checkDone(); },
        });

        return () => {
          outer.unsubscribe();
          inners.forEach((h) => h.sub && h.sub.unsubscribe());
          inners.clear();
        };
      });
    };
  }

  const mergeMap = flattening('mergeMap', 'merge');
  const concatMap = flattening('concatMap', 'concat');
  const switchMap = flattening('switchMap', 'switch');
  const exhaustMap = flattening('exhaustMap', 'exhaust');

  const catchError = (handler) => {
    if (typeof handler !== 'function') throw new StoreError('catchError() takes a function: catchError((error) => of(...)).');
    return (source) => new Observable((s) => {
      let inner = null;
      const outer = source.subscribe({
        next: (v) => s.next(v),
        error: (e) => {
          let replacement;
          try {
            replacement = from(handler(e), 'The function inside catchError()');
          } catch (e2) {
            s.error(e2);
            return;
          }
          inner = replacement.subscribe(forward(s));
        },
        complete: () => s.complete(),
      });
      return () => { outer.unsubscribe(); if (inner) inner.unsubscribe(); };
    });
  };

  class StoreError extends Error {
    constructor(message, kind) {
      super(message);
      this.name = 'StoreError';
      this.kind = kind || 'store';
    }
  }

  function toActionName(eventName) {
    return eventName
      .trim()
      .split(/\s+/)
      .map((word, i) => {
        if (i === 0) return word.charAt(0).toLowerCase() + word.slice(1);
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  }

  const props = () => ({ __props: true });
  const emptyProps = () => ({ __props: false });

  function createAction(type, config) {
    const withProps = Boolean(config && config.__props);
    const creator = withProps
      ? (payload) => {
        if (payload === undefined || payload === null || typeof payload !== 'object') {
          throw new StoreError(`The action "${type}" needs its props as an object, like ({ id: 'o1' }).`, 'action');
        }
        if ('type' in payload) throw new StoreError(`Props of "${type}" can't have a "type" key.`, 'action');
        return { ...payload, type };
      }
      : () => ({ type });
    creator.type = type;
    creator.toString = () => type;
    return creator;
  }

  function createActionGroup(config) {
    if (!config || typeof config.source !== 'string' || !config.source.trim()) {
      throw new StoreError('createActionGroup() needs a "source" string, like source: \'Kitchen\'.', 'action');
    }
    if (!config.events || typeof config.events !== 'object') {
      throw new StoreError('createActionGroup() needs an "events" object.', 'action');
    }
    const group = {};
    for (const [eventName, value] of Object.entries(config.events)) {
      if (!value || typeof value.__props !== 'boolean') {
        throw new StoreError(`The event "${eventName}" needs props<...>() or emptyProps() as its value.`, 'action');
      }
      group[toActionName(eventName)] = createAction(`[${config.source}] ${eventName}`, value);
    }
    return group;
  }

  function on(...args) {
    const reducer = args.pop();
    if (typeof reducer !== 'function') {
      throw new StoreError('The last argument of on() must be a function: (state, action) => newState.', 'reducer');
    }
    if (!args.length) throw new StoreError('on() needs an action creator before the function.', 'reducer');
    const types = args.map((creator) => {
      if (typeof creator !== 'function' || typeof creator.type !== 'string') {
        throw new StoreError('on() takes action creators, like on(KitchenActions.orderPlaced, ...). One of them is undefined: check the name.', 'reducer');
      }
      return creator.type;
    });
    return { __on: true, types, reducer };
  }

  function createReducer(initialState, ...ons) {
    if (initialState === undefined) throw new StoreError('createReducer() needs the initial state as its first argument.', 'reducer');
    ons.forEach((o) => {
      if (!o || !o.__on) throw new StoreError('After the initial state, every argument of createReducer() must be an on(...).', 'reducer');
    });
    const reducer = (state = initialState, action) => {
      let current = state;
      for (const o of ons) {
        if (o.types.includes(action.type)) {
          const next = o.reducer(current, action);
          if (next === undefined) {
            throw new StoreError(`The reducer for "${action.type}" returned undefined. Return the new state.`, 'reducer');
          }
          current = next;
        }
      }
      return current;
    };
    reducer.__reducer = true;
    return reducer;
  }

  function createSelector(...args) {
    const projector = args.pop();
    let inputs = args;
    if (inputs.length === 1 && Array.isArray(inputs[0])) inputs = inputs[0];
    if (typeof projector !== 'function') throw new StoreError('The last argument of createSelector() must be the projector function.', 'selector');
    if (!inputs.length) throw new StoreError('createSelector() needs at least one input selector before the projector.', 'selector');
    inputs.forEach((input) => {
      if (typeof input !== 'function') {
        throw new StoreError('createSelector() takes selectors first, then the projector. One of the inputs is not a selector: check the name.', 'selector');
      }
    });
    let lastInputs = null;
    let lastResult;
    const selector = (state) => {
      const values = inputs.map((input) => input(state));
      if (lastInputs && values.every((v, i) => v === lastInputs[i])) {
        selector.hits += 1;
        return lastResult;
      }
      lastInputs = values;
      lastResult = projector(...values);
      selector.recomputations += 1;
      return lastResult;
    };
    selector.recomputations = 0;
    selector.hits = 0;
    selector.projector = projector;
    selector.release = () => { lastInputs = null; };
    selector.__selector = true;
    return selector;
  }

  function createFeatureSelector(featureName) {
    if (typeof featureName !== 'string') throw new StoreError('createFeatureSelector() takes the feature name, like createFeatureSelector(\'kitchen\').', 'selector');
    const selector = (state) => {
      if (!state || !(featureName in state)) {
        throw new StoreError(`The feature "${featureName}" doesn't exist in the state. Was it registered with provideState?`, 'selector');
      }
      return state[featureName];
    };
    selector.recomputations = 0;
    selector.hits = 0;
    selector.__selector = true;
    return selector;
  }

  function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.freeze(value);
      Object.keys(value).forEach((k) => deepFreeze(value[k]));
    }
    return value;
  }

  function token(name) {
    return { __token: true, name };
  }

  const Actions = token('Actions');
  const Store = token('Store');
  let currentInjector = null;

  function inject(t) {
    if (!currentInjector) {
      throw new StoreError('inject() must be called in an injection context: a class field, a constructor, or a default parameter of a functional effect (NG0203).', 'inject');
    }
    if (!t || !t.__token) throw new StoreError('inject() needs a token, like inject(Store) or inject(Actions).', 'inject');
    if (!currentInjector.has(t)) throw new StoreError(`No provider for ${t.name} (NG0201).`, 'inject');
    return currentInjector.get(t);
  }

  function runInInjectionContext(injector, fn) {
    const previous = currentInjector;
    currentInjector = injector;
    try {
      return fn();
    } finally {
      currentInjector = previous;
    }
  }

  function ofType(...creators) {
    if (!creators.length) throw new StoreError('ofType() needs at least one action creator.', 'effect');
    const types = creators.map((c) => {
      if (typeof c !== 'function' || typeof c.type !== 'string') {
        throw new StoreError('ofType() takes action creators, like ofType(KitchenActions.startCooking). One of them is undefined: check the name.', 'effect');
      }
      return c.type;
    });
    return filter((action) => types.includes(action.type));
  }

  function createEffect(factory, config) {
    if (typeof factory !== 'function') throw new StoreError('createEffect() takes a function as its first argument.', 'effect');
    return { __effect: true, factory, config: { dispatch: true, functional: false, ...(config || {}) } };
  }

  function startEffect(effect, injector, name) {
    const label = name ? `The effect "${name}"` : 'This effect';
    if (!effect || !effect.__effect) throw new StoreError(`${label} wasn't made with createEffect(...).`, 'effect');
    if (!effect.config.functional) {
      throw new StoreError(`${label} is a function, not a class member, so it needs { functional: true } as the second argument of createEffect().`, 'effect');
    }
    const result = runInInjectionContext(injector, () => effect.factory());
    if (!isObservable(result)) {
      throw new StoreError(`${label} must return an observable, like actions$.pipe(...). It returned ${describe(result)}.`, 'effect');
    }
    return result;
  }

  const isAction = (x) => Boolean(x && typeof x === 'object' && typeof x.type === 'string');

  function checkAction(action) {
    if (typeof action === 'function' && typeof action.type === 'string') {
      throw new StoreError(`You passed the action creator itself, not an action. Call it: ${action.type.replace(/^\[.*?\]\s*/, '')} needs (...) after its name.`, 'dispatch');
    }
    if (!isAction(action)) {
      throw new StoreError(`dispatch() needs an action (an object with a "type"), but got ${describe(action)}.`, 'dispatch');
    }
  }

  class MiniStore {
    constructor(reducers, options) {
      const opts = options || {};
      this.reducers = reducers;
      this.runtimeChecks = opts.runtimeChecks !== false;
      this.maxDispatches = opts.maxDispatches || 0;
      this.maxDepth = opts.maxDepth || 40;
      this.dispatchCount = 0;
      this.depth = 0;
      this.halted = null;
      this.events$ = new Subject();
      this.actions$ = new Subject();
      const initial = {};
      Object.entries(reducers).forEach(([key, reducer]) => {
        if (typeof reducer !== 'function') throw new StoreError(`The reducer for "${key}" is not a function. Use createReducer(...).`, 'reducer');
        initial[key] = reducer(undefined, { type: '@ngrx/store/init' });
      });
      this.state$ = new BehaviorSubject(this.runtimeChecks ? deepFreeze(initial) : structuredClone(initial));
    }

    get state() {
      return this.state$.value;
    }

    replaceState(state) {
      if (this.runtimeChecks) deepFreeze(state);
      this.state$.next(state);
    }

    select(selector) {
      return this.state$.pipe(map(selector), distinctUntilChanged());
    }

    halt(error, action) {
      if (this.halted) return;
      this.halted = error;
      this.events$.next({ kind: 'error', action, error, prev: this.state });
    }

    dispatch(action) {
      if (this.halted) return;
      checkAction(action);
      this.dispatchCount += 1;
      if (this.maxDispatches && this.dispatchCount > this.maxDispatches) {
        const error = new StoreError(`Infinite loop: the store got more than ${this.maxDispatches} actions. The last one was "${action.type}".`, 'loop');
        this.halt(error, action);
        throw error;
      }
      if (this.depth >= this.maxDepth) {
        const error = new StoreError(`Infinite loop: "${action.type}" keeps dispatching itself.`, 'loop');
        this.halt(error, action);
        throw error;
      }
      this.depth += 1;
      try {
        if (this.runtimeChecks) deepFreeze(action);
        const prev = this.state;
        const next = {};
        try {
          Object.entries(this.reducers).forEach(([key, reducer]) => {
            next[key] = reducer(prev[key], action);
          });
        } catch (error) {
          this.events$.next({ kind: 'error', action, error, prev });
          throw error;
        }
        const unchanged = Object.keys(next).every((k) => next[k] === prev[k]);
        const nextState = unchanged ? prev : next;
        if (this.runtimeChecks) deepFreeze(nextState);
        this.events$.next({ kind: 'dispatch', action, prev, next: nextState, source: this._source || 'component' });
        this.state$.next(nextState);
        this.actions$.next(action);
      } finally {
        this.depth -= 1;
      }
    }

    addEffects(effects, providers) {
      const injector = new Map([[Actions, this.actions$.asObservable()], [Store, this], ...(providers || [])]);
      Object.entries(effects).forEach(([name, effect]) => this._startEffect(name, effect, injector, 0));
    }

    _startEffect(name, effect, injector, restarts) {
      const source = startEffect(effect, injector, name);
      source.subscribe({
        next: (output) => {
          this.events$.next({ kind: 'effect-output', name, output, dispatch: effect.config.dispatch });
          if (!effect.config.dispatch || this.halted) return;
          if (!isAction(output)) {
            const error = new StoreError(
              `The effect "${name}" emitted ${describe(output)}, and the store can only dispatch actions. ` +
              'Map it to an action, or add dispatch: false if this effect shouldn\'t dispatch anything.',
              'effect'
            );
            this.events$.next({ kind: 'error', action: null, error, prev: this.state });
            return;
          }
          const previousSource = this._source;
          this._source = name;
          try {
            this.dispatch(output);
          } catch (error) {
            if (!this.halted && error.kind !== 'loop') this.events$.next({ kind: 'error', action: output, error, prev: this.state });
          } finally {
            this._source = previousSource;
          }
        },
        error: (error) => {
          this.events$.next({ kind: 'effect-error', name, error, restarts: restarts + 1 });
          if (restarts < 10 && !this.halted) this._startEffect(name, effect, injector, restarts + 1);
        },
        complete: () => this.events$.next({ kind: 'effect-complete', name }),
      });
    }
  }

  function stripTypes(code) {
    const generic = /\b(props|createFeatureSelector|createSelector|inject|createReducer|createEffect|signal|input|output|of)\s*<((?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*)>\s*\(/g;
    return code
      .replace(/^\s*import\s[^;]*;?\s*$/gm, '')
      .replace(/^(\s*)export\s+(const|function|class|let)\b/gm, '$1$2')
      .replace(generic, '$1(');
  }

  global.MiniRx = {
    Observable, Subject, BehaviorSubject, Subscription, isObservable, from,
    of, EMPTY, throwError, timer, map, filter, tap, take, delay, finalize, distinctUntilChanged,
    mergeMap, concatMap, switchMap, exhaustMap, catchError,
  };

  global.MiniNgrx = {
    StoreError, props, emptyProps, createAction, createActionGroup, on, createReducer,
    createSelector, createFeatureSelector, createEffect, ofType, inject, token, Actions, Store,
    runInInjectionContext, startEffect, deepFreeze, MiniStore, stripTypes, checkAction, isAction, describe,
  };
})(typeof window !== 'undefined' ? window : globalThis);
