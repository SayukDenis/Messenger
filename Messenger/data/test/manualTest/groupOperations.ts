import Group from "../../Entity/Chats/Group";
import { dataSource } from "../../local/database";
import Channel from "../../Entity/Chats/Channel";
import { EMessageType } from "../../Entity/EMessageType";
import Message from "../../Entity/Message";
import User from "../../Entity/User";
import { readChats } from "./chatOperations";
import { readMessages } from "./messageOperations";
import { readUsers } from "./usersOperations";
import { saveSelfProfile } from "./selfProfileOperations";

const manager = dataSource.manager;

export async function groupOperations() {

    console.log('\n\tGroups start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    const selfProfile = await saveSelfProfile();

    //Save Users
    const user1 = new User('User1', 'nickname1');
    user1.numberPhone = '123-456-7890';
    user1.description = 'This is User1';
    user1.linkToPhoto = 'https://example.com/user1photo.jpg';

    const user2 = new User('User2', 'nickname2');
    user2.numberPhone = '987-654-3210';
    user2.description = 'This is User2';
    user2.linkToPhoto = undefined;

    const user3 = new User('User3', 'nickname3');
    user3.numberPhone = '555-9999';
    user3.description = undefined;
    user3.linkToPhoto = undefined;
    await manager.save([user1, user2, user3]);
    console.log('Users have been saved');

    //Save Dialogues
    const group1 = new Group('group1');
    group1.linkToPhoto = 'someLink';
    group1.lastWatchedMessage = [{ userId: user1.userId, messageId: undefined }];
    group1.auditLog = [{ sendTime: new Date(), message: 'log1' }, { sendTime: new Date(), message: 'log2' }];
    group1.users = [selfProfile, user1, user2];
    await manager.save(group1);
    console.log('Group1 has been saved');

    const group2 = new Group('group2');;
    group2.linkToPhoto = 'someLink';
    group2.lastWatchedMessage = [{ userId: user2.userId, messageId: undefined }];
    group2.auditLog = [{ sendTime: new Date(), message: 'log1' }];
    group2.users = [selfProfile, user2, user3];
    await manager.save(group2);
    console.log('Group2 has been saved');

    const group3 = new Group('group3');;
    group3.linkToPhoto = 'someLink';
    group3.lastWatchedMessage = [{ userId: user3.userId, messageId: undefined }];
    group3.auditLog = [];
    group3.users = [selfProfile, user1, user2, user3];
    await manager.save(group3);
    console.log('Group3 has been saved');

    //Read
    await readChats();

    //Update
    let message1 = new Message(user1, 'content1', EMessageType.text);
    message1.numberInChat = 1;
    message1.chat = group1;
    await manager.insert(Message, message1);

    let message2 = new Message(user1, 'content2', EMessageType.img);
    message2.numberInChat = 2;
    message2.chat = group1;
    await manager.insert(Message, message2);

    let message3 = new Message(selfProfile, 'content3', EMessageType.text);
    message3.numberInChat = 3;
    message3.chat = group1;
    await manager.insert(Message, message3);


    let message4 = new Message(user2, 'content4', EMessageType.text);
    message4.numberInChat = 1;
    message4.chat = group2;
    await manager.insert(Message, message4);

    let message5 = new Message(selfProfile, 'content5', EMessageType.img);
    message5.numberInChat = 2;
    message5.chat = group2;
    await manager.insert(Message, message5);

    let message6 = new Message(selfProfile, 'content6', EMessageType.text);
    message6.numberInChat = 3;
    message6.chat = group2;
    await manager.insert(Message, message6);


    let message7 = new Message(selfProfile, 'content7', EMessageType.text);
    message7.numberInChat = 1;
    message7.chat = group3;
    await manager.insert(Message, message7);

    let message8 = new Message(selfProfile, 'content8', EMessageType.img);
    message8.numberInChat = 2;
    message8.chat = group3;
    await manager.insert(Message, message8);

    let message9 = new Message(selfProfile, 'content9', EMessageType.text);
    message9.numberInChat = 3;
    message9.chat = group3;
    await manager.insert(Message, message9);

    console.log('Groups have been updated');

    //Read 
    await readChats();
    await readMessages();

    //Delete
    await manager.remove([group1, group2, group3]);
    console.log('Groups have been deleted');

    //Read 
    await readGroups();
    await readChats();
    await readMessages();
    await readUsers();
}

export async function readGroups() {
    const savedGroups = await manager.find(Group);
    console.log(`Groups quantity: ${savedGroups.length}`);
    for (let group of savedGroups) {
        console.log(group);
    }
}