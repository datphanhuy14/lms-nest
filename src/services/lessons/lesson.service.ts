import { Injectable } from '@nestjs/common'
import { BaseService } from '../../base.service'
import { LoggerService } from '../../logger/custom.logger'
import { Lesson } from './lesson.entity'
import { LessonRepository } from './lesson.repository'

@Injectable()
export class LessonService extends BaseService<Lesson, LessonRepository> {
  constructor(repository: LessonRepository, logger: LoggerService) {
    super(repository, logger)
  }

  getInactiveLessons(): Promise<Lesson[]> {
    return this.repository.getInactiveLessons()
  }
}
