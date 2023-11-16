import Message from '../Message';
import Branch from './Branch';
import Role from './Role';
import Model from '../Model';

export default class Chat extends Model{    
    pinnedMessage: Array<Message>;
    pinnedMessageForAll: Array<Message>;
    branches: Array<Branch>;
    roles: Array<Role>;
    //schema
    static schema= {
        name: 'chats',
        properties: {            
            pinnedMessage: {type: 'list', objectType: Message},
            pinnedMessageForAll: {type: 'list', objectType: Message},
            branches: {type:'list', objectType: Branch},
        },
        embedded: true,
    }
};