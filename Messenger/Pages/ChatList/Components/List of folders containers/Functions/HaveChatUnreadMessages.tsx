
import Message from "../../../../../dao/Models/Message";
import SelfProfile from "../../../../../dao/Models/SelfProfile";

export const hasUnreadMessages = (chat, selfProfile) => {
  const lastMessage = chat.messages.length > 0
    ? chat.messages[chat.messages.length - 1]
    : undefined;

  const id = chat.dictionary?.get(selfProfile.userId);
  if (lastMessage !== undefined)
    if (lastMessage.author.userId !== selfProfile.userId) {
      if (id && lastMessage.messageId > id) {
        return true;
      }
    }
  return false;
};
