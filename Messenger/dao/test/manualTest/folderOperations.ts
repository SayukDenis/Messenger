import { dataSource } from "../../local/database";
import Chat from '../../Models/Chats/Chat';
import Folder from "../../Models/Folder";
import { readChats } from "./chatOperations";

const manager = dataSource.manager;

export async function folderOperations() {

    console.log('\n\tFolders start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    const chat1 = new Chat();
    const chat2 = new Chat();
    const chat3 = new Chat();
    const chat4 = new Chat();
    const chat5 = new Chat();
    const chat6 = new Chat();
    const chat7 = new Chat();
    const chat8 = new Chat();
    const chat9 = new Chat();

    //Save
    const folder1 = new Folder('folderName1');
    folder1.chats = [chat1, chat2, chat3]
    await manager.save(folder1);
    console.log('Folder1 has been saved')

    const folder2 = new Folder('folderName2');
    folder2.chats = [chat4, chat5, chat6]
    await manager.save(folder2);
    console.log('Folder2 has been saved')

    const folder3 = new Folder('folderName3');
    folder3.chats = [chat7, chat8, chat9]
    await manager.save(folder3);
    console.log('Folder3 has been saved')

    //Read
    await readFolders();
    await readChats();

    //Update
    folder1.chats.push(chat4, chat5);
    folder2.chats = [];
    folder3.chats.push(chat1, chat2, chat5);

    await manager.save([folder1, folder2, folder3]);
    console.log('Folders have been updated')

    //Read
    await readFolders();

    //Remove
    await manager.remove([folder1, folder2, folder3]);
    console.log('Folders have been removed')

    //Read
    await readFolders();
    await readChats();
}

export async function readFolders() {
    const savedFolders = await manager.find(Folder);
    console.log(`Folders quantity: ${savedFolders.length}`);
    for (let folder of savedFolders) {
        console.log(folder);
    }
}