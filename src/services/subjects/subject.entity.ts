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
  
  @Entity({ name: 'subjects' })
  export class Subject extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    code: string
  
    @Column()
    content: string
  
    @Column()
    title: string
  
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
  
    constructor(partial: Partial<Subject>) {
      super()
      Object.assign(this, partial)
    }
  
  }
  