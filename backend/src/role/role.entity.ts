import { Association } from '../associations/entities/association.entity';
import { User } from '../users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @Column()
  associationId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Association, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'associationId' })
  association: Association;
}