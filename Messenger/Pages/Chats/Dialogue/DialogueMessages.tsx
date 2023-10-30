import { View, Dimensions, ScrollView, Alert } from 'react-native';
import { useRef, MutableRefObject, useState, useEffect, memo, useCallback } from 'react';
import {Message} from './tmpdata';
import styles from './DialogueMessagesStyle'
import DefaultTextType from './MessageViewsAndTypes/DefaultTextType'
import ReplyTextType from './MessageViewsAndTypes/ReplyTextType';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

const { height, width } = Dimensions.get('window');

interface messageProps {
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  messageMenuVisisbleAppearence:boolean;
  messageID:number;
  listOfMessages:Message[]
}

export const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages}:messageProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as ScrollView).scrollToEnd({ animated: true });
    }
  }, [listOfMessages]);
  
  const [coordsY, setCoordsY]:any = useState([]); //{coordsY:number[]; setCoordsY:(arg0: {arr:number[]})=>void}
  return(
    <GestureHandlerRootView style={{flex: 88}}>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={styles.dialogueChat}>
        {listOfMessages.map((message, index) => (
          <View onLayout={
            (event:any) => {
              coordsY[message.id] = [event.nativeEvent.layout.y, event.nativeEvent.layout.height]; 
              setCoordsY(coordsY);
            }
          } key={message.id} style={{flex:1, backgroundColor:'green', opacity:check(messageMenuVisisbleAppearence, message.id, messageID)}}>
            {messageViewHandle(listOfMessages, message, setMessageMenuVisible, message.id, scrollViewRef, coordsY)}
          </View>
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const check = (isVisible:boolean, id:number, messageID:number) => {
  if(isVisible && messageID!=-1 && id==messageID) {
    return 1;
  }
  else if(isVisible && messageID!=-1) {
    return 0.25;
  }
  return 0.9;
};

const messageViewHandle = (messages:Message[], message:Message, setMessageMenuVisible:{(arg0: {x:number, y:number, ID:number}):void}, messageID:number, scrollViewRef:MutableRefObject<any>, cordsY:any) => {
  // for(let i = 0; i < cordsY.length; i++)
  //   console.log(cordsY[i], 'index '+i);
  if(message.type == 'text' && message.isReply == true) {
    return <ReplyTextType key={messageID} messages={messages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={messageID} scrollView={scrollViewRef} cordsY={cordsY}/>;
  }
  else if(message.type == 'text') {
    return <DefaultTextType key={messageID} messages={messages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={messageID}/>;
  }
};