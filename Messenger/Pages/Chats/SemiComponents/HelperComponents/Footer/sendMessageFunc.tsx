import { EMessageType } from "../../../../../dao/Models/EMessageType";
import User from "../../../../../dao/Models/User";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import { sendMessageProps } from "../../Interfaces/IDialoueFooter";

export const sendMessage = ({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author, getChatHubService, getAuthor, getChatId}:sendMessageProps) => {
  setText('');
  text = text.trim();

  const messageToEdit = messages.find(m => m.messageId == messageID);

  if(text == '') {
    onSendMessageOrCancelReplyAndEdit();
    return;
  }

  const connection = getChatHubService();

  if(replyMessage?.content) {
    // setMessages({
    //   messageId: messages.length,
    //   author: (author as User), // SelfProgile == User ?
    //   content: text,
    //   sendingTime: new Date(),
    //   messageType: EMessageType.text,
    //   messageResponseId: replyMessage.messageId,
    //   isEdited: false,
    //   isDeleted: false,
    //   reactionOnMessage: []
    // });

    const msg = {
      Content: text,
      Author: getAuthor(),
      ChatId: getChatId(),
      MessageId: 0,
      chatPinned: 0,
      chatPinnedForAll: 0,
      SendingTime: new Date(),
      NumberInChat: 0,
      ReactionOnMessage: [],
      Type: 1,
      Properties: 0,
      MessageResponseId: replyMessage.messageId,
      IsEdited: false,
      IsDeleted: false,
      IsDeletedForAll: false,
    };

    connection?.sendMessageText(msg);
  } else if(editMessage?.content&&text!=messageToEdit?.content) {
    connection?.updateMessageText(text, messageToEdit?.messageId!, getChatId());
  } else {
    const msg = {
          Content: text,
          Author: getAuthor(),
          ChatId: getChatId(),
          MessageId: 0,
          chatPinned: 0,
          chatPinnedForAll: 0,
          SendingTime: new Date(),
          NumberInChat: 0,
          ReactionOnMessage: [],
          Type: 1,
          Properties: 0,
          MessageResponseId: null,
          IsEdited: false,
          IsDeleted: false,
          IsDeletedForAll: false,
        };

    connection?.sendMessageText(msg);
  }
  onSendMessageOrCancelReplyAndEdit();
}; 