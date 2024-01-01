import Branch from "../../../../../dao/Models/Chats/Branch";
import Channel from "../../../../../dao/Models/Chats/Channel";
import Chat from "../../../../../dao/Models/Chats/Chat";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import Group from "../../../../../dao/Models/Chats/Group";
import SelfProfile from "../../../../../dao/Models/SelfProfile";

const getNameOfChat = (chat: Chat, selfProfile: SelfProfile) => {
  let name = "";
  if (chat instanceof Dialogue) {
    let dialogue: Dialogue = chat as Dialogue;
    for (let i = 0; i < dialogue.users.length; i++) {
      if (dialogue.users[i].userId !== selfProfile.userId) {
        name = dialogue.users[i].name;
      }
    }
  } else if (chat instanceof Channel) {
    let channel: Channel = chat as Channel;
    name = channel.title;
  } else if (chat instanceof Group) {
    let group: Group = chat as Group;
    name = group.title;
  } else if (chat instanceof Branch) {
    let branch: Branch = chat as Branch;
    name = branch.title;
  }
  return name;
};

export default getNameOfChat;
