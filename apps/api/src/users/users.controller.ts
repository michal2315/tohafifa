import type { UserView } from '@hafifa/shared';
import { Body, Controller, Get, Put } from '@nestjs/common';

import { CurrentUser } from '../auth/current-user.decorator';
import { UpdateTrackDto } from './update-track.dto';
import { toUserView } from './user.mapper';
import type { UserDocument } from './user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(@CurrentUser() user: UserDocument): UserView {
    return toUserView(user);
  }

  @Put('me/track')
  async updateMyTrack(
    @CurrentUser() user: UserDocument,
    @Body() body: UpdateTrackDto,
  ): Promise<UserView> {
    return toUserView(await this.usersService.updateTrack(user, body.track));
  }
}
