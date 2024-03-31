import ILastWatchedMessage from "../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../dao/Models/User";
import { Layout } from "./GeneralInterfaces/ILayout";
import { MessageProps } from "./GeneralInterfaces/IMessage";


export interface MessageMenuProps {
  isVisible: boolean;
  onOverlayPress: () => void;
  coord: Layout;
  messages: MessageProps[];
  onReplyPress?: () => void;
  onEditPress?: () => void;
  onSelectPress?: () => void;
  onPinPress?: (arg0: MessageProps) => void
  isUser: boolean;
  onDeletePress?: () => void;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  pinnedMessageScreen: boolean;
  users: User[];
}

export interface MessageMenuState {
  
}