import { dataSource } from "../../local/database";
import Chat from '../../Entity/Chats/Chat';
import Folder from "../../Entity/Folder";
import { readChats } from "./chatOperations";
import Branch from "../../Entity/Chats/Branch";
import Role from "../../Entity/Chats/Role";
import { readRoles } from "./roleOperations";

const manager = dataSource.manager;

export async function branchOperations() {

    console.log('\n\tBranches start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    const role1 = new Role('name1', 'emoji1');
    const role2 = new Role('name2', 'emoji2');
    const role3 = new Role('name3', 'emoji3');
    const role4 = new Role('name4', 'emoji4');
    const role5 = new Role('name5', 'emoji5');
    const role6 = new Role('name6', 'emoji6');
    await manager.save([role1, role2, role3, role4, role5, role6])
    console.log('Roles have been saved')


    const internalBranch1 = new Branch('internalBranch1');
    const internalBranch2 = new Branch('internalBranch2');
    const internalBranch3 = new Branch('internalBranch3');
    const internalBranch4 = new Branch('internalBranch4');
    const internalBranch5 = new Branch('internalBranch5');

    const internalInternalBranch1 = new Branch('internalInternalBranch1');
    const internalInternalBranch2 = new Branch('internalInternalBranch2');

    //Save
    const branch1 = new Branch('branch1');
    branch1.branches = [internalBranch1, internalBranch2]; //cascade save
    branch1.haveAccessRoleId = [role1.roleId, role2.roleId];
    await manager.save(branch1);
    console.log('Branch1 has been saved')

    const branch2 = new Branch('branch2');
    branch2.branches = [internalBranch3];  //cascade save
    branch2.haveAccessRoleId = [role3.roleId, role4.roleId];
    await manager.save(branch2);
    console.log('Branch2 has been saved')

    const branch3 = new Branch('branch3');
    branch3.branches = [internalBranch4, internalBranch5]; //cascade save
    branch3.haveAccessRoleId = [role5.roleId, role6.roleId];
    internalBranch4.branches = [internalInternalBranch1];
    await manager.save(branch3);
    console.log('Branch3 has been saved')

    //Read
    await readBranches();
    await readRoles();

    //Update
    branch1.title = 'branch1NewTitle'
    branch1.linkToPhoto = 'somePhoto1'

    branch2.title = 'branch2NewTitle'
    branch2.linkToPhoto = 'somePhoto2'
    branch3.branches.at(0)?.branches.push(internalInternalBranch2);

    await manager.save([branch1, branch2, branch3]);
    console.log('Branches have been updated')

    //Read
    await readBranches();
    await readRoles();

    //Remove
    await manager.remove([branch1, branch2, branch3]); //cascade remove
    console.log('Branches have been removed')

    //Read
    await readBranches();
    await readRoles();
}

export async function readBranches() {
    const savedBranches = await manager.find(Branch);
    console.log(`Branches quantity: ${savedBranches.length}`);
    for (let branch of savedBranches) {
        console.log(branch);
    }
}