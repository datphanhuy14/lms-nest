import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import {v4} from 'uuid'

export class CreateUsersTable1592555965808 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        }, 
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'firstName',
          type: 'varchar',
        },
        {
          name: 'roleId',
          type: 'int',
          
        },
        {
          name: 'googleId',
          type: 'int',
          isNullable: true
        },
        {
          name: 'facebookId',
          type: 'int',
          isNullable: true
        },
        {
          name: 'lastName',
          type: 'varchar',
        },
        {
          name: 'password',
          type: 'varchar',
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
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
