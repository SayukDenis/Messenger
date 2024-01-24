import Message from '../Message';
import Branch from './Branch';
import Role from './Role';
import ILastWatchedMessage from './ILastWatchedMessage';
import User from '../User';
import Chat from './Chat';

export default class MainChat extends Chat {
    constructor(users?: Array<User>, roles?: Array<Role>, linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super(linkToPhoto, messages, branches, pinnedMessage, pinnedMessageForAll, lastWatchedMessage);
        this.users = users ?? new Array;
        this.roles = roles ?? new Array;
    }
    users: Array<User>;
    roles: Array<Role>;
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
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
        },
        embedded: true,
    }
};