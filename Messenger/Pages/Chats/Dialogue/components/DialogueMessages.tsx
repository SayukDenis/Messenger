import { View, Keyboard, KeyboardEvent, FlatList, Animated } from 'react-native';
import { useRef, useEffect, memo, useMemo, useState } from 'react';
import styles from './Styles/DialogueMessages'
import React from 'react';
import { DialogueMessagesProps } from './interfaces/IDialogueMessages';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { connect, useDispatch } from 'react-redux';
import MessageItem from './MessageItem';
import { height } from '../../SemiComponents/ChatConstants';
import { setScrollStateForPinnedMessage } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';

interface pinnedMessageProps {
  message: number;
  coord: number
}

let messagesWithCoords:pinnedMessageProps[] = [];
let pinnedMessagesWithCoords:pinnedMessageProps[] = [];

const DialogueMessages =({ scrollToPinnedMessage, idOfPinnedMessage, setMessageMenuVisible, messageID, listOfMessages, isReply, isEdit, author, userMessageLastWatched, authorMessageLastWatched, selecting, hasPinnedMessage, pinnedMessages, setPinnedMessage, deletedMessagesId }:DialogueMessagesProps) => {

  useEffect(() => {
    pinnedMessagesWithCoords = [];
    console.log(pinnedMessages.length);
  }, [])

  useEffect(() => {
    pinnedMessagesWithCoords = [];
    let y = 0;
    messagesWithCoords.map(mes => {
      console.log(mes.message);
      const pinned = pinnedMessages.find(m => m.messageId === mes.message);
      if(pinned) {
        //console.log('pinnedMessages', pinnedMessages.map((m) => `${m.messageId} ${m.content}`))
        pinnedMessagesWithCoords.push({ message: mes.message, coord: y });
      }
      if(deletedMessagesId.findIndex(id => id === mes.message) < 0)
        y += mes.coord;
    });
    if(flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: flatListRef.current._listRef._scrollMetrics.offset + 1, animated: false });
      flatListRef.current.scrollToOffset({ offset: flatListRef.current._listRef._scrollMetrics.offset - 1, animated: false });
    }
  }, [pinnedMessages])

  const dispatch = useDispatch();

  const flatListRef = useRef<any>(null);
  useEffect(() => {
    //console.log('\nscrollToPinnedMessage', scrollToPinnedMessage, '\nidOfPinnedMessage', idOfPinnedMessage);
    if(scrollToPinnedMessage && flatListRef.current) {
      const offset = pinnedMessagesWithCoords.find(m => m.message === idOfPinnedMessage)?.coord;
      //console.log('\noffset', offset, '\npinnedMessagesWithCoords', pinnedMessagesWithCoords);
      if(offset !== undefined)
        flatListRef.current.scrollToOffset({ animated: true, offset });

      dispatch(setScrollStateForPinnedMessage(false, 0));
    }
  }, [scrollToPinnedMessage])

  const setPinnedMessageHandler = (message:number, coord:number) => {
    //console.log('setPinnedMessageHandler', message, coord);
    const mesId = messagesWithCoords.findIndex(m => m.message === message);
    if(mesId !== -1) {
      messagesWithCoords[mesId].coord = coord;
    } else {
      messagesWithCoords.push({ message, coord });
    }
  }

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
      selecting={selecting}
      pinnedMessageHandler={setPinnedMessageHandler}
      pinnedMessageScreen={false}
    />);
  const memoizedItem = useMemo(() => renderItem, [listOfMessages, selecting]);

  const ListHeaderComponent = () => (
    <View style={{ height: screenHeight * 0.02+(isReply||isEdit?screenHeight*0.06:0) }} />
  );

  const ListFooterComponent = () => (
    <View 
      style={{ backgroundColor: 'transparent', height: (screenHeight*0.08+(hasPinnedMessage?screenHeight*0.05:0)+Constants.statusBarHeight) }} 
    />
  )

  const checkForPinMessage = (event:any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    let minOffset = 9999;
    let messageId = 0;
    pinnedMessagesWithCoords.map((mes) => {
      const offset = Math.abs(mes.coord - yOffset);
      if(offset < minOffset) {
        minOffset = offset;
        messageId = mes.message;
      }
    })
    setPinnedMessage(messageId);
  }

  return(
    <Animated.View style={[styles.mainContainer, { height: screenHeight * 0.94 + (checkForSoftMenuBar()?insets.top:0), zIndex:0, transform: [{ translateY: keyboardHeight }] }]}>
      <FlatList
        onScroll={checkForPinMessage}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        style={[styles.dialogueChat, { zIndex: 3 }]}
        data={listOfMessages}
        inverted
        overScrollMode={'never'}
        windowSize={15}
        maxToRenderPerBatch={3}
        initialNumToRender={20}
        removeClippedSubviews
        updateCellsBatchingPeriod={100}
        keyExtractor={keyExtractor}
        renderItem={memoizedItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent} 
      />
    </Animated.View>
  );
};

const mapStateToProps = (state:any) => ({
  scrollToPinnedMessage: state.ChatReducer.scrollToPinnedMessage.scroll,
  idOfPinnedMessage: state.ChatReducer.scrollToPinnedMessage.id
});

export default memo(connect(mapStateToProps)(DialogueMessages))