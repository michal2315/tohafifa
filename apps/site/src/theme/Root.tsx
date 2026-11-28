import React, { type ReactNode } from 'react';

import { TrackProvider } from '@site/src/tracks/TrackContext';
import { CurrentUserProvider } from '@site/src/user/CurrentUserContext';

/** Wraps the whole app. App-wide providers go here. */
export default function Root({ children }: { children: ReactNode }) {
  return (
    <CurrentUserProvider>
      <TrackProvider>{children}</TrackProvider>
    </CurrentUserProvider>
  );
}
