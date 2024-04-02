import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import Message from '../Message';
import Model from '../Model';
import ILastWatchedMessage from './ILastWatchedMessage';

@Entity()
export default class Chat extends Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text', { nullable: true })
    linkToPhoto?: string;

    


};