import { dataSource } from "../../local/database";
import Branch from "../../Models/Chats/Branch";

const manager = dataSource.manager;

export async function branchTreeOperations() {

    console.log('\n\tBranches Tree start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    //Save
    const branch1 = new Branch('branch1');
    await manager.save(branch1);
    console.log('Branch1 has been saved')

    const branch2 = new Branch('branch2');
    await manager.save(branch2);
    console.log('Branch2 has been saved')

    const branch3 = new Branch('branch3');
    await manager.save(branch3);
    console.log('Branch3 has been saved')

    //Save children
    const internalBranch1 = new Branch('internalBranch1');
    internalBranch1.parent = branch1;
    await manager.save(internalBranch1);

    const internalBranch2 = new Branch('internalBranch2');
    internalBranch2.parent = branch1;
    await manager.save(internalBranch2);

    const internalBranch3 = new Branch('internalBranch3');
    internalBranch3.parent = branch2;
    await manager.save(internalBranch3);

    const internalBranch4 = new Branch('internalBranch4');
    internalBranch4.parent = branch2;
    await manager.save(internalBranch4);

    const internalBranch5 = new Branch('internalBranch5');
    internalBranch5.parent = branch3;
    await manager.save(internalBranch5);

    const internalBranch6 = new Branch('internalBranch6');
    internalBranch6.parent = branch3;
    await manager.save(internalBranch6);

    console.log('Children of branches have been saved')

    //Save children of children    
    const internalInternalBranch1 = new Branch('internalInternalBranch1');
    internalInternalBranch1.parent = internalBranch5;

    const internalInternalBranch2 = new Branch('internalInternalBranch2');
    internalInternalBranch2.parent = internalBranch5;

    await manager.save([internalInternalBranch1, internalInternalBranch2])
    console.log('Children of children of branches have been saved')

    //Read
    await readTree(3);

    //Remove children
    await manager.remove([internalBranch5, internalBranch6])
    console.log('Children have been removed')

    //Read
    await readTree(2);

    await manager.remove([branch1, branch2, branch3]);
    console.log('Branches have been removed')

    //Read
    await readTree();
}

export async function readTree(depth?: number) {
    const savedTree = await manager.getTreeRepository(Branch).findTrees({ depth: depth });
    console.log(`Branches quantity: ${savedTree.length}`);
    for (let branch of savedTree) {
        console.log(branch)
        if (branch.branches.length > 0) {
            console.log('Internal branches: ')
            console.log(branch.branches)
        }
    }
}