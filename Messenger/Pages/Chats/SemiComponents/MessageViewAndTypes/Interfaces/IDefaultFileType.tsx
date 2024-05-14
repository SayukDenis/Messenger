import { Dispatch } from "redux";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../../dao/Models/User";
import { Layout } from "../../Interfaces/GeneralInterfaces/ILayout";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";
import { CoordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";

export interface DefaultFileTypeProps {
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
  listOfPinnedMessages: Array<number>;
  photoPreview: (fileContent: string, sendingTime: Date | null) => void;
}

export interface DefaultFileTypeWithNavigationProps extends DefaultFileTypeProps {
  dispatch: Dispatch;
  idForAnimation: number;
  messagesWithCoords: CoordinationsOfMessage[];
}

export interface DefaultFileTypeState {
  animate: boolean;
  heightOfMessage: number;
  selected: boolean;

}