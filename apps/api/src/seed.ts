import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import { AppModule } from './app.module';
import { StageProgress } from './progress/stage-progress.schema';
import { SEED_PROGRESS, SEED_USERS } from './seed/seed-data';
import { User } from './users/user.schema';

/**
 * Fills the local database with sample users and progress: `npm run seed`.
 * Safe to run repeatedly - seed users are reset, nobody else is touched.
 */
async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule, { logger: ['error', 'warn'] });
  const userModel = app.get<Model<User>>(getModelToken(User.name));
  const progressModel = app.get<Model<StageProgress>>(getModelToken(StageProgress.name));

  for (const user of SEED_USERS) {
    await userModel.replaceOne({ username: user.username }, user, { upsert: true });
  }

  const seedUsernames = SEED_USERS.map((user) => user.username);
  await progressModel.deleteMany({ username: { $in: seedUsernames } });
  await progressModel.insertMany(
    SEED_PROGRESS.map((progress) => ({
      ...progress,
      history: [{ status: progress.status, by: progress.username, at: new Date() }],
    })),
  );

  console.log(`Seeded ${SEED_USERS.length} users and ${SEED_PROGRESS.length} progress records.`);
  await app.close();
}

void seed();
