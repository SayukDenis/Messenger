import { View, Button, TextInput, StyleSheet, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import React, { useState, memo, useCallback, Dispatch, SetStateAction } from 'react';
import styles from './DialogueFooterStyle';
import { Message } from './tmpdata';
import { Svg, Path } from 'react-native-svg';


const { height, width } = Dimensions.get('window');

const DialogueFooter = memo(({messages, setMessages, isReply, replyMessage, onSendMessage, isEdit, editMessage, messageID}:{messages:Message[], setMessages:(arg0: Message)=>void, isReply:boolean, replyMessage:Message, onSendMessage:()=>void, isEdit:boolean, editMessage:Message, messageID:number}) => {

  const [text, setText] = useState('');

  console.log('DialogueFooter-editMessage:', editMessage);

  return(
    <View style={{flex:6, backgroundColor:'rgba(0, 0, 0, 0)'}}>
      {
        isReply?
        <View style={{ height:0, top: -(height*0.0488)}}>
          <View style={{flex:1}}>
            <View style={{height:height*0.0488, width:width*0.96, backgroundColor:'rgb(231, 230, 228)', borderRadius:20, alignItems:'center',
            marginHorizontal:width*0.02, paddingVertical:10, paddingHorizontal:20, display:'flex', flexDirection:'row'}}>
              <Text>Reply Icon</Text>
              <View style={{flex: 1, justifyContent:'space-between', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <View style={{marginLeft:10}}>
                  <Text style={{color:'rgb(183, 158, 255)'}}>user name</Text>
                  <Text style={{color:'rgb(121, 121, 121)'}}>{replyMessage.text!.length>40?replyMessage.text.slice(0,40)+'...':replyMessage.text}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('close')} style={{backgroundColor:'red', width:width*0.03, alignItems:'center'}}>
                  <Text>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        :
        isEdit?
        <View style={{ height:0, top: -(height*0.0488)}}>
          <View style={{flex:1}}>
            <View style={{height:height*0.0488, width:width*0.96, backgroundColor:'rgb(231, 230, 228)', borderRadius:20, alignItems:'center',
            marginHorizontal:width*0.02, paddingVertical:10, paddingHorizontal:20, display:'flex', flexDirection:'row'}}>
              <Text>Edit Icon</Text>
              <View style={{flex: 1, justifyContent:'space-between', display:'flex', flexDirection:'row', alignItems:'center'}}>
                <View style={{marginLeft:10}}>
                  <Text style={{color:'rgb(183, 158, 255)'}}>Edit</Text>
                  <Text style={{color:'rgb(121, 121, 121)'}}>{editMessage.text!.length>40?editMessage.text.slice(0,40)+'...':editMessage.text}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('close')} style={{backgroundColor:'red', width:width*0.03, alignItems:'center'}}>
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
          placeholder='Льоша блядюга)' onSubmitEditing={() => sendMessage(text, setText, messages, setMessages, replyMessage, onSendMessage, editMessage, messageID)} />
          <Button title='gallery' />
        </View>
      </View>
    </View>
  );
})

const sendMessage = (text:string, setText:(arg0: string)=>void, messages:Message[], setMessages:(arg0: Message)=>void, replyMessage:Message, onSendMessage:()=>void, editMessage:Message, messageID:number) => {
  setText('');
  text = text.trim();
  if(text == '') {
    Alert.alert('Ти підарас');
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
  } else if(editMessage.text&&text!=messages.find(m => m.id == messageID+1)?.text) {
    messages.find(m => m.id == messageID+1)!.text = text;
    messages.find(m => m.id == messageID+1)!.edited = true;
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
  onSendMessage();
}; 

export default DialogueFooter;