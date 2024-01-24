import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWatchedMessage from './ILastWatchedMessage';
import Branch from './Branch';
import Role from './Role';
import MainChat from './MainChat';

export default class Dialogue extends MainChat {

    constructor(firstUser: User, secondUser: User, users?: Array<User>, roles?: Array<Role>, linkToPhoto?: string, messages?: Array<Message>, branches?: Array<Branch>,
        pinnedMessage?: Array<Message>, pinnedMessageForAll?: Array<Message>,
        lastWatchedMessage?: Array<ILastWatchedMessage>) {
        super([firstUser, secondUser], roles, linkToPhoto, messages, branches, pinnedMessage, pinnedMessageForAll, lastWatchedMessage);
    }
    dialogueId?: number;
    //schema
    static schema = {
        name: 'dialogues',
        properties: {
            dialogueId: 'integer',
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage },
            linkToPhoto: 'text?',
        },
        primaryKey: 'dialogueId',
        embedded: false,
    }
}