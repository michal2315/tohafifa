import type { ReviewDecision, StageId } from '@hafifa/shared';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import { canReview, canViewTrainee } from '../auth/access-policy';
import type { User } from '../users/user.schema';
import { UsersService } from '../users/users.service';
import {
  getNextStatus,
  isStageUnlocked,
  type ProgressAction,
  summarizeProgress,
  type TraineeSummary,
} from './progress-rules';
import {
  type ProgressEvent,
  StageProgress,
  type StageProgressDocument,
} from './stage-progress.schema';

@Injectable()
export class ProgressService {
  constructor(
    @InjectModel(StageProgress.name) private readonly progressModel: Model<StageProgress>,
    private readonly usersService: UsersService,
  ) {}

  async listForUser(username: string): Promise<StageProgressDocument[]> {
    return this.progressModel.find({ username }).exec();
  }

  async start(trainee: User, stageId: StageId): Promise<StageProgressDocument> {
    const progress = await this.listForUser(trainee.username);
    if (progress.some((record) => record.stageId === stageId)) {
      throw new ConflictException('This stage was already started');
    }

    const approvedStageIds = new Set(
      progress.filter((record) => record.status === 'approved').map((record) => record.stageId),
    );
    if (!isStageUnlocked(stageId, approvedStageIds)) {
      throw new ConflictException('The previous stage must be approved first');
    }

    return this.progressModel.create({
      username: trainee.username,
      stageId,
      status: 'in_progress',
      history: [{ status: 'in_progress', by: trainee.username, at: new Date() }],
    });
  }

  async submit(
    trainee: User,
    stageId: StageId,
    mergeRequestUrl: string,
  ): Promise<StageProgressDocument> {
    const record = await this.getRecord(trainee.username, stageId);
    this.applyAction(record, 'submit', trainee.username, { mergeRequestUrl });
    record.mergeRequestUrl = mergeRequestUrl;
    return record.save();
  }

  async review(
    reviewer: User,
    traineeUsername: string,
    stageId: StageId,
    decision: ReviewDecision,
    comment?: string,
  ): Promise<StageProgressDocument> {
    const trainee = await this.usersService.getByUsername(traineeUsername);
    if (!canReview(reviewer, trainee)) {
      throw new ForbiddenException('You cannot review this trainee');
    }

    const record = await this.getRecord(trainee.username, stageId);
    this.applyAction(record, decision, reviewer.username, { comment });
    return record.save();
  }

  async listForTrainee(viewer: User, traineeUsername: string): Promise<StageProgressDocument[]> {
    const trainee = await this.usersService.getByUsername(traineeUsername);
    if (!canViewTrainee(viewer, trainee)) {
      throw new ForbiddenException('You cannot view this trainee');
    }
    return this.listForUser(trainee.username);
  }

  /** Every trainee the viewer may see, with where they are in the training. */
  async summarizeTrainees(viewer: User): Promise<{ trainee: User; summary: TraineeSummary }[]> {
    const trainees = await this.usersService.findVisibleTrainees(viewer);
    const progress = await this.progressModel
      .find({ username: { $in: trainees.map((trainee) => trainee.username) } })
      .exec();

    return trainees.map((trainee) => ({
      trainee,
      summary: summarizeProgress(progress.filter((record) => record.username === trainee.username)),
    }));
  }

  private async getRecord(username: string, stageId: StageId): Promise<StageProgressDocument> {
    const record = await this.progressModel.findOne({ username, stageId }).exec();
    if (!record) throw new NotFoundException('This stage has not been started');
    return record;
  }

  private applyAction(
    record: StageProgressDocument,
    action: ProgressAction,
    by: string,
    details: Pick<ProgressEvent, 'comment' | 'mergeRequestUrl'>,
  ): void {
    const nextStatus = getNextStatus(record.status, action);
    if (!nextStatus) {
      throw new ConflictException(
        `Cannot ${action.replace('_', ' ')} a stage that is ${record.status}`,
      );
    }
    record.status = nextStatus;
    record.history.push({ status: nextStatus, by, at: new Date(), ...details });
  }
}
