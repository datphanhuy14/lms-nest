import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  
  @Entity({ name: 'lessons' })
  export class Lesson extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    courseId: number
  
    @Column()
    content1: string

    @Column()
    content2: string

    @Column()
    content3: string
  
    @Column()
    title: string
  
    @Column()
    media: string
  
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
  
    constructor(partial: Partial<Lesson>) {
      super()
      Object.assign(this, partial)
    }
  
  }
  