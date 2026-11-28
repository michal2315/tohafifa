import type { WrapperProps } from '@docusaurus/types';
import { matchesTrack, type TrackSelection } from '@hafifa/shared';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import React from 'react';

import { useTracks } from '@site/src/tracks/TrackContext';

type Props = WrapperProps<typeof DocSidebarItemType>;

/** Reads the track set in a _category_.json (`customProps: { track: {...} }`). */
function getRequiredTrack(customProps: unknown): TrackSelection | undefined {
  if (typeof customProps !== 'object' || customProps === null || !('track' in customProps)) {
    return undefined;
  }
  return customProps.track as TrackSelection;
}

/** Hides sidebar items that belong to a different track than the trainee's. */
export default function DocSidebarItemWrapper(props: Props) {
  const { selection } = useTracks();
  const requiredTrack = getRequiredTrack(props.item.customProps);

  if (requiredTrack && !matchesTrack(requiredTrack, selection)) return null;
  return <DocSidebarItem {...props} />;
}
