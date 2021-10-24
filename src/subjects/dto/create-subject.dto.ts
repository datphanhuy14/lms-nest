import { IsNotEmpty } from 'class-validator'

export class CreateSubjectDto {
  @IsNotEmpty()
  code: string

  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  image: string

  @IsNotEmpty()
  content: string
}
