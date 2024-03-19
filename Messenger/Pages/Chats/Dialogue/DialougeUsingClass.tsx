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
import { checkListOfMessagesDifference } from './HelperFunctions/CheckListOfMessages';

let coord: Layout;
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
    selecting: false, 
    listOfPinnedMessages: [],
    pinnedMessage: {} as MessageProps,
    messageIdForReplyAndEdit: -1
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
    if(this.props !== nextProps) {
      //console.log('Dialogue update props');
      return true;
    }

    //console.log('Dialogue update state');
    
    const { messageID, messageMenuVisible, listOfMessages, isReply, isEdit, editMessage, deleting, selecting, listOfPinnedMessages, pinnedMessage } = this.state;

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
    } else if(pinnedMessage.messageId !== nextState.pinnedMessage.messageId) {
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

  onDeletePress = (id: number = -1) => {
    const { listOfMessages, messageID } = this.state;

    // const message = listOfMessages.find(m => m.messageId === messageID)!;
    // if(listOfPinnedMessages.findIndex(m => m.messageId === message.messageId) >= 0) {
    //   this.pinMessageHandler(message);
    // }
    console.log('onDeletePress in Dialogue', messageID, id, (id < 0 ? messageID : id));
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
      console.log('Add pin message');
      this.setState({ listOfPinnedMessages: [...listOfPinnedMessages, message].sort((m1, m2) => m1.messageId! - m2.messageId!) });
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
            onPinPress={this.pinMessageHandler}
            userMessageLastWatched={userMessageLastWatched}
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
              userMessageLastWatched: userMessageLastWatched!,
              onUnpinPress: this.pinMessageHandler,
              onDeletePress: this.onDeletePress,
              users
            }}
            countOfPinnedMessages={listOfPinnedMessages.length}
            currentNumOfPinnedMessage={listOfPinnedMessages.findIndex(m => m.messageId === pinnedMessage.messageId) + 1}
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