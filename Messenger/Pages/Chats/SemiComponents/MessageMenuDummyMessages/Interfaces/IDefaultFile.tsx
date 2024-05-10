import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../Interfaces/GeneralInterfaces/IMessage";

export interface IDefaultFile {
  message:MessageProps|undefined;
  isUser: boolean;
  height:number;
  userMessageLastWatched: ILastWatchedMessage|undefined;
  pinned: boolean;
}