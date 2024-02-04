import User from './User'
import { EMessageType } from './EMessageType';
import IUserReaction from './IUserReaction ';
import Model from './Model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Chat from './Chats/Chat';

@Entity()
export default class Message extends Model {
    constructor(author: User, content: string, massageType: EMessageType) {
        super();
        this.author = author;
        this.content = content;
        this.sendingTime = new Date();
        this.messageType = massageType;
    }
    @PrimaryGeneratedColumn()
    messageId!: number;

    @ManyToOne(() => User, {
        eager: true,
        cascade: ["insert", "update"],
        nullable: true,
    })
    @JoinColumn()
    author: User;

    //Information about message
    @Column('text')
    content!: string;

    @Column('datetime')
    sendingTime!: Date

    @Column('integer') //enum
    messageType!: EMessageType;

    //add BeforeInset() // or after
    @Column('integer', { nullable: true })
    numberInChat: number;

    @Column('integer', { nullable: true })
    messageResponseId?: number;

    //user
    @Column('integer', { nullable: true })
    messageForwardId?: number;

    @Column('boolean', { default: false })
    isEdited: boolean = false;

    @Column({ type: 'simple-json', nullable: true })
    reactionOnMessage: Array<IUserReaction>;

    @ManyToOne(() => Chat, (chat) => chat.messages, { onDelete: 'CASCADE' })
    chat!: Chat

    @ManyToOne(() => Chat, (chat) => chat.pinnedMessage, { onDelete: 'CASCADE' })
    chatPinned!: Chat

    @ManyToOne(() => Chat, (chat) => chat.pinnedMessageForAll, { onDelete: 'CASCADE' })
    chatPinnedForAll!: Chat
}