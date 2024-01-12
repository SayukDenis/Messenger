import { View, KeyboardAvoidingView, Platform } from 'react-native';
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
import { connect, useSelector } from 'react-redux';
import SelfProfile from '../../../dao/Models/SelfProfile';
import User from '../../../dao/Models/User';

interface Layout {
  ID: number;
  componentPageX: number;
  componentPageY: number;
  pageX: number;
  pageY: number;
  width: number;
  height: number;  
  message: MessageProps|undefined;
}

let coord:Layout;
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

const Dialogue = ({ navigation, route }:any) => {
  const dialogue:DialogueModel.default=route.params.chat as DialogueModel.default;

  const [messageID, setMessageID] = useState(-1);

  // const user = useSelector((state: any) => state.selfProfileUser);
  // console.log('userId', user.userId);

  // console.log(dialogue.messages.map((m, index) => {
  //   const mes = {
  //     messageId: m.messageId,
  //     author: m.author.userId,
  //     content: m.content,
  //     sendingTime: m.sendingTime,
  //     messageType: m.messageType,
  //     messageResponseId: m.messageResponseId,
  //     messageForwardId: m.messageForwardId,
  //     isEdited: m.isEdited,
  //     isDeleted: m.isDeleted,
  //     reactionOnMessage: m.reactionOnMessage,
  //   }
  //   return JSON.stringify(mes, null, 2)
  // }))

  const [messageMenuVisible, setMessageMenuVisible] = useState(false);
  const [messageMenuVisisbleAppearence, setMessageMenuVisisbleAppearence] = useState(false);
  const [listOfMessages, setListOfMessages] = useState([] as MessageProps[]);
  useEffect(() => {
    setListOfMessages(dialogue.messages.reverse());
  }, [])
  
  const [isReply, setIsReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState({} as any);

  const replyHandler = useCallback(() => {
    setIsReply(!isReply);
    setReplyMessageHandler();
  },[]);

  const setReplyMessageHandler = () => {
    if(!isReply) {
      setReplyMessage(msgs.find(m => m.messageId==messageID));
      setEditMessage({} as MessageProps);
    }
    else
      setReplyMessage({} as MessageProps);
  }

  const sendMessageOrCancelReplyAndEditHandler = useCallback(() => {
    setIsEdit(false);
    setIsReply(false);
    setEditMessage({} as MessageProps);
    setReplyMessage({} as MessageProps);
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
      setReplyMessage({} as MessageProps);
    }
    else
      setEditMessage({} as MessageProps);
  }

  const handleMessagePressOrSwipe = useCallback((coordinations:Layout, pressed: boolean) => {
    coord = coordinations;
    // if(coord)
    //   console.log('Dialogue-coord', JSON.stringify({
    //     ID: coord.ID,
    //     componentPageX: coord.componentPageX,
    //     componentPageY: coord.componentPageY,
    //     pageX: coord.pageX,
    //     pageY: coord.pageY,
    //     width: coord.width,
    //     height: coord.height,
    //     message: {
    //       messageId: coord.message?.messageId,
    //       content: coord.message?.content,
    //       replyId: coord.message?.messageResponseId
    //     },
    //   }, null, 2))
    if(pressed) {
      setMessageMenuVisible(true);
      setMessageMenuVisisbleAppearence(true);
      setMessageID(coordinations.ID);
    } else {
      setMessageID(coordinations.ID);
      replyHandler();
    }
  }, []);

  // asdad
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
    setMessageMenuVisisbleAppearence(false);
  }, []);
  // if(msgs) {
  //   const aboba = msgs.find(m => m.messageId==messageID);
  //   console.log('msgs.message', aboba?.messageId, aboba?.content);
  //   console.log('messageID', messageID);
  // }
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
          />
          <DialogueHeader 
            navigation={navigation} 
            picture={dialogue.linkToPhoto}
            displayName={dialogue.users[1].name}
            activityTime={'Online recently'} // Last activity from user
          />
          <DialogueMessages 
            setMessageMenuVisible={handleMessagePressOrSwipe} 
            messageMenuVisisbleAppearence={messageMenuVisisbleAppearence} 
            messageID={messageID} 
            listOfMessages={listOfMessages} 
            isReply={isReply} 
            isEdit={isEdit}
            author={user as User}
          />
          <DialogueFooter 
            messages={listOfMessages} 
            setMessages={setMessages} 
            isReply={isReply} 
            author={user}
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
            author={user as User}
          />
        </BackGroundGradinetView>
      </View>
  );
};

export default connect(null)(Dialogue);