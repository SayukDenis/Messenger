import User from '../../Entity/User';
import { dataSource } from '../../local/database';
import Message from '../../Entity/Message';
import { EMessageType } from '../../Entity/EMessageType';
import Chat from '../../Entity/Chats/Chat';
import MainChat from '../../Entity/Chats/MainChat';
import Branch from '../../Entity/Chats/Branch';
import { readBranches } from './branchOperations';

const manager = dataSource.manager;

export async function mainChatOperations() {
    console.log('\n\tMainChats start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    //Saved
    let mainChat = new MainChat();
    mainChat.linkToPhoto = 'someLink';
    mainChat.lastWatchedMessage = [{ userId: 12, messageId: 14 }];
    mainChat.auditLog = [{ sendTime: new Date(), message: 'log1' }];
    mainChat.users = [new User('','')]
    mainChat = await manager.save(mainChat);
    console.log('MainChat has been saved');

    // Create
    let branch1 = new Branch('branch1');
    branch1.linkToPhoto = 'some link';
    branch1.mainChat = mainChat;
    await manager.save(branch1);
    console.log('Branch1 has been saved')

    let branch2 = new Branch('branch2');
    branch2.linkToPhoto = 'some link';
    branch2.mainChat = mainChat;
    await manager.save(branch2);
    console.log('Branch2 has been saved')

    let branch3 = new Branch('branch3');
    branch3.linkToPhoto = 'some link';
    branch3.mainChat = mainChat;
    await manager.save(branch3);
    console.log('Branch3 has been saved')

    // Read
    await readMainChats();
    await readBranches();

    // Delete
    await manager.remove(mainChat);
    console.log('MainChats have been removed');

    // Read
    await readMainChats();
    await readBranches();
}

export async function readMainChats() {
    const savedChats = await manager.find(MainChat);
    console.log(`MainChats quantity: ${savedChats.length}`);
    for (let chat of savedChats) {
        console.log(chat);
    }
}