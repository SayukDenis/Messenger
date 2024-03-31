import ILastWatchedMessage from "../../../../dao/Models/Chats/ILastWatchedMessage";
import User from "../../../../dao/Models/User";
import { MessageProps } from "./GeneralInterfaces/IMessage";
import * as DialogueModel from '../../../../dao/Models/Chats/Dialogue';
import * as GroupModel from '../../../../dao/Models/Chats/Group';
import * as ChannelModel from '../../../../dao/Models/Chats/Channel';
import { Dispatch } from "redux";
//Messenger\Pages\Chats\SemiComponents\Interfaces\GeneralInterfaces

export interface DialogueHeaderProps {
  counterOfSelectedMessages: number;
  currentNumOfPinnedMessage: number;
  countOfPinnedMessages: number;
  displayName: string;
  picture: string | undefined;
  activityTime: string | Date;
  pinnedMessage: MessageProps;
  selecting: boolean;
  cancelSelection: () => void;
  chatType: DialogueModel.default | GroupModel.default | ChannelModel.default;
  propsForPinnedMessageScreen: {
    navigation: any;
    listOfPinnedMessages: MessageProps[];
    listOfMessages: MessageProps[];
    author: User;
    messageID: number;
    unpinAllMessagesHandler: () => void;
    userMessageLastWatched: ILastWatchedMessage;
    onUnpinPress: (message: MessageProps) => void;
    onDeletePress: (messageId: number) => void;
    users: User[];
  };
  deleteAllButtonHandler: () => void;
  dispatch: Dispatch;
}

export interface DialogueHeaderState {

}