import type { TrackSelection } from '@hafifa/shared';
import React, { createContext, useContext, useMemo, type ReactNode } from 'react';

import { usePersistentState } from '@site/src/hooks/usePersistentState';
import { useCurrentUser } from '@site/src/user/CurrentUserContext';

interface TrackContextValue {
  selection: TrackSelection;
  setSelection: (selection: TrackSelection) => void;
}

const TrackContext = createContext<TrackContextValue | null>(null);

/**
 * The trainee's track. It is saved on their profile; if the API can't be reached, it is kept
 * in the browser instead so the site still works on its own.
 */
export function TrackProvider({ children }: { children: ReactNode }) {
  const { user, updateTrack } = useCurrentUser();
  const [localSelection, setLocalSelection] = usePersistentState<TrackSelection>('tracks', {});

  const value = useMemo<TrackContextValue>(
    () =>
      user
        ? { selection: user.track, setSelection: (track) => void updateTrack(track) }
        : { selection: localSelection, setSelection: setLocalSelection },
    [user, updateTrack, localSelection, setLocalSelection],
  );

  return <TrackContext.Provider value={value}>{children}</TrackContext.Provider>;
}

export function useTracks(): TrackContextValue {
  const context = useContext(TrackContext);
  if (!context) throw new Error('useTracks must be used inside <TrackProvider>');
  return context;
}
