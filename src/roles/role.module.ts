import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoleRepository } from './role.repository'
import { RoleSubscriber } from './subscriber/role.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  providers: [RoleSubscriber],
  exports: [TypeOrmModule],
})
export class RoleModule {}
