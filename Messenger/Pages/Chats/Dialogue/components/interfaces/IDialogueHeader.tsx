import User from "../../../../../dao/Models/User";
import { Layout } from "../../GeneralInterfaces/ILayout";
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
  setMessageMenuVisible: {(arg0: Layout, arg1: boolean):void};
  messageID: number;
  unpinAllMessagesHandler: () => void;
}