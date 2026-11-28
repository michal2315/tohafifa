import type { UserView } from '@hafifa/shared';

import type { User } from './user.schema';

export function toUserView(user: User): UserView {
  return {
    username: user.username,
    displayName: user.displayName,
    role: user.role,
    team: user.team,
    trainerUsername: user.trainerUsername,
    track: user.track ?? {},
  };
}
