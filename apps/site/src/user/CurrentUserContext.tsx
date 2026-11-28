import type { TrackSelection, UserView } from '@hafifa/shared';
import React, {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '@site/src/api/client';

type CurrentUserState =
  | { status: 'loading' }
  | { status: 'ready'; user: UserView }
  /** The API could not be reached (e.g. running the site on its own). */
  | { status: 'unavailable' };

interface CurrentUserContextValue {
  state: CurrentUserState;
  /** The user, once loaded. Shortcut for state.status === 'ready'. */
  user: UserView | null;
  updateTrack: (track: TrackSelection) => Promise<void>;
}

const CurrentUserContext = createContext<CurrentUserContextValue | null>(null);

export function CurrentUserProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CurrentUserState>({ status: 'loading' });

  useEffect(() => {
    api
      .getMe()
      .then((user) => setState({ status: 'ready', user }))
      .catch(() => setState({ status: 'unavailable' }));
  }, []);

  const user = state.status === 'ready' ? state.user : null;

  const updateTrack = useCallback(
    async (track: TrackSelection) => {
      if (!user) return;
      // Update the page right away, and roll back if the server refuses.
      setState({ status: 'ready', user: { ...user, track } });
      try {
        setState({ status: 'ready', user: await api.updateMyTrack({ track }) });
      } catch {
        setState({ status: 'ready', user });
      }
    },
    [user],
  );

  const value = useMemo(() => ({ state, user, updateTrack }), [state, user, updateTrack]);

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
}

export function useCurrentUser(): CurrentUserContextValue {
  const context = useContext(CurrentUserContext);
  if (!context) throw new Error('useCurrentUser must be used inside <CurrentUserProvider>');
  return context;
}
