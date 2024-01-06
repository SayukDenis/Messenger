
import Chat from "../../../../../dao/Models/Chats/Chat";

import SelfProfile from "../../../../../dao/Models/SelfProfile";

export const hasUnreadMessages = (chat:Chat, selfProfile:SelfProfile) => {
  const lastMessage = chat.messages.length > 0
    ? chat.messages[chat.messages.length - 1]
    : undefined;

  const id = 0;
  if (lastMessage !== undefined)
    if (lastMessage.author.userId !== selfProfile.userId) {
      if (id && lastMessage.messageId!=undefined && lastMessage.messageId > id) {
        return true;
      }
    }
  return false;
};
