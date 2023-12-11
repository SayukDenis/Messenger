import Message from '../Message';
import Branch from './Branch';
import Role from './Role';
import Model from '../Model';
import ILastWathedMessage from './ILastWathedMessage';

export default class Chat extends Model {
    pinnedMessage: Array<Message> = new Array;
    pinnedMessageForAll: Array<Message> = new Array;
    branches: Array<Branch> = new Array;
    roles: Array<Role> = new Array;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;
    linkToPhoto?: string;
    //schema
    static schema = {
        name: 'chats',
        properties: {
            linkToPhoto: 'text?',
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
        },
        primaryKey: 'chatId',
        embedded: true,
    }
};