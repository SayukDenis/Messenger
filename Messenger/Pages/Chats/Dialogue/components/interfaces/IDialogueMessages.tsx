import { MutableRefObject } from "react";
import { MessageProps } from "../../GeneralInterfaces/IMessage";
import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { Layout } from "../../GeneralInterfaces/ILayout";


export interface DialogueMessagesProps {
  setMessageMenuVisible:(arg0: Layout, arg1: boolean)=>void; 
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
  setMessageMenuVisible: (arg0: Layout, arg1: boolean)=>void; 
  flatListRef: MutableRefObject<any>; 
  coordsY: any;
  author: User;
}