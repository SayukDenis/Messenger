import User from "../../../../../dao/Models/User";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import { MessageProps } from "../../../SemiComponents/Interfaces/GeneralInterfaces/IMessage";
import { Layout } from "../../../SemiComponents/Interfaces/GeneralInterfaces/ILayout";
import { CoordinationsOfMessage } from "../../../../../ReducersAndActions/Reducers/ChatReducers/ChatsReducers";
import { Animated } from "react-native";
import { Dispatch } from "redux";
import EventEmitter from 'events';
import { HubConnection } from "@microsoft/signalr";
import { ChatHubService } from "../../services/ChatHubService";

export interface DialogueMessagesProps {
  scrollToPinnedMessage: boolean;
  idOfPinnedMessage: number;
  setMessageMenuVisible:(coordinations: Layout, pressed: boolean, callback: () => void)=>void; 
  messageID:number;
  listOfMessages:MessageProps[];
  isReply:boolean;
  isEdit:boolean;
  author: User;
  users: User[];
  userMessageLastWatched: ILastWatchedMessage | undefined;
  authorMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  hasPinnedMessage: boolean;
  pinnedMessages: MessageProps[];
  setPinnedMessage: (id: number) => void;
  navigation: any;
  messagesWithCoords: CoordinationsOfMessage[];
  emitter: EventEmitter;
  chatId: number;
  chatHubService: ChatHubService | null;
  previewPhoto: (fileContent: string, sendingTime: Date | null) => void;
}

export interface MessageViewHandleProps {
  message: MessageProps; 
}

export interface DialogueMessagesReduxProps {
  dispatch?: Dispatch<any>;
}

export interface messageCoordsProps {
  message: number;
  coord: number;
  height: number;
}

export interface DialogueMessagesState {
  coordsY: [number[]]
  keyboardHeight: Animated.Value;
  flatListHeight: Animated.Value;
  footerGap: Animated.Value;
  pinnedMessageId: number;
  deletedMessagesCount: number;
  callMessageMenu: boolean;
}