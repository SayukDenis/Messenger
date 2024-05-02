import {HubConnection, HubConnectionBuilder} from '@microsoft/signalr';
import Message from '../../../../dao/Models/Message';
import { MessageProps } from '../../SemiComponents/Interfaces/GeneralInterfaces/IMessage';

export class ChatHubService {
  private static instance: ChatHubService;
  private hubConnection: HubConnection | null = null;

  private messageTextReceivedHandler?: (...args: any[]) => void;
  private messageTextUpdateReceivedHandler?: (...args: any[]) => void;
  private messageSentHandler?: (...args: any[]) => void;
  private lastWatchedMessageUpdateReceivedHandler?: (...args: any[]) => void;
  private messageFileReceivedHandler?: (...args: any[]) => void;
  private pinMessageHandler?: (...args: any[]) => void;
  private deleteMessageHandler?: (...args: any[]) => void;

  private updatingLastWatchedMessage = false;

  private constructor() { }

  public static getInstance(): ChatHubService {
    if (!ChatHubService.instance) {
      ChatHubService.instance = new ChatHubService();
    }
    return ChatHubService.instance;
  }

  public async startConnection(userId: number): Promise<void> {
    this.hubConnection = new HubConnectionBuilder()
        .withUrl(`http://192.168.0.108:5151/chats?userID=${userId}`)
        .withAutomaticReconnect()
        .build();

    try {
      await this.hubConnection.start();
    } catch (e) {
      console.error(e);
    }
  };

  // Hub methods handler

  public async sendMessageText(msg: any) : Promise<void> {
    try {
      await this.hubConnection?.invoke('SendMessageText', msg);
    } catch (e) {
      throw e;
    }
  }

  public async sendMessageFile(msg: any) : Promise<void> {
    try {
      await this.hubConnection?.invoke('SendMessageFile', msg);
    } catch (e) {
      throw e;
    }
  }

  public async getFileFromMessage() : Promise<void> {
    
  }

  public async updateMessageText(newContent: string, messageId: number, chatId: number) : Promise<void> {
    try {
      await this.hubConnection?.invoke('UpdateMessageText', newContent, messageId, chatId);
    } catch (e) {
      throw e;
    }
  }

  public async updateMessageFile() : Promise<void> {
    
  }

  public async updateLastWatchedMessage(messageId: number, chatId: number, userId: number) : Promise<void> {
    if(this.updatingLastWatchedMessage) return;
    try {
      this.updatingLastWatchedMessage = true;
      await this.hubConnection?.invoke('UpdateLastWatchedMessage', messageId, chatId, userId);
    } catch (e) {
      throw e;
    }
  }

  public async pinMessage(message: any, chatId: number, unpin: boolean) {
    try {
      await this.hubConnection?.invoke('PinMessage', message, chatId, unpin);
    } catch (e) {
      throw e;
    }
  }
  
  public async deleteMessage(messageId: number, chatId: number) : Promise<void> {
    try {
      await this.hubConnection?.invoke('DeleteMessage', messageId, chatId);
    } catch (e) {
      throw e;
    }
  }

  public async registerReceiveMessageText(handler: (mes: Message) => void) {
    this.messageTextReceivedHandler = handler;
    this.hubConnection?.on("ReceiveMessageText", this.messageTextReceivedHandler!);
  }

  public async registerReceiveMessageFile(handler: (mes: any) => void) {
    this.messageFileReceivedHandler = handler;
    this.hubConnection?.on("ReceiveMessageFile", this.messageFileReceivedHandler!);
  }

  public async registerReceiveUpdateMessageText(handler: (messageId: number, newContent: string) => void) {
    this.messageTextUpdateReceivedHandler = handler;
    this.hubConnection?.on("UpdateMessageText", this.messageTextUpdateReceivedHandler!);
  }

  public async registerReceiveUpdateLastWatchedMessage(handler: (messageId: number, chatId: number, userId: number) => void) {
    this.lastWatchedMessageUpdateReceivedHandler = (messageId: number, chatId: number, userId: number) => {
      this.updatingLastWatchedMessage = false;
      handler(messageId, chatId, userId);
    }
    this.hubConnection?.on("UpdateLastWatchedMessage", this.lastWatchedMessageUpdateReceivedHandler!);
  }
  
  public async registerMessageSent() {
    this.hubConnection?.on("MessageSent", this.messageSentHandler!);
  }

  public async registerPinMessage(handler: (messageId: number, unpin: boolean) => void) {
    this.pinMessageHandler = handler;
    this.hubConnection?.on('PinMessage', this.pinMessageHandler);
  }

  public async registerDeleteMessage(handler: (messageId: number) => void) {
    this.deleteMessageHandler = handler;
    this.hubConnection?.on("DeleteMessage", this.deleteMessageHandler);
  }

  public async unregisterReceiveMessageText() {
    this.hubConnection?.off("ReceiveMessageText", this.messageTextReceivedHandler!);
  }
  
  public async unregisterReceiveMessageFile() {
    this.hubConnection?.off("ReceiveMessageFile", this.messageFileReceivedHandler!);
  }

  public async unregisterReceiveUpdateMessageText() {
    this.hubConnection?.off("UpdateMessageText", this.messageTextUpdateReceivedHandler!);
  }

  public async unregisterReceiveUpdateLastWatchedMessage() {
    this.hubConnection?.off("UpdateLastWatchedMessage", this.lastWatchedMessageUpdateReceivedHandler!);
  }

  public async unregisterMessageSent() {
    this.hubConnection?.off("MessageSent", this.messageSentHandler!);
  }

  public async unregisterDeleteMessage() {
    this.hubConnection?.off("DeleteMessage", this.deleteMessageHandler!);
  }

  public async disconnect() {
    try {
      await this.hubConnection?.stop();
    } catch (e) {
      console.error(e)
    }
  };
}