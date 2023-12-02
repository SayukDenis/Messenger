import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Model from '../Model';

export default class Group extends Model {
    constructor(title: string, chat: Chat) {
        super();
        this.title = title;
        this.chat = chat;
    }
    groupId?: number;
    title!: string;
    adminUser: Array<User> = new Array;
    users: Array<User> = new Array;
    messages: Array<Message> = new Array;
    chat!: Chat;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage> = new Array;
    //schema
    static schema = {
        name: 'groups',
        properties: {
            chatId: { type: 'integer', indexed: true },
            title: 'text',
            adminUser: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            chat: { type: 'class', objectType: Chat },
            lastWathedMessage: { type: 'list', objectType: {} as ILastWathedMessage },
        },
        primaryKey: 'chatId',
    }
}