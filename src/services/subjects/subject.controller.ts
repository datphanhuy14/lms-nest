import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Subject } from "./subject.entity";
import { SubjectService } from "./subject.service";

@Crud({
  model: {
    type: Subject,
  },
})
@Controller("v1/subjects")
export class SubjectController implements CrudController<Subject> {
  constructor(public service: SubjectService) {}
}