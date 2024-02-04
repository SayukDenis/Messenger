import User from '../../Entity/User';
import { dataSource } from '../../local/database';

const manager = dataSource.manager;

export async function usersOperations() {

    console.log('\n\tUsers start\n');

    if (!dataSource.isInitialized) await dataSource.initialize();

    // Save User1
    let user1 = new User('User1', 'nickname1');
    user1.numberPhone = '123-456-7890';
    user1.description = 'This is User1';
    user1.linkToPhoto = 'https://example.com/user1photo.jpg';
    user1 = await manager.save(user1);
    console.log('User1 has been saved');

    // Save User2
    let user2 = new User('User2', 'nickname2');
    user2.numberPhone = '987-654-3210';
    user2.description = 'This is User2';
    user2.linkToPhoto = undefined;
    user2 = await manager.save(user2);
    console.log('User2 has been saved');

    // Save User3
    let user3 = new User('User3', 'nickname3');
    user3.numberPhone = '555-9999';
    user3.description = undefined;
    user3.linkToPhoto = undefined;
    user3 = await manager.save(user3);
    console.log('User3 has been saved');

    // Read Users
    await readUsers();

    // Update Users
    user1.numberPhone = '555-1234';
    user1.nickname = 'CoolUser1';
    user1.description = undefined;
    user1.linkToPhoto = 'https://example.com/user1_new_photo.jpg';
    user1 = await manager.save(user1);

    user2.numberPhone = '555-5678';
    user2.nickname = 'AwesomeUser2';
    user2.description = 'Loves coding and hiking in the mountains.';
    user2.linkToPhoto = 'https://example.com/user2_new_photo.jpg';
    user2 = await manager.save(user2);

    user3.numberPhone = '555-3333';
    user3.nickname = 'DynamicUser3';
    user3.description = undefined;
    user3.linkToPhoto = 'https://example.com/user3_new_photo.jpg';
    user3 = await manager.save(user3);
    console.log('Users have been updated');

    // Read Users
    await readUsers();

    // Delete Users
    await manager.delete(User, user1.userId);
    await manager.delete(User, user2.userId);
    await manager.delete(User, user3.userId);
    console.log('Users have been deleted');

    // Read Users
    await readUsers();
}

export async function readUsers() {
    const savedUsers = await manager.find(User);
    console.log(`Users quantity: ${savedUsers.length}`);
    for (let user of savedUsers) {
        console.log(user);
    }
}