import { MutableRefObject } from "react";
import { MessageProps } from "../../GeneralInterfaces/IMessage";
import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { Layout } from "../../GeneralInterfaces/ILayout";


export interface DialogueMessagesProps {
  scrollToPinnedMessage: boolean;
  idOfPinnedMessage: number;
  setMessageMenuVisible:(arg0: Layout, arg1: boolean)=>void; 
  messageID:number;
  listOfMessages:MessageProps[];
  isReply:boolean;
  isEdit:boolean;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  authorMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  hasPinnedMessage: boolean;
  pinnedMessages: MessageProps[];
  setPinnedMessage: (id: number) => void;
}

export interface messageViewHandleProps {
  message: MessageProps; 
}