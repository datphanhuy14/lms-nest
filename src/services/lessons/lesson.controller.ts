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
import { Lesson } from './lesson.entity'
import { EntityId } from 'typeorm/repository/EntityId'
import { LessonService } from './lesson.service'
import { plainToClass } from 'class-transformer'
import { DeleteResult } from 'typeorm/index'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { CreateLessonDto } from './dto/create-lesson.dto'
import { UpdateLessonDto } from './dto/update-lesson.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/lessons')
@UseGuards(JwtAuthGuard)
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async create(@Body() lessonData: CreateLessonDto): Promise<Lesson> {
    const createLesson = await this.lessonService.store(lessonData)
    return plainToClass(Lesson, createLesson)
  }

  
  @Get('/inactive')
  getInactiveLessons(): Promise<Lesson[]> {
    return this.lessonService.getInactiveLessons()
  }

  @Get()
  index(): Promise<Lesson[]> {
    const result = this.lessonService.index()
    return result
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<Lesson> {
    const lesson = await this.lessonService.findById(id)
    if (!lesson) {
      throw new NotFoundException()
    }

    return lesson
  }

  @Put('/:id')
  update(
    @Param('id') id: EntityId,
    @Body() lessonData: UpdateLessonDto,
  ): Promise<Lesson> {
    return this.lessonService.update(id, lessonData)
  }

  @Delete('/:id')
  destroy(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.lessonService.delete(id)
  }
}
