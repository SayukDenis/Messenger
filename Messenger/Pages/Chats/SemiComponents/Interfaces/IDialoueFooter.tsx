import { Animated } from "react-native";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import User from "../../../../dao/Models/User";
import { MessageProps } from "./GeneralInterfaces/IMessage";

export interface DialogueFooterProps {
  author: User;
  users: User[];
  messages: MessageProps[];
  setMessages: (arg0: MessageProps) => void; 
  isReply: boolean; 
  replyMessage: MessageProps;
  onSendMessageOrCancelReplyAndEdit: () => void; 
  isEdit: boolean;
  editMessage: MessageProps; 
  messageID: number;
  selecting: boolean;
  deleteSelectedMessages: () => void;
  keyboardActive: boolean;
}

export interface DialogueFooterState {
  text: string;
  bottomOffset: Animated.Value;
  dynamicFooterHeight: number;
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

export enum EChangeFooterHeight {
  add = 1,
  subtract,
  reset
}