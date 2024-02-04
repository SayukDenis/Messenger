import User from '../../Models/User';
import { dataSource } from '../../local/database';
import Message from '../../Models/Message';
import { EMessageType } from '../../Models/EMessageType';
import Chat from '../../Models/Chats/Chat';

const manager = dataSource.manager;

export async function chatOperations() {
    console.log('\n\tChats start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    // Create a user
    let user = new User('user', 'nickname');
    user = await manager.save(user);
    console.log('User has been saved');

    // Create Messages
    let message1 = new Message(user, 'content1', EMessageType.text);
    message1.numberInChat = 1;
    message1.messageResponseId = 1;
    message1.messageForwardId = 4;
    message1.isEdited = true;
    message1.reactionOnMessage = [{ userId: user.userId, reaction: 'thumbs-up' }];

    let message2 = new Message(user, 'content2', EMessageType.img);
    message2.numberInChat = 2;
    message2.messageResponseId = undefined;
    message2.messageForwardId = undefined;
    message2.isEdited = false;
    message2.reactionOnMessage = [];

    let message3 = new Message(user, 'content3', EMessageType.text);
    message3.numberInChat = 1;
    message3.messageResponseId = 0;
    message3.messageForwardId = 2;
    message3.isEdited = true;
    message3.reactionOnMessage = [
        { userId: user.userId, reaction: 'dislike' },
        { userId: user.userId, reaction: 'like' }
    ];


    //Saved chat
    let chat = new Chat();
    chat.linkToPhoto = 'someLink';
    chat.lastWatchedMessage = [{ userId: 12, messageId: 124 }];
    chat.messages = [message1, message2, message3];
    chat = await manager.save(chat);
    console.log('Chat has been saved');

    // Read chats
    await readChats();

    // Delete chats
    await manager.remove(chat);
    console.log('Chats have been removed');

    // Read chats
    await readChats();
}

export async function readChats() {
    const savedChats = await manager.find(Chat);
    console.log(`Chats quantity: ${savedChats.length}`);
    for (let chat of savedChats) {
        console.log(chat);
    }
}