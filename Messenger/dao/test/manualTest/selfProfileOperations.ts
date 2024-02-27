import SelfProfile from "../../Models/SelfProfile";
import { dataSource } from "../../local/database";
import Chat from '../../Models/Chats/Chat';
import Tab from '../../Models/Tab';
import { readChats } from "./chatOperations";
import { readTabs } from "./tabOperations";
import User from "../../Models/User";

const manager = dataSource.manager;

export async function selfProfileOperations() {

    console.log('\n\t SelfProfile started')

    if (!dataSource.isInitialized) await dataSource.initialize();

    const selfProfile = new SelfProfile('name', 'nickname', 'hashPassword');

    const chat1 = new Chat();
    const chat2 = new Chat();
    const chat3 = new Chat();


    const tab1 = new Tab('tab1');
    const tab2 = new Tab('tab2');
    const tab3 = new Tab('tab3');

    selfProfile.email = 'dinis_soska_777@gmai.com';
    selfProfile.linkToPhoto = 'file_path_to_file';
    selfProfile.timeLastEntry = new Date();
    selfProfile.blockedChatsId = [chat1.id, chat2.id, chat3.id];
    selfProfile.tabs = [tab1, tab2, tab3];


    //Save selfProfile
    await manager.save(selfProfile);
    console.log('selfProfile have been saved')

    //Read
    await readSelfProfile();
    await readChats();
    await readTabs();

    //Update
    selfProfile.email = 'dinis_prinzesa_12@gmail.com';
    selfProfile.linkToPhoto = 'file_path';

    await manager.save(selfProfile);
    console.log('selfProfile have been updated')

    //Read
    await readSelfProfile();
    await readChats();
    await readTabs();

    //Remove
    await manager.remove(selfProfile);
    console.log('selfProfile have been removed');

    //Read
    await readSelfProfile();
    await readChats();
    await readTabs();
}

export async function readSelfProfile() {
    const savedSelfProfile = await manager.find(SelfProfile);
    console.log(`SelfProfiles quantity: ${savedSelfProfile.length}`);
    for (let selfProfile of savedSelfProfile) {
        console.log(selfProfile);
    }
}

export async function saveSelfProfile() {
    if (!dataSource.isInitialized) await dataSource.initialize();

    const selfProfile = new SelfProfile('selfProfile', 'nickname', 'hashPassword');
    selfProfile.email = 'dinis_soska_777@gmai.com';
    selfProfile.numberPhone = '029880213'; 
    selfProfile.linkToPhoto = 'file_path_to_file';
    selfProfile.timeLastEntry = new Date();
    await manager.save(selfProfile);
    console.log('SelfProfile has been saved')
    await manager.save(User, selfProfile);
    console.log('SelfProfile like as User has been saved')
    return selfProfile;
}