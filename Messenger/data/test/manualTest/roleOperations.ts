import { dataSource } from "../../local/database";
import Chat from '../../Entity/Chats/Chat';
import Folder from "../../Entity/Folder";
import { readChats } from "./chatOperations";
import Branch from "../../Entity/Chats/Branch";
import Role from "../../Entity/Chats/Role";

const manager = dataSource.manager;

export async function roleOperations() {
    console.log('\n\tRoles start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    const role1 = new Role('name1', '😊');
    role1.removeMembers = true;
    role1.blockMembers = true;
    role1.manageRoles = true;
    role1.manageBranches = true;
    role1.seeAuditLog = true;
    role1.considerChannels = true;
    role1.manageServer = true;
    role1.sendMessage = true;
    role1.sendVoiceMessage = true;

    const role2 = new Role('name2', '😍');
    role2.removeMembers = false;
    role2.blockMembers = false;
    role2.manageRoles = true;
    role2.manageBranches = false;
    role2.seeAuditLog = true;
    role2.considerChannels = true;
    role2.manageServer = false;
    role2.sendMessage = false;
    role2.sendVoiceMessage = true;

    const role3 = new Role('name3', '👿'); //leave as default

    //Save
    await manager.save([role1, role2, role3])
    console.log('Roles have been saved')

    //Read
    readRoles()

    //Update
    role1.removeMembers = false;
    role1.blockMembers = false;

    role2.manageRoles = false;
    role2.manageBranches = true;

    role3.removeMembers = true;
    role3.manageRoles = false;
    role3.manageBranches = true;

    await manager.save([role1, role2, role3])
    console.log('Roles have been updated')

    //Read
    readRoles()

    //Remove
    await manager.remove([role1, role2, role3])
    console.log('Roles have been removed')

    //Read
    readRoles()
}

export async function readRoles() {
    const savedRoles = await manager.find(Role);
    console.log(`Roles quantity: ${savedRoles.length}`);
    for (let role of savedRoles) {
        console.log(role);
    }
}