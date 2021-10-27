import { EntityRepository, Repository } from 'typeorm'
import { Subject } from './subject.entity'

@EntityRepository(Subject)
export class SubjectRepository extends Repository<Subject> {
  getInactiveSubjects(): Promise<Subject[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany()
  }
}
