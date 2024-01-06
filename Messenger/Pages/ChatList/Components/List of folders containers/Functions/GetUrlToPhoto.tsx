import Channel from "../../../../../dao/Models/Chats/Channel";
import Chat from "../../../../../dao/Models/Chats/Chat";
import Group from "../../../../../dao/Models/Chats/Group";
import User from "../../../../../dao/Models/User";

    import SelfProfile from "../../../../../dao/Models/SelfProfile";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";

export const getUrlToPhoto = (chat: Chat) => {
    let urlToPhoto = "";
    if (chat instanceof Dialogue) {
      const otherUser: User = (chat as Dialogue).users.find(
        (user) => user instanceof User && !(user instanceof SelfProfile)
      );
      urlToPhoto = otherUser.linkToPhoto;
    } else if (chat instanceof Channel) {
      urlToPhoto = (chat as Channel).linkToPhoto;
    } else if (chat instanceof Group) {
      urlToPhoto = (chat as Group).linkToPhoto;
    }
    return urlToPhoto;
  };