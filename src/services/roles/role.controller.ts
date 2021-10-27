import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  NotFoundException,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common'
import { Role } from './role.entity'
import { EntityId } from 'typeorm/repository/EntityId'
import { RoleService } from './role.service'
import { plainToClass } from 'class-transformer'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/roles')
@UseGuards(JwtAuthGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() roleData: CreateRoleDto): Promise<Role> {
    const createdRole = await this.roleService.store(roleData)
    return plainToClass(Role, createdRole)
  }

  
  @Get('/inactive')
  getInactiveRoles(): Promise<Role[]> {
    return this.roleService.getInactiveRoles()
  }

  @Get()
  index(): Promise<Role[]> {
    const result = this.roleService.index()
    return result
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Role> {
    const role = await this.roleService.findById(id)
    if (!role) {
      throw new NotFoundException()
    }

    return role
  }

  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() roleData: UpdateRoleDto,
  ): Promise<Role> {
    return this.roleService.update(id, roleData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.roleService.delete(id)
  }
}
