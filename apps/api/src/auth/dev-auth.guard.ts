import { type CanActivate, type ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';

import type { AppConfig } from '../config/configuration';
import { UsersService } from '../users/users.service';
import type { AuthenticatedRequest } from './authenticated-request';
import { IS_PUBLIC_KEY } from './public.decorator';

/**
 * TEMPORARY: logs every request in as DEV_USERNAME, or as the user in the `x-dev-user` header
 * (handy for trying the trainer and trainee views).
 *
 * Inside the closed network this is replaced by a SAML (ADFS) guard that reads the username
 * from the session instead. Nothing else needs to change - the rest of the app only uses
 * `request.user` through @CurrentUser().
 */
@Injectable()
export class DevAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly usersService: UsersService,
    private readonly config: ConfigService<AppConfig, true>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const defaultUsername: string = this.config.get('devUsername', { infer: true });
    const username = request.header('x-dev-user') || defaultUsername;
    request.user = await this.usersService.findOrCreate(username);
    return true;
  }
}
