import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService extends TypeOrmCrudService<Lesson> {
  constructor(@InjectRepository(Lesson) repo) {
    super(repo);
  }
}
