import SelfProfile from "../Entity/SelfProfile";
import { dataSource } from "./database";
import Chat from '../Entity/Chats/Chat';
import Tab from '../Entity/Tab';
import Folder from "../Entity/Folder";
import { readChats } from "../test/manualTest/chatOperations";

const manager = dataSource.manager;

//хуйня - тут посилання різні
async function deleteUnnecessaryFolders() {
    const savedTabs = await manager.find(Tab);
    const uniqueFolders = new Set<Folder>();

    savedTabs.forEach(tab => {
        if (tab.folders) {
            tab.folders.forEach(folder => {
                uniqueFolders.add(folder);
            });
        }
    });

    // Convert Set to array if needed
    const uniqueFoldersArray = Array.from(uniqueFolders);
    console.log("1: " + uniqueFoldersArray.length)

    const savedFolders = await manager.find(Folder);
    console.log("2: " + savedFolders.length)

    // Filter folders that are in savedFolders but not in uniqueFolders
    const foldersToDelete = savedFolders.filter(folder => !uniqueFoldersArray.includes(folder));

    await manager.remove(foldersToDelete);
}
async function deleteUnnecessaryChats() {

    //some code
}
//unesessary branch + delete chat 
//check cascade deleting branches when delete mainchat

//delete role in deleted chat - in main chat?
//1. mainChat додати lazyLoading для role
//
//add BeforeInset() // or after
//@Column('integer', { nullable: true })
//numberInChat: number;
//in Messages


////Blocked chats
//    @OneToMany(() => Chat, (chat) => chat.selfProfile, {
//        eager: true,
//        cascade: true
//    })
//    blockedChats: Array<Chat>;
//може MainChat зробити або взагалі id?


//await manager.save(selfProfile);
//console.log('SelfProfile has been saved')
//await manager.save(User,selfProfile);
//console.log('SelfProfile like as User has been saved')