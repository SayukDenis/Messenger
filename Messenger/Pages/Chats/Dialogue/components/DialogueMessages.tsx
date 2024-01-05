import { View, Dimensions, ScrollView } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import styles from './Styles/DialogueMessages'
import DefaultTextType from '../MessageViewsAndTypes/DefaultTextType'
import ReplyTextType from '../MessageViewsAndTypes/ReplyTextType';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { messageProps, messageViewHandleProps } from './interfaces/IDialogueMessages';

const { height, width } = Dimensions.get('window');

export const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages, isReply, isEdit}:messageProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as ScrollView).scrollToEnd({ animated: true });
    }
  }, [listOfMessages]);
  
  const [coordsY, setCoordsY]:any = useState([]); 
  return(
    <GestureHandlerRootView style={styles.mainContainer}>
      
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={[styles.dialogueChat, {zIndex:3}]}>
        {listOfMessages.map((message, index) => (
          <View onLayout={
            (event:any) => {
              coordsY[message.id] = [event.nativeEvent.layout.y, event.nativeEvent.layout.height]; 
              setCoordsY(coordsY);
            }
          } key={message.id} style={{flex:1, zIndex:message.id===messageID?4:-10}}>
            {messageViewHandle({ listOfMessages, message, setMessageMenuVisible, scrollViewRef, coordsY})}
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

const messageViewHandle = ({listOfMessages, message, setMessageMenuVisible, scrollViewRef, coordsY}:messageViewHandleProps) => {
  if(message.type == 'text' && message.isReply == true) {
    return <ReplyTextType key={message.id} messages={listOfMessages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={message.id} scrollView={scrollViewRef} cordsY={coordsY}/>;
  }
  else if(message.type == 'text') {
    return <DefaultTextType key={message.id} messages={listOfMessages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={message.id}/>;
  }
};