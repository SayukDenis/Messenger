import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../GeneralInterfaces/IMessage";


export interface messageMenuProps {
  isVisible: boolean;
  onOverlayPress: () => void;
  coord: {
    ID: number;
    componentPageX: number;
    componentPageY: number;
    pageX: number;
    pageY: number;
    width: number;
    height: number;
    message: MessageProps|undefined;
  };
  messages: MessageProps[];
  onReplyPress: () => void;
  onEditPress: () => void;
  onCopyPress: () => void;
  onSelectPress: () => void;
  isUser: boolean;
  onDeletePress: () => void;
  userMessageLastWatched: ILastWatchedMessage | undefined;
}