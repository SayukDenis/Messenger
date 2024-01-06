import { Message } from "../../tmpdata";

export interface DialogueFooterProps {
  messages:Message[], 
  setMessages:(arg0: Message)=>void, 
  isReply:boolean, 
  replyMessage:Message, 
  onSendMessageOrCancelReplyAndEdit:()=>void, 
  isEdit:boolean, 
  editMessage:Message, 
  messageID:number,
}

export interface sendMessageProps {
  text:string, 
  setText:(arg0: string)=>void,
  messages:Message[], 
  setMessages:(arg0: Message)=>void, 
  replyMessage:Message, 
  onSendMessageOrCancelReplyAndEdit:()=>void, 
  editMessage:Message, 
  messageID:number,
}