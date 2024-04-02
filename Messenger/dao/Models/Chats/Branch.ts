import Chat from './Chat';
import { ChildEntity, Column, Entity, ManyToOne, OneToMany, Tree, TreeChildren, TreeParent } from 'typeorm';
import MainChat from './MainChat';
import Message from '../Message';
import ILastWatchedMessage from './ILastWatchedMessage';

@Entity()
export default class Branch extends Chat {
    constructor(title: string) {
        super();
        this.title = title;
    }

    @Column('text')
    title!: string;

    @Column('simple-array', { nullable: true })
    haveAccessRoleId: Array<number>; //id Roles

    @TreeParent({ onDelete: 'CASCADE' })
    parent!: Branch

    @TreeChildren({ cascade: true })
    branches: Array<Branch>;

    @ManyToOne(() => MainChat, (chat) => chat.branches, { onDelete: 'CASCADE' })
    mainChat!: MainChat

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
