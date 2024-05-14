import { Dispatch } from "redux";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MutableRefObject } from "react";
import User from "../../../../../dao/Models/User";
import { Layout } from "../../Interfaces/GeneralInterfaces/ILayout";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import { coordProps } from "./IGeneralInterfaces";
import { CoordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";

export interface ReplyTextTypeProps {
  navigation: any;
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
}

export interface ReplyTextTypeWithReduxProps extends ReplyTextTypeProps {
  dispatch: Dispatch;
  messagesWithCoords: CoordinationsOfMessage[];
  idForAnimation: number;
}

export interface ReplyTextTypeState {
  sizeOfMessageContainer: [number, number];
  widthOfMessage: number;
  widthOfReply: number;
  selected: boolean;
  animate: boolean;
  pressCoordinations: coordProps;
  replyMessage: string;
  message: string;
}