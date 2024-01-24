import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import Branch from './Branch';
import Role from './Role';
import ILastWatchedMessage from './ILastWatchedMessage';
import MainChat from './MainChat';

export default class Channel extends MainChat {
    constructor(title: string, adminUsers?: Array<User>, users?: Array<User>, roles?: Array<Role>, linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super(users, roles, linkToPhoto, messages, branches, pinnedMessage, pinnedMessageForAll, lastWatchedMessage);
        this.title = title;
        this.adminUsers = adminUsers ?? new Array;
    }
    channelId?: number;
    title!: string;
    adminUsers: Array<User>;
    //schema
    static schema = {
        name: 'channels',
        properties: {
            channelId: { type: 'integer', indexed: true },
            title: 'text',
            adminUsers: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
            linkToPhoto: 'text?',
        },
        primaryKey: 'channelId',
        embedded: false,
    }
}