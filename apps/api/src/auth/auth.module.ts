import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { UsersModule } from '../users/users.module';
import { DevAuthGuard } from './dev-auth.guard';

/** Every endpoint requires a logged-in user, unless it is marked @Public(). */
@Module({
  imports: [UsersModule],
  providers: [{ provide: APP_GUARD, useClass: DevAuthGuard }],
})
export class AuthModule {}
