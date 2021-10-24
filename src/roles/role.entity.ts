import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm'
import { Exclude, Expose } from 'class-transformer'

@Entity({ name: 'roles' })
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string;
  


  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  createdAt: string

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  updatedAt: string

}
