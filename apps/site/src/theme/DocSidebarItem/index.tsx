import type { WrapperProps } from '@docusaurus/types';
import { matchesTrack, type TrackRequirement } from '@hafifa/shared';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import clsx from 'clsx';
import React from 'react';

import { getPageKind, pageKindClassName } from '@site/src/pageKinds/pageKinds';
import { useTracks } from '@site/src/tracks/TrackContext';

type Props = WrapperProps<typeof DocSidebarItemType>;

/**
 * Reads the track set in a _category_.json (`customProps: { track: {...} }`) or in a page's
 * front matter (`sidebar_custom_props: { track: {...} }`).
 */
function getRequiredTrack(customProps: unknown): TrackRequirement | undefined {
  if (typeof customProps !== 'object' || customProps === null || !('track' in customProps)) {
    return undefined;
  }
  return customProps.track as TrackRequirement;
}

/**
 * Adds two things to the sidebar:
 * - hides items that belong to a different track than the trainee's;
 * - shows an icon for the page's kind (reading, video, quiz...).
 */
export default function DocSidebarItemWrapper(props: Props) {
  const { selection } = useTracks();
  const { item } = props;

  const requiredTrack = getRequiredTrack(item.customProps);
  if (requiredTrack && !matchesTrack(requiredTrack, selection)) return null;

  const kind = getPageKind(item.customProps);
  if (!kind) return <DocSidebarItem {...props} />;

  return (
    <DocSidebarItem
      {...props}
      item={{ ...item, className: clsx(item.className, pageKindClassName(kind)) }}
    />
  );
}
