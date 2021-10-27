import { Role } from './role.entity'
import { RoleRepository } from './role.repository'
import { Injectable } from '@nestjs/common'
import { BaseService } from '../../base.service'
import { LoggerService } from '../../logger/custom.logger'

@Injectable()
export class RoleService extends BaseService<Role, RoleRepository> {
  constructor(repository: RoleRepository, logger: LoggerService) {
    super(repository, logger)
  }

  getInactiveRoles(): Promise<Role[]> {
    return this.repository.getInactiveRoles()
  }

}
