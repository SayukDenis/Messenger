import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../GeneralInterfaces/IMessage";

export interface DefaultTextMessageProps {
  message:MessageProps|undefined;
  isUser: boolean;
  height:number;
  userMessageLastWatched: ILastWatchedMessage|undefined;
}