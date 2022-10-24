import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Role } from '../../roles/entities/role.entity';
  import { EntityHelper } from '../../utils/entity-helper';
  
  @Entity()
  export class AdminUser extends EntityHelper {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true})
    email: string;
  
    @Column()
    password: string;
  
    @Index()
    @Column({ nullable: true })
    firstName: string | null;
  
    @Index()
    @Column({ nullable: true })
    lastName: string | null;
  
    @ManyToOne(() => Role, {
      eager: true,
    })

    role?: Role | null;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }
  