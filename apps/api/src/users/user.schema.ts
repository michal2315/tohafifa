import { type TrackSelection, USER_ROLES, type UserRole } from '@hafifa/shared';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  /** The network username (e.g. t_michalgo) - what SAML will give us. */
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  username: string;

  @Prop({ required: true })
  displayName: string;

  @Prop({ required: true, enum: USER_ROLES, default: 'trainee' })
  role: UserRole;

  @Prop()
  team?: string;

  /** Trainees only. */
  @Prop()
  trainerUsername?: string;

  @Prop({ type: Object, default: {} })
  track: TrackSelection;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
