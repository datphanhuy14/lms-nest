import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import {User} from '../users/user.entity'

@Entity({ name: 'roles' })
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string;
  
  @Column({ default: 'user' })
  name: string

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

  constructor(partial: Partial<Role>) {
    super()
    Object.assign(this, partial)
  }

  @OneToMany(() => User, user => user.role)
    user: User[];
}
