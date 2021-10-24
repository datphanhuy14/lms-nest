import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubjectRepository } from './subject.repository'
// import { UserSubscriber } from './subscriber/subject.subscriber'

@Module({
  imports: [TypeOrmModule.forFeature([SubjectRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class SubjectModule {}
