import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Model from '../Model';

export default class Group extends Model {
    chatId!: number;
    title!: string;
    adminUser: Array<User>;
    users: Array<User>;
    messages: Array<Message>;
    chat!: Chat;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage>;
    //schema
    static schema = {
        name: 'groups',
        properties: {
            chatId: {type: 'integer', indexed: true},
            title: 'text',
            adminUser: { type: 'list', objectType: User },
            users: { type: 'list', objectType: User},
            messages: { type: 'list', objectType: Message},
            chat: Chat,
            lastWathedMessage: { type: 'list', objectType: 'ILastWathedMessage' },
        },
        primaryKey: 'chatId',
    }
}