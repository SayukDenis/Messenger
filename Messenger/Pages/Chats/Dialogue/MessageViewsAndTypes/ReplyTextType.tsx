import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MutableRefObject, useState, memo, useCallback, useRef, useEffect } from 'react'
import {Message, messages} from '../tmpdata';
import { styles } from './Styles/ReplyTextType';
import handlePress from './DefaultTextType';
import React from 'react';

const {width, height} = Dimensions.get('window');

interface ReplyTextType {
  messages:Message[];
  message:Message;
  setMessageMenuVisible:(arg0: {ID:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean)=>void;
  id:number;
  scrollView:MutableRefObject<any>;
  cordsY:any;
}

let size:any[] = [];
const replyTextType = memo(({messages, message, setMessageMenuVisible, id, scrollView, cordsY}:ReplyTextType) => {

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: id, layout: { width, height }}];
  };
  
  const handlePress = useCallback((event:({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if(!event) return { ID: id, pageX: 0, pageY: 0, width: 0, height: 0 };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === id);

    return { 
      ID: id,
      pageX: pageX, //(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX
      pageY: pageY, //(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY
      width: component.layout.width,
      height: component.layout.height,
    };
  }, []);

  const handleLinkTo = useCallback((messageID:any) => {
    const y = cordsY[--messageID][0] - ((height*0.88)/2-cordsY[messageID][1]/2);
    scrollView.current.scrollTo({y, animated:true});
  }, []);
  
  const replyMessage = messages.find(m => m.id === message.replyMessageID);

  return (
    <ScrollView 
      horizontal={true} 
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      style={styles.swipeableContainer}
      onScrollEndDrag={() => setMessageMenuVisible(handlePress(null), false)}
    >
      <View style={styles.replyContainer}>
        <View style={styles.innerReplyContainer}>
          <Text style={[styles.replyUserNameFont, message.isUser&&{ alignSelf: 'flex-end' }]}>
            {message.isUser?'You':'Denis'}
          </Text>
          {message.isUser?
          <View style={styles.replyMessageContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => {handleLinkTo(message!.replyMessageID)}}>
              <View style={[styles.messageTypeTextUser, styles.replyMessagePos]}>
                <Text style={styles.replyMessageFont}>
                  {replyMessage!.text.length>=20?replyMessage!.text.replace('\n', '').slice(0,20)+'...':replyMessage!.text}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.replyMessageLine}/>
          </View>
          :
          <View style={styles.replyMessageContainer}>
            <View style={styles.replyMessageLine}/>
            <TouchableOpacity style={{flex:1}} activeOpacity={1}>
              <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos]}>
                <Text style={styles.replyMessageFont}>
                  {replyMessage!.text.length>=20?replyMessage!.text.replace('\n', '').slice(0,20)+'...':replyMessage!.text}
                </Text>
              </View>
            </TouchableOpacity>
          </View>}
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={(event) => {setMessageMenuVisible(handlePress(event), true);}}
          >
            <View 
              onLayout={(event) => onLayout(event)}
              style={[message.isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginVertical:5}]}
            >
              <Text>{message.text}</Text>
              <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.edited?'edited ':''}
                {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width:50, backgroundColor:'pink'}}>
        <Text>Reply</Text>
      </View>
    </ScrollView>
)});

export default replyTextType;