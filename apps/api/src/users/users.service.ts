import type { TrackSelection } from '@hafifa/shared';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';

import { canViewTrainee } from '../auth/access-policy';
import { User, type UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username: username.toLowerCase() }).exec();
  }

  async getByUsername(username: string): Promise<UserDocument> {
    const user = await this.findByUsername(username);
    if (!user) throw new NotFoundException(`User ${username} not found`);
    return user;
  }

  /** First login creates the user as a trainee. An admin assigns team, trainer and role. */
  async findOrCreate(username: string): Promise<UserDocument> {
    return this.userModel
      .findOneAndUpdate(
        { username: username.toLowerCase() },
        { $setOnInsert: { displayName: username, role: 'trainee', track: {} } },
        { upsert: true, new: true },
      )
      .exec();
  }

  async updateTrack(user: UserDocument, track: TrackSelection): Promise<UserDocument> {
    user.track = track;
    return user.save();
  }

  /** The trainees this user is allowed to see: their own (trainer), their team's (team lead), or all (admin). */
  async findVisibleTrainees(viewer: User): Promise<UserDocument[]> {
    if (viewer.role === 'trainee') return [];

    const candidates =
      viewer.role === 'trainer'
        ? await this.userModel.find({ role: 'trainee', trainerUsername: viewer.username }).exec()
        : await this.userModel.find({ role: 'trainee' }).exec();

    return candidates
      .filter((trainee) => canViewTrainee(viewer, trainee))
      .sort((a, b) => a.displayName.localeCompare(b.displayName));
  }
}
