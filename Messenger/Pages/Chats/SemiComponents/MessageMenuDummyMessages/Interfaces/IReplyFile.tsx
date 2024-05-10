import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";

export interface IReplyFileType {
  messages: MessageProps[];
  message: MessageProps;
  isUser: boolean;
  userName: string;
  height: number;
  userMessageLastWatched: ILastWatchedMessage|undefined;
  pinned: boolean;
}