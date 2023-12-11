import Message from '../Message';
import Branch from './Branch';
import Role from './Role';
import Model from '../Model';
import ILastWathedMessage from './ILastWathedMessage';
import User from '../User';

export default class Chat extends Model {
    linkToPhoto?: string;
    messages: Array<Message> = new Array;
    users: Array<User> = new Array;    
    pinnedMessage: Array<Message> = new Array;
    pinnedMessageForAll: Array<Message> = new Array;
    branches: Array<Branch> = new Array;
    roles: Array<Role> = new Array;    
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;
    
    //schema
    static schema = {
        name: 'chats',
        properties: {
            linkToPhoto: 'text?',
            messages: { type: 'list', objectType: Message },
            users: { type: 'list', objectType: User },  
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