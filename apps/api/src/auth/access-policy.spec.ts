import { canReview, canViewTrainee } from './access-policy';

const trainee = {
  username: 't_trainee',
  role: 'trainee',
  team: 'team-a',
  trainerUsername: 't_trainer',
} as const;
const trainer = { username: 't_trainer', role: 'trainer', team: 'team-a' } as const;
const otherTrainer = { username: 't_other', role: 'trainer', team: 'team-a' } as const;
const teamLead = { username: 't_lead', role: 'team_lead', team: 'team-a' } as const;
const otherTeamLead = { username: 't_lead2', role: 'team_lead', team: 'team-b' } as const;
const admin = { username: 't_admin', role: 'admin' } as const;

describe('canViewTrainee', () => {
  it.each([
    ['the trainee themselves', trainee, true],
    ['their trainer', trainer, true],
    ['the team lead of their team', teamLead, true],
    ['an admin', admin, true],
    ['another trainer', otherTrainer, false],
    ['a team lead of another team', otherTeamLead, false],
  ])('%s -> %s', (_, viewer, expected) => {
    expect(canViewTrainee(viewer, trainee)).toBe(expected);
  });
});

describe('canReview', () => {
  it.each([
    ['the trainee themselves', trainee, false],
    ['their trainer', trainer, true],
    ['the team lead of their team', teamLead, true],
    ['an admin', admin, true],
    ['another trainer', otherTrainer, false],
  ])('%s -> %s', (_, reviewer, expected) => {
    expect(canReview(reviewer, trainee)).toBe(expected);
  });
});
