import { View } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import Footer from '../SemiComponents/Footer';
import MessageMenu from '../SemiComponents/MessageMenu';
import styles from './DialogueStyle';
import React from 'react';
import DeleteMessageModal from '../SemiComponents/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';
import { connect, useDispatch } from 'react-redux';
import User from '../../../dao/Models/User';
import ILastWatchedMessage from '../../../dao/Models/Chats/ILastWatchedMessage';
import DialogueMessages from './components/DialogueMessages';
import Header from '../SemiComponents/Header';
import { MessageProps } from '../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import { removeCoordinationsOfAllMessages, removeCoordinationsOfMessage, removeCoordinationsOfSelectedMessages, resetSelectedMessage } from '../../../ReducersAndActions/Actions/ChatActions/ChatActions';

let coord: Layout;
let messageIdForReplyAndEdit: number;
let msgs: MessageProps[];
let deletedMessagesId: number[] = [];

// const user:SelfProfile = useSelector((state: any) => state.selfProfileUser);

let authorMessageLastWatched:ILastWatchedMessage | undefined;
let userMessageLastWatched:ILastWatchedMessage | undefined;
let dialogue:DialogueModel.default;
let messageMenuCallback: (() => void) | undefined;

interface DialogueProps {
  listOfId: number[];
  navigation: any;
  route: any;
}

const Dialogue = ({ listOfId, navigation, route }:DialogueProps) => {

  const dispatch = useDispatch();
  
  dialogue = route.params.chat as DialogueModel.default;
  const author = dialogue.users[0];
  const users = dialogue.users.filter(u => u.userId !== 0);
  authorMessageLastWatched = dialogue.lastWatchedMessage[0];
  userMessageLastWatched = dialogue.lastWatchedMessage[1];

  const [messageID, setMessageID] = useState(-1);

  const [messageMenuVisible, setMessageMenuVisible] = useState(false);
  const [listOfMessages, setListOfMessages] = useState([] as MessageProps[]);
  useEffect(() => {
    setListOfMessages(dialogue.messages.reverse());
  }, [])
  
  const [isReply, setIsReply] = useState(false);

  const replyHandler = useCallback(() => {
    setIsReply(!isReply);
    setReplyMessageHandler();
  },[messageID]);

  const setReplyMessageHandler = () => {
    if(!isReply)
      setEditMessage({} as MessageProps);
  }

  const sendMessageOrCancelReplyAndEditHandler = useCallback(() => {
    setIsEdit(false);
    setIsReply(false);
    setEditMessage({} as MessageProps);
  },[]);

  const [isEdit, setIsEdit] = useState(false);
  const [editMessage, setEditMessage] = useState({} as MessageProps);

  const pressEditButton = () => {
    setIsEdit(!isEdit);
    setEditMessageHandler();
  }

  const setEditMessageHandler = () => {
    if(!isEdit) {
      setEditMessage(msgs.find(m => m.messageId==messageID)!);
    }
    else
      setEditMessage({} as MessageProps);
  }

  const handleMessagePressOrSwipe = useCallback((coordinations:Layout, pressed:boolean, callback: () => void) => {
    coord = coordinations;
    if(pressed) {
      setMessageMenuVisible(true);
      setMessageID(coordinations.ID);
      messageIdForReplyAndEdit = coordinations.ID;
      messageMenuCallback = callback;
    } else {
      setMessageID(coordinations.ID);
      messageIdForReplyAndEdit = coordinations.ID;
      replyHandler();
    }
  }, []);

  const updateMessageContent = (messageId: number|undefined, newContent: string|undefined) => {
    if(messageId&&newContent)
      setListOfMessages(prevMessages =>
        prevMessages.map(message =>
          message.messageId === messageId ? { ...message, content: newContent } : message
        )
      );
  };

  const setMessages = useCallback((mes:MessageProps) => {
    if(mes.messageId){
      setListOfMessages([mes, ...listOfMessages]);
    }
    else{
      const m = msgs.find(m => m.messageId==messageID);
      updateMessageContent(m?.messageId, m?.content)
    }
  }, [listOfMessages, messageID]);

  useEffect(()=> {
    msgs = listOfMessages;
  }, [listOfMessages]);
  
  const [deleting, setDeleting] = useState(false);
  const setDeletingHandler = () => {
    setDeleting(!deleting);
  }

  // якогось хуя useRef не працює якщо useState з boolean
  const onDeletePress = () => {
    const message = listOfMessages.find(m => m.messageId === messageID)!;
    if(listOfPinnedMessages.findIndex(m => m.messageId === message.messageId) >= 0) {
      pinMessageHandler(message);
    }
    deletedMessagesId.push(message.messageId!);
    setListOfMessages([...listOfMessages.filter(m => m.messageId !== messageID)]);
    dispatch(removeCoordinationsOfMessage(messageID));
    setDeleting(!deleting);
  }

  const onPinnedMessageScreenDeletePress = (message: MessageProps) => {
    setListOfMessages([...listOfMessages.filter(m => m?.messageId!=messageID)]);
  }

  const handleMessageMenuPress = useCallback(() => {
    if(typeof messageMenuCallback === 'function') {
      messageMenuCallback();
      messageMenuCallback = undefined;
    }
    setMessageMenuVisible(false);
  }, []);

  const [copy, setCopy] = useState(false);
  const setCopyHandler = () => {
    setCopy(!copy);
  }
  
  const [selecting, setSelecting] = useState(false);
  const setSelectingHandler = () => {
    setSelecting(!selecting);
    coord.selectionCallback!();
  }

  const [listOfPinnedMessages, setListOfPinnedMessages] = useState(dialogue.pinnedMessage as MessageProps[]);
  const pinMessageHandler = (message: MessageProps) => {
    if(listOfPinnedMessages.find(m => message.messageId === m.messageId)) {
      const pinnedMsgs = listOfPinnedMessages.filter(m => m.messageId !== message.messageId);

      if(pinnedMsgs.length>0)
        setPinnedMessage(pinnedMsgs[pinnedMsgs.length-1]);
      else 
        setPinnedMessage({} as MessageProps);

      setListOfPinnedMessages([...pinnedMsgs]);
    } else {
      setListOfPinnedMessages([...listOfPinnedMessages, message])
    }
  }
  const [pinnedMessage, setPinnedMessage] = useState({} as MessageProps);
  const setPinnedMessageHandler = (id: number) => {
    if(pinnedMessage.messageId !== id) {
      setPinnedMessage(listOfMessages.find(m => m.messageId === id)!)
      return id;
    }
  }
  const unpinAllMessagesHandler = () => {
    setListOfPinnedMessages([]);
    setPinnedMessage({} as MessageProps);
  }

  const deleteAllButtonHandler = () => {
    setListOfMessages([]);
    dispatch(removeCoordinationsOfAllMessages());
  }

  const deleteSelectedMessages = () => {
    listOfId.sort((a, b) => b - a);
    console.log(listOfId);
    let idx = 0;
    for(let i = 0; i < listOfMessages.length; i++) {
      if(listOfMessages[i].messageId === listOfId[idx]) {
        listOfMessages[i] = { messageId: listOfMessages[i].messageId } as MessageProps;
        idx++;
      }
    }
    setListOfMessages([...listOfMessages]);
    setSelecting(false);
    dispatch(removeCoordinationsOfSelectedMessages(listOfId));
    dispatch(resetSelectedMessage());
  }

  const mes = msgs?msgs.find(m => m.messageId === messageID && m.content):listOfMessages.find(m => m.messageId === messageID && m.content);
  return  (
      <View style={styles.dialogueContainer}>
        <BackGroundGradinetView>
          <MessageMenu 
            users={users}
            isUser={mes!=undefined&&mes.author.userId===author?.userId} 
            isVisible={messageMenuVisible} 
            onOverlayPress={handleMessageMenuPress} 
            coord={coord} 
            messages={listOfMessages}
            onReplyPress={replyHandler} 
            onEditPress={pressEditButton} 
            onDeletePress={setDeletingHandler} 
            onCopyPress={setCopyHandler}
            onSelectPress={setSelectingHandler}
            onPinPress={pinMessageHandler}
            userMessageLastWatched={userMessageLastWatched}
            pinnedMessageScreen={false}
          />
          <Header 
            chatType={dialogue}
            picture={dialogue.linkToPhoto}
            activityTime={'Online recently'} // Last activity from user
            pinnedMessage={pinnedMessage != undefined ? pinnedMessage : {} as MessageProps}
            selecting={selecting}
            cancelSelection={setSelectingHandler}
            propsForPinnedMessageScreen={{
              navigation,
              listOfPinnedMessages,
              listOfMessages,
              author,
              messageID,
              unpinAllMessagesHandler,
              userMessageLastWatched,
              onCopyPress: setCopyHandler,
              onUnpinPress: pinMessageHandler,
              onDeletePress,
              users
            }}
            deleteAllButtonHandler={deleteAllButtonHandler}
          />
          <DialogueMessages 
            navigation={navigation}
            setMessageMenuVisible={handleMessagePressOrSwipe} 
            messageID={messageID} 
            listOfMessages={listOfMessages} 
            isReply={isReply} 
            isEdit={isEdit}
            author={author}
            users={users}
            userMessageLastWatched={userMessageLastWatched}
            authorMessageLastWatched={authorMessageLastWatched}
            selecting={selecting}
            hasPinnedMessage={listOfPinnedMessages.length>0}
            pinnedMessages={listOfPinnedMessages}
            setPinnedMessage={setPinnedMessageHandler}
            deletedMessagesId={deletedMessagesId}
          />
          <Footer 
            messages={listOfMessages} 
            setMessages={setMessages} 
            isReply={isReply} 
            author={author}
            messageID={messageID} 
            isEdit={isEdit} 
            editMessage={editMessage} 
            replyMessage={isReply?msgs.find(m => m.messageId==messageIdForReplyAndEdit)!:{} as MessageProps} 
            onSendMessageOrCancelReplyAndEdit={sendMessageOrCancelReplyAndEditHandler} 
            copyMessagePopUp={copy}
            endCopyMessagePopUp={setCopyHandler}
            selecting={selecting}
            deleteSelectedMessages={deleteSelectedMessages}
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={setDeletingHandler} 
            onDeletePress={onDeletePress} 
            message={mes} 
            author={author as User}
          />
        </BackGroundGradinetView>
      </View>
  );
};

const mapStateToProps = (state:any) => ({
  listOfId: state.ChatReducer.selectedMessageHandler.listOfId,
});

export default connect(mapStateToProps)(Dialogue);