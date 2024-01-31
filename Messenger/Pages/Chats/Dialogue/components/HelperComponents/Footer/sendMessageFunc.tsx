import { EMessageType } from "../../../../../../dao/Models/EMessageType";
import User from "../../../../../../dao/Models/User";
import { MessageProps } from "../../../GeneralInterfaces/IMessage";
import { sendMessageProps } from "../../interfaces/IDialoueFooter";

export const sendMessage = ({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author}:sendMessageProps) => {
  setText('');
  text = text.trim();

  const messageToEdit = messages.find(m => m.messageId == messageID);

  if(text == '') {
    onSendMessageOrCancelReplyAndEdit();
    return;
  }
  if(replyMessage?.content) {
    setMessages({
      messageId: messages[0].messageId!+1,
      author: (author as User), // SelfProgile == User ?
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      messageResponseId: replyMessage.messageId,
      isEdited: false,
      isDeleted: false,
      reactionOnMessage: []
    });
  } else if(editMessage?.content&&text!=messageToEdit?.content) {
    if(messageToEdit!==undefined) {
      messageToEdit.content = text;
      messageToEdit.isEdited = true;
    }
    setMessages({} as MessageProps);
  } else {
    setMessages({
      messageId: messages[0].messageId!+1,
      author: (author as User),
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      isEdited: false,
      isDeleted: false,
      reactionOnMessage: []
    });
  }
  onSendMessageOrCancelReplyAndEdit();
}; 