import Dialouge from "../Dialouge";
import { ChatHubService } from "./ChatHubService";

type dialogueConnectionType = {
  messageSentHandler: (messageId: number) => void;
  receiveMessageTextHandler: (mes: any) => void;
  receiveMessageFileHandler: (mes: any) => void;
  receiveLastWatchedMessageUpdate: (messageId: number, chatId: number, userId: number) => void;
  receiveUpdateMessageTextHandler: (messageId: number, newContent: string) => void;
  pinMessageHandler: (messageId: number, unpin: boolean) => void;
  unpinAllMessagesHandler: (chatId: number) => void;
  deleteMessageHandler: (messageId: number) => void;
  deleteSelectedMessagesHandler: (chatId: number, messagesId: Array<number>) => void;
  deleteAllMessagesHandler: (chatId: number) => void;
}

type groupConnectionType = {
  messageSentHandler: (messageId: number) => void;
  receiveMessageTextHandler: (mes: any) => void;
  receiveMessageFileHandler: (mes: any) => void;
  receiveLastWatchedMessageUpdate: (messageId: number, chatId: number, userId: number) => void;
  receiveUpdateMessageTextHandler: (messageId: number, newContent: string) => void;
  pinMessageHandler: (messageId: number, unpin: boolean) => void;
  deleteMessageHandler: (messageId: number) => void;
}

type channelConnectionType = {
  receiveMessageTextHandler: (mes: any) => void;
  receiveMessageFileHandler: (mes: any) => void;
  receiveLastWatchedMessageUpdate: (messageId: number, chatId: number, userId: number) => void;
  receiveUpdateMessageTextHandler: (messageId: number, newContent: string) => void;
}

export class Director {
  private connectionBuilder: ChatHubService;

  public setConnectionBuilder(connectionBuilder: ChatHubService): void {
    this.connectionBuilder = connectionBuilder;
  }

  public buildDialogueConnection(params: dialogueConnectionType): ChatHubService {
    const {
      messageSentHandler,
      receiveMessageTextHandler,
      receiveMessageFileHandler,
      receiveLastWatchedMessageUpdate,
      receiveUpdateMessageTextHandler,
      pinMessageHandler,
      unpinAllMessagesHandler,
      deleteMessageHandler,
      deleteSelectedMessagesHandler,
      deleteAllMessagesHandler,
    } = params;

    this.connectionBuilder.registerMessageSent(messageSentHandler)
      .registerReceiveMessageText(receiveMessageTextHandler)
      .registerReceiveMessageFile(receiveMessageFileHandler)
      .registerReceiveUpdateLastWatchedMessage(receiveLastWatchedMessageUpdate)
      .registerReceiveUpdateMessageText(receiveUpdateMessageTextHandler)
      .registerPinMessage(pinMessageHandler)
      .registerUnpinAllMessages(unpinAllMessagesHandler)
      .registerDeleteMessage(deleteMessageHandler)
      .registerDeleteSelectedMessages(deleteSelectedMessagesHandler)
      .registerDeleteAllMessages(deleteAllMessagesHandler);

    return this.connectionBuilder;
  } 

  public buildGroupConnection(params: groupConnectionType): ChatHubService {
    const {
      messageSentHandler,
      receiveMessageTextHandler,
      receiveMessageFileHandler,
      receiveLastWatchedMessageUpdate,
      receiveUpdateMessageTextHandler,
      pinMessageHandler,
      deleteMessageHandler,
    } = params;

    this.connectionBuilder.registerMessageSent(messageSentHandler)
      .registerReceiveMessageText(receiveMessageTextHandler)
      .registerReceiveMessageFile(receiveMessageFileHandler)
      .registerReceiveUpdateLastWatchedMessage(receiveLastWatchedMessageUpdate)
      .registerReceiveUpdateMessageText(receiveUpdateMessageTextHandler)
      .registerPinMessage(pinMessageHandler)
      .registerDeleteMessage(deleteMessageHandler);

    return this.connectionBuilder;
  } 
  
  public buildChannelConnection(params: channelConnectionType): ChatHubService {
    const {
      receiveMessageTextHandler,
      receiveMessageFileHandler,
      receiveLastWatchedMessageUpdate,
      receiveUpdateMessageTextHandler,
    } = params;

    this.connectionBuilder.registerReceiveMessageText(receiveMessageTextHandler)
      .registerReceiveMessageFile(receiveMessageFileHandler)
      .registerReceiveUpdateLastWatchedMessage(receiveLastWatchedMessageUpdate)
      .registerReceiveUpdateMessageText(receiveUpdateMessageTextHandler);

    return this.connectionBuilder;
  } 
}