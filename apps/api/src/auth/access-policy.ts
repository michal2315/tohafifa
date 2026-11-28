import type { UserRole } from '@hafifa/shared';

/**
 * Who may see and review whose training. Plain functions, so the rules are in one place and
 * easy to test.
 */
interface Person {
  username: string;
  role: UserRole;
  team?: string;
  trainerUsername?: string;
}

function isTrainerOf(viewer: Person, trainee: Person): boolean {
  return viewer.role === 'trainer' && trainee.trainerUsername === viewer.username;
}

function isTeamLeadOf(viewer: Person, trainee: Person): boolean {
  return viewer.role === 'team_lead' && !!viewer.team && viewer.team === trainee.team;
}

export function canViewTrainee(viewer: Person, trainee: Person): boolean {
  return (
    viewer.username === trainee.username ||
    viewer.role === 'admin' ||
    isTrainerOf(viewer, trainee) ||
    isTeamLeadOf(viewer, trainee)
  );
}

/** Nobody reviews their own milestone. */
export function canReview(reviewer: Person, trainee: Person): boolean {
  return (
    reviewer.username !== trainee.username &&
    (reviewer.role === 'admin' || isTrainerOf(reviewer, trainee) || isTeamLeadOf(reviewer, trainee))
  );
}
