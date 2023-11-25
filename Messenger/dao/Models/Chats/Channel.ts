import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import Model from '../Model';

export default class Channel extends Model {
    constructor(title: string, chat: Chat) {
        super();
        this.title = title;
        this.chat = chat;
    }
    chatId?: number;
    title!: string;
    adminUser: Array<User> = new Array;
    users: Array<User> = new Array;
    messages: Array<Message> = new Array;
    chat!: Chat;
    //schema
    static schema = {
        name: 'channels',
        properties: {
            chatId: { type: 'integer', indexed: true },
            title: 'text',
            adminUser: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User },
            messages: { type: 'list', objectType: Message },
            chat: { type: 'class', objectType: Chat },
        },
        primaryKey: 'chatId',
    }
}