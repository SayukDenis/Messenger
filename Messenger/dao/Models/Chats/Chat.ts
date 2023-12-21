import Message from '../Message';
import Model from '../Model';
import ILastWathedMessage from './ILastWathedMessage';

export default class Chat extends Model {
    linkToPhoto?: string;
    messages: Array<Message> = new Array;     
    pinnedMessage: Array<Message> = new Array;
    pinnedMessageForAll: Array<Message> = new Array;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;    
    //schema
    static schema = {
        name: 'chats',
        properties: {
            linkToPhoto: 'text?',
            messages: { type: 'list', objectType: Message },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
        },
        embedded: true,
    }
};