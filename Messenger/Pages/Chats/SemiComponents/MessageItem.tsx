import { View } from 'react-native'
import React, { Component, memo } from 'react'
import { EMessageType } from '../../../dao/Models/EMessageType';
import { MessageViewHandleProps } from '../Dialogue/components/interfaces/IDialogueMessages';
import { MessageItemProps } from './Interfaces/IMessageItem';
import DefaultTextTypeUsingClass from './MessageViewAndTypes/DefaultTextType';
import ReplyTextTypeUsingClass from './MessageViewAndTypes/ReplyTextType';

class MessageItem extends Component<MessageItemProps> {

  messageViewHandle = ({message}:MessageViewHandleProps) => {
    if(!message.content) return null;

    const { listOfMessages, setMessageMenuVisible, flatListRef, author, userMessageLastWatched, selecting, pinnedMessageScreen, listOfPinnedMessages, navigation, users } = this.props;

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

  render(): React.ReactNode {
    const { item, coordsY, setCoordsY, pinnedMessageHandler, pinnedMessageScreen } = this.props;

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
        {this.messageViewHandle({ message: item })}
      </View>
    );
  }
}


export default memo(MessageItem);