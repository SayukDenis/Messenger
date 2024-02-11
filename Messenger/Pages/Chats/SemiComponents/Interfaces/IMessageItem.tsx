
import ILastWatchedMessage from "../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../dao/Models/User";
import { coordY } from "../Screens/PinnedMessageScreen";
import { Layout } from "./GeneralInterfaces/ILayout";
import { MessageProps } from "./GeneralInterfaces/IMessage";


export interface MessageItemProps { 
  item: MessageProps;
  listOfMessages: MessageProps[];
  setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void}; 
  flatListRef?: React.MutableRefObject<null>;
  coordsY: [number[]] | coordY[];
  author: User;
  users: User[];
  messageID: number;
  setCoordsY: (newCoordsY: any) => void;
  userMessageLastWatched?: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageHandler?: (message: number, coord: number) => void;
  pinnedMessageScreen: boolean;
  listOfPinnedMessages: Array<number>;
  navigation: any;
}