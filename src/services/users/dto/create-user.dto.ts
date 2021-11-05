import { IsBoolean,IsOptional, IsEmail, IsNotEmpty, Length, Validate } from 'class-validator'
import { PasswordConfirmValidator } from '@validators/password-confirm.validator'
import { UniqueEmailValidator } from '@validators/unique-email.validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueEmailValidator)
  email: string

  @ApiProperty()
  @IsNotEmpty()
  firstName: string

  @ApiProperty()
  @IsOptional()
  roleId: number

  @ApiProperty()
  @IsNotEmpty()
  lastName: string

  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 24)
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @Validate(PasswordConfirmValidator, ['password'])
  password_confirmation: string

}
