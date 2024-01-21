import { FlatList, View } from 'react-native'
import React, { memo } from 'react'
import { EMessageType } from '../../../../dao/Models/EMessageType';
import { messageViewHandleProps } from './interfaces/IDialogueMessages';
import ReplyTextType from '../MessageViewsAndTypes/ReplyTextType';
import DefaultTextType from '../MessageViewsAndTypes/DefaultTextType';
import { MessageItemProps } from './interfaces/IMessageItem';

const MessageItem = ({ item, listOfMessages, setMessageMenuVisible, flatListRef, coordsY, author, messageID, setCoordsY, userMessageLastWatched }:MessageItemProps) => {
  
  const messageViewHandle = ({listOfMessages, message, setMessageMenuVisible, flatListRef, author}:messageViewHandleProps) => {
    if(message.messageType == EMessageType.text && message.messageResponseId) {
      return <ReplyTextType 
        key={message.messageId} 
        messages={listOfMessages} 
        message={message} 
        setMessageMenuVisible={setMessageMenuVisible} 
        id={message.messageId!} 
        scrollView={flatListRef}
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
          const newCoordsY = [ ...coordsY ];
          newCoordsY[item.messageId!] = [event.nativeEvent.layout.y, event.nativeEvent.layout.height];
          setCoordsY(newCoordsY);
        }}
        style={{ flex: 1, zIndex: item.messageId === messageID ? 4 : -10 }}
      >
        {messageViewHandle({ listOfMessages, message: item, setMessageMenuVisible, flatListRef, coordsY, author })}
      </View>
    );
  }


export default memo(MessageItem);