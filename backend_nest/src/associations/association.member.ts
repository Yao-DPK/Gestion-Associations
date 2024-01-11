import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AssociationDTO } from './association.dto';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  age: number;

  @Column()
  role: string;

  

  constructor(name: string, firstname: string, age: number, role: string) {
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.role = role;
  }
}
