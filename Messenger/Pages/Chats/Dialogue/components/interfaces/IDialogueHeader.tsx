import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../../dao/Models/User";
import { MessageProps } from "../../GeneralInterfaces/IMessage";


export interface DialogueHeaderProps {
  counterOfSelectedMessages: number;
  navigation: any;
  picture: string | undefined;
  activityTime: string | Date;
  pinnedMessage: MessageProps;
  selecting: boolean;
  cancelSelection: () => void;
  author: User;
  listOfMessages: MessageProps[];
  listOfPinnedMessages: MessageProps[];
  messageID: number;
  unpinAllMessagesHandler: () => void;
  userMessageLastWatched: ILastWatchedMessage;
  onCopyPress: () => void;
  onUnpinPress: (message: MessageProps) => void;
  onDeletePress: (message: MessageProps) => void;
}