import User from './User'
import { EMessageType } from './EMessageType';
import IUserReaction from './IUserReaction ';
import Model from './Model';

export default class Message extends Model {
    constructor(author: User, content: string, sendingTime: Date, messageType: EMessageType,
        numberInChat: number = 0, messageResponseId?: number, messageForwardId?: number,
        isEdited: boolean = false, isDeleted: boolean = false,
        reactionOnMessage?: Array<IUserReaction>) {
        super();
        this.author = author;
        this.content = content;
        this.sendingTime = sendingTime;
        this.messageType = messageType;
        this.numberInChat = numberInChat;
        this.messageResponseId = messageResponseId;
        this.messageForwardId = messageForwardId;
        this.isEdited = isEdited;
        this.isDeleted = isDeleted;
        this.reactionOnMessage = reactionOnMessage ?? new Array;
    }

    messageId?: number;
    author!: User;
    //Information about message
    content!: string;
    sendingTime!: Date
    messageType!: EMessageType;
    numberInChat!: number;
    //
    messageResponseId?: number;
    messageForwardId?: number;
    isEdited: boolean;
    isDeleted: boolean;
    reactionOnMessage: Array<IUserReaction>;
    //scheme
    static schema = {
        name: 'messages',
        properties: {
            messageId: 'integer',
            author: { type: 'class', objectType: User },
            sendingTime: 'date',
            messageType: { type: 'enum', objectType: EMessageType },
            numberInChat: 'integer?',
            messageResponseId: 'integer?',
            messageForwardId: 'integer?',
            isEdited: { type: 'boolean', default: false },
            isDeleted: { type: 'boolean', default: false },
            reactionOnMessage: { type: 'list', objectType: {} as IUserReaction },
        },
        primaryKey: 'messageId',
    }
}

