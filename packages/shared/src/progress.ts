/**
 * The lifecycle of a trainee's work on one stage:
 *
 *   in_progress -> submitted -> approved
 *                      |
 *                      v
 *              changes_requested -> submitted -> ...
 *
 * A stage with no progress record is "not started".
 */
export const PROGRESS_STATUSES = [
  'in_progress',
  'submitted',
  'changes_requested',
  'approved',
] as const;

export type ProgressStatus = (typeof PROGRESS_STATUSES)[number];

export const PROGRESS_STATUS_LABELS: Record<ProgressStatus, string> = {
  in_progress: 'In progress',
  submitted: 'Waiting for review',
  changes_requested: 'Changes requested',
  approved: 'Approved',
};

export const REVIEW_DECISIONS = ['approve', 'request_changes'] as const;
export type ReviewDecision = (typeof REVIEW_DECISIONS)[number];
