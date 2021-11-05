import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Lesson } from "./lesson.entity";
import { LessonService } from "./lesson.service";

@Crud({
  model: {
    type: Lesson,
  },
})
@Controller("v1/lessons")
export class LessonController implements CrudController<Lesson> {
  constructor(public service: LessonService) {}
}