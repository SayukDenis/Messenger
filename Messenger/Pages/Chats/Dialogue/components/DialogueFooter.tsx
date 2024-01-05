import { View, Button, TextInput, StyleSheet, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import React, { useState, memo, useCallback, Dispatch, SetStateAction, useEffect } from 'react';
import styles from './Styles/DialogueFooter';
import { Message } from '../tmpdata';
import { Svg, Path } from 'react-native-svg';
import ReplyAndEditMenu from './ReplyAndEditMenu';
import { DialogueFooterProps, sendMessageProps } from './interfaces/IDialoueFooter';

const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, messageID}:DialogueFooterProps) => {

  const [text, setText] = useState('');

  useEffect(() => {
    if(isEdit)
      setText(editMessage.text)
    else
      setText('');
  }, [editMessage, isEdit]);

  return(
    <View style={styles.mainContainer}>
      <ReplyAndEditMenu 
        isReply={isReply} 
        replyMessage={replyMessage} 
        cancelReplyAndEdit={onSendMessageOrCancelReplyAndEdit} 
        isEdit={isEdit} 
        editMessage={editMessage}
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
  if(replyMessage.text) {
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
  } else if(editMessage.text&&text!=messageToEdit?.text) {
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