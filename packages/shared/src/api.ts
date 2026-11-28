/**
 * Shapes of the API's responses and request bodies. The API returns exactly these, and the site
 * uses them to type its calls - so a change here is checked on both sides.
 */
import type { ProgressStatus, ReviewDecision } from './progress';
import type { StageId } from './stages';
import type { TrackSelection } from './tracks';
import type { UserRole } from './users';

export interface UserView {
  username: string;
  displayName: string;
  role: UserRole;
  team?: string;
  /** Trainees only: the username of their trainer. */
  trainerUsername?: string;
  track: TrackSelection;
}

export interface ProgressEventView {
  status: ProgressStatus;
  /** Username of whoever caused the change (the trainee, or the reviewing trainer). */
  by: string;
  at: string;
  comment?: string;
  mergeRequestUrl?: string;
}

export interface StageProgressView {
  stageId: StageId;
  status: ProgressStatus;
  mergeRequestUrl?: string;
  updatedAt: string;
  /** Oldest first. */
  history: ProgressEventView[];
}

export interface TraineeSummaryView {
  trainee: UserView;
  /** The stage the trainee is on, or null if they finished every stage. */
  currentStageId: StageId | null;
  status: ProgressStatus | 'not_started' | 'finished';
  /** When the trainee entered the current status. */
  since?: string;
  approvedCount: number;
}

export interface UpdateTrackRequest {
  track: TrackSelection;
}

export interface SubmitMilestoneRequest {
  mergeRequestUrl: string;
}

export interface ReviewMilestoneRequest {
  decision: ReviewDecision;
  comment?: string;
}
