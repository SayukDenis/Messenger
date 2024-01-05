import { View, Dimensions, ScrollView, Keyboard, KeyboardEvent } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import styles from './Styles/DialogueMessages'
import DefaultTextType from '../MessageViewsAndTypes/DefaultTextType'
import ReplyTextType from '../MessageViewsAndTypes/ReplyTextType';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { messageProps, messageViewHandleProps } from './interfaces/IDialogueMessages';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('screen');

export const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages, isReply, isEdit }:messageProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as ScrollView).scrollToEnd({ animated: true });
    }
  }, [listOfMessages]);
  
  const [coordsY, setCoordsY]:any = useState([]); 

  const insets = useSafeAreaInsets();

  const checkForSoftMenuBar = () => {
    if(height-screenHeight-Constants.statusBarHeight > 0)
      return insets.top;
    
    return 0;
  } 

  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    // Clean up the event listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return(
    <GestureHandlerRootView style={[styles.mainContainer, { height: screenHeight * 0.94 + (checkForSoftMenuBar()?insets.top:0) - keyboardHeight }]}>
      
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} style={[styles.dialogueChat, {zIndex:3}]}>
        <View style={{ backgroundColor: 'transparent', height: screenHeight * 0.08 + Constants.statusBarHeight }} />
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