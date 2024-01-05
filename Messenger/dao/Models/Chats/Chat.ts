import Message from '../Message';
import Model from '../Model';
import Branch from './Branch';
import ILastWatchedMessage from './ILastWatchedMessage';

export default class Chat extends Model {
    linkToPhoto?: string;
    messages: Array<Message> = new Array;
    branches: Array<Branch> = new Array;     
    pinnedMessage: Array<Message> = new Array;
    pinnedMessageForAll: Array<Message> = new Array;
    //last watched message of each User
    lastWatchedMessage: Array<ILastWatchedMessage> = new Array;    
    //schema
    static schema = {
        name: 'chats',
        properties: {
            linkToPhoto: 'text?',
            messages: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
        },
        embedded: true,
    }
};