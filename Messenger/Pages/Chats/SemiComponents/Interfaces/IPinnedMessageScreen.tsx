import { Animated } from "react-native";
import ILastWatchedMessage from "../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../dao/Models/User";
import { Layout } from "./GeneralInterfaces/ILayout";
import { MessageProps } from "./GeneralInterfaces/IMessage";

export interface NavigationProps {
  route?: {
    params: {
      navigation: any;
      listOfPinnedMessages: MessageProps[];
      listOfMessages: MessageProps[];
      setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void};
      author: User;
      users: User[];
      messageID: number;
      unpinAllMessagesHandler: () => void;
      userMessageLastWatched: ILastWatchedMessage;
      onCopyPress: () => void;
      onUnpinPress: (message: MessageProps) => void;
      onDeletePress: (messageId: number) => void;
    }
  };
}

export interface PinnedMessageScreenProps extends NavigationProps {
  
}

export interface PinnedMessageScreenState {
  selecting: boolean;
  deleteModalVisisble: boolean;
  messageMenuVisible: boolean;
  messageID: number;
  listOfPinnedMessages: MessageProps[];
  offsetForMessageMenu: Animated.Value;
}

export interface coordY {
  id: number;
  y: number;
  height: number;
}