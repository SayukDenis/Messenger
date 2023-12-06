import SelfProfile from "../dao/Models/SelfProfile";
import Tab from "../dao/Models/Tab";
import Dialogue from "../dao/Models/Chats/Dialogue";
import Group from "../dao/Models/Chats/Group";
import Channel from "../dao/Models/Chats/Channel";
import Chat from "../dao/Models/Chats/Chat";
import Message from "../dao/Models/Message";
import Folder from "../dao/Models/Folder";
import User from "../dao/Models/User";
import { EMessageType } from "../dao/Models/EMessageType";


export function initialization(): SelfProfile {
  const selfProfile = new SelfProfile(' Гена', 'password123', '1234567890');
  selfProfile.email = 'john.doe@example.com';
  selfProfile.nickname = 'johndoe';
  selfProfile.description = 'A description about John Doe';
  selfProfile.linkToPhoto = 'url_to_photo.jpg';
  selfProfile.timeLastEntry = new Date();
  selfProfile.tabs = [];

  // Usage example: create 20 users
  const numberOfUsersToCreate = 20;
  const users = createUsers(numberOfUsersToCreate);

  const chat1 = new Chat();
  const chat2 = new Chat();
  const chat3 = new Chat();
  // Create instances of Dialogue
  const dialogue1 = new Dialogue(users[getRandomNumber()], users[getRandomNumber()], chat1);
  const dialogue2 = new Dialogue(users[getRandomNumber()], users[getRandomNumber()], chat2);
  const dialogue3 = new Dialogue(users[getRandomNumber()], users[getRandomNumber()], chat3);
  dialogue1.messages.push(...createMessage(100))
  dialogue2.messages.push(...createMessage(100))
  dialogue3.messages.push(...createMessage(100))

  const chat4 = new Chat();
  const chat5 = new Chat();
  const chat6 = new Chat();
  // Create instances of Groups
  const group1 = new Group("Group 1", chat4);
  const group2 = new Group("Group 2", chat5);
  const group3 = new Group("Group 3", chat6);
  group1.messages.push(...createMessage(100))
  group2.messages.push(...createMessage(100))
  group3.messages.push(...createMessage(100))

  const chat7 = new Chat();
  const chat8 = new Chat();
  const chat9 = new Chat();
  // Create instances of Channels
  const channel1 = new Channel("Channel 1", chat7);
  const channel2 = new Channel("Channel 2", chat8);
  const channel3 = new Channel("Channel 3", chat9);
  channel1.messages.push(...createMessage(100))
  channel2.messages.push(...createMessage(100))
  channel3.messages.push(...createMessage(100))

  // Create instances of Folders
  const folder1 = new Folder("Folder 1");
  const folder2 = new Folder("Folder 2");
  const folder3 = new Folder("Folder 3");

  // Create instances of Tabs
  const tab1 = new Tab("Tab 1");
  const tab2 = new Tab("Tab 2");
  const tab3 = new Tab("Tab 3");

  // Configure properties for each tab
  tab1.isDialogueMessageOn = false;
  tab1.isgroupsMessageOn = true;
  tab1.isChannelMessageOn = true;

  // Add exceptions, blocked chats, folders, and messages for tab1
  tab1.exceptionsDialogues.push(dialogue1);
  tab1.exceptionsgroups.push(group1);
  tab1.exceptionsChannels.push(channel1);
  tab1.blockedChats.push(chat1);
  tab1.folders.push(folder1);
  tab1.messages.push(...createMessage(20));

  // Configure properties for tab2 and add instances for tab2
  tab2.isDialogueMessageOn = true;
  tab2.isgroupsMessageOn = false;
  tab2.isChannelMessageOn = true;
  tab2.exceptionsDialogues.push(dialogue2);
  tab2.exceptionsgroups.push(group2);
  tab2.exceptionsChannels.push(channel2);
  tab2.blockedChats.push(chat2);
  tab2.folders.push(folder2);
  tab2.messages.push(...createMessage(10));

  // Configure properties for tab3 and add instances for tab3
  tab3.isDialogueMessageOn = true;
  tab3.isgroupsMessageOn = true;
  tab3.isChannelMessageOn = false;
  tab3.exceptionsDialogues.push(dialogue3);
  tab3.exceptionsgroups.push(group3);
  tab3.exceptionsChannels.push(channel3);
  tab3.blockedChats.push(chat3);
  tab3.folders.push(folder3);
  tab3.messages.push(...createMessage(15));


  selfProfile.tabs.push(tab1);
  selfProfile.tabs.push(tab2);
  selfProfile.tabs.push(tab3);


  return selfProfile;
}

function createUsers(count: number): User[] {
  const users: User[] = [];

  for (let i = 1; i <= count; i++) {
    const userName = `User${i}`;
    const user = new User(userName);

    // Additional properties can be set if needed
    user.numberPhone = `+123456789${i}`;
    user.nickname = `Nickname${i}`;
    user.description = `Description for User${i}`;
    user.linkToPhoto = `filesystem://photo${i}.jpg`;

    users.push(user);
  }

  return users;
}
function getRandomNumber(): number {
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range [0, 20)
  const randomNumber = Math.floor(randomDecimal * 20);

  return randomNumber;
}

function createMessage(count: number): Message[] {
  const messages: Message[] = [];
  for (let i = 1; i <= count; i++) {
    const author = new User(`User${i}`);
    const content = `Random message content ${i}`;
    const message = new Message(author, content, new Date(), EMessageType.text);

    // Additional properties can be set if needed
    message.messageResponseId = i - 1; // Set response ID to the previous message ID
    message.isEdited = i % 2 === 0; // Set isEdited based on the index

    // Add the message to the array
    messages.push(message);
  }

  return messages;
}