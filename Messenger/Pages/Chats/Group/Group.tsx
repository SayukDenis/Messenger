import { Platform, View } from 'react-native';
import { Component } from 'react';
import Footer from '../SemiComponents/Footer';
import MessageMenu from '../SemiComponents/MessageMenu';
import styles from '../Dialogue/DialogueStyle';
import React from 'react';
import DeleteMessageModal from '../SemiComponents/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';
import { connect } from 'react-redux';
import User from '../../../dao/Models/User';
import DialogueMessages from '../Dialogue/components/DialogueMessages';
import Header from '../SemiComponents/Header';
import { MessageProps } from '../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import { removeCoordinationsOfAllMessages, removeCoordinationsOfMessage, removeCoordinationsOfSelectedMessages, resetSelectedMessage } from '../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { DialogueProps, DialogueState } from '../Dialogue/IDialogue';
import { checkListOfMessagesDifference } from '../Dialogue/HelperFunctions/CheckListOfMessages';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { ChatHubService } from "../Dialogue/services/ChatHubService";
import PhotoPreview from '../SemiComponents/PhotoPreview';
import { ConcreteObserver, ConcreteSubject } from '../Dialogue/HelperFunctions/Observer';
import { Director } from '../Dialogue/services/DirectorForConnectionBuild';

let coord: Layout;
let author: User;
let users: User[];

let group:DialogueModel.default;
let messageMenuCallback: (() => void) | undefined;


class Group extends Component<DialogueProps> {
  public static subject = new ConcreteSubject();

  chatId : number = 0;

  getAuthor = () => {
    return author;
  }
  getChatId = () => this.chatId;
  
  state: DialogueState = {
    messageID: -1,
    messageMenuVisible: false,
    listOfMessages: [],
    isReply: false,
    isEdit: false,
    editMessage: {} as MessageProps,
    deleting: false,
    selecting: false, 
    listOfPinnedMessages: [],
    pinnedMessage: {} as MessageProps,
    messageIdForReplyAndEdit: -1,
    userId: Platform.OS === "android" ? 1 : 2,
    authorMessageLastWatched: null,
    userMessageLastWatched: null,
    edit: 0,
    fileContent: '',
    sendingTime: null,
  }

  async componentDidMount(): Promise<void> {

    //#region Handlers 

    const messageSentHandler = (messageId: number) => {
      const list = [...this.state.listOfMessages];
      const m = { ...list.shift(), sent: true };
      
      this.setState({ listOfMessages: [m, ...list] });
    }

    const receiveMessageTextHandler = (mes: any) => this.setMessages({ ...mes, sendingTime: new Date(mes.sendingTime), isDeleted: false });

    const receiveMessageFileHandler = async (mes: any) => {
      this.setMessages({ ...mes, sendingTime: new Date(mes.sendingTime), isDeleted: false });

      // Processing and saving image/video to a gallery
      // Create file path
      const filePath = `${FileSystem.documentDirectory}image.png`;

      try {
        // Write base64 string to file
        await FileSystem.writeAsStringAsync(filePath, mes.fileContent, {
          encoding: FileSystem.EncodingType.Base64,
        });

        // Save file to gallery
        await MediaLibrary.saveToLibraryAsync(filePath);
      } catch (error) {
        console.error('Error saving image:', error);
      }
    }

    const receiveLastWatchedMessageUpdate = (messageId: number, chatId: number, userId: number) => {
      if(userId === author.userId) {
        this.setState({ 
          authorMessageLastWatched: { 
            ...this.state.authorMessageLastWatched, 
            messageId: messageId
          } 
        });
      } else {
        this.setState({ 
          userMessageLastWatched: {
            ...this.state.userMessageLastWatched, 
            messageId: messageId
          }
        });
      }
    }

    const receiveUpdateMessageTextHandler = (messageId: number, newContent: string) => {
      if(messageId&&newContent) {
        const list = [...this.state.listOfMessages];
        const id = list.findIndex(m => m.messageId === messageId);
        const m = { ...list[id] };
        m.content = newContent;
        m.isEdited = true;
        this.setState({ listOfMessages: [...list.slice(0, id), m, ...list.slice(id + 1)] });
      }
    }

    const pinMessageHandler = (messageId: number, unpin: boolean) => {
      const m = this.state.listOfMessages.find(m => m.messageId === messageId);
      this.pinMessageHandler(m!);
    }

    const unpinAllMessagesHandler = (chatId: number) => this.unpinAllMessagesHandler(false);

    const deleteMessageHandler = (messageId: number) => this.onDeletePress(messageId);

    const deleteSelectedMessagesHandler = (chatId: number, messagesId: Array<number>) => this.deleteSelectedMessages(messagesId);

    const deleteAllMessagesHandler = (chatId: number) => this.deleteAllButtonHandler(false);

    //#endregion

    //#region Server 

    // fetch("http://192.168.0.108:5151/api/Chat/dialogue/1/2", {method: "POST",})
    //     .then(response => response.json())
    //     .then(res => console.log(res))
    //     .catch(error => console.error('error while fetching', error));

    await fetch("http://192.168.0.108:5151/api/Chat/dialogue/1", {method: "GET",})
        .then(response => response.json())
        .then(res => [JSON.parse(res[0]), JSON.parse(res[1])])
        .then(result => {
          author = result[0]?.users[Platform.OS === 'android' ? 0 : 1];
          users = [result[0]?.users[Platform.OS === 'android' ? 1 : 0]];
          
          this.setState({
            authorMessageLastWatched: result[0]?.lastWatchedMessages.find((obj : any) => obj.userId === author.userId),
            userMessageLastWatched: result[0]?.lastWatchedMessages.find((obj : any) => obj.userId === users[0].userId)
          })

          this.chatId = result[0]?.chatId;
          
          const msgs : any[] = [];
          (result[1] as Array<any>).forEach((m, index) => {
            msgs.push({ ...m, sendingTime: new Date(m.sendingTime), sent: true, messageType: m.type });
          });
          
          const pinnedMsgs : any[] = [];
          (result[0].pinnedMessages as Array<any>).forEach((m, index) => pinnedMsgs.push({ ...m, sendingTime: new Date(m.sendingTime), sent: true, messageType: m.type }));

          this.setState({ 
            listOfMessages: [...msgs.sort((m1, m2) => m2.messageId! - m1.messageId!)],
            listOfPinnedMessages: [...pinnedMsgs.sort((m1, m2) => m1.messageId! - m2.messageId!)],
            pinnedMessage: pinnedMsgs.sort(m => result[0]?.lastWatchedMessages.find((obj : any) => obj.userId === author.userId).messageId - m.messageId!)[0]
          });
        })
        .catch(error => console.error('error while fetching', error));

        const director = new Director();
        const connectionBuilder = ChatHubService.getInstance();
    
        director.setConnectionBuilder(connectionBuilder);
        director.buildGroupConnection({
          messageSentHandler: messageSentHandler,
          receiveMessageTextHandler: receiveMessageTextHandler,
          receiveMessageFileHandler: receiveMessageFileHandler,
          receiveLastWatchedMessageUpdate: receiveLastWatchedMessageUpdate,
          receiveUpdateMessageTextHandler: receiveUpdateMessageTextHandler,
          pinMessageHandler: pinMessageHandler,
          deleteMessageHandler: deleteMessageHandler
        });
    
        connectionBuilder.startConnection(author.userId);

    //#endregion

  }

  componentWillUnmount(): void {
    const connection = ChatHubService.getInstance();
    connection.unregisterMessageSent()
      .unregisterDeleteMessage()
      .unregisterReceiveMessageFile()
      .unregisterReceiveMessageText()
      .unregisterReceiveUpdateLastWatchedMessage()
      .unregisterReceiveUpdateMessageText()
      .unregisterPinMessage();

    connection.disconnect();
  }

  shouldComponentUpdate(nextProps: Readonly<DialogueProps>, nextState: Readonly<DialogueState>, nextContext: any): boolean {
    if(this.props !== nextProps) return true;
        
    const { messageID, messageMenuVisible, listOfMessages, isReply, isEdit, editMessage, deleting, selecting, listOfPinnedMessages, pinnedMessage, authorMessageLastWatched, userMessageLastWatched, edit, fileContent } = this.state;

    if(messageID !== nextState.messageID) {
      return true;
    } else if(messageMenuVisible !== nextState.messageMenuVisible) {
      return true;
    } else if(checkListOfMessagesDifference(listOfMessages, nextState.listOfMessages)) {
      return true;
    } else if(isReply !== nextState.isReply) {
      return true;
    } else if(isEdit !== nextState.isEdit) {
      return true;
    } else if(editMessage.messageId !== nextState.editMessage.messageId) {
      return true;
    } else if(deleting !== nextState.deleting) {
      return true;
    } else if(selecting !== nextState.selecting) {
      return true;
    } else if(checkListOfMessagesDifference(listOfPinnedMessages, nextState.listOfPinnedMessages)) {
      return true;
    } else if(pinnedMessage?.messageId !== nextState.pinnedMessage?.messageId) {
      return true;
    } else if(authorMessageLastWatched?.messageId !== nextState.authorMessageLastWatched?.messageId) {
      return true;
    } else if(userMessageLastWatched?.messageId !== nextState.userMessageLastWatched?.messageId) {
      return true;
    } else if(edit !== nextState.edit) {
      return true;
    } else if(fileContent !== nextState.fileContent) {
      return true;
    }

    return false;
  }

  replyHandler = () => {
    if(!this.state.isReply) {
      this.setState({ 
        isReply: !this.state.isReply,
        editMessage: {} as MessageProps, 
        isEdit: false
      });
    }
  };

  sendMessageOrCancelReplyAndEditHandler = () => {
    this.setState({ isEdit: false, isReply: false, editMessage: {} as MessageProps });
  };

  pressEditButton = () => {
    this.setState({ isEdit: !this.state.isEdit })
    this.setEditMessageHandler();
  }

  setEditMessageHandler = () => {
    if(!this.state.isEdit)
      this.setState({ editMessage: this.state.listOfMessages.find(m => m.messageId === this.state.messageID)! });
    else
      this.setState({ editMessage: {} as MessageProps });
  }

  handleMessagePressOrSwipe = (coordinations:Layout, pressed:boolean, callback: () => void) => {
    coord = coordinations;
    if(pressed) {
      this.setState({ messageMenuVisible: true, messageID: coordinations.ID, messageIdForReplyAndEdit: coordinations.ID });
      messageMenuCallback = callback;
    } else {
      this.setState({ messageID: coordinations.ID, messageIdForReplyAndEdit: coordinations.ID });
      this.replyHandler();
    }
  };

  updateMessageContent = (messageId: number|undefined, newContent: string|undefined) => {
    if(!messageId || !newContent) return;

    const list = [...this.state.listOfMessages];
    const id = list.findIndex(m => m.messageId === messageId);
    const m = { ...list[id] };
    
    m.content = newContent;
    m.isEdited = true;

    this.setState({ listOfMessages: [...list.slice(0, id), m, ...list.slice(id + 1)] });
  };

  setMessages = (mes:MessageProps) => {
    if(mes.messageId! >= 0) {
      this.setState({ listOfMessages: [mes, ...this.state.listOfMessages] });
    } else{
      const m = this.state.listOfMessages.find(m => m.messageId === this.state.messageID);
      this.updateMessageContent(m?.messageId, mes.content as string)
    }
  };
  
  setDeletingHandler = () => {
    this.setState({ deleting: !this.state.deleting })
  }

  onDeletePress = (id: number = -1) => {
    const { listOfMessages, messageID } = this.state;
    const newListOfMessages = [...listOfMessages];
    const idx = newListOfMessages.findIndex(m => m.messageId === (id < 0 ? messageID : id));

    newListOfMessages[idx] = { 
      messageId: newListOfMessages[idx].messageId,
      author: undefined!,
      content: undefined!,
      sendingTime: undefined!,
      messageType: undefined!,
      isEdited: undefined!,
      sent: undefined!,
      reactionOnMessage: undefined!,
    };

    this.setState({ 
      listOfMessages: [...newListOfMessages], 
      deleting: id < 0 ? !this.state.deleting : false 
    });

    this.props.route.params.dispatch(removeCoordinationsOfMessage((id < 0 ? messageID : id)));
  }

  handleMessageMenuPress = () => {
    if(typeof messageMenuCallback === 'function') {
      messageMenuCallback();
      messageMenuCallback = undefined;
    }
    this.setState({ messageMenuVisible: false });
  };
  
  setSelectingHandler = () => {
    this.setState({ selecting: !this.state.selecting });
    coord.selectionCallback!();
  }

  pinMessageHandler = (message: MessageProps) => {
    const { listOfPinnedMessages } = this.state;

    if(listOfPinnedMessages.find(m => message.messageId === m.messageId)) {
      const pinnedMsgs = listOfPinnedMessages.filter(m => m.messageId !== message.messageId);

      if(pinnedMsgs.length>0)
        this.setState({ pinnedMessage: pinnedMsgs[pinnedMsgs.length-1] });
      else 
        this.setState({ pinnedMessage: {} as MessageProps });

      this.setState({ listOfPinnedMessages: [...pinnedMsgs] });
    } else {
      this.setState({ listOfPinnedMessages: [...listOfPinnedMessages, message].sort((m1, m2) => m1.messageId! - m2.messageId!) });
    }
  }

  setPinnedMessageHandler = (id: number) => {
    const { listOfMessages, pinnedMessage } = this.state;

    if(pinnedMessage?.messageId !== id) {
      this.setState({ pinnedMessage: listOfMessages.find(m => m.messageId === id)! });
      return id;
    }
  }

  unpinAllMessagesHandler = (received: boolean = true) => {
    if(received) ChatHubService.getInstance().unpinAllMessages(this.chatId);

    this.setState({ pinnedMessage: {} as MessageProps, listOfPinnedMessages: [] });
  }

  deleteAllButtonHandler = (received: boolean = true) => {
    if(received) ChatHubService.getInstance().deleteAllMessages(this.chatId);

    this.props.route.params.dispatch(removeCoordinationsOfAllMessages());
    this.setState({ listOfMessages: [] });
  }

  deleteSelectedMessages = (messagesId?: Array<number>) => {
    let { listOfId } = this.props;
    if (messagesId && messagesId.length > 0) listOfId = [...messagesId];
  
    const { dispatch } = this.props.route.params;
    const { listOfMessages, listOfPinnedMessages } = this.state;
  
    listOfId.sort((a, b) => b - a);
  
    if (!messagesId?.length) {
      ChatHubService.getInstance().deleteSelectedMessages(this.chatId, listOfId);
    }
  
    const idsToDelete = new Set(listOfId);
  
    const newListOfMessages = listOfMessages.filter(message => !idsToDelete.has(message.messageId!));
    const newListOfPinnedMessages = listOfPinnedMessages.filter(message => !idsToDelete.has(message.messageId!));
  
    this.setState({ 
      listOfMessages: newListOfMessages, 
      selecting: false,
      listOfPinnedMessages: newListOfPinnedMessages
    });
  
    dispatch(removeCoordinationsOfSelectedMessages(listOfId));
    dispatch(resetSelectedMessage());
  }

  previewPhotoHandler = (fileContent: string, sendingTime: Date | null) => {
    this.setState({ fileContent, sendingTime })
  }
  
  render(): React.ReactNode {
    const mes = this.state.listOfMessages?.find(m => m.messageId === this.state.messageID && (m.content || m.fileContent));
    const { messageMenuVisible, listOfMessages, pinnedMessage, selecting, listOfPinnedMessages, messageID, isReply, isEdit, editMessage, deleting, messageIdForReplyAndEdit, fileContent, userMessageLastWatched, sendingTime } = this.state;
    const { navigation } = this.props;

    const connection = ChatHubService.getInstance();

    return  (
      <View style={styles.dialogueContainer}>
        <BackGroundGradinetView>
          <MessageMenu 
            users={users}
            isUser={mes!=undefined&&mes.author.userId===author?.userId} 
            isVisible={messageMenuVisible} 
            onOverlayPress={this.handleMessageMenuPress} 
            coord={coord} 
            messages={listOfMessages}
            onReplyPress={this.replyHandler} 
            onEditPress={this.pressEditButton} 
            onDeletePress={this.setDeletingHandler}
            onSelectPress={this.setSelectingHandler}
            onPinPress={() => { 
              connection.pinMessage(mes?.messageId!, author.userId!, this.getChatId(), listOfPinnedMessages.findIndex(m => m.messageId === mes?.messageId) >= 0)
              this.pinMessageHandler(mes!);
            }}
            userMessageLastWatched={userMessageLastWatched!}
            pinnedMessageScreen={false}
          />
          <PhotoPreview 
            fileContent={fileContent}
            backHandler={this.previewPhotoHandler}
            author={author?.name}
            sendingTime={sendingTime}
          />
          <Header 
            chatType={group}
            picture={group?.linkToPhoto}
            displayName={author?.name}
            activityTime={'Online recently'} // Last activity from user
            pinnedMessage={pinnedMessage != undefined ? pinnedMessage : {} as MessageProps}
            selecting={selecting}
            cancelSelection={this.setSelectingHandler}
            propsForPinnedMessageScreen={{
              navigation,
              listOfPinnedMessages,
              listOfMessages,
              author,
              messageID,
              unpinAllMessagesHandler: this.unpinAllMessagesHandler,
              userMessageLastWatched: userMessageLastWatched!,
              onUnpinPress: this.pinMessageHandler,
              onDeletePress: this.onDeletePress,
              users
            }}
            countOfPinnedMessages={listOfPinnedMessages.length}
            currentNumOfPinnedMessage={listOfPinnedMessages.findIndex(m => m.messageId === pinnedMessage?.messageId) + 1}
            deleteAllButtonHandler={this.deleteAllButtonHandler}
          />
          <DialogueMessages 
            navigation={navigation}
            setMessageMenuVisible={this.handleMessagePressOrSwipe} 
            messageID={messageID} 
            listOfMessages={listOfMessages} 
            isReply={isReply} 
            isEdit={isEdit}
            author={author}
            users={users}
            userMessageLastWatched={userMessageLastWatched!}
            authorMessageLastWatched={userMessageLastWatched!}
            selecting={selecting}
            hasPinnedMessage={listOfPinnedMessages?.length>0}
            pinnedMessages={listOfPinnedMessages}
            setPinnedMessage={this.setPinnedMessageHandler}
            emitter={Group.subject}
            chatId={this.chatId}
            chatHubService={connection}
            previewPhoto={this.previewPhotoHandler}
          />
          <Footer 
            messages={listOfMessages} 
            setMessages={this.setMessages} 
            isReply={isReply} 
            author={author}
            users={users}
            messageID={messageID} 
            isEdit={isEdit} 
            editMessage={editMessage} 
            replyMessage={isReply ? listOfMessages.find(m => m.messageId === messageIdForReplyAndEdit)! : {} as MessageProps} 
            onSendMessageOrCancelReplyAndEdit={this.sendMessageOrCancelReplyAndEditHandler}
            selecting={selecting}
            deleteSelectedMessages={this.deleteSelectedMessages}
            emitter={Group.subject}
            getChatHubService={ChatHubService.getInstance}
            getAuthor={this.getAuthor}
            getChatId={this.getChatId}
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={this.setDeletingHandler} 
            onDeletePress={() => {
              connection.deleteMessage(mes?.messageId!, author.userId!, this.getChatId());
              this.onDeletePress(mes?.messageId);
            }}
            message={mes} 
            author={author as User}
          />
        </BackGroundGradinetView>
      </View>
    );
  }
}

const mapStateToProps = (state:any) => ({
  listOfId: state.ChatReducer.selectedMessageHandler.listOfId,
});

export default connect(mapStateToProps)(Group);