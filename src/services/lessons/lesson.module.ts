import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Lesson } from "./lesson.entity";
import { LessonService } from "./lesson.service";
import { LessonController } from "./lesson.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  exports: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}