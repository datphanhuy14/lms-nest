/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Request,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthUser } from '../../decorators/auth.user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthService } from '../../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityId } from 'typeorm/repository/EntityId';
import { plainToClass } from 'class-transformer';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult } from 'typeorm/index';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private readonly userService: UserService  ) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.store(userData);
    return plainToClass(User, createdUser);
  }

  @Get('/inactive')
  getInactiveUser(): Promise<User[]> {
    return this.userService.getInactiveUsers();
  }

  @Get()
  index(@Query() options: any): Promise<User> {
    const result = this.userService.list({ relations: ['role'] });
    return result;
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<User> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() userData: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, userData);
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
