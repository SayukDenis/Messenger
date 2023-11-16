import User from './User'
import { EMessageType } from './EMessageType';
import IUserReaction from './IUserReaction ';
import Model from './Model';

export default class Message extends Model{
    messageId!:number;
    author!: User;
    //Indormation about message
    content!: string;
    sendingTime!: Date
    messageType!: EMessageType;
    //
    messageResponseId?: number;
    messageForwardId?: number;
    isEdited: boolean = false;
    isDeleted: boolean = false;
    reactionOnMessage: Array<IUserReaction>;

    //scheme
    static schema= {
        name: 'messages',
        properties: {
            messageId: {type: 'integer',  indexed: true},
            author: User,
            sendingTime: 'date',
            messageType: EMessageType,
            messaeResponseId: { type: 'integer', optional: true },
            messageForwardId: { type: 'integer', optional: true },
            isEdited: { type: 'bool', default: false },
            isDeleted: { type: 'bool', default: false },
            reactionOnMessage: { type: 'list', objectType: 'IUserReaction' },
        },
        primaryKey: 'messageId',
    }
}

