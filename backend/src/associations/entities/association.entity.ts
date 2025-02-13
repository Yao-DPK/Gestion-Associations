import { Minute } from 'src/minutes/minutes.entity';
import { User } from '../../users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Association {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, {eager : true})
  @JoinTable()
  users: User[];

  @OneToMany(() => Minute, minute => minute.associationId)
  minutes?: Minute[];
}