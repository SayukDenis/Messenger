import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, PanResponder, Modal, Dimensions, } from 'react-native';
import { Provider, useState, useCallback, SetStateAction, Dispatch, useRef } from 'react';
import DialogueHeader from './components/DialogueHeader';
import { DialogueMessages } from './components/DialogueMessages';
import DialogueFooter from './components/DialogueFooter';
import MessageMenu from './components/MessageMenu';
import styles from './DialogueStyle';
import { messages, Message } from './tmpdata';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import DeleteMessageModal from './components/DeleteMessageModal';

interface Coordinations {
  x: number;
  y: number;
  ID: number;
}

let coord:Coordinations;
let messageID:number=-1;

const Dialogue = () => {

  const [messageMenuVisible, setMessageMenuVisible] = useState(false);
  const [messageMenuVisisbleAppearence, setMessageMenuVisisbleAppearence] = useState(false);
  const [listOfMessages, setListOfMessages] = useState(messages);
  
  const [isReply, setIsReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState({} as Message);

  const pressReplyButton = useCallback(() => {
    setIsReply(!isReply);
    setReplyMessageHandler();
  },[]);

  const setReplyMessageHandler = () => {
    if(!isReply) {
      setReplyMessage(messages.find(m => m.id==messageID)!);
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
      setEditMessage(messages.find(m => m.id==messageID)!);
      setReplyMessage({} as Message);
    }
    else
      setEditMessage({} as Message);
  }

  const handleMessagePress = useCallback((coordinations:Coordinations) => {
    setMessageMenuVisible(true);
    coord = coordinations;
    messageID = coordinations.ID;
    setMessageMenuVisisbleAppearence(true);
  }, []);

  const setMessages = useCallback((mes:Message) => {
    if(isEdit) {
      setListOfMessages([...listOfMessages]);
    }
    else {
      setListOfMessages([...listOfMessages, mes]);
    }
  }, [listOfMessages]);

  const [deleting, setDeleting] = useState(false);
  const setDeletingHandler = () => {
    setDeleting(!deleting);
  }

  // якогось хуя useRef не працює якщо useState з boolean
  const onDeletePress = () => {
    setListOfMessages([...listOfMessages.filter(m => m.id!=messageID)]);
    setDeleting(!deleting);
  }

  const handleMessageMenuPress = useCallback(() => {
    setMessageMenuVisible(false);
    setMessageMenuVisisbleAppearence(false);
  }, []);
  
  const mes = listOfMessages.find(m => m.id==messageID);
  return  (
    <LinearGradient 
      style={{flex:1}} 
      start={{x: 1, y: 0}} 
      end={{x: 0, y: 1}} 
      colors={['#D7B168', '#D783FF']}
    >
      <View 
        className='' 
        style={{flex:1, alignSelf:'stretch', position:'relative'}}
      >
        <View style={styles.dialogueContainer}>
          <MessageMenu 
            isUser={mes!=undefined?mes.isUser:false} 
            isVisible={messageMenuVisible} 
            onOverlayPress={handleMessageMenuPress} 
            coord={coord} 
            onReplyPress={pressReplyButton} 
            onEditPress={pressEditButton} 
            onDeletePress={setDeletingHandler} 
          />
          <DialogueHeader />
          <DialogueMessages 
            setMessageMenuVisible={handleMessagePress} 
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
        </View>
      </View>
    </LinearGradient>
  );
};

export default Dialogue;