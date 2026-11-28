import { PROGRESS_STATUSES, type ProgressStatus, STAGE_IDS, type StageId } from '@hafifa/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

/** One change of status. The history is the audit trail of a stage: submits, reviews, comments. */
@Schema({ _id: false })
export class ProgressEvent {
  @Prop({ required: true, enum: PROGRESS_STATUSES })
  status: ProgressStatus;

  @Prop({ required: true })
  by: string;

  @Prop({ required: true })
  at: Date;

  @Prop()
  comment?: string;

  @Prop()
  mergeRequestUrl?: string;
}

const ProgressEventSchema = SchemaFactory.createForClass(ProgressEvent);

/** A trainee's work on one stage. There is no record until the trainee starts the stage. */
@Schema({ timestamps: true, collection: 'stage_progress' })
export class StageProgress {
  @Prop({ required: true, lowercase: true })
  username: string;

  @Prop({ required: true, enum: [...STAGE_IDS] })
  stageId: StageId;

  @Prop({ required: true, enum: PROGRESS_STATUSES })
  status: ProgressStatus;

  /** The latest submitted merge request. */
  @Prop()
  mergeRequestUrl?: string;

  @Prop({ type: [ProgressEventSchema], default: [] })
  history: ProgressEvent[];

  /** Set by Mongoose (timestamps: true). */
  updatedAt: Date;
}

export type StageProgressDocument = HydratedDocument<StageProgress>;
export const StageProgressSchema = SchemaFactory.createForClass(StageProgress);

StageProgressSchema.index({ username: 1, stageId: 1 }, { unique: true });
