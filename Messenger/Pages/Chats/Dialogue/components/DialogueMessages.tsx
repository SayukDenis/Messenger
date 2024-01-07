import { View, Dimensions, ScrollView, Keyboard, KeyboardEvent, FlatList } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import styles from './Styles/DialogueMessages'
import DefaultTextType from '../MessageViewsAndTypes/DefaultTextType'
import ReplyTextType from '../MessageViewsAndTypes/ReplyTextType';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { DialogueMessagesProps, messageViewHandleProps } from './interfaces/IDialogueMessages';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EMessageType } from '../../../../dao/Models/EMessageType';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('screen');

let counter:number = 0;

const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages, isReply, isEdit, author }:DialogueMessagesProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as ScrollView).scrollToEnd({ animated: true });
    }
    console.log('listOfMessagesCount', listOfMessages.length);
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

  const keyExtractor = (item:any) => item.messageId.toString();

  const renderItem = ({ item, index }:any) => {
    return (
      <View
        onLayout={(event) => {
          const newCoordsY = { ...coordsY };
          newCoordsY[item.messageId] = [event.nativeEvent.layout.y, event.nativeEvent.layout.height];
          setCoordsY(newCoordsY);
        }}
        style={{ flex: 1, zIndex: item.messageId === messageID ? 4 : -10 }}
      >
        {messageViewHandle({ listOfMessages, message: item, setMessageMenuVisible, scrollViewRef, coordsY, author })}
      </View>
    );
  };

  console.log(counter++)
  return(
    <View style={[styles.mainContainer, { height: screenHeight * 0.94 + (checkForSoftMenuBar()?insets.top:0) - keyboardHeight }]}>
      <FlatList
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={[styles.dialogueChat, { zIndex: 3 }]}
        data={listOfMessages}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={<View style={{ backgroundColor: 'transparent', height: screenHeight * 0.08 + Constants.statusBarHeight }} />}
        ListFooterComponent={<View style={{ height: screenHeight * 0.03 }} />}
        ItemSeparatorComponent={() => <View style={{ height: isReply || isEdit ? screenHeight * 0.05 : 0, width: width }} />}
      />
    </View>
  );
};

const messageViewHandle = ({listOfMessages, message, setMessageMenuVisible, scrollViewRef, coordsY, author}:messageViewHandleProps) => {
  if(message.messageType == EMessageType.text && message.messageResponseId) {
    return <ReplyTextType key={message.messageId} messages={listOfMessages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={message.messageId!} scrollView={scrollViewRef} cordsY={coordsY} author={author}/>;
  }
  else if(message.messageType == EMessageType.text) {
    return <DefaultTextType key={message.messageId} messages={listOfMessages} message={message} setMessageMenuVisible={setMessageMenuVisible} id={message.messageId!} author={author}/>;
  }
};

export default connect(null)(DialogueMessages)