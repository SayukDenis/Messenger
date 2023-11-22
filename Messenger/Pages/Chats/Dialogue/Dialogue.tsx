import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, PanResponder, Modal, Dimensions, } from 'react-native';
import { Provider, useState, useCallback, SetStateAction, Dispatch } from 'react';
import DialogueHeader from './DialogueHeader';
import { DialogueMessages } from './DialogueMessages';
import DialogueFooter from './DialogueFooter';
import MessageMenu from './MessageMenu';
import styles from './DialogueStyle';
import { messages, Message } from './tmpdata';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

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
    <LinearGradient style={{flex:1}} start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#D7B168', '#D783FF']}>
      <View className='' style={{flex:1, alignSelf:'stretch', position:'relative'}}>
        <StatusBar hidden={true}/>
        <View style={styles.dialogueContainer}>
          <MessageMenu isUser={mes!=undefined?mes.isUser:false} isVisible={messageMenuVisible} onOverlayPress={handleMessageMenuPress} coord={coord} onReplyPress={pressReplyButton} onEditPress={pressEditButton} onDeletePress={setDeletingHandler} />
          <DialogueHeader />
          <DialogueMessages setMessageMenuVisible={handleMessagePress} messageMenuVisisbleAppearence={messageMenuVisisbleAppearence} 
            messageID={messageID} listOfMessages={listOfMessages} isReply={isReply} isEdit={isEdit} />
          <DialogueFooter messages={listOfMessages} setMessages={setMessages} isReply={isReply} messageID={messageID} isEdit={isEdit} editMessage={editMessage} replyMessage={replyMessage} onSendMessageOrCancelReplyAndEdit={sendMessageOrCancelReplyAndEditHandler} />
          <Modal style={{flex:1}} visible={deleting} transparent={true} onRequestClose={setDeletingHandler} statusBarTranslucent={true} >
            <TouchableOpacity activeOpacity={1} style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.15)', alignItems:'center', justifyContent:'center'}}onPress={setDeletingHandler}>
              <View className='bg-[#dcdcdc] justify-center rounded-3xl' style={[{width:width*0.6, height:height*0.15, borderWidth:0.4}]}>
                <View className='items-center justify-center' style={{height:height*0.11}}>
                  <Text style={{}}>Do you want to delete this message?</Text>
                </View>
                {mes!=undefined?(mes.isUser?
                  <View className='flex flex-row'>
                    <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, justifyContent:'center', alignItems:'center', borderTopWidth:0.4, borderRightWidth:0.4}} onPress={onDeletePress}>
                      <Text className='text-red-500'>For me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4, justifyContent:'center', alignItems:'center'}} onPress={onDeletePress}>
                      <Text className='text-red-500'>For everyone</Text>
                    </TouchableOpacity>
                  </View>:
                  <View className='flex flex-row'>
                    <TouchableOpacity className='justify-center items-center' activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4, borderRightWidth:0.4}} onPress={onDeletePress}>
                      <Text className='text-red-500'>Agree</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='justify-center items-center' activeOpacity={1} style={{width:width*0.3, height:height*0.04, borderTopWidth:0.4}} onPress={setDeletingHandler}>
                      <Text className='text-red-500'>Disagree</Text>
                    </TouchableOpacity>
                  </View>
                ):null}
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Dialogue;