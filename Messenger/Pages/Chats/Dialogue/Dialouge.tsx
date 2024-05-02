import { Platform, View } from 'react-native';
import { Component } from 'react';
import Footer from '../SemiComponents/Footer';
import MessageMenu from '../SemiComponents/MessageMenu';
import styles from './DialogueStyle';
import React from 'react';
import DeleteMessageModal from '../SemiComponents/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';
import { connect } from 'react-redux';
import User from '../../../dao/Models/User';
import ILastWatchedMessage from '../../../dao/Models/Chats/ILastWatchedMessage';
import DialogueMessages from './components/DialogueMessages';
import Header from '../SemiComponents/Header';
import { MessageProps } from '../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import { removeCoordinationsOfAllMessages, removeCoordinationsOfMessage, removeCoordinationsOfSelectedMessages, resetSelectedMessage } from '../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { DialogueProps, DialogueState } from './IDialogue';
import { checkListOfMessagesDifference } from './HelperFunctions/CheckListOfMessages';
import EventEmitter from 'events';
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { ChatHubService } from './services/ChatHubService';
import Message from '../../../dao/Models/Message';
import { EMessageType } from '../../../dao/Models/EMessageType';
import MessageText from '../../../dao/Models/MessageText';
import MessageFile from '../../../dao/Models/MessageFile';

let coord: Layout;
let author: User;
let users: User[];

// const user:SelfProfile = useSelector((state: any) => state.selfProfileUser);

let dialogue:DialogueModel.default;
let messageMenuCallback: (() => void) | undefined;


class Dialogue extends Component<DialogueProps> {

  chatId : number = 0;
  user_1 : any;
  user_2 : any;

  getAuthor = () => {
    if(Platform.OS === "android") {
      return this.user_1;
    } else {
      return this.user_2;
    }
  }
  getChatId = () => this.chatId;

  private _emitter: EventEmitter;
  constructor(props:any) {
    super(props);

    this._emitter = new EventEmitter();
    
    dialogue = props.route.params.chat;
    author = dialogue.users[0];
    users = dialogue.users.filter(u => u.userId !== 0);
  }
  
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
    edit: 0
  }

  async componentDidMount(): Promise<void> {
    //#region Server 

    // fetch("http://192.168.0.108:5151/api/Chat/dialogue/1/2", {method: "POST",})
    //     .then(response => response.json())
    //     .then(res => console.log(res))
    //     .catch(error => console.error('error while fetching', error));

    fetch("http://192.168.0.108:5151/api/Chat/dialogue/1", {method: "GET",})
        .then(response => response.json())
        .then(res => [JSON.parse(res[0]), JSON.parse(res[1])])
        .then(result => {
          console.log('Dialogue Users', result[0]?.users);
          this.user_1 = result[0]?.users[0];
          author = result[0]?.users[Platform.OS === 'android' ? 0 : 1];
          users = [result[0]?.users[Platform.OS === 'android' ? 1 : 0]];
          this.setState({
            authorMessageLastWatched: result[0]?.lastWatchedMessages.find((obj : any) => obj.userId === author.userId),
            userMessageLastWatched: result[0]?.lastWatchedMessages.find((obj : any) => obj.userId === users[0].userId)
          })
          console.log('ABOBA', this.state.authorMessageLastWatched, this.state.userMessageLastWatched);
          this.user_2 = result[0]?.users[1];
          this.chatId = result[0]?.chatId;
          
          const msgs : any[] = [];
          (result[1] as Array<any>).forEach((m, index) => {
            console.log(m);
            msgs.push({ ...m, sendingTime: new Date(m.sendingTime) });
          });

          // const img1 = new Message(author, 'image', EMessageType.img);
          // const img2 = new Message(users[0], 'image', EMessageType.img);

          this.setState({ listOfMessages: [...msgs.reverse()] });
        })
        .catch(error => console.error('error while fetching', error));


    const connection = ChatHubService.getInstance();
    connection.startConnection(author.userId);

    connection.registerMessageSent();
    connection.registerReceiveMessageText((mes: any) => {
      this.setMessages({ ...mes, sendingTime: new Date(mes.sendingTime), isDeleted: false });
    });
    connection.registerReceiveMessageFile((mes: any) => {
      this.setMessages({ ...mes, sendingTime: new Date(mes.sendingTime), isDeleted: false });
    }); 
    connection.registerReceiveUpdateLastWatchedMessage((messageId: number, chatId: number, userId: number) => {
      if(userId === author.userId) {
        console.log(Platform.OS, userId === author.userId, `Updated lastWatchedMessage for ${userId} in chat ${chatId}. Last message id is ${messageId}`);
        this.setState({ 
          authorMessageLastWatched: { 
            ...this.state.authorMessageLastWatched, 
            messageId: messageId
          } 
        });
      } else {
        console.log(Platform.OS, userId === author.userId, `Updated lastWatchedMessage for ${userId} in chat ${chatId}. Last message id is ${messageId}`);
        this.setState({ 
          userMessageLastWatched: {
            ...this.state.userMessageLastWatched, 
            messageId: messageId
          }
        });
      }
    });
    connection.registerReceiveUpdateMessageText((messageId: number, newContent: string) => {
      console.log('UpdateMessageText for', Platform.OS, messageId, newContent)
      if(messageId&&newContent) {
        const list = [...this.state.listOfMessages];
        const id = list.findIndex(m => m.messageId === messageId);
        const m = { ...list[id] };
        m.content = newContent;
        m.isEdited = true;
        this.setState({ listOfMessages: [...list.slice(0, id), m, ...list.slice(id + 1)] });
      }
    });
    connection.registerPinMessage((message: any, unpin: boolean) => {
      const m = this.state.listOfMessages.find(m => m.messageId === message.messageId);
      this.pinMessageHandler(m!);
    });
    connection.registerDeleteMessage((messageId: number) => {
      this.onDeletePress(messageId);
    });

    //#endregion

    this.setState({ 
      // listOfMessages: dialogue.branches[0].messages.reverse(),
      // author: dialogue.users[0],
      // users: dialogue.users.filter(u => u.userId !== 0),
      // authorMessageLastWatched: dialogue.branches[0]?.lastWatchedMessage ? dialogue.branches[0].lastWatchedMessage[0] : undefined,
      // userMessageLastWatched: dialogue.branches[0]?.lastWatchedMessage ? dialogue.branches[0].lastWatchedMessage[1] : undefined,
    });
  }

  shouldComponentUpdate(nextProps: Readonly<DialogueProps>, nextState: Readonly<DialogueState>, nextContext: any): boolean {
    if(this.props !== nextProps) {
      //console.log('Dialogue update props');
      return true;
    }

    //console.log('Dialogue update state');
    
    const { messageID, messageMenuVisible, listOfMessages, isReply, isEdit, editMessage, deleting, selecting, listOfPinnedMessages, pinnedMessage, authorMessageLastWatched, userMessageLastWatched, edit } = this.state;

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
    }

    //console.log("Didn't update");

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
    if(!this.state.isEdit) {
      this.setState({ editMessage: this.state.listOfMessages.find(m => m.messageId === this.state.messageID)! });
    }
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
    if(messageId&&newContent) {
      const id = this.state.listOfMessages.findIndex(m => m.messageId === messageId);  
      this.state.listOfMessages[id].content = newContent;
      this.state.listOfMessages[id].isEdited = true;
      console.log(this.state.listOfMessages[id]);
    }
    this.setState({ listOfMessages: [...this.state.listOfMessages] });
  };

  setMessages = (mes:MessageProps) => {
    if(mes.messageId! >= 0) {
      this.setState({ listOfMessages: [mes, ...this.state.listOfMessages] });
    } else{
      const m = this.state.listOfMessages.find(m => m.messageId === this.state.messageID);
      this.updateMessageContent(m?.messageId, m?.content as string)
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
      isDeleted: undefined!,
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

  unpinAllMessagesHandler = () => {
    this.setState({ pinnedMessage: {} as MessageProps, listOfPinnedMessages: [] });
  }

  deleteAllButtonHandler = () => {
    this.props.route.params.dispatch(removeCoordinationsOfAllMessages());
    this.setState({ listOfMessages: [] });
  }

  deleteSelectedMessages = () => {
    const { listOfId } = this.props;
    const { dispatch } = this.props.route.params;
    const { listOfMessages, listOfPinnedMessages } = this.state;
    const newListOfPinnedMessages = [...listOfPinnedMessages];

    listOfId.sort((a, b) => b - a);
    let idx = 0;
    let idxOfPinned = 0;
    const listOfIdLen = listOfId.length - 1;
    for(let i = 0; i < listOfMessages.length; i++) {
      if(listOfMessages[i].messageId === listOfId[idx] || newListOfPinnedMessages[idxOfPinned]?.messageId === listOfId[listOfIdLen - idx]) {
        if(listOfMessages[i].messageId === listOfId[idx]) {
          listOfMessages[i] = { messageId: listOfMessages[i].messageId } as MessageProps;
        }
        if(newListOfPinnedMessages[idxOfPinned]?.messageId === listOfId[listOfIdLen - idx]) {
          newListOfPinnedMessages[idxOfPinned++] = { messageId: -1 } as MessageProps;
        }
        idx++;
      }
    }
    
    this.setState({ 
      listOfMessages: [...listOfMessages], 
      selecting: false,
      listOfPinnedMessages: [...newListOfPinnedMessages.filter(m => m.messageId !== -1)]
    });
    dispatch(removeCoordinationsOfSelectedMessages(listOfId));
    dispatch(resetSelectedMessage());
  }
  
  render(): React.ReactNode {
    const mes = this.state.listOfMessages?.find(m => m.messageId === this.state.messageID && m.content);
    const { messageMenuVisible, listOfMessages, pinnedMessage, selecting, listOfPinnedMessages, messageID, isReply, isEdit, editMessage, deleting, messageIdForReplyAndEdit } = this.state;
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
            onPinPress={() => connection.pinMessage(mes, this.getChatId(), listOfPinnedMessages.findIndex(m => m.messageId === mes?.messageId) >= 0)} // this.pinMessageHandler
            userMessageLastWatched={this.state.userMessageLastWatched!}
            pinnedMessageScreen={false}
          />
          <Header 
            chatType={dialogue}
            picture={dialogue.linkToPhoto}
            displayName={author.name}
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
              userMessageLastWatched: this.state.userMessageLastWatched!,
              onUnpinPress: this.pinMessageHandler,
              onDeletePress: this.onDeletePress,
              users
            }}
            countOfPinnedMessages={listOfPinnedMessages.length}
            currentNumOfPinnedMessage={listOfPinnedMessages.findIndex(m => m.messageId === pinnedMessage?.messageId) + 1}
            deleteAllButtonHandler={this.deleteAllButtonHandler}
            //dispatch={this.props.route.params.dispatch}
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
            userMessageLastWatched={this.state.userMessageLastWatched!}
            authorMessageLastWatched={this.state.userMessageLastWatched!}
            selecting={selecting}
            hasPinnedMessage={listOfPinnedMessages?.length>0}
            pinnedMessages={listOfPinnedMessages}
            setPinnedMessage={this.setPinnedMessageHandler}
            emitter={this._emitter}
            chatId={this.chatId}
            chatHubService={connection}
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
            emitter={this._emitter}
            getChatHubService={ChatHubService.getInstance}
            getAuthor={this.getAuthor}
            getChatId={this.getChatId}
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={this.setDeletingHandler} 
            onDeletePress={() => connection.deleteMessage(mes?.messageId!, this.getChatId())} // this.onDeletePress 
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

export default connect(mapStateToProps)(Dialogue);