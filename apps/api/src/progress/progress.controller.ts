import type { StageId, StageProgressView, TraineeSummaryView } from '@hafifa/shared';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CurrentUser } from '../auth/current-user.decorator';
import type { UserDocument } from '../users/user.schema';
import { ParseStageIdPipe } from './parse-stage-id.pipe';
import { ReviewMilestoneDto, SubmitMilestoneDto } from './progress.dto';
import { toStageProgressView, toTraineeSummaryView } from './progress.mapper';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  // --- The logged-in trainee's own progress ---

  @Get('me')
  async listMine(@CurrentUser() user: UserDocument): Promise<StageProgressView[]> {
    const progress = await this.progressService.listForUser(user.username);
    return progress.map(toStageProgressView);
  }

  @Post('me/:stageId/start')
  async start(
    @CurrentUser() user: UserDocument,
    @Param('stageId', ParseStageIdPipe) stageId: StageId,
  ): Promise<StageProgressView> {
    return toStageProgressView(await this.progressService.start(user, stageId));
  }

  @Post('me/:stageId/submit')
  async submit(
    @CurrentUser() user: UserDocument,
    @Param('stageId', ParseStageIdPipe) stageId: StageId,
    @Body() body: SubmitMilestoneDto,
  ): Promise<StageProgressView> {
    return toStageProgressView(
      await this.progressService.submit(user, stageId, body.mergeRequestUrl),
    );
  }

  // --- Trainers and team leads: their trainees ---

  @Get('trainees')
  async summarizeTrainees(@CurrentUser() user: UserDocument): Promise<TraineeSummaryView[]> {
    const summaries = await this.progressService.summarizeTrainees(user);
    return summaries.map(({ trainee, summary }) => toTraineeSummaryView(trainee, summary));
  }

  @Get('trainees/:username')
  async listForTrainee(
    @CurrentUser() user: UserDocument,
    @Param('username') username: string,
  ): Promise<StageProgressView[]> {
    const progress = await this.progressService.listForTrainee(user, username);
    return progress.map(toStageProgressView);
  }

  @Post('trainees/:username/:stageId/review')
  async review(
    @CurrentUser() user: UserDocument,
    @Param('username') username: string,
    @Param('stageId', ParseStageIdPipe) stageId: StageId,
    @Body() body: ReviewMilestoneDto,
  ): Promise<StageProgressView> {
    return toStageProgressView(
      await this.progressService.review(user, username, stageId, body.decision, body.comment),
    );
  }
}
