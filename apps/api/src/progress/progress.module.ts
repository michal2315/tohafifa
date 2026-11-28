import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '../users/users.module';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { StageProgress, StageProgressSchema } from './stage-progress.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: StageProgress.name, schema: StageProgressSchema }]),
    UsersModule,
  ],
  controllers: [ProgressController],
  providers: [ProgressService],
})
export class ProgressModule {}
