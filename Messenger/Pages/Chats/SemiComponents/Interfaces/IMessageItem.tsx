
import ILastWatchedMessage from "../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../dao/Models/User";
import { Layout } from "./GeneralInterfaces/ILayout";
import { MessageProps } from "./GeneralInterfaces/IMessage";
import { coordY } from "./IPinnedMessageScreen";

export interface MessageItemProps { 
  item: MessageProps;
  listOfMessages: MessageProps[];
  setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void}; 
  flatListRef?: React.MutableRefObject<null>;
  coordsY?: coordY[];
  // setCoordsY: (newCoordsY: any) => void;
  author: User;
  users: User[];
  messageID: number;
  userMessageLastWatched?: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageHandler?: (message: number, coord: number) => void;
  pinnedMessageScreen: boolean;
  listOfPinnedMessages: Array<number>;
  navigation: any;
  photoPreview: (fileContent: string) => void;
}