import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { Role } from "./role.entity";
import { RoleService } from "./role.service";

@Crud({
  model: {
    type: Role,
  },
})
@Controller("v1/roles")
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) {}
}