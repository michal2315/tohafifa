/**
 * The kinds of pages in the training. A page declares its kind in its frontmatter:
 *
 *   sidebar_custom_props: { kind: reading }
 *
 * and the sidebar shows the matching icon (icons are in pageKinds.css).
 * To add a kind, add it here and give it an icon in pageKinds.css.
 */
export const PAGE_KINDS = {
  reading: 'Reading',
  video: 'Video',
  game: 'Game',
  practice: 'Practice',
  quiz: 'Quiz',
  milestone: 'Milestone',
} as const;

export type PageKind = keyof typeof PAGE_KINDS;

export const PAGE_KIND_IDS = Object.keys(PAGE_KINDS) as PageKind[];

function isPageKind(value: unknown): value is PageKind {
  return typeof value === 'string' && value in PAGE_KINDS;
}

/** Reads the kind from a sidebar item's customProps (`sidebar_custom_props` in frontmatter). */
export function getPageKind(customProps: unknown): PageKind | undefined {
  if (typeof customProps !== 'object' || customProps === null || !('kind' in customProps)) {
    return undefined;
  }
  return isPageKind(customProps.kind) ? customProps.kind : undefined;
}

/** The global CSS class that shows a kind's icon (see pageKinds.css). */
export function pageKindClassName(kind: PageKind): string {
  return `page-kind page-kind--${kind}`;
}
