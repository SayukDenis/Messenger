import { View, Text } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react'
import { EMessageType } from '../../../../dao/Models/EMessageType';
import { messageViewHandleProps } from './interfaces/IDialogueMessages';
import ReplyTextType from '../MessageViewsAndTypes/ReplyTextType';
import DefaultTextType from '../MessageViewsAndTypes/DefaultTextType';

const MessageItem = ({ item, listOfMessages, setMessageMenuVisible, scrollViewRef, coordsY, author, messageID, setCoordsY, userMessageLastWatched }:any) => {

  const messageViewHandle = ({listOfMessages, message, setMessageMenuVisible, scrollViewRef, coordsY, author}:messageViewHandleProps) => {
    if(message.messageType == EMessageType.text && message.messageResponseId) {
      return <ReplyTextType 
        key={message.messageId} 
        messages={listOfMessages} 
        message={message} 
        setMessageMenuVisible={setMessageMenuVisible} 
        id={message.messageId!} 
        scrollView={scrollViewRef} 
        cordsY={coordsY} 
        author={author}
        userMessageLastWatched={userMessageLastWatched}
      />;
    }
    else if(message.messageType == EMessageType.text) {
      return <DefaultTextType 
        key={message.messageId} 
        message={message} 
        setMessageMenuVisible={setMessageMenuVisible} 
        id={message.messageId!} 
        author={author}
        userMessageLastWatched={userMessageLastWatched}
      />;
    }
  };

  return (
    <View
      key={item.messageId}
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
  }


export default memo(MessageItem);