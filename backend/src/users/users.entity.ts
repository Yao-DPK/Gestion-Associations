import { Role } from '../role/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  password: string; 

  @ManyToMany(() => Role)
  @JoinTable()
  roles?: Role[];
  
}