import { isStageId, type StageId } from '@hafifa/shared';
import { BadRequestException, Injectable, type PipeTransform } from '@nestjs/common';

/** Validates a :stageId route parameter against the stages in @hafifa/shared. */
@Injectable()
export class ParseStageIdPipe implements PipeTransform<string, StageId> {
  transform(value: string): StageId {
    if (!isStageId(value)) throw new BadRequestException(`Unknown stage: ${value}`);
    return value;
  }
}
