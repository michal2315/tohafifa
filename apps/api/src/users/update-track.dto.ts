import { isTrackSelection, type TrackSelection, type UpdateTrackRequest } from '@hafifa/shared';
import { ValidateBy } from 'class-validator';

export class UpdateTrackDto implements UpdateTrackRequest {
  @ValidateBy({
    name: 'isTrackSelection',
    validator: {
      validate: (value: unknown) => isTrackSelection(value),
      defaultMessage: () => 'track must map track dimensions to valid options',
    },
  })
  track: TrackSelection;
}
