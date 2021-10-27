import { Module } from '@nestjs/common'
import { LessonModule } from './lesson.module'
import { LessonService } from './lesson.service'
import { LessonController } from './lesson.controller'
import { ConfigService } from '@nestjs/config'
import { LoggerService } from '../../logger/custom.logger'

@Module({
  imports: [LessonModule, ConfigService, LoggerService],
  providers: [LessonService],
  exports: [LessonService],
  controllers: [LessonController],
})
export class LessonHttpModule {
}
