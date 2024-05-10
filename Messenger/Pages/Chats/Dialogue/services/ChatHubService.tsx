import {HubConnection, HubConnectionBuilder} from '@microsoft/signalr';
import Message from '../../../../dao/Models/Message';
import { MessageProps } from '../../SemiComponents/Interfaces/GeneralInterfaces/IMessage';

interface IChatHubService {
  sendMessageText: (msg: any) => Promise<void>;
  sendMessageFile: (msg: any) => Promise<void>;
  getFileFromMessage: () => Promise<void>;
  updateMessageText: (newContent: string, messageId: number, chatId: number) => Promise<void>;
  updateMessageFile: () => Promise<void>;
  updateLastWatchedMessage: (messageId: number, chatId: number, userId: number) => Promise<void>;
  pinMessage: (messageId: number, userId: number, chatId: number, unpin: boolean) => Promise<void>;
  deleteMessage: (messageId: number, userId: number, chatId: number) => Promise<void>;
  registerReceiveMessageText: (handler: (mes: Message) => void) => ChatHubService;
  registerReceiveMessageFile: (handler: (mes: any) => void) => ChatHubService;
  registerReceiveUpdateMessageText: (handler: (messageId: number, newContent: string) => void) => ChatHubService;
  registerReceiveUpdateLastWatchedMessage: (handler: (messageId: number, chatId: number, userId: number) => void) => ChatHubService;
  registerMessageSent: (handler: (messageId: number) => void) => ChatHubService;
  registerPinMessage: (handler: (messageId: number, unpin: boolean) => void) => ChatHubService;
  registerDeleteMessage: (handler: (messageId: number) => void) => ChatHubService;
  unregisterReceiveMessageText: () => ChatHubService;
  unregisterReceiveMessageFile: () => ChatHubService;
  unregisterReceiveUpdateMessageText: () => ChatHubService;
  unregisterReceiveUpdateLastWatchedMessage: () => ChatHubService;
  unregisterMessageSent: () => ChatHubService;
  unregisterPinMessage: () => ChatHubService;
  unregisterDeleteMessage: () => ChatHubService;


} 

export class ChatHubService implements IChatHubService {
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

  public async pinMessage(messageId: number, userId: number, chatId: number, unpin: boolean) : Promise<void> {
    try {
      await this.hubConnection?.invoke('PinMessage', messageId, userId, chatId, unpin);
    } catch (e) {
      throw e;
    }
  }
  
  public async deleteMessage(messageId: number, userId: number, chatId: number) : Promise<void> {
    try {
      await this.hubConnection?.invoke('DeleteMessage', messageId, userId, chatId);
    } catch (e) {
      throw e;
    }
  }

  public registerReceiveMessageText(handler: (mes: Message) => void) {
    this.messageTextReceivedHandler = handler;
    this.hubConnection?.on("ReceiveMessageText", this.messageTextReceivedHandler!);

    return ChatHubService.instance;
  }

  public registerReceiveMessageFile(handler: (mes: any) => void) {
    this.messageFileReceivedHandler = handler;
    this.hubConnection?.on("ReceiveMessageFile", this.messageFileReceivedHandler!);

    return ChatHubService.instance;
  }

  public registerReceiveUpdateMessageText(handler: (messageId: number, newContent: string) => void) {
    this.messageTextUpdateReceivedHandler = handler;
    this.hubConnection?.on("UpdateMessageText", this.messageTextUpdateReceivedHandler!);

    return ChatHubService.instance;
  }

  public registerReceiveUpdateLastWatchedMessage(handler: (messageId: number, chatId: number, userId: number) => void) {
    this.lastWatchedMessageUpdateReceivedHandler = (messageId: number, chatId: number, userId: number) => {
      this.updatingLastWatchedMessage = false;
      handler(messageId, chatId, userId);
    }
    this.hubConnection?.on("UpdateLastWatchedMessage", this.lastWatchedMessageUpdateReceivedHandler!);

    return ChatHubService.instance;
  }
  
  public registerMessageSent(handler: (messageId: number) => void) {
    this.messageSentHandler = handler;
    this.hubConnection?.on("MessageSent", this.messageSentHandler);

    return ChatHubService.instance;
  }

  public registerPinMessage(handler: (messageId: number, unpin: boolean) => void) {
    this.pinMessageHandler = handler;
    this.hubConnection?.on('PinMessage', this.pinMessageHandler);

    return ChatHubService.instance;
  }

  public registerDeleteMessage(handler: (messageId: number) => void) {
    this.deleteMessageHandler = handler;
    this.hubConnection?.on("DeleteMessage", this.deleteMessageHandler);

    return ChatHubService.instance;
  }

  public unregisterReceiveMessageText() {
    this.hubConnection?.off("ReceiveMessageText", this.messageTextReceivedHandler!);

    return ChatHubService.instance;
  }
  
  public unregisterReceiveMessageFile() {
    this.hubConnection?.off("ReceiveMessageFile", this.messageFileReceivedHandler!);

    return ChatHubService.instance;
  }

  public unregisterReceiveUpdateMessageText() {
    this.hubConnection?.off("UpdateMessageText", this.messageTextUpdateReceivedHandler!);

    return ChatHubService.instance;
  }

  public unregisterReceiveUpdateLastWatchedMessage() {
    this.hubConnection?.off("UpdateLastWatchedMessage", this.lastWatchedMessageUpdateReceivedHandler!);

    return ChatHubService.instance;
  }

  public unregisterMessageSent() {
    this.hubConnection?.off("MessageSent", this.messageSentHandler!);

    return ChatHubService.instance;
  }

  public unregisterPinMessage() {
    this.hubConnection?.off("PinMessage", this.pinMessageHandler!);

    return ChatHubService.instance;
  }

  public unregisterDeleteMessage() {
    this.hubConnection?.off("DeleteMessage", this.deleteMessageHandler!);

    return ChatHubService.instance;
  }

  public async disconnect() {
    try {
      await this.hubConnection?.stop();
    } catch (e) {
      console.error(e)
    }
  };
}