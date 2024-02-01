import User from "../../../../dao/Models/User";
import { MessageProps } from "./GeneralInterfaces/IMessage";

export interface DeleteMessageModalProps {
  deleting: boolean;
  setDeletingHandler: ()=>void;
  onDeletePress: ()=>void;
  message: MessageProps|undefined;
  author: User;
}