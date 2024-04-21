import 'reflect-metadata';
import { dataSource } from '../../local/database';
import * as FileSystem from 'expo-file-system';
import { messagesOperations } from './messageOperations';
import { usersOperations } from './usersOperations';
import { chatOperations } from './chatOperations';
import { selfProfileOperations } from './selfProfileOperations';
import { tabOperations } from './tabOperations';
import { folderOperations } from './folderOperations';
import { branchOperations } from './branchOperations';
import { branchTreeOperations } from './branchTreeOperations';
import { roleOperations } from './roleOperations';
import { mainChatOperations } from './mainChatOperations';
import { dialogueOperations } from './dialogueOperations';
import { channelOperations } from './channelOperations';
import { groupOperations } from './groupOperations';


export async function Run() {
    await deleteDb();
    await usersOperations();
    await messagesOperations();
    await chatOperations();
    await selfProfileOperations();
    await tabOperations();
    await folderOperations();
    await branchOperations()
    await branchTreeOperations();
    await roleOperations();
    await mainChatOperations();
    await dialogueOperations();
    await channelOperations();
    await groupOperations();
}

async function deleteDb() {
    const path = FileSystem.documentDirectory + '/SQLite/messenger.db';
    const info = await FileSystem.getInfoAsync(path);
    console.log(info);
    if (info.exists)
        await FileSystem.deleteAsync(path).then(x => console.log('successfully deleted database'))
}