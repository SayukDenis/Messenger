import { View, Keyboard, KeyboardEvent, FlatList, Animated } from 'react-native';
import { useRef, useEffect, memo, useMemo, useState } from 'react';
import styles from './Styles/DialogueMessages'
import React from 'react';
import { DialogueMessagesProps } from './interfaces/IDialogueMessages';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import { height } from '../DialogueConstants';

const DialogueMessages =({setMessageMenuVisible, messageID, listOfMessages, isReply, isEdit, author, userMessageLastWatched, authorMessageLastWatched }:DialogueMessagesProps) => {

  const flatListRef = useRef(null);
  useEffect(() => {
    if (flatListRef.current) {
      (flatListRef.current as FlatList).scrollToOffset({ animated: true, offset: 0 });
    }
  }, [listOfMessages]);

  const [coordsY, setCoordsY]:any = useState([]); 
  const setCoordsYHandler = (newCoordsY:any) => {
    setCoordsY([...newCoordsY]);
  }

  const insets = useSafeAreaInsets();

  const checkForSoftMenuBar = () => {
    if(height-screenHeight-Constants.statusBarHeight > 0)
      return insets.top;
    
    return 0;
  } 

  // In the future make animation using 'react-native-keyboard-controller' library
  const keyboardHeight = new Animated.Value(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: KeyboardEvent) => {
        Animated.timing(keyboardHeight, {
          toValue: -event.endCoordinates.height,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false, // Adjust based on your requirements
        }).start();
      }
    );

    // Clean up the event listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  const keyExtractor = (item:any) => {
    return item.messageId?.toString();
  }

  const renderItem = ({item}:any) => (
    <MessageItem 
      item={item}
      listOfMessages={listOfMessages}
      setMessageMenuVisible={setMessageMenuVisible}
      flatListRef={flatListRef}
      coordsY={coordsY}
      author={author}
      messageID={messageID}
      setCoordsY={setCoordsYHandler}
      userMessageLastWatched={userMessageLastWatched}
    />);
  const memoizedItem = useMemo(() => renderItem, [listOfMessages]);

  const ListHeaderComponent = () => (
    <View style={{ height: screenHeight * 0.02+(isReply||isEdit?screenHeight*0.06:0) }} />
  );

  const ListFooterComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: (screenHeight*0.08+screenHeight*0.05+Constants.statusBarHeight) }} 
    />
  )

  return(
    <Animated.View style={[styles.mainContainer, { height: screenHeight * 0.94 + (checkForSoftMenuBar()?insets.top:0), zIndex:0, transform: [{ translateY: keyboardHeight }] }]}>
      <FlatList
        ref={flatListRef}
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
    </Animated.View>
  );
};

export default memo(connect(null)(DialogueMessages))