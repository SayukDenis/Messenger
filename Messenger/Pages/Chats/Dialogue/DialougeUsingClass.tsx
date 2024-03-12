import { View } from 'react-native';
import { Component } from 'react';
import Footer from '../SemiComponents/FooterUsingClass';
import MessageMenu from '../SemiComponents/MessageMenuUsingClass';
import styles from './DialogueStyle';
import React from 'react';
import DeleteMessageModal from '../SemiComponents/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';
import { connect } from 'react-redux';
import User from '../../../dao/Models/User';
import ILastWatchedMessage from '../../../dao/Models/Chats/ILastWatchedMessage';
import DialogueMessages from './components/DialogueMessages';
import Header from '../SemiComponents/HeaderUsingClass';
import { MessageProps } from '../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import { removeCoordinationsOfAllMessages, removeCoordinationsOfMessage, removeCoordinationsOfSelectedMessages, resetSelectedMessage } from '../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { DialogueProps, DialogueState } from './IDialogue';

let coord: Layout;
let messageIdForReplyAndEdit: number;
let deletedMessagesId: number[] = [];
let author: User;
let users: User[];

// const user:SelfProfile = useSelector((state: any) => state.selfProfileUser);

let authorMessageLastWatched:ILastWatchedMessage | undefined;
let userMessageLastWatched:ILastWatchedMessage | undefined;
let dialogue:DialogueModel.default;
let messageMenuCallback: (() => void) | undefined;

class Dialogue extends Component<DialogueProps> {
  constructor(props:any) {
    super(props);
    
    dialogue = props.route.params.chat;
    author = dialogue.users[0];
    users = dialogue.users.filter(u => u.userId !== 0);
    authorMessageLastWatched = dialogue.lastWatchedMessage[0];
    userMessageLastWatched = dialogue.lastWatchedMessage[1];
  }
  
  state: DialogueState = {
    messageID: -1,
    messageMenuVisible: false,
    listOfMessages: [],
    isReply: false,
    isEdit: false,
    editMessage: {} as MessageProps,
    deleting: false,
    copy: false,
    selecting: false, 
    listOfPinnedMessages: [],
    pinnedMessage: {} as MessageProps
  }

  componentDidMount(): void {
    this.setState({ 
      listOfMessages: dialogue.messages.reverse(),
      author: dialogue.users[0],
      users: dialogue.users.filter(u => u.userId !== 0),
      authorMessageLastWatched: dialogue.lastWatchedMessage[0],
      userMessageLastWatched: dialogue.lastWatchedMessage[1],
    });
  }

  shouldComponentUpdate(nextProps: Readonly<DialogueProps>, nextState: Readonly<DialogueState>, nextContext: any): boolean {
    if(nextState !== this.state) {
      console.log("Did update");
      return true;
    } else if(this.props !== nextProps) {
      console.log("Did update");
      return true;
    }

    console.log("Didn't update");

    return false;
  }

  replyHandler = () => {
    this.setState({ isReply: !this.state.isReply  });
    this.setReplyMessageHandler();
  };

  setReplyMessageHandler = () => {
    if(!this.state.isReply)
      this.setState({ editMessage: {} as MessageProps });
  }

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
      this.setState({ messageMenuVisible: true, messageID: coordinations.ID });
      messageIdForReplyAndEdit = coordinations.ID;
      messageMenuCallback = callback;
    } else {
      this.setState({ messageID: coordinations.ID });
      messageIdForReplyAndEdit = coordinations.ID;
      this.replyHandler();
    }
  };

  updateMessageContent = (messageId: number|undefined, newContent: string|undefined) => {
    if(messageId&&newContent)
    this.state.listOfMessages[messageId].content = newContent;  
    this.setState({ listOfMessages: [...this.state.listOfMessages] });
  };

  setMessages = (mes:MessageProps) => {
    if(mes.messageId) {
      console.log('send message');
      this.setState({ listOfMessages: [mes, ...this.state.listOfMessages] });
    } else{
      const m = this.state.listOfMessages.find(m => m.messageId === this.state.messageID);
      this.updateMessageContent(m?.messageId, m?.content)
    }
  };
  
  setDeletingHandler = () => {
    this.setState({ deleting: !this.state.deleting })
  }

  // якогось хуя useRef не працює якщо useState з boolean
  onDeletePress = () => {
    const { listOfMessages, listOfPinnedMessages, messageID, deleting } = this.state;

    const message = listOfMessages.find(m => m.messageId === messageID)!;
    if(listOfPinnedMessages.findIndex(m => m.messageId === message.messageId) >= 0) {
      this.pinMessageHandler(message);
    }
    deletedMessagesId.push(message.messageId!);
    this.setState({ listOfMessages: [...listOfMessages.filter(m => m.messageId !== messageID)], deleting: !this.state.deleting });
    this.props.route.params.dispatch(removeCoordinationsOfMessage(messageID));
  }

  onPinnedMessageScreenDeletePress = (message: MessageProps) => {
    this.setState({ listOfMessages: [...this.state.listOfMessages.filter(m => m?.messageId !== this.state.messageID)] })
  }

  handleMessageMenuPress = () => {
    if(typeof messageMenuCallback === 'function') {
      messageMenuCallback();
      messageMenuCallback = undefined;
    }
    this.setState({ messageMenuVisible: false });
  };

  setCopyHandler = () => {
    this.setState({ copy: !this.state.copy });
  }
  
  setSelectingHandler = () => {
    this.setState({ selecting: !this.state.selecting });
    coord.selectionCallback!();
  }

  pinMessageHandler = (message: MessageProps) => {
    const { listOfPinnedMessages } = this.state;

    if(listOfPinnedMessages.find(m => message.messageId === m.messageId)) {
      const pinnedMsgs = listOfPinnedMessages.filter(m => m.messageId !== message.messageId);

      if(pinnedMsgs.length>0)
        this.setState({ pinnedMessages: pinnedMsgs[pinnedMsgs.length-1] });
      else 
        this.setState({ pinnedMessages: {} as MessageProps });

      this.setState({ listOfPinnedMessages: [...pinnedMsgs] });
    } else {
      this.setState({ listOfPinnedMessages: [...listOfPinnedMessages, message] });
    }
  }

  setPinnedMessageHandler = (id: number) => {
    const { listOfMessages, pinnedMessage } = this.state;

    if(pinnedMessage.messageId !== id) {
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
    const { listOfMessages } = this.state;

    listOfId.sort((a, b) => b - a);
    console.log(listOfId);
    let idx = 0;
    for(let i = 0; i < listOfMessages.length; i++) {
      if(listOfMessages[i].messageId === listOfId[idx]) {
        listOfMessages[i] = { messageId: listOfMessages[i].messageId } as MessageProps;
        idx++;
      }
    }
    this.setState({ listOfMessages: [...listOfMessages], selecting: false });
    dispatch(removeCoordinationsOfSelectedMessages(listOfId));
    dispatch(resetSelectedMessage());
  }
  
  render(): React.ReactNode {
    const mes = this.state.listOfMessages?.find(m => m.messageId === this.state.messageID && m.content);
    const { messageMenuVisible, listOfMessages, pinnedMessage, selecting, listOfPinnedMessages, messageID, isReply, isEdit, editMessage, copy, deleting } = this.state;
    const { navigation } = this.props;

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
            onCopyPress={this.setCopyHandler}
            onSelectPress={this.setSelectingHandler}
            onPinPress={this.pinMessageHandler}
            userMessageLastWatched={userMessageLastWatched}
            pinnedMessageScreen={false}
          />
          <Header 
            chatType={dialogue}
            picture={dialogue.linkToPhoto}
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
              onCopyPress: this.setCopyHandler,
              onUnpinPress: this.pinMessageHandler,
              onDeletePress: this.onDeletePress,
              users
            }}
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
            userMessageLastWatched={userMessageLastWatched}
            authorMessageLastWatched={authorMessageLastWatched}
            selecting={selecting}
            hasPinnedMessage={listOfPinnedMessages?.length>0}
            pinnedMessages={listOfPinnedMessages}
            setPinnedMessage={this.setPinnedMessageHandler}
            deletedMessagesId={deletedMessagesId}
          />
          <Footer 
            messages={listOfMessages} 
            setMessages={this.setMessages} 
            isReply={isReply} 
            author={author}
            messageID={messageID} 
            isEdit={isEdit} 
            editMessage={editMessage} 
            replyMessage={isReply?this.state.listOfMessages.find(m => m.messageId==messageIdForReplyAndEdit)!:{} as MessageProps} 
            onSendMessageOrCancelReplyAndEdit={this.sendMessageOrCancelReplyAndEditHandler} 
            copyMessagePopUp={copy}
            endCopyMessagePopUp={this.setCopyHandler}
            selecting={selecting}
            deleteSelectedMessages={this.deleteSelectedMessages}
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={this.setDeletingHandler} 
            onDeletePress={this.onDeletePress} 
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