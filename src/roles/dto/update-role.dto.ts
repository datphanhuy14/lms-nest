import { IsBoolean, IsOptional } from 'class-validator'

export class UpdateRoleDto {
  @IsOptional()
  name: string

  @IsOptional()
  @IsBoolean()
  isActive: boolean
}
