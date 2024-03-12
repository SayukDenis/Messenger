import { Dispatch } from "redux";
import ILastWatchedMessage from "../../../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../../../dao/Models/User";
import { MessageProps } from "../../../Interfaces/GeneralInterfaces/IMessage";

export interface PinnedMessageViewProps { 
  pinnedMessage: MessageProps;
  current: number;
  total: number;
  propsForPinnedMessageScreen: {
    navigation: any;
    listOfPinnedMessages: MessageProps[];
    listOfMessages: MessageProps[];
    author: User;
    messageID: number;
    unpinAllMessagesHandler: () => void;
    userMessageLastWatched: ILastWatchedMessage;
    onCopyPress: () => void;
    onUnpinPress: (message: MessageProps) => void;
    onDeletePress: (message: MessageProps) => void;
    users: User[];
  };
  dispatch: Dispatch;
}