import User from '../User';
import Message from '../Message';
import Chat from './Chat';
import ILastWathedMessage from './ILastWathedMessage';
import Model from '../Model';

export default class Dialogue extends Model{
    chatId!: number;
    firstUser!: User;
    secondUser!: User;
    messages: Array<Message>;
    chat!: Chat;
    //last watched message of each User
    lastWathedMessage: Array<ILastWathedMessage>;
    //schema
    static schema = {
        name: 'dialogues',
        properties: {
            chatId: { type: 'integer', indexed: true },
            firstUser: User,
            secondUser: User,
            messages: { type: 'list', objectType: Message},
            chat: Chat,
            lastWathedMessage: { type: 'list', objectType: 'LastWathedMessage'},
        },
        primaryKey: 'chatId',
    }
}