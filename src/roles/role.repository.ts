import { EntityRepository, Repository } from 'typeorm'
import { Role } from './role.entity'

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
    getInactiveRoles(): Promise<Role[]> {
        return this.createQueryBuilder()
          .where('isActive = :active', { active: false })
          .getMany()
      }
}
