import { View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { MutableRefObject, useState, memo, useCallback } from 'react'
import {Message, messages} from '../tmpdata';
import styles from '../DialogueMessagesStyle';
import handlePress from './DefaultTextType';
import React from 'react';

const {width, height} = Dimensions.get('window');

interface ReplyTextType {
  messages:Message[];
  message:Message;
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  id:number;
  scrollView:MutableRefObject<any>;
  cordsY:any;
}

const replyTextType = memo(({messages, message, setMessageMenuVisible, id, scrollView, cordsY}:ReplyTextType) => {
  const handlePress = useCallback((event:{ nativeEvent: { pageX: number; pageY: number } }) => {
    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;
    // Alert.alert('Aboba', `x:${pageX}\nphoneX:${width}\n\ny:${pageY}\nphoneY:${height}`)
    return { x:(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX,
             y:(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY,
             ID: id };
  }, []);
  const handleLinkTo = useCallback((messageID:any) => {
    //console.log(`coordsY: ${cordsY[--messageID][0]}\nheight: ${cordsY[messageID][1]}`)
    const y = cordsY[--messageID][0] - ((height*0.88)/2-cordsY[messageID][1]/2);
    scrollView.current.scrollTo({y, animated:true});
  }, []);
  const replyMessage = messages.find(m => m.id === message.replyMessageID);
    return message.isUser?
    <View style={styles.replyContainer}>
      <Text style={styles.replyNickName}>Denis</Text>
      <View style={styles.replyMessageContainer}>
        <TouchableOpacity style={styles.replyMessageLink} activeOpacity={1} onPress={() => {handleLinkTo(message!.replyMessageID)}}>
          <View style={[styles.messageTypeTextUser, styles.replyMessagePos]}>
            <Text style={styles.replyMessageFont}>{replyMessage!.text.length>=20?
            replyMessage!.text.slice(0,20)+'...':replyMessage!.text}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.replyMessageLine}/>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
        <View style={styles.messageContainer}>
          <View style={styles.messageTypeTextUser}>
            <Text>{message.text}</Text>
            <Text style={styles.messageTimeStamp}>
              {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
              {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
            </Text>
          </View>
          <Text style={{alignSelf:'center'}}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
    :
    <View style={styles.replyContainer}>
      <Text style={[styles.replyNickName, {alignSelf:'flex-start'}]}>You</Text>
      <View style={styles.replyMessageContainer}>
        <View style={styles.replyMessageLine}/>
        <TouchableOpacity style={{flex:1}} activeOpacity={1}>
          <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos]}>
            <Text style={styles.replyMessageFont}>{replyMessage!.text.length>=20?
            replyMessage!.text.slice(0,20)+'...':replyMessage!.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
        <View style={styles.messageContainer}>
          <View style={message.text.length>40?[styles.messageTypeTextNotUser, styles.longMessage]:styles.messageTypeTextNotUser}>
            <Text>{message.text}</Text>
            <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
              {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
              {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>;
});

export default replyTextType;