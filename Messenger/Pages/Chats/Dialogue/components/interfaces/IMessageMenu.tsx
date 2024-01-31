import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { Layout } from "../../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { MessageProps } from "../../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";


export interface messageMenuProps {
  isVisible: boolean;
  onOverlayPress: () => void;
  coord: Layout;
  messages: MessageProps[];
  onReplyPress?: () => void;
  onEditPress?: () => void;
  onCopyPress?: () => void;
  onSelectPress?: () => void;
  onPinPress?: (arg0: MessageProps) => void
  isUser: boolean;
  onDeletePress?: () => void;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  pinnedMessageScreen: boolean;
}