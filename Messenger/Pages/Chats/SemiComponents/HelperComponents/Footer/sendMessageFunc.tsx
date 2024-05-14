import { EMessageType } from "../../../../../dao/Models/EMessageType";
import User from "../../../../../dao/Models/User";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import { sendMessageProps } from "../../Interfaces/IDialoueFooter";

export const sendMessage = ({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author, getChatHubService, getAuthor, getChatId, fileContent }:sendMessageProps) => {
  setText('');
  text = text.trim();

  const messageToEdit = messages.find(m => m.messageId == messageID);

  if((!text && !fileContent) || text === messageToEdit?.content) {
    onSendMessageOrCancelReplyAndEdit();
    return;
  }

  const connection = getChatHubService();

  if(replyMessage?.content || replyMessage.fileContent) {
    const msg = {
      messageId: messages[0].messageId! + 1,
      author: (author as User), // SelfProgile == User ?
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      messageResponseId: replyMessage.messageId,
      isEdited: false,
      sent: false,
      reactionOnMessage: []
    }

    if(fileContent)
      setMessages({ ...msg, fileContent: fileContent, fileName: 'image.png', messageType: EMessageType.img });
    else 
      setMessages(msg);

    const msgServ = {
      Content: text,
      Author: getAuthor(),
      ChatId: getChatId(),
      MessageId: 0,
      chatPinned: 0,
      chatPinnedForAll: 0,
      SendingTime: new Date(),
      Coordinations: 0,
      ReactionOnMessage: [],
      Type: 1,
      MessageResponseId: replyMessage.messageId,
      IsEdited: false,
    };

    if(fileContent)
      connection?.sendMessageFile({ ...msgServ, FileName: 'image', Type: EMessageType.img });
    else
      connection?.sendMessageText(msgServ);
  } else if(editMessage?.content&&text!=messageToEdit?.content) {
    connection?.updateMessageText(text, messageToEdit?.messageId!, getChatId());

    setMessages({ content: text } as MessageProps);
  } else {
    const msg = {
      messageId: messages.length > 0 ? messages[0].messageId! + 1 : 0,
      author: (author as User), // SelfProgile == User ?
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      messageResponseId: undefined,
      isEdited: false,
      sent: false,
      reactionOnMessage: []
    }

    if(fileContent)
      setMessages({ ...msg, fileContent: fileContent, fileName: 'image.png', messageType: EMessageType.img });
    else 
      setMessages(msg);

    const msgServ = {
          Content: text,
          Author: getAuthor(),
          ChatId: getChatId(),
          MessageId: 0,
          chatPinned: 0,
          chatPinnedForAll: 0,
          SendingTime: new Date(),
          Coordinations: 0,
          ReactionOnMessage: [],
          Type: 1,
          MessageResponseId: null,
          IsEdited: false,
        };

    if(fileContent)
      connection?.sendMessageFile({ ...msgServ, FileName: 'image', Type: EMessageType.img });
    else
      connection?.sendMessageText(msgServ);
  }
  onSendMessageOrCancelReplyAndEdit();
}; 