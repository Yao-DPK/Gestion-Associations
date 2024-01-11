import { Association } from 'src/associations/association.entity';
import { Role } from 'src/role/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  password: string; 

  @ManyToMany(() => Role)
  @JoinTable()
  roles?: Role[];

}
