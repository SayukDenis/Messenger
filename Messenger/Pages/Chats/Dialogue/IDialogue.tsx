import { HubConnection } from "@microsoft/signalr";
import { MessageProps } from "../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import ILastWatchedMessage from "../../../dao/Models/Chats/ILastWatchedMessage";

export interface DialogueProps {
  listOfId: number[];
  navigation: any;
  route: any;
}

export interface DialogueState {
  messageID: number;
  messageMenuVisible: boolean;
  listOfMessages: MessageProps[];
  isReply: boolean;
  isEdit: boolean;
  editMessage: MessageProps;
  deleting: boolean;
  selecting: boolean;
  listOfPinnedMessages: MessageProps[];
  pinnedMessage: MessageProps;
  messageIdForReplyAndEdit: number;
  userId: number;
  authorMessageLastWatched: ILastWatchedMessage | null,
  userMessageLastWatched: ILastWatchedMessage | null,
  edit: number
}