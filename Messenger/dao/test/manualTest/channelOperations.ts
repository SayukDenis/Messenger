import Channel from "../../Models/Chats/Channel";
import { dataSource } from "../../local/database";
import { EMessageType } from "../../Models/EMessageType";
import Message from "../../Models/Message";
import User from "../../Models/User";
import { readChats } from "./chatOperations";
import { readMessages } from "./messageOperations";
import { readUsers } from "./usersOperations";
import { saveSelfProfile } from "./selfProfileOperations";

const manager = dataSource.manager;

export async function channelOperations() {

    console.log('\n\tChannels start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    const selfProfile = await saveSelfProfile();

    //Save Users
    const user1 = new User('User1', 'nicknameChannel1');
    user1.numberPhone = '123-456-7890';
    user1.description = 'This is User1';
    user1.linkToPhoto = 'https://example.com/user1photo.jpg';

    const user2 = new User('User2', 'nicknameChannel2');
    user2.numberPhone = '987-654-3210';
    user2.description = 'This is User2';
    user2.linkToPhoto = undefined;

    const user3 = new User('User3', 'nicknameChannel3');
    user3.numberPhone = '555-9999';
    user3.description = undefined;
    user3.linkToPhoto = undefined;
    await manager.save([user1, user2, user3]);
    console.log('Users have been saved');

    //Save Dialogues
    const channel1 = new Channel('channel1');
    channel1.linkToPhoto = 'someLink';
    channel1.lastWatchedMessage = [{ userId: user1.userId, messageId: undefined }];
    channel1.auditLog = [{ sendTime: new Date(), message: 'log1' }, { sendTime: new Date(), message: 'log2' }];
    channel1.users = [selfProfile, user1, user2];
    channel1.adminUserId = [1, 2];
    await manager.save(channel1);
    console.log('Channel1 has been saved');

    const channel2 = new Channel('channel2');;
    channel2.linkToPhoto = 'someLink';
    channel2.lastWatchedMessage = [{ userId: user2.userId, messageId: undefined }];
    channel2.auditLog = [{ sendTime: new Date(), message: 'log1' }];
    channel2.users = [selfProfile, user2, user3];
    channel2.adminUserId = [2, 2];
    await manager.save(channel2);
    console.log('Channel2 has been saved');

    const channel3 = new Channel('channel3');;
    channel3.linkToPhoto = 'someLink';
    channel3.lastWatchedMessage = [{ userId: user3.userId, messageId: undefined }];
    channel3.auditLog = [];
    channel3.users = [selfProfile, user1, user2, user3];
    channel3.adminUserId = [2, 3, 4];
    await manager.save(channel3);
    console.log('Channel3 has been saved');

    //Read
    await readChats();

    //Update
    let message1 = new Message(user1, 'content1', EMessageType.text);
    message1.numberInChat = 1;
    message1.chat = channel1;
    await manager.insert(Message, message1);

    let message2 = new Message(user1, 'content2', EMessageType.img);
    message2.numberInChat = 2;
    message2.chat = channel1;
    await manager.insert(Message, message2);

    let message3 = new Message(selfProfile, 'content3', EMessageType.text);
    message3.numberInChat = 3;
    message3.chat = channel1;
    await manager.insert(Message, message3);


    let message4 = new Message(user2, 'content4', EMessageType.text);
    message4.numberInChat = 1;
    message4.chat = channel2;
    await manager.insert(Message, message4);

    let message5 = new Message(selfProfile, 'content5', EMessageType.img);
    message5.numberInChat = 2;
    message5.chat = channel2;
    await manager.insert(Message, message5);

    let message6 = new Message(selfProfile, 'content6', EMessageType.text);
    message6.numberInChat = 3;
    message6.chat = channel2;
    await manager.insert(Message, message6);


    let message7 = new Message(selfProfile, 'content7', EMessageType.text);
    message7.numberInChat = 1;
    message7.chat = channel3;
    await manager.insert(Message, message7);

    let message8 = new Message(selfProfile, 'content8', EMessageType.img);
    message8.numberInChat = 2;
    message8.chat = channel3;
    await manager.insert(Message, message8);

    let message9 = new Message(selfProfile, 'content9', EMessageType.text);
    message9.numberInChat = 3;
    message9.chat = channel3;
    await manager.insert(Message, message9);

    console.log('Channels have been updated');

    //Read 
    await readChats();
    await readMessages();

    //Delete
    await manager.remove([channel1, channel2, channel3]);
    console.log('Channels have been deleted');

    //Read 
    await readChannels();
    await readChats();
    await readMessages();
    await readUsers();
}

export async function readChannels() {
    const savedChannels = await manager.find(Channel);
    console.log(`Channels quantity: ${savedChannels.length}`);
    for (let channel of savedChannels) {
        console.log(channel);
    }
}