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
let deletedMessagesId:number[] = [];

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
  
  dialogue = route.params.chat as DialogueModel.default;
  authorMessageLastWatched = dialogue.lastWatchedMessage.find(obj => obj.user.userId===user.userId);
  userMessageLastWatched = dialogue.lastWatchedMessage.find(obj => obj.user.userId!==user.userId);

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
    console.log(message.messageId, message.content);
    pinMessageHandler(message);
    deletedMessagesId.push(message.messageId!);
    setTimeout(() => {
      setListOfMessages([...listOfMessages.filter(m => m.messageId !== messageID)]);
      setDeleting(!deleting);
    }, 100);
  }

  const onPinnedMessageScreenDeletePress = (message: MessageProps) => {
    setListOfMessages([...listOfMessages.filter(m => m.messageId!=messageID)]);
  }

  const handleMessageMenuPress = useCallback(() => {
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
    //console.log('message.messageId', message.messageId)
    if(listOfPinnedMessages.find(m => message.messageId === m.messageId)) {
      const pinnedMsgs = listOfPinnedMessages.filter(m => m.messageId !== message.messageId);
      //console.log('pinnedMsgs.length', pinnedMsgs.length);

      if(pinnedMsgs.length>0) {
        setPinnedMessage(pinnedMsgs[pinnedMsgs.length-1]);
      } else {
        //console.log('a9wosdiwjspahfwpu')
        setPinnedMessage({} as MessageProps);
      }
      setListOfPinnedMessages([...pinnedMsgs]);
    } else {
      //console.log('pinMessageHandler', message.messageId, message.content);
      //pinnedMsgs.push(message);
      setListOfPinnedMessages([...listOfPinnedMessages, message])
      //setPinnedMessage(message);
    }
  }
  const [pinnedMessage, setPinnedMessage] = useState({} as MessageProps);
  const setPinnedMessageHandler = (id: number) => {
    if(pinnedMessage.messageId !== id)
      setPinnedMessage(listOfMessages.find(m => m.messageId === id)!)
  }
  const unpinAllMessagesHandler = () => {
    setListOfPinnedMessages([]);
    setPinnedMessage({} as MessageProps);
  }
  // useEffect(() => {
  //   setPinnedMessage(listOfPinnedMessages[listOfPinnedMessages.length-1]);
  // }, [listOfPinnedMessages])
  //console.log(listOfPinnedMessages.length);

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
            onSelectPress={setSelectingHandler}
            onPinPress={pinMessageHandler}
            userMessageLastWatched={userMessageLastWatched}
            pinnedMessageScreen={false}
          />
          <DialogueHeader 
            navigation={navigation} 
            picture={dialogue.linkToPhoto}
            author={user as User}
            activityTime={'Online recently'} // Last activity from user
            pinnedMessage={pinnedMessage}
            listOfPinnedMessages={listOfPinnedMessages}
            listOfMessages={listOfMessages}
            selecting={selecting}
            cancelSelection={setSelectingHandler}
            messageID={messageID}
            unpinAllMessagesHandler={unpinAllMessagesHandler}
            userMessageLastWatched={userMessageLastWatched!}
            onCopyPress={setCopyHandler}
            onUnpinPress={pinMessageHandler}
            onDeletePress={onPinnedMessageScreenDeletePress}
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
            selecting={selecting}
            hasPinnedMessage={listOfPinnedMessages.length>0}
            pinnedMessages={listOfPinnedMessages}
            setPinnedMessage={setPinnedMessageHandler}
            deletedMessagesId={deletedMessagesId}
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