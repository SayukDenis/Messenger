import Message from '../Message';
import Branch from './Branch';
import Role from './Role';
import ILastWathedMessage from './ILastWathedMessage';
import User from '../User';
import Chat from './Chat';

export default class MainChat extends Chat {
    users: Array<User> = new Array;
    roles: Array<Role> = new Array;    
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;    
    //schema
    static schema = {
        name: 'mainChats',
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
        embedded: true,
    }
};