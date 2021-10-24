import { Module } from '@nestjs/common'
import { SubjectModule } from './subject.module'
import { SubjectService } from './subject.service'
import { SubjectController } from './subject.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../logger/custom.logger'

@Module({
  imports: [SubjectModule, ConfigService, LoggerService],
  providers: [SubjectService],
  exports: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectHttpModule {
}
