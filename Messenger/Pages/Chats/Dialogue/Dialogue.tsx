import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import DialogueHeader from './components/DialogueHeader';
import { DialogueMessages } from './components/DialogueMessages';
import DialogueFooter from './components/DialogueFooter';
import MessageMenu from './components/MessageMenu';
import styles from './DialogueStyle';
import { messages, Message } from './tmpdata';
import React from 'react';
import DeleteMessageModal from './components/DeleteMessageModal';
import BackGroundGradinetView from '../../SemiComponents/BackGroundGradientView';
import * as DialogueModel from '../../../dao/Models/Chats/Dialogue';

interface Layout {
  ID: number;
  pageX: number;
  pageY: number;
  width: number;
  height: number;  
}

let coord:Layout;
let messageID:number=-1;
let msgs:Message[];



const Dialogue = ({ navigation, route }) => {
  console.log((route.params.chat as DialogueModel.default).users[1].name)
  const dialogue:DialogueModel.default=route.params.chat as DialogueModel.default;
  const [messageMenuVisible, setMessageMenuVisible] = useState(false);
  const [messageMenuVisisbleAppearence, setMessageMenuVisisbleAppearence] = useState(false);
  const [listOfMessages, setListOfMessages] = useState(messages);
  
  const [isReply, setIsReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState({} as Message);

  const replyHandler = useCallback(() => {
    setIsReply(!isReply);
    setReplyMessageHandler();
  },[]);

  const setReplyMessageHandler = () => {
    if(!isReply) {
      setReplyMessage(msgs.find(m => m.id==messageID));
      setEditMessage({} as Message);
    }
    else
      setReplyMessage({} as Message);
  }

  const sendMessageOrCancelReplyAndEditHandler = useCallback(() => {
    setIsEdit(false);
    setIsReply(false);
  },[]);

  const [isEdit, setIsEdit] = useState(false);
  const [editMessage, setEditMessage] = useState({} as Message);

  const pressEditButton = () => {
    setIsEdit(!isEdit);
    setEditMessageHandler();
  }

  const setEditMessageHandler = () => {
    if(!isEdit) {
      setEditMessage(msgs.find(m => m.id==messageID)!);
      setReplyMessage({} as Message);
    }
    else
      setEditMessage({} as Message);
  }

  const handleMessagePressOrSwipe = useCallback((coordinations:Layout, pressed: boolean) => {
    if(pressed) {
      setMessageMenuVisible(true);
      coord = coordinations;
      setMessageMenuVisisbleAppearence(true);
      messageID = coordinations.ID;
    } else {
      messageID = coordinations.ID;
      replyHandler();
    }
  }, []);

  const setMessages = useCallback((mes:Message) => {
    if(isEdit) {
      setListOfMessages([...listOfMessages]);
    }
    else {
      setListOfMessages([...listOfMessages, mes]);
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
    console.log('hohnpjopo');
    setListOfMessages([...listOfMessages.filter(m => m.id!=messageID)]);
    setDeleting(!deleting);
  }

  const handleMessageMenuPress = useCallback(() => {
    setMessageMenuVisible(false);
    setMessageMenuVisisbleAppearence(false);
  }, []);
  
  const mes = listOfMessages.find(m => m.id==messageID);
  return  (
      <View style={styles.dialogueContainer}>
        <BackGroundGradinetView>
          <MessageMenu 
            isUser={mes!=undefined?mes.isUser:false} 
            isVisible={messageMenuVisible} 
            onOverlayPress={handleMessageMenuPress} 
            coord={coord} 
            onReplyPress={replyHandler} 
            onEditPress={pressEditButton} 
            onDeletePress={setDeletingHandler} 
          />
          <DialogueHeader />
          <DialogueMessages 
            setMessageMenuVisible={handleMessagePressOrSwipe} 
            messageMenuVisisbleAppearence={messageMenuVisisbleAppearence} 
            messageID={messageID} 
            listOfMessages={listOfMessages} 
            isReply={isReply} 
            isEdit={isEdit}
          />
          <DialogueFooter 
            messages={listOfMessages} 
            setMessages={setMessages} 
            isReply={isReply} 
            messageID={messageID} 
            isEdit={isEdit} 
            editMessage={editMessage} 
            replyMessage={replyMessage} 
            onSendMessageOrCancelReplyAndEdit={sendMessageOrCancelReplyAndEditHandler} 
          />
          <DeleteMessageModal 
            deleting={deleting} 
            setDeletingHandler={setDeletingHandler} 
            onDeletePress={onDeletePress} 
            message={mes} 
          />
        </BackGroundGradinetView>
      </View>
  );
};

export default Dialogue;