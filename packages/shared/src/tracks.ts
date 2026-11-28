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
} as const;

export type TrackDimension = keyof typeof TRACKS;
export type TrackOption<D extends TrackDimension> = keyof (typeof TRACKS)[D]['options'] & string;

/** A choice per dimension. A missing dimension means "not chosen yet". */
export type TrackSelection = { [D in TrackDimension]?: TrackOption<D> };

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
export function matchesTrack(required: TrackSelection, selection: TrackSelection): boolean {
  return TRACK_DIMENSIONS.every((dimension) => {
    const requiredOption = required[dimension];
    const selectedOption = selection[dimension];
    return !requiredOption || !selectedOption || requiredOption === selectedOption;
  });
}

/** Human-readable description of a track restriction, e.g. "React". */
export function describeTrack(required: TrackSelection): string {
  return TRACK_DIMENSIONS.flatMap((dimension) => {
    const option = required[dimension];
    return option ? [getTrackOptionLabel(dimension, option)] : [];
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
