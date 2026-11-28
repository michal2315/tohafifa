import type { StageProgressView, TraineeSummaryView } from '@hafifa/shared';

import { toUserView } from '../users/user.mapper';
import type { User } from '../users/user.schema';
import type { TraineeSummary } from './progress-rules';
import type { StageProgress } from './stage-progress.schema';

export function toStageProgressView(progress: StageProgress): StageProgressView {
  return {
    stageId: progress.stageId,
    status: progress.status,
    mergeRequestUrl: progress.mergeRequestUrl,
    updatedAt: progress.updatedAt.toISOString(),
    history: progress.history.map((event) => ({
      status: event.status,
      by: event.by,
      at: event.at.toISOString(),
      comment: event.comment,
      mergeRequestUrl: event.mergeRequestUrl,
    })),
  };
}

export function toTraineeSummaryView(trainee: User, summary: TraineeSummary): TraineeSummaryView {
  return {
    trainee: toUserView(trainee),
    currentStageId: summary.currentStageId,
    status: summary.status,
    since: summary.since?.toISOString(),
    approvedCount: summary.approvedCount,
  };
}
