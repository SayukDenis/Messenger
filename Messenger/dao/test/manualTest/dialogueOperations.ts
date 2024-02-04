import Dialogue from "../../Models/Chats/Dialogue";
import { EMessageType } from "../../Models/EMessageType";
import Message from "../../Models/Message";
import User from "../../Models/User";
import { dataSource } from "../../local/database";
import { readChats } from "./chatOperations";
import { readMessages } from "./messageOperations";
import { saveSelfProfile } from "./selfProfileOperations";
import { readUsers } from "./usersOperations";

const manager = dataSource.manager;

export async function dialogueOperations() {

    console.log('\n\tDialogues start\n');

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
    const dialogue1 = new Dialogue();
    dialogue1.linkToPhoto = 'someLink';
    dialogue1.lastWatchedMessage = [{ userId: user1.userId, messageId: undefined }];
    dialogue1.auditLog = [{ sendTime: new Date(), message: 'log1' }, { sendTime: new Date(), message: 'log2' }];
    dialogue1.users = [selfProfile, user1];
    await manager.save(dialogue1);
    console.log('Dialogue1 has been saved');

    const dialogue2 = new Dialogue();
    dialogue2.linkToPhoto = 'someLink';
    dialogue2.lastWatchedMessage = [{ userId: user2.userId, messageId: undefined }];
    dialogue2.auditLog = [{ sendTime: new Date(), message: 'log1' }];
    dialogue2.users = [selfProfile, user2];
    await manager.save(dialogue2);
    console.log('Dialogue2 has been saved');

    const dialogue3 = new Dialogue();
    dialogue3.linkToPhoto = 'someLink';
    dialogue3.lastWatchedMessage = [{ userId: user3.userId, messageId: undefined }];
    dialogue3.auditLog = [];
    dialogue3.users = [selfProfile, user3];
    await manager.save(dialogue3);
    console.log('Dialogue3 has been saved');

    //Read 
    await readUsers();
    await readChats();

    //Update
    let message1 = new Message(user1, 'content1', EMessageType.text);
    message1.numberInChat = 1;
    let message2 = new Message(user1, 'content2', EMessageType.img);
    message2.numberInChat = 2;
    let message3 = new Message(selfProfile, 'content3', EMessageType.text);
    message3.numberInChat = 3;
    let message4 = new Message(user2, 'content4', EMessageType.text);
    message4.numberInChat = 1;
    let message5 = new Message(selfProfile, 'content5', EMessageType.img);
    message5.numberInChat = 2;
    let message6 = new Message(selfProfile, 'content6', EMessageType.text);
    message6.numberInChat = 3;
    let message7 = new Message(selfProfile, 'content7', EMessageType.text);
    message7.numberInChat = 1;
    let message8 = new Message(selfProfile, 'content8', EMessageType.img);
    message8.numberInChat = 2;
    let message9 = new Message(selfProfile, 'content9', EMessageType.text);
    message9.numberInChat = 3;

    dialogue1.messages = [message1, message2, message3];
    dialogue2.messages = [message4, message5, message6];
    dialogue3.messages = [message7, message8, message9];
    await manager.save([dialogue1, dialogue2, dialogue3]);
    console.log('Dialogues have been updated');

    //Read 
    await readDialogues();
    await readUsers();
    await readMessages();

    //Delete
    await manager.remove([dialogue1, dialogue2, dialogue3]);
    console.log('Dialogues have been deleted');

    //Read 
    await readDialogues();
    await readMessages();
    await readUsers();
}

export async function readDialogues() {
    const savedDialogues = await manager.find(Dialogue);
    console.log(`Dialogues quantity: ${savedDialogues.length}`);
    for (let dialogue of savedDialogues) {
        console.log(dialogue);
    }
}