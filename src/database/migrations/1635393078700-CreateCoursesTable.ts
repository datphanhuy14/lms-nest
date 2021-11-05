import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoursesTable1635393078700 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'subjectId',
            type: 'int',
          },
          {
            name: 'content1',
            type: 'varchar',
          },
          {
            name: 'content2',
            type: 'varchar',
          },
          {
            name: 'content3',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'CODE',
            type: 'varchar',
          },
          {
            name: 'registrationFee',
            type: 'int',
          },
          {
            name: 'isActive',
            type: 'int',
            default: 1,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses');
  }
}
