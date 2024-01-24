import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../GeneralInterfaces/IMessage";

export interface ReplyTextType {
  messages: MessageProps[];
  message: MessageProps;
  isUser: boolean;
  height: number;
  userMessageLastWatched: ILastWatchedMessage|undefined;
}