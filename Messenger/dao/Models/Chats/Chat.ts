import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import Message from '../Message';
import Model from '../Model';
import SelfProfile from '../SelfProfile';
import ILastWatchedMessage from './ILastWatchedMessage';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class Chat extends Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text', { nullable: true })
    linkToPhoto?: string;

    @OneToMany(() => Message, (message) => message.chat, {
        eager: true,
        cascade: true
    })
    messages: Array<Message>;

    @OneToMany(() => Message, (message) => message.chatPinned, {
        eager: true,
        cascade: true
    })
    pinnedMessage: Array<Message>;

    @OneToMany(() => Message, (message) => message.chatPinnedForAll, {
        eager: true,
        cascade: true,
    })
    pinnedMessageForAll: Array<Message>;

    @Column({ type: 'simple-json', nullable: true })
    lastWatchedMessage: Array<ILastWatchedMessage>;
};