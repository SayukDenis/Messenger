import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Branch from './Branch';
import Role from './Role';

export default class Dialogue extends Chat {
    constructor(firstUser: User, secondUser: User) {
        super();
        this.firstUser = firstUser;
        this.secondUser = secondUser;
    }
    dialogueId?: number;
    firstUser!: User;
    secondUser!: User;
    messages: Array<Message> = new Array;
    //schema
    static schema = {
        name: 'dialogues',
        properties: {
            dialogueId: { type: 'integer', indexed: true },
            firstUser: { type: 'class', objectType: User },
            secondUser: { type: 'class', objectType: User },
            messages: { type: 'list', objectType: Message },          
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
            linkToPhoto: 'text?',
        },
        primaryKey: 'dialogueId',
        embedded: false,
    }
}