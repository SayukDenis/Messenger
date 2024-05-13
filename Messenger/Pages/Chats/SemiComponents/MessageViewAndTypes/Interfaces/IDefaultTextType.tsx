import { Dispatch } from "redux";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import User from "../../../../../dao/Models/User";
import { Layout } from "../../Interfaces/GeneralInterfaces/ILayout";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { CoordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";

export interface DefaultTextMessageWithNavigationProps extends DefaultTextMessageProps {
  dispatch: Dispatch;
  idForAnimation: number;
  messagesWithCoords: CoordinationsOfMessage[];
}

export interface DefaultTextMessageProps {
  navigation: any;
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean) => void;
  id: number;
  flatList: React.MutableRefObject<any>;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageScreen: boolean;
  messages: MessageProps[];
  listOfPinnedMessages: Array<number>
}

export interface DefaultTextMessageState {
  animate: boolean;
  heightOfMessage: number;
  selected: boolean;
  message: string;
}