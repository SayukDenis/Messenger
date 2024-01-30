import { Dispatch } from "redux";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MutableRefObject } from "react";
import User from "../../../../../dao/Models/User";
import { MessageProps } from "../../GeneralInterfaces/IMessage";
import { Layout } from "../../GeneralInterfaces/ILayout";

export interface ReplyTextTypeProps {
  idForAnimation: number;
  messages: MessageProps[];
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean)=>void;
  id: number;
  flatList: MutableRefObject<any>;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  dispatch: Dispatch;
  pinnedMessageScreen: boolean;
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

export interface coordProps {
  locationX_In: number;
  locationY_In: number;
}

export interface componentPageProps {
  X: number;
  Y: number;
}