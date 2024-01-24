import User from '../User';
import Message from '../Message';
import MainChat from './MainChat';
import ILastWatchedMessage from './ILastWatchedMessage';
import Branch from './Branch';
import Role from './Role';

export default class Group extends MainChat {
    constructor(title: string, adminUsers?: Array<User>, users?: Array<User>, roles?: Array<Role>, linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super(users, roles, linkToPhoto, messages, branches, pinnedMessage, pinnedMessageForAll, lastWatchedMessage);
        this.title = title;
        this.adminUsers = adminUsers ?? new Array;
    }
    groupId?: number;
    title!: string;
    adminUsers: Array<User> = new Array;
    //schema
    static schema = {
        name: 'groups',
        properties: {
            groupId: { type: 'integer', indexed: true },
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
        primaryKey: 'groupId',
        embedded: false,
    }
}