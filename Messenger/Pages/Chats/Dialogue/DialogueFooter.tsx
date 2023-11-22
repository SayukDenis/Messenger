import { View, Button, TextInput, StyleSheet, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import React, { useState, memo, useCallback, Dispatch, SetStateAction } from 'react';
import styles from './DialogueFooterStyle';
import { Message } from './tmpdata';
import { Svg, Path } from 'react-native-svg';


const { height, width } = Dimensions.get('window');

interface DialogueFooterProps {
  messages:Message[], 
  setMessages:(arg0: Message)=>void, 
  isReply:boolean, 
  replyMessage:Message, 
  onSendMessageOrCancelReplyAndEdit:()=>void, 
  isEdit:boolean, 
  editMessage:Message, 
  messageID:number,
}

const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessageOrCancelReplyAndEdit, isEdit, editMessage, messageID}:DialogueFooterProps) => {

  const [text, setText] = useState(isEdit?editMessage.text:'');

  return(
    <View style={{flex:6, backgroundColor:'rgba(0, 0, 0, 0)'}}>
      {
        isReply?
        <View style={{ height:0, top: -(height*0.052)}}>
          <View className='flex-1'>
            <View className='bg-[#E7E6E4] items-center rounded-2xl py-3 px-3 flex flex-row' style={{height:height*0.052, width:width*0.96, marginHorizontal:width*0.02}}>
              <Text>Reply Icon</Text>
              <View className='flex-1 justify-between flex flex-row items-center'>
                <View className='ml-3'>
                  <Text className='text-[#B79EFF]'>user name</Text>
                  <Text className='text-[#797979]'>{replyMessage.text!.length>40?replyMessage.text.slice(0,40)+'...':replyMessage.text}</Text>
                </View>
                <TouchableOpacity onPress={onSendMessageOrCancelReplyAndEdit} className='bg-red-500 items-center' style={{width:width*0.03}}>
                  <Text>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        :
        isEdit?
        <View style={{ height:0, top: -(height*0.052)}}>
          <View style={{flex:1}}>
            <View style={{height:height*0.052, width:width*0.96, backgroundColor:'rgb(231, 230, 228)', borderRadius:20, alignItems:'center',
            marginHorizontal:width*0.02, paddingVertical:10, paddingHorizontal:20, display:'flex', flexDirection:'row'}}>
              <Text>Edit Icon</Text>
              <View style={{flex: 1, justifyContent:'space-between', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <View style={{marginLeft:10}}>
                  <Text style={{color:'rgb(183, 158, 255)'}}>Edit</Text>
                  <Text style={{color:'rgb(121, 121, 121)'}}>{editMessage.text!.length>40?editMessage.text.slice(0,40)+'...':editMessage.text}</Text>
                </View>
                <TouchableOpacity onPress={onSendMessageOrCancelReplyAndEdit} style={{backgroundColor:'red', width:width*0.03, alignItems:'center'}}>
                  <Text>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        :null
      }
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

interface sendMessageProps {
  text:string, 
  setText:(arg0: string)=>void,
  messages:Message[], 
  setMessages:(arg0: Message)=>void, 
  replyMessage:Message, 
  onSendMessageOrCancelReplyAndEdit:()=>void, 
  editMessage:Message, 
  messageID:number,
}

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