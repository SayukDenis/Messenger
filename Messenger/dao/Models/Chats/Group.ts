import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Branch from './Branch';
import Role from './Role';

export default class Group extends Chat {
    constructor(title: string) {
        super();
        this.title = title;
    }
    groupId?: number;
    title!: string;
    adminUser: Array<User> = new Array;
    users: Array<User> = new Array;
    messages: Array<Message> = new Array;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;
    //schema
    static schema = {
        name: 'groups',
        properties: {
            groupId: { type: 'integer', indexed: true },
            title: 'text',
            adminUser: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            chat: { type: 'class', objectType: Chat },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
        },
        primaryKey: 'groupId',
        embedded: false,
    }
}