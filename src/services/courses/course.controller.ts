import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Course } from "./course.entity";
import { CourseService } from "./course.service";

@Crud({
  model: {
    type: Course,
  },
})
@Controller("v1/courses")
export class CourseController implements CrudController<Course> {
  constructor(public service: CourseService) {}
}