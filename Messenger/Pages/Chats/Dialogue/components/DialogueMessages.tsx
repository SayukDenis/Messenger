import { View, Dimensions, ScrollView, Keyboard, KeyboardEvent, FlatList } from 'react-native';
import { useRef, useState, useEffect, memo, useCallback, useMemo } from 'react';
import styles from './Styles/DialogueMessages'
import React from 'react';
import { DialogueMessagesProps, messageViewHandleProps } from './interfaces/IDialogueMessages';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

const { height, width } = Dimensions.get('screen');

const DialogueMessages =({setMessageMenuVisible, messageMenuVisisbleAppearence, messageID, listOfMessages, isReply, isEdit, author }:DialogueMessagesProps) => {
  const scrollViewRef = useRef(null);
  useEffect(() => {
    if (scrollViewRef.current) {
      (scrollViewRef.current as FlatList).scrollToOffset({ animated: true, offset: 0 });
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

  const keyExtractor = (item:any) => {
    return item.messageId?.toString();
  }

  const setCoordsYHandler = (newCoordsY:any) => {
    setCoordsY(newCoordsY);
  }

  const renderItem = ({item}:any) => (
    <MessageItem 
      item={item}
      listOfMessages={listOfMessages}
      setMessageMenuVisible={setMessageMenuVisible}
      scrollViewRef={scrollViewRef}
      coordsY={coordsY}
      author={author}
      messageID={messageID}
      setCoordsY={setCoordsYHandler}
    />);
  const memoizedItem = useMemo(() => renderItem, [listOfMessages]);

  const ListHeaderComponent = () => (
    <View style={{ height: screenHeight * 0.03+(isReply||isEdit?screenHeight*0.05:0) }} />
  );

  const ListFooterComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: (screenHeight*0.08+Constants.statusBarHeight) }} 
    />
  )

  return(
    <View style={[styles.mainContainer, { height: screenHeight * 0.94 + (checkForSoftMenuBar()?insets.top:0) - keyboardHeight, zIndex:0 }]}>
      <FlatList
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        style={[styles.dialogueChat, { zIndex: 3 }]}
        data={listOfMessages}
        inverted
        windowSize={20}
        keyExtractor={keyExtractor}
        renderItem={memoizedItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent} 
      />
    </View>
  );
};

export default memo(connect(null)(DialogueMessages))