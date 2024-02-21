import { View } from 'react-native'
import React, { memo } from 'react'
import { EMessageType } from '../../../dao/Models/EMessageType';
import { messageViewHandleProps } from '../Dialogue/components/interfaces/IDialogueMessages';
import { MessageItemProps } from './Interfaces/IMessageItem';
import DefaultTextTypeUsingClass from './MessageViewAndTypes/DefaultTextType';
import ReplyTextTypeUsingClass from './MessageViewAndTypes/ReplyTextType';

const MessageItem = ({ item, listOfMessages, setMessageMenuVisible, flatListRef, coordsY, author, messageID, setCoordsY, userMessageLastWatched, selecting, pinnedMessageHandler, pinnedMessageScreen, listOfPinnedMessages, navigation, users }:MessageItemProps) => {  
  const messageViewHandle = ({message}:messageViewHandleProps) => {
    if(!message.content) return null;

    if(message.messageType == EMessageType.text && message.messageResponseId && listOfMessages.findIndex(m => m.messageId === message.messageResponseId && m.content) >= 0) {
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
          const { y, height } = event.nativeEvent.layout;
          const newCoordsY = [ ...coordsY ];
          if(pinnedMessageScreen) {
            coordsY.push({ id: item.messageId!, y, height } as any);
          } else {
            newCoordsY[item.messageId!] = [y, height];
            setCoordsY(newCoordsY);
          }
          if(typeof pinnedMessageHandler === 'function')
            pinnedMessageHandler(item.messageId!, height);

          console.log('id', item.messageId)
        }}
      >
        {messageViewHandle({ message: item })}
      </View>
    );
  }


export default memo(MessageItem);