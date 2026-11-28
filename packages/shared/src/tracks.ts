/**
 * Tracks are the parts of the training that differ between teams.
 * A trainee picks one option per dimension (e.g. frontend: react).
 *
 * To add a dimension or an option, edit TRACKS below - everything else (the selector,
 * <TrackOnly>, sidebar filtering, API validation) picks it up automatically.
 */
export const TRACKS = {
  frontend: {
    label: 'Frontend',
    options: { react: 'React', angular: 'Angular' },
  },
  database: {
    label: 'Database',
    options: { mongodb: 'MongoDB', postgres: 'PostgreSQL' },
  },
  team: {
    label: 'Team',
    // Placeholders - rename them to the real teams (and update content that uses them).
    options: { 'team-1': 'Team 1', 'team-2': 'Team 2', 'team-3': 'Team 3' },
  },
} as const;

export type TrackDimension = keyof typeof TRACKS;
export type TrackOption<D extends TrackDimension> = keyof (typeof TRACKS)[D]['options'] & string;

/** A choice per dimension. A missing dimension means "not chosen yet". */
export type TrackSelection = { [D in TrackDimension]?: TrackOption<D> };

/**
 * Which tracks some content is for: one option per dimension, or a list when it is for several
 * (e.g. `{ team: ['team-1', 'team-3'] }`). A missing dimension means "for everyone".
 */
export type TrackRequirement = {
  [D in TrackDimension]?: TrackOption<D> | readonly TrackOption<D>[];
};

function requiredOptions(required: TrackRequirement, dimension: TrackDimension): string[] {
  const options: string | readonly string[] | undefined = required[dimension];
  return options === undefined ? [] : [options].flat();
}

export const TRACK_DIMENSIONS = Object.keys(TRACKS) as TrackDimension[];

export function getTrackOptions<D extends TrackDimension>(dimension: D): TrackOption<D>[] {
  return Object.keys(TRACKS[dimension].options) as TrackOption<D>[];
}

export function getTrackOptionLabel(dimension: TrackDimension, option: string): string {
  const options: Record<string, string> = TRACKS[dimension].options;
  return options[option] ?? option;
}

/**
 * Whether content restricted to `required` should be shown for `selection`.
 * Dimensions the trainee has not chosen yet never hide anything.
 */
export function matchesTrack(required: TrackRequirement, selection: TrackSelection): boolean {
  return TRACK_DIMENSIONS.every((dimension) => {
    const options = requiredOptions(required, dimension);
    const selectedOption = selection[dimension];
    return options.length === 0 || !selectedOption || options.includes(selectedOption);
  });
}

/** Human-readable description of a track restriction, e.g. "React" or "Team 1 / Team 3". */
export function describeTrack(required: TrackRequirement): string {
  return TRACK_DIMENSIONS.flatMap((dimension) => {
    const options = requiredOptions(required, dimension);
    if (options.length === 0) return [];
    return [options.map((option) => getTrackOptionLabel(dimension, option)).join(' / ')];
  }).join(' · ');
}

/** Whether an untrusted value (e.g. a request body) is a valid TrackSelection. */
export function isTrackSelection(value: unknown): value is TrackSelection {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;

  return Object.entries(value).every(
    ([dimension, option]) =>
      dimension in TRACKS &&
      (option === undefined ||
        getTrackOptions(dimension as TrackDimension).includes(option as never)),
  );
}
