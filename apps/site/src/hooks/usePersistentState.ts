import { useCallback, useMemo, useState, useSyncExternalStore } from 'react';

const STORAGE_PREFIX = 'hafifa:';

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // The "storage" event keeps other open tabs in sync.
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

function notifyListeners(): void {
  listeners.forEach((listener) => listener());
}

function parseOrFallback<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/**
 * Like useState, but the value is saved in the browser (localStorage) and shared by every
 * component that uses the same key.
 *
 * This is a temporary home for user data until we have the API - when progress moves to the
 * server, only this hook needs to change, not the components that use it.
 *
 * During pre-rendering (no localStorage), the initial value is used.
 */
export function usePersistentState<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const storageKey = STORAGE_PREFIX + key;
  const [fallback] = useState(initialValue);

  const raw = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(storageKey),
    () => null,
  );
  const value = useMemo(() => parseOrFallback(raw, fallback), [raw, fallback]);

  const setValue = useCallback(
    (newValue: T) => {
      window.localStorage.setItem(storageKey, JSON.stringify(newValue));
      notifyListeners();
    },
    [storageKey],
  );

  return [value, setValue];
}
