import User from "../../../../../../dao/Models/User";
import { MessageProps } from "../../../Interfaces/GeneralInterfaces/IMessage";

export interface ReplyMessageProps {
  message: MessageProps;
  replyMessage: MessageProps;
  author: User;
  selecting: boolean;
  selected: boolean;
  handleLinkTo: (messageID: number | any) => void;
  onLayout: (event:any) => void;
  pinnedMessageScreen: boolean;
}