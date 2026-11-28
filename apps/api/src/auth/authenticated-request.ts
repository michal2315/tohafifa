import type { Request } from 'express';

import type { UserDocument } from '../users/user.schema';

export interface AuthenticatedRequest extends Request {
  user: UserDocument;
}
