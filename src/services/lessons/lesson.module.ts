import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LessonRepository } from './lesson.repository'

@Module({
  imports: [TypeOrmModule.forFeature([LessonRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class LessonModule {}
