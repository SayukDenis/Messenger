
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../../dao/Models/User";
import { Layout } from "../../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { MessageProps } from "../../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";


export interface MessageItemProps { 
  item: MessageProps;
  listOfMessages: MessageProps[];
  setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void}; 
  flatListRef?: React.MutableRefObject<null>;
  coordsY: [number[]];
  author: User;
  messageID: number;
  setCoordsY: (newCoordsY: any) => void;
  userMessageLastWatched?: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageHandler?: (message: number, coord: number) => void;
  pinnedMessageScreen: boolean;
  listOfPinnedMessages: Array<number>;
  navigation: any;
}