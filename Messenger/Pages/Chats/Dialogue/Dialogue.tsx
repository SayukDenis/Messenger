import { View } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import DialogueHeader from './components/DialogueHeader';
import DialogueMessages from './components/DialogueMessages';
import DialogueFooter from './components/DialogueFooter';
import MessageMenu from './components/MessageMenu';
import styles from './DialogueStyle';
import React from 'react';
import DeleteMessageModal from './components/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';
import { MessageProps } from './GeneralInterfaces/IMessage';
import { connect } from 'react-redux';
import SelfProfile from '../../../dao/Models/SelfProfile';
import User from '../../../dao/Models/User';
import ILastWatchedMessage from '../../../dao/Models/Chats/ILastWatchedMessage';
import { Layout } from './GeneralInterfaces/ILayout';

let coord:Layout;
let messageIdForReplyAndEdit:number;
let msgs:MessageProps[];

const user:SelfProfile = {
  userId: 0,
  name: 'Denis',
  numberPhone: '',
  nickname: 'Denis',
  description: '',
  linkToPhoto: '',
  password: 'asdoapwd',
  email: 'dopawdjpa',
  timeLastEntry: new Date(),
  tabs: new Array(),
  schema: {} as any
}

// const user:SelfProfile = useSelector((state: any) => state.selfProfileUser);

let authorMessageLastWatched:ILastWatchedMessage | undefined;
let userMessageLastWatched:ILastWatchedMessage | undefined;
let dialogue:DialogueModel.default;
const Dialogue = ({ navigation, route }:any) => {
  const [pinnedMessage, setPinnedMessage] = useState({} as MessageProps);
  dialogue = route.params.chat as DialogueModel.default;
  authorMessageLastWatched = dialogue.lastWatchedMessage.find(obj => obj.user.userId===user.userId);
  userMessageLastWatched = dialogue.lastWatchedMessage.find(obj => obj.user.userId!==user.userId);

  const [messageID, setMessageID] = useState(-1);

  const [messageMenuVisible, setMessageMenuVisible] = useState(false);
  const [listOfMessages, setListOfMessages] = useState([] as MessageProps[]);
  useEffect(() => {
    setListOfMessages(dialogue.messages.reverse());
    console.log(dialogue.pinnedMessage);
    setPinnedMessage(dialogue.pinnedMessage[dialogue.pinnedMessage.length-1]);
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

  const handleMessagePressOrSwipe = useCallback((coordinations:Layout, pressed:boolean) => {
    coord = coordinations;
    if(pressed) {
      setMessageMenuVisible(true);
      setMessageID(coordinations.ID);
      messageIdForReplyAndEdit = coordinations.ID;
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
  }, [listOfMessages]);

  useEffect(()=> {
    msgs = listOfMessages;
  }, [listOfMessages]);
  
  const [deleting, setDeleting] = useState(false);
  const setDeletingHandler = () => {
    setDeleting(!deleting);
  }

  // якогось хуя useRef не працює якщо useState з boolean
  const onDeletePress = () => {
    setListOfMessages([...listOfMessages.filter(m => m.messageId!=messageID)]);
    setDeleting(!deleting);
  }

  const handleMessageMenuPress = useCallback(() => {
    setMessageMenuVisible(false);
  }, []);

  const [copy, setCopy] = useState(false);
  const setCopyHandler = () => {
    setCopy(!copy);
  }
  
  const mes = msgs?msgs.find(m => m.messageId==messageID):listOfMessages.find(m => m.messageId==messageID);
  return  (
      <View style={styles.dialogueContainer}>
        <BackGroundGradinetView>
          <MessageMenu 
            isUser={mes!=undefined&&mes.author.userId===user?.userId} 
            isVisible={messageMenuVisible} 
            onOverlayPress={handleMessageMenuPress} 
            coord={coord} 
            messages={listOfMessages}
            onReplyPress={replyHandler} 
            onEditPress={pressEditButton} 
            onDeletePress={setDeletingHandler} 
            onCopyPress={setCopyHandler}
            userMessageLastWatched={userMessageLastWatched}
          />
          <DialogueHeader 
            navigation={navigation} 
            picture={dialogue.linkToPhoto}
            displayName={dialogue.users[1].name}
            activityTime={'Online recently'} // Last activity from user
            pinnedMessage={pinnedMessage}
          />
          <DialogueMessages 
            setMessageMenuVisible={handleMessagePressOrSwipe} 
            messageID={messageID} 
            listOfMessages={listOfMessages} 
            isReply={isReply} 
            isEdit={isEdit}
            author={user as User}
            userMessageLastWatched={userMessageLastWatched}
            authorMessageLastWatched={authorMessageLastWatched}
          />
          <DialogueFooter 
            messages={listOfMessages} 
            setMessages={setMessages} 
            isReply={isReply} 
            author={user}
            messageID={messageID} 
            isEdit={isEdit} 
            editMessage={editMessage} 
            replyMessage={isReply?msgs.find(m => m.messageId==messageIdForReplyAndEdit)!:{} as MessageProps} 
            onSendMessageOrCancelReplyAndEdit={sendMessageOrCancelReplyAndEditHandler} 
            copyMessagePopUp={copy}
            endCopyMessagePopUp={setCopyHandler}
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={setDeletingHandler} 
            onDeletePress={onDeletePress} 
            message={mes} 
            author={user as User}
          />
        </BackGroundGradinetView>
      </View>
  );
};

export default connect(null)(Dialogue);