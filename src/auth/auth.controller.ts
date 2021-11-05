/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Request, UseGuards,Body } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { User } from '../services/users/user.entity'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { UserService } from '../services/users/user.service'
import { AuthUser } from '../decorators/auth.user.decorator'
import helper from '../helpers/helper'
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request): Promise<{ accessToken: string }> {
    console.log(request.user)
    const result = await this.authService.generateJwtToken(request.user)
    return result
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async myProfile(@Request() request, @AuthUser() authUser): Promise<any> {
    const user = await this.userService.findById(authUser.sub)

    return {
      ...plainToClass(User, user),
      authUser,
    }
  }
}
