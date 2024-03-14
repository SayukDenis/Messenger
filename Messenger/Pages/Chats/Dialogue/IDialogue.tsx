import { MessageProps } from "../SemiComponents/Interfaces/GeneralInterfaces/IMessage";

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
  copy: boolean;
  selecting: boolean;
  listOfPinnedMessages: MessageProps[];
  pinnedMessage: MessageProps;
  messageIdForReplyAndEdit: number;
}