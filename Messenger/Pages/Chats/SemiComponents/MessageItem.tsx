import { View } from 'react-native'
import React, { Component, memo } from 'react'
import { EMessageType } from '../../../dao/Models/EMessageType';
import { MessageViewHandleProps } from '../Dialogue/components/interfaces/IDialogueMessages';
import { MessageItemProps } from './Interfaces/IMessageItem';
import DefaultTextType from './MessageViewAndTypes/DefaultTextType';
import ReplyTextTypeUsingClass from './MessageViewAndTypes/ReplyTextType';
import DefaultFileType from './MessageViewAndTypes/DefaultFileType';

class MessageItem extends Component<MessageItemProps> {

  messageViewHandle = ({message}:MessageViewHandleProps) => {
    if(!message.content) return null;

    const { listOfMessages, setMessageMenuVisible, flatListRef, author, userMessageLastWatched, selecting, pinnedMessageScreen, listOfPinnedMessages, navigation, users } = this.props;

    if(message.messageType === EMessageType.text && message?.messageResponseId! >= 0 && listOfMessages.findIndex(m => m.messageId === message.messageResponseId && m.content) >= 0) {
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
    else if(message.messageType === EMessageType.text) {
      return <DefaultTextType
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
    } else if(message.messageType === EMessageType.img) {
      // console.log('render img');
      return <DefaultFileType 
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
      />
    }
  };

  render(): React.ReactNode {
    const { item, coordsY, pinnedMessageHandler, pinnedMessageScreen } = this.props;

    return (
      <View
        key={item.messageId}
        onLayout={(event) => {
          const { y, height } = event.nativeEvent.layout;
          if(pinnedMessageScreen) {
            coordsY?.push({ id: item.messageId!, y, height } as any);
          }
          if(typeof pinnedMessageHandler === 'function')
            pinnedMessageHandler(item.messageId!, height);

          console.log('id', item.messageId)
        }}
      >
        {this.messageViewHandle({ message: item })}
      </View>
    );
  }
}


export default memo(MessageItem);