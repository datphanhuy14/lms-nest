import { Module } from '@nestjs/common'
import { RoleModule } from './role.module'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../../logger/custom.logger'

@Module({
  imports: [RoleModule, ConfigService, LoggerService],
  providers: [RoleService],
  exports: [RoleService],
  controllers: [RoleController],
})
export class RoleHttpModule {}
