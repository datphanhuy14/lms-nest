import { Injectable } from '@nestjs/common'
import { BaseService } from '../../base.service'
import { LoggerService } from '../../logger/custom.logger'
import { Subject } from './subject.entity'
import { SubjectRepository } from './subject.repository'


@Injectable()
export class SubjectService extends BaseService<Subject, SubjectRepository> {
  constructor(repository: SubjectRepository, logger: LoggerService) {
    super(repository, logger)
  }

  getInactiveSubjects(): Promise<Subject[]> {
    return this.repository.getInactiveSubjects()
  }
}
