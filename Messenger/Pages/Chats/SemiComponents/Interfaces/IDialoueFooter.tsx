import SelfProfile from "../../../../dao/Models/SelfProfile";
import User from "../../../../dao/Models/User";
import { MessageProps } from "./GeneralInterfaces/IMessage";

export interface DialogueFooterProps {
  author: User | undefined;
  messages: MessageProps[];
  setMessages: (arg0: MessageProps) => void; 
  isReply: boolean; 
  replyMessage: MessageProps;
  onSendMessageOrCancelReplyAndEdit: () => void; 
  isEdit: boolean;
  editMessage: MessageProps; 
  messageID: number;
  copyMessagePopUp: boolean;
  endCopyMessagePopUp: () => void;
  selecting: boolean;
  deleteSelectedMessages: () => void;
}

export interface sendMessageProps {
  text: string; 
  setText: (arg0: string)=>void;
  messages: MessageProps[]; 
  setMessages: (arg0: MessageProps)=>void; 
  replyMessage: MessageProps; 
  onSendMessageOrCancelReplyAndEdit: ()=>void; 
  editMessage: MessageProps; 
  messageID: number;
  author: User|undefined;
}