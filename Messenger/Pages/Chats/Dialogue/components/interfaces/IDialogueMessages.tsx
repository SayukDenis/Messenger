import { MutableRefObject } from "react";
import { MessageProps } from "../../GeneralInterfaces/IMessage";
import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";

export interface DialogueMessagesProps {
  setMessageMenuVisible:(arg0: {ID:number, componentPageX:number, componentPageY:number, pageX:number, pageY:number, width:number, height:number, message:MessageProps}, arg1: boolean)=>void;
  messageMenuVisisbleAppearence:boolean;
  messageID:number;
  listOfMessages:MessageProps[];
  isReply:boolean;
  isEdit:boolean;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  authorMessageLastWatched: ILastWatchedMessage | undefined;
}

export interface messageViewHandleProps {
  listOfMessages: MessageProps[]; 
  message: MessageProps; 
  setMessageMenuVisible: {(arg0: {ID:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean):void}; 
  scrollViewRef: MutableRefObject<any>; 
  coordsY: any;
  author: User;
}