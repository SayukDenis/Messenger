import { View, TextInput, Platform, TouchableOpacity, Animated, Keyboard, KeyboardEvent } from 'react-native';
import React, { useState, memo, useEffect } from 'react';
import styles from './Styles/DialogueFooter';
import ReplyAndEditMenu from './ReplyAndEditMenu';
import { DialogueFooterProps, sendMessageProps } from './interfaces/IDialoueFooter';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FooterVideoButton from '../SVG/FooterVideoButton';
import FooterMicrophoneButton from '../SVG/FooterMicrophoneButton';
import FooterGallaryButton from '../SVG/FooterGallaryButton';
import { EMessageType } from '../../../../dao/Models/EMessageType';
import User from '../../../../dao/Models/User';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import { connect } from 'react-redux';
import { height } from '../DialogueConstants';

const keyboardHeight = new Animated.Value(0);
const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, messageID, author}:DialogueFooterProps) => {

  const [text, setText] = useState('');
  const [video, setVideo] = useState(true);

  useEffect(() => {
    if(isEdit)
      setText(editMessage?.content)
    else
      setText('');
  }, [editMessage, isEdit]);

  const insets = useSafeAreaInsets();
  const checkForSoftMenuBar = () => {
    if(height-screenHeight-Constants.statusBarHeight > 0)
      return insets.top;
    
    return 0;
  }


  // In the future make animation using 'react-native-keyboard-controller' library
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        console.log('show');
        Animated.timing(keyboardHeight, {
          toValue: -event.endCoordinates.height,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('hide');
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    // Clean up the event listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  return(
    <Animated.View style={{ transform: [{ translateY: keyboardHeight }] }}>
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
              opacity: 0.5,
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
              <TouchableOpacity 
                activeOpacity={1}
                onPress={() => setVideo(!video)}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 9999, width: screenHeight * 0.05, height: screenHeight * 0.05 }}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                {video?<FooterVideoButton/>:<FooterMicrophoneButton/>} 
              </TouchableOpacity>

              <TextInput value={text} onChangeText={setText} placeholderTextColor={'rgb(137, 130, 130)'} style={styles.messageInput} 
              placeholder='Льоша блядюга)' onSubmitEditing={() => sendMessage({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author})} />

              <TouchableOpacity 
                activeOpacity={1}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: screenHeight * 0.045, height: screenHeight * 0.045 }}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <FooterGallaryButton />
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
})

const sendMessage = ({text, setText, messages, setMessages, replyMessage, onSendMessageOrCancelReplyAndEdit, editMessage, messageID, author}:sendMessageProps) => {
  setText('');
  text = text.trim();

  const messageToEdit = messages.find(m => m.messageId == messageID);

  if(text == '') {
    onSendMessageOrCancelReplyAndEdit();
    return;
  }
  if(replyMessage?.content) {
    setMessages({
      messageId: messages.length,
      author: (author as User), // SelfProgile == User ?
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      messageResponseId: replyMessage.messageId,
      isEdited: false,
      isDeleted: false,
      reactionOnMessage: []
    });
  } else if(editMessage?.content&&text!=messageToEdit?.content) {
    if(messageToEdit!==undefined) {
      messageToEdit.content = text;
      messageToEdit.isEdited = true;
    }
    setMessages({} as MessageProps);
  } else {
    setMessages({
      messageId: messages.length,
      author: (author as User),
      content: text,
      sendingTime: new Date(),
      messageType: EMessageType.text,
      isEdited: false,
      isDeleted: false,
      reactionOnMessage: []
    });
  }
  onSendMessageOrCancelReplyAndEdit();
}; 

export default connect(null)(DialogueFooter);