import { dataSource } from "../../local/database";
import Tab from '../../Models/Tab';
import Folder from "../../Models/Folder";
import { readFolders } from "./folderOperations";

const manager = dataSource.manager;

export async function tabOperations() {

    console.log('\n\t Tab started')

    if (!dataSource.isInitialized) await dataSource.initialize();

    const folder1 = new Folder('folder1');
    const folder2 = new Folder('folder2');
    const folder3 = new Folder('folder3');

    //Save tabs
    const tab1 = new Tab('tab1');
    tab1.isChannelMessageOn = true;
    tab1.isDialogueMessageOn = true;
    tab1.isGroupsMessageOn = true;
    tab1.folders = [folder1];
    await manager.save(tab1);
    console.log('tab1 have been saved')

    const tab2 = new Tab('tab2');
    tab2.isChannelMessageOn = false;
    tab2.isDialogueMessageOn = false;
    tab2.isGroupsMessageOn = true;
    tab2.folders = [folder2];
    await manager.save(tab2);
    console.log('tab2 have been saved')

    const tab3 = new Tab('tab3');
    tab3.isChannelMessageOn = true;
    //tab3.isDialogueMessageOn  - doesn`t set 
    //tab3.isGroupsMessageOn - doesn`t set 
    tab3.folders = [folder3];
    await manager.save(tab3);
    console.log('tab3 have been saved')

    //Read
    await readTabs();
    await readFolders();

    //Update
    tab1.isChannelMessageOn = true;
    tab1.isDialogueMessageOn = false;
    tab1.folders = [folder1, folder2];

    tab2.isChannelMessageOn = true;
    tab2.isDialogueMessageOn = true;
    tab2.isGroupsMessageOn = false;
    tab2.folders = [];

    tab3.isChannelMessageOn = false;
    tab3.isDialogueMessageOn = true;
    tab3.folders.push(folder1);


    await manager.save([tab1, tab2, tab3]);
    console.log('Tabs have been updated')

    //Read
    await readTabs();
    await readFolders();

    //Remove
    await manager.remove([tab1, tab2, tab3]);
    console.log('Tabs have been removed');

    //Read
    await readTabs();
    await readFolders();
}

export async function readTabs() {
    const savedTabs = await manager.find(Tab);
    console.log(`Tabs quantity: ${savedTabs.length}`);
    for (let tab of savedTabs) {
        console.log(tab);
    }
}