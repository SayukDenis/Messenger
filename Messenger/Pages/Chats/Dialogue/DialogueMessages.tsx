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
  listOfMessages:Message[];
  isReply:boolean;
  isEdit:boolean;
}

export const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages, isReply, isEdit}:messageProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as ScrollView).scrollToEnd({ animated: true });
    }
  }, [listOfMessages]);
  
  const [coordsY, setCoordsY]:any = useState([]); //{coordsY:number[]; setCoordsY:(arg0: {arr:number[]})=>void}
  return(
    <GestureHandlerRootView style={{flex: 88, overflow:'visible', position:'relative'}}>
      
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={[styles.dialogueChat, {zIndex:3}]}>
        {listOfMessages.map((message, index) => (
          <View onLayout={
            (event:any) => {
              coordsY[message.id] = [event.nativeEvent.layout.y, event.nativeEvent.layout.height]; 
              setCoordsY(coordsY);
            }
          } key={message.id} style={{flex:1, zIndex:message.id===messageID?4:-10}}>
            {messageViewHandle(listOfMessages, message, setMessageMenuVisible, message.id, scrollViewRef, coordsY)}
          </View>
        ))}
        <View style={{height:isReply||isEdit?height*0.052:0, width:width}}/>
      </ScrollView>
      <View
        style={{position:'absolute', width:messageMenuVisisbleAppearence&&2*width, height:messageMenuVisisbleAppearence&&2*height, backgroundColor:'rgba(0, 0, 0, 0.3)', zIndex: 3, marginTop:-100}}
      />
    </GestureHandlerRootView>
  );
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