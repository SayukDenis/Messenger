import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import Branch from './Branch';
import Role from './Role';
import ILastWatchedMessage from './ILastWatchedMessage';
import MainChat from './MainChat';

export default class Channel extends MainChat {
    constructor(title: string) {
        super();
        this.title = title;
    }
    channelId?: number;
    title!: string;
    adminUser: Array<User> = new Array;
    //schema
    static schema = {
        name: 'channels',
        properties: {
            channelId: { type: 'integer', indexed: true },
            title: 'text',
            adminUser: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },            
            lastWathedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
            linkToPhoto: 'text?',
        },
        primaryKey: 'channelId',
        embedded: false,
    }
}