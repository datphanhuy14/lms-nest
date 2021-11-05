import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  
  @Entity({ name: 'courses' })
  export class Course extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    subjectId: number;
  
    @Column()
    content1: string

    @Column()
    content2: string

    @Column()
    content3: string
  
    @Column()
    title: string
  
    @Column()
    registrationFee: number
  
    @Column()
    image: string
  
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
  
    constructor(partial: Partial<Course>) {
      super()
      Object.assign(this, partial)
    }
  
  }
  