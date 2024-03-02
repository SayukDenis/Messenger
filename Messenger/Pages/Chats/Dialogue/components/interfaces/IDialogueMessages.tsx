import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { coordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";


export interface DialogueMessagesProps {
  scrollToPinnedMessage: boolean;
  idOfPinnedMessage: number;
  scrollToTappedMessage: boolean;
  idOfTappedMessage: number;
  setMessageMenuVisible:(coordinations: Layout, pressed: boolean, callback: () => void)=>void; 
  messageID:number;
  listOfMessages:MessageProps[];
  isReply:boolean;
  isEdit:boolean;
  author: User;
  users: User[];
  userMessageLastWatched: ILastWatchedMessage | undefined;
  authorMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  hasPinnedMessage: boolean;
  pinnedMessages: MessageProps[];
  setPinnedMessage: (id: number) => void;
  deletedMessagesId: number[];
  navigation: any;
  messagesWithCoords: coordinationsOfMessage[];
}

export interface messageViewHandleProps {
  message: MessageProps; 
}