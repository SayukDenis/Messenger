import { View } from 'react-native'
import React, { memo } from 'react'
import { EMessageType } from '../../../dao/Models/EMessageType';
import { messageViewHandleProps } from '../Dialogue/components/interfaces/IDialogueMessages';
import { MessageItemProps } from './Interfaces/IMessageItem';
import DefaultTextTypeUsingClass from './MessageViewAndTypes/DefaultTextType';
import ReplyTextTypeUsingClass from './MessageViewAndTypes/ReplyTextType';

const MessageItem = ({ item, listOfMessages, setMessageMenuVisible, flatListRef, coordsY, author, messageID, setCoordsY, userMessageLastWatched, selecting, pinnedMessageHandler, pinnedMessageScreen, listOfPinnedMessages, navigation, users }:MessageItemProps) => {
  const messageViewHandle = ({message}:messageViewHandleProps) => {
    if(message.messageType == EMessageType.text && message.messageResponseId && listOfMessages.findIndex(m => m.messageId === message.messageResponseId) >= 0) {
      return <ReplyTextTypeUsingClass
        navigation={navigation}
        key={message.messageId} 
        messages={listOfMessages} 
        message={message} 
        setMessageMenuVisible={setMessageMenuVisible} 
        id={message.messageId!} 
        flatList={flatListRef!}
        author={author}
        userName={users?users[0]?.name:''}
        userMessageLastWatched={userMessageLastWatched}
        selecting={selecting}
        pinnedMessageScreen={pinnedMessageScreen}
        listOfPinnedMessages={listOfPinnedMessages}
      />;
    }
    else if(message.messageType == EMessageType.text) {
      return <DefaultTextTypeUsingClass
        navigation={navigation}
        key={message.messageId} 
        message={message}
        messages={listOfMessages}
        setMessageMenuVisible={setMessageMenuVisible} 
        id={message.messageId!} 
        flatList={flatListRef!}
        author={author}
        userMessageLastWatched={userMessageLastWatched}
        selecting={selecting}
        pinnedMessageScreen={pinnedMessageScreen}
        listOfPinnedMessages={listOfPinnedMessages}
      />;
    }
  };

  return (
      <View
        key={item.messageId}
        onLayout={(event) => {
          const newCoordsY = [ ...coordsY ];
          const { y, height } = event.nativeEvent.layout;
          newCoordsY[item.messageId!] = [y, height];
          setCoordsY(newCoordsY);
          console.log('y', height);
          if(typeof pinnedMessageHandler === 'function')
            pinnedMessageHandler(item.messageId!, height);
        }}
      >
        {messageViewHandle({ message: item })}
      </View>
    );
  }


export default memo(MessageItem);