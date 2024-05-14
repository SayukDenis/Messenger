import { MutableRefObject } from "react";
import { Layout } from "../../Interfaces/GeneralInterfaces/ILayout";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { CoordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";
import { Dispatch } from "redux";
import { coordProps } from "./IGeneralInterfaces";

export interface ReplyFileTypeProps {
  messages: MessageProps[];
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean)=>void;
  id: number;
  flatList: MutableRefObject<any>;
  author: User;
  userName: string;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageScreen: boolean;
  listOfPinnedMessages: Array<number>;
  navigation: any;
  photoPreview: (fileContent: string, sendingTime: Date | null) => void;
}

export interface ReplyFileTypeWithNavigationProps extends ReplyFileTypeProps {
  idForAnimation: number;
  messagesWithCoords: CoordinationsOfMessage[];
  dispatch: Dispatch;
}

export interface ReplyFileTypeState {
  sizeOfMessageContainer: [number, number];
  widthOfMessage: number;
  widthOfReply: number;
  selected: boolean;
  animate: boolean;
  pressCoordinations: coordProps;
  replyMessage: string;
  message: string;
}