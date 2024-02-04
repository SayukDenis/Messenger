import User from '../../Entity/User';
import { dataSource } from '../../local/database';
import Message from '../../Entity/Message';
import { EMessageType } from '../../Entity/EMessageType';

const manager = dataSource.manager;

export async function messagesOperations() {
    
    console.log('\n\tMessages start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    // Create a user
    let user = new User('user', 'nickname');
    user = await manager.save(user);
    console.log('User has been saved');

    // Save Messages
    let message1 = new Message(user, 'content1', EMessageType.text);
    message1.numberInChat = 1;
    message1.messageResponseId = 1;
    message1.messageForwardId = 4;
    message1.isEdited = true;
    message1.reactionOnMessage = [{ userId: user.userId, reaction: 'thumbs-up' }];
    await manager.save(message1);
    console.log('Message1 has been saved');

    let message2 = new Message(user, 'content2', EMessageType.img);
    message2.numberInChat = 2;
    message2.messageResponseId = undefined;
    message2.messageForwardId = undefined;
    message2.isEdited = false;
    message2.reactionOnMessage = [];
    await manager.save(message2);
    console.log('Message2 has been saved');

    let message3 = new Message(user, 'content3', EMessageType.text);
    message3.numberInChat = 1;
    message3.messageResponseId = 0;
    message3.messageForwardId = 2;
    message3.isEdited = true;
    message3.reactionOnMessage = [
        { userId: user.userId, reaction: 'dislike' },
        { userId: user.userId, reaction: 'like' }
    ];
    await manager.save(message3);
    console.log('Message3 has been saved');

    // Read messages
    await readMessages();

    // Update Messages
    message1.isEdited = true;
    message1.reactionOnMessage = [];
    await manager.save(message1);

    message2.content = 'new Content2'
    message2.isEdited = true;
    message2.reactionOnMessage = [{ userId: user.userId, reaction: 'happy' }];
    await manager.save(message2);

    message3.content = 'new Content3';
    message3.isEdited = true;
    message3.reactionOnMessage = [{ userId: user.userId, reaction: 'like' }];
    await manager.save(message3);
    console.log('Messages have been updated');

    // Read messages
    await readMessages();

    // Delete Messages
    await manager.delete(Message, message1.messageId);
    await manager.delete(Message, message2.messageId);
    await manager.delete(Message, message3.messageId);
    console.log('Messages have been deleted');

    // Read messages
    await readMessages();
}

export async function readMessages() {
    const savedMessages = await manager.find(Message);
    console.log(`Messages quantity: ${savedMessages.length}`);
    for (let message of savedMessages) {
        console.log(message);
    }
}