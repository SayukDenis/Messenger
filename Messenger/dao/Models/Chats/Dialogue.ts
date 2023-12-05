import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Model from '../Model';

export default class Dialogue extends Model {
    constructor(firstUser: User, secondUser: User, chat: Chat) {
        super();
        this.firstUser = firstUser;
        this.secondUser = secondUser;
        this.chat = chat;
    }
    dialogueId?: number;
    firstUser!: User;
    secondUser!: User;
    messages: Array<Message> = new Array;
    chat!: Chat;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;
    //schema
    static schema = {
        name: 'dialogues',
        properties: {
            dialogueId: { type: 'integer', indexed: true },
            firstUser: { type: 'class', objectType: User },
            secondUser: { type: 'class', objectType: User },
            messages: { type: 'list', objectType: Message },
            chat: { type: 'class', objectType: Chat },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
        },
        primaryKey: 'dialogueId',
    }
}