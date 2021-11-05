import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from '../services/roles/role.entity'
import { User } from '../services/users/user.entity'
import { Subject } from '../services/subjects/subject.entity'
import { Course } from '../services/courses/course.entity'
import {Lesson} from '../services/lessons/lesson.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('databaseHost'),
        port: configService.get<number>('databasePort'),
        username: configService.get<string>('databaseUsername'),
        password: configService.get<string>('databasePassword'),
        database: configService.get<string>('databaseName'),
        entities: [User, Role, Subject, Lesson, Course],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
