import {
  REVIEW_DECISIONS,
  type ReviewDecision,
  type ReviewMilestoneRequest,
  type SubmitMilestoneRequest,
} from '@hafifa/shared';
import { IsIn, IsNotEmpty, IsString, IsUrl, MaxLength, ValidateIf } from 'class-validator';

export class SubmitMilestoneDto implements SubmitMilestoneRequest {
  // Internal GitLab hosts may not have a public top-level domain.
  @IsUrl({ require_protocol: true, require_tld: false })
  mergeRequestUrl: string;
}

export class ReviewMilestoneDto implements ReviewMilestoneRequest {
  @IsIn(REVIEW_DECISIONS)
  decision: ReviewDecision;

  /** Optional when approving; required when requesting changes, so the trainee knows what to fix. */
  @ValidateIf(
    (dto: ReviewMilestoneDto) => dto.decision === 'request_changes' || dto.comment !== undefined,
  )
  // class-validator runs these bottom-up, so the most basic check goes last.
  @MaxLength(2000)
  @IsString()
  @IsNotEmpty({ message: 'comment is required when requesting changes' })
  comment?: string;
}
