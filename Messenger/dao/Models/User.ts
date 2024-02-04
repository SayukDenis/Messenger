import Model from './Model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User extends Model {
  constructor(name: string, nickname: string) {
    super();
    this.name = name;
    this.nickname = nickname;
  }
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column('text')
  name!: string;

  @Column('text', { nullable: true })
  numberPhone?: string;

  @Column('text', { unique: true })
  nickname: string;

  @Column('text', { nullable: true })
  description?: string;

  @Column('text', { nullable: true })
  linkToPhoto?: string;
} 