import { Animated } from "react-native";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import User from "../../../../dao/Models/User";
import { MessageProps } from "./GeneralInterfaces/IMessage";
import { Dispatch } from "redux";
import EventEmitter from 'events';
import { HubConnection } from "@microsoft/signalr";
import { ChatHubService } from "../../Dialogue/services/ChatHubService";
import { ConcreteSubject } from "../../Dialogue/HelperFunctions/Observer";

export interface DialogueFooterProps {
  keyboardActive: boolean;
  keyboardHeightUpdate: boolean;
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
  dispatch: Dispatch;
  emitter: ConcreteSubject;
  getChatHubService: () => ChatHubService | null;
  getAuthor: () => any;
  getChatId: () => number;
}

export interface DialogueFooterState {
  text: string;
  bottomOffset: Animated.Value;
  dynamicFooterHeight: number;
  displayImage: string;
  heightOfImageBackground: Animated.Value;
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
  getChatHubService: () => ChatHubService | null;
  getAuthor: () => any;
  getChatId: () => number;
  fileContent: string;
}

export enum EChangeFooterHeight {
  add = 1,
  subtract,
  reset
}