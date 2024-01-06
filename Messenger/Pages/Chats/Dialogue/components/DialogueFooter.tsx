import { View, Button, TextInput, Alert, KeyboardAvoidingView, StatusBar, Platform, Dimensions } from 'react-native';
import React, { useState, memo, useEffect } from 'react';
import styles from './Styles/DialogueFooter';
import { Message } from '../tmpdata';
import ReplyAndEditMenu from './ReplyAndEditMenu';
import { DialogueFooterProps, sendMessageProps } from './interfaces/IDialoueFooter';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import ContactsSvg from '../../../ChatList/Components/SVG/ContactsSvg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('screen');

const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, messageID}:DialogueFooterProps) => {

  const [text, setText] = useState('');

  useEffect(() => {
    if(isEdit)
      setText(editMessage?.text)
    else
      setText('');
  }, [editMessage, isEdit]);

  const insets = useSafeAreaInsets();
  const checkForSoftMenuBar = () => {
    if(height-screenHeight-Constants.statusBarHeight > 0)
      return insets.top;
    
    return 0;
  }

  return(
    <View>
      <ReplyAndEditMenu 
        isReply={isReply} 
        replyMessage={replyMessage} 
        cancelReplyAndEdit={onSendMessageOrCancelReplyAndEdit} 
        isEdit={isEdit} 
        editMessage={editMessage}
      />
      <View
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: checkForSoftMenuBar()?-(height-screenHeight-Constants.statusBarHeight):-screenHeight*0.06,
            zIndex: 5,
            elevation: 0.001,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height:
              Platform.OS == "android"
                ? screenHeight * 0.08
                : screenHeight * 0.08,
            justifyContent: "flex-end",
            overflow: 'hidden',
          },
        ]}
      >
        <View style={{
          height: Platform.OS=="android"?screenHeight * 0.08:screenHeight * 0.08,
          // backgroundColor: "#E7E6E4",
          backgroundColor:"white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          zIndex: 5,
          justifyContent:"center",
          }}
        >
          <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            locations={[0.25, 0.5, 0.75]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              opacity: 0.7,
              bottom: 0,
              position: "absolute",
              left: 0,
              right: 0,
              height: screenHeight,
              width: screenWidth,
            }}
          />
          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <Button title='audio'/>
              <TextInput value={text} onChangeText={setText} placeholderTextColor={'rgb(137, 130, 130)'} style={styles.messageInput} 
              placeholder='Льоша блядюга)' onSubmitEditing={() => sendMessage({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID})} />
              <Button title='gallery' />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
})

const sendMessage = ({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID}:sendMessageProps) => {
  setText('');
  text = text.trim();

  const messageToEdit = messages.find(m => m.id == messageID);

  if(text == '') {
    Alert.alert('Ти підарас');
    onSendMessageOrCancelReplyAndEdit();
    return;
  }
  if(replyMessage?.text) {
    setMessages({
      id: messages.length + 1,
      type: 'text',
      text: text,
      timeStamp: Date.now(),
      isUser: true,
      isReply: true,
      replyMessageID: replyMessage.id,
      edited: false,
    });
  } else if(editMessage?.text&&text!=messageToEdit?.text) {
    messageToEdit!.text = text;
    messageToEdit!.edited = true;
    setMessages({} as Message);
  } else {
    setMessages({
      id: messages.length + 1,
      type: 'text',
      text: text,
      timeStamp: Date.now(),
      isUser: true,
      isReply: false,
      edited: false,
    });
  }
  onSendMessageOrCancelReplyAndEdit();
}; 

export default DialogueFooter;