import { IsBoolean, IsOptional } from 'class-validator'

export class UpdateCourseDto {

  @IsOptional()
  @IsBoolean()
  isActive: boolean
}
