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
import { Subject } from './subject.entity'
import { EntityId } from 'typeorm/repository/EntityId'
import { SubjectService } from './subject.service'
import { plainToClass } from 'class-transformer'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { CreateSubjectDto } from './dto/create-subject.dto'
import { UpdateSubjectDto } from './dto/update-subject.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/subjects')
@UseGuards(JwtAuthGuard)
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  async create(@Body() subjectData: CreateSubjectDto): Promise<Subject> {
    const createSubject = await this.subjectService.store(subjectData)
    return plainToClass(Subject, createSubject)
  }

  
  @Get('/inactive')
  getInactiveSubjects(): Promise<Subject[]> {
    return this.subjectService.getInactiveSubjects()
  }

  @Get()
  index(): Promise<Subject[]> {
    const result = this.subjectService.index()
    return result
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Subject> {
    const subject = await this.subjectService.findById(id)
    if (!subject) {
      throw new NotFoundException()
    }

    return subject
  }

  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() subjectData: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(id, subjectData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.subjectService.delete(id)
  }
}
