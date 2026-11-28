import { Controller, Get } from '@nestjs/common';

import { Public } from './auth/public.decorator';

/** Used by OpenShift liveness/readiness probes. */
@Controller('health')
export class HealthController {
  @Public()
  @Get()
  check() {
    return { status: 'ok' };
  }
}
