import { Association } from 'src/associations/entities/association.entity';
import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';


@Entity()
export class Minute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  date: string;

  @ManyToMany(() => User)
  @JoinTable()
  voters: User[];

  @ManyToOne(() => Association, association => association.minutes)
  associationId: number; // Rename to associationId

}