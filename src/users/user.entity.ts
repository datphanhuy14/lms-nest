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

@Entity({ name: 'users' })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Unique(['email'])
  @Column()
  email: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ nullable: true })
  facebookId: number

  @Column({ nullable: true })
  googleId: number

  @Exclude()
  @Column()
  password: string

  @Column()
  roleId: number

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

  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial)
  }

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
