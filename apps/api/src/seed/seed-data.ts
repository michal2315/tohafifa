import type { ProgressStatus, StageId } from '@hafifa/shared';

import type { User } from '../users/user.schema';

/**
 * Sample data for local development, so every view has something to show.
 * Switch users by sending the `x-dev-user` header (see DevAuthGuard).
 */
export const SEED_USERS: User[] = [
  {
    username: 't_michalgo',
    displayName: 'Michal Golan',
    role: 'trainer',
    team: 'team-a',
    track: {},
  },
  {
    username: 't_teamlead',
    displayName: 'Team Lead',
    role: 'team_lead',
    team: 'team-a',
    track: {},
  },
  {
    username: 't_trainee1',
    displayName: 'Trainee One',
    role: 'trainee',
    team: 'team-a',
    trainerUsername: 't_michalgo',
    track: { frontend: 'react', database: 'mongodb' },
  },
  {
    username: 't_trainee2',
    displayName: 'Trainee Two',
    role: 'trainee',
    team: 'team-a',
    trainerUsername: 't_michalgo',
    track: { frontend: 'react', database: 'mongodb' },
  },
];

interface SeedProgress {
  username: string;
  stageId: StageId;
  status: ProgressStatus;
  mergeRequestUrl?: string;
}

export const SEED_PROGRESS: SeedProgress[] = [
  { username: 't_trainee1', stageId: 'git', status: 'approved' },
  {
    username: 't_trainee1',
    stageId: 'html-css',
    status: 'submitted',
    mergeRequestUrl: 'https://gitlab.example/training/t_trainee1/-/merge_requests/2',
  },
  { username: 't_trainee2', stageId: 'git', status: 'in_progress' },
];
