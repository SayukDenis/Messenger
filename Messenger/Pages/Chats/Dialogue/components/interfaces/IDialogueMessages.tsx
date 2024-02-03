import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";


export interface DialogueMessagesProps {
  scrollToPinnedMessage: boolean;
  idOfPinnedMessage: number;
  scrollToTappedMessage: boolean;
  idOfTappedMessage: number;
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
  deletedMessagesId: number[];
  navigation: any;
}

export interface messageViewHandleProps {
  message: MessageProps; 
}