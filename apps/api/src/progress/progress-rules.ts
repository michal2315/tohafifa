import {
  getPreviousStageId,
  type ProgressStatus,
  type ReviewDecision,
  STAGE_IDS,
  type StageId,
} from '@hafifa/shared';

/**
 * The rules of the progress lifecycle (see PROGRESS_STATUSES in @hafifa/shared).
 * Pure functions with no database access, so they are easy to read and test.
 */

export type ProgressAction = 'start' | 'submit' | ReviewDecision;

type StatusOrNotStarted = ProgressStatus | 'not_started';

const TRANSITIONS: Record<ProgressAction, { from: StatusOrNotStarted[]; to: ProgressStatus }> = {
  start: { from: ['not_started'], to: 'in_progress' },
  submit: { from: ['in_progress', 'changes_requested'], to: 'submitted' },
  approve: { from: ['submitted'], to: 'approved' },
  request_changes: { from: ['submitted'], to: 'changes_requested' },
};

/** The status after `action`, or null if the action is not allowed from `current`. */
export function getNextStatus(
  current: StatusOrNotStarted,
  action: ProgressAction,
): ProgressStatus | null {
  const transition = TRANSITIONS[action];
  return transition.from.includes(current) ? transition.to : null;
}

/** A stage can be started once the stage before it is approved. */
export function isStageUnlocked(stageId: StageId, approvedStageIds: ReadonlySet<StageId>): boolean {
  const previousStageId = getPreviousStageId(stageId);
  return !previousStageId || approvedStageIds.has(previousStageId);
}

interface ProgressRecord {
  stageId: StageId;
  status: ProgressStatus;
  updatedAt: Date;
  history: { at: Date }[];
}

export interface TraineeSummary {
  currentStageId: StageId | null;
  status: StatusOrNotStarted | 'finished';
  since?: Date;
  approvedCount: number;
}

/** Where a trainee is: the first stage (in order) that is not approved yet. */
export function summarizeProgress(records: ProgressRecord[]): TraineeSummary {
  const recordsByStage = new Map(records.map((record) => [record.stageId, record]));
  const approvedCount = records.filter((record) => record.status === 'approved').length;

  for (const stageId of STAGE_IDS) {
    const record = recordsByStage.get(stageId);
    if (!record) return { currentStageId: stageId, status: 'not_started', approvedCount };
    if (record.status !== 'approved') {
      const since = record.history.at(-1)?.at ?? record.updatedAt;
      return { currentStageId: stageId, status: record.status, since, approvedCount };
    }
  }

  return { currentStageId: null, status: 'finished', approvedCount };
}
