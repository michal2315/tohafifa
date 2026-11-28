export const USER_ROLES = ['trainee', 'trainer', 'team_lead', 'admin'] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  trainee: 'Trainee',
  trainer: 'Trainer',
  team_lead: 'Team lead',
  admin: 'Admin',
};
