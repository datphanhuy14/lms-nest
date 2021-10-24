import { IsBoolean, IsNotEmpty, IsOptional, Length, Validate } from 'class-validator'
import { PasswordConfirmValidator } from '@validators/password-confirm.validator'

export class UpdateSubjectDto {
  @IsOptional()
  code: string

  @IsOptional()
  title: string

  @IsOptional()
  content: string

  @IsOptional()
  @IsBoolean()
  isActive: boolean
}
