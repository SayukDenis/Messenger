import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import Model from './../Model';

export default class Channel extends Model {
    chatId!: number;
    title!: string;
    adminUser: Array<User>;
    users: Array<User>;
    messages: Array<Message>;
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
            chat: Chat,
        },
        primaryKey: 'chatId',
    }
}