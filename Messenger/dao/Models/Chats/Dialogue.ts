import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWatchedMessage from './ILastWatchedMessage';
import Branch from './Branch';
import Role from './Role';
import MainChat from './MainChat';

export default class Dialogue extends MainChat {
    constructor(firstUser: User, secondUser: User) {
        super();
        this.users.push(firstUser);
        this.users.push(secondUser);
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