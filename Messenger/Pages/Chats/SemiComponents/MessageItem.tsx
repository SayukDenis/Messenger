import { View } from 'react-native'
import React, { Component, memo } from 'react'
import { EMessageType } from '../../../dao/Models/EMessageType';
import { MessageViewHandleProps } from '../Dialogue/components/interfaces/IDialogueMessages';
import { MessageItemProps } from './Interfaces/IMessageItem';
import TextTypeCreator from './MessageViewAndTypes/TextTypeCreator';
import FileTypeCreator from './MessageViewAndTypes/FileTypeCreator';

class MessageItem extends Component<MessageItemProps> {

  public static TextFactory = new TextTypeCreator();
  public static FileFactory = new FileTypeCreator();

  messageViewHandle = ({message}:MessageViewHandleProps) => {
    if(!message.content && message.messageType !== 2) return null;

    const { listOfMessages, setMessageMenuVisible, flatListRef, author, userMessageLastWatched, selecting, pinnedMessageScreen, listOfPinnedMessages, navigation, users, photoPreview } = this.props;

    const replyMessage = listOfMessages.find(m => m.messageId === message.messageResponseId);
    const userName = replyMessage?.author.userId === userMessageLastWatched?.userId ? users[0].name : 'You';

    if(message.messageType === EMessageType.text && message?.messageResponseId! >= 0 && listOfMessages.findIndex(m => m.messageId === message.messageResponseId && (m.content || m.fileContent)) >= 0) {
      return MessageItem.TextFactory.ReplyType({ 
        navigation, 
        messages: listOfMessages,
        message,
        setMessageMenuVisible,
        id: message.messageId!,
        flatList: flatListRef!,
        author,
        userName,
        userMessageLastWatched,
        selecting,
        pinnedMessageScreen,
        listOfPinnedMessages
      });
    } else if(message.messageType === EMessageType.text) {
      return MessageItem.TextFactory.DefaultType({
        navigation,
        message,
        messages: listOfMessages,
        setMessageMenuVisible,
        id: message.messageId!, 
        flatList: flatListRef!,
        author,
        userMessageLastWatched,
        selecting,
        pinnedMessageScreen,
        listOfPinnedMessages
      });
    } else if(message.messageType === EMessageType.img && message?.messageResponseId! >= 0 && listOfMessages.findIndex(m => m.messageId === message.messageResponseId && (m.content || m.fileContent)) >= 0) {
      return MessageItem.FileFactory.ReplyType({
        navigation,
        messages: listOfMessages, 
        message,
        setMessageMenuVisible, 
        id: message.messageId!, 
        flatList: flatListRef!,
        author,
        userName,
        userMessageLastWatched,
        selecting,
        pinnedMessageScreen,
        listOfPinnedMessages,
        photoPreview
      });
    } else if(message.messageType === EMessageType.img) {
      return MessageItem.FileFactory.DefaultType({
        navigation,
        message,
        messages: listOfMessages,
        setMessageMenuVisible, 
        id: message.messageId!, 
        flatList: flatListRef!,
        author,
        userMessageLastWatched,
        selecting,
        pinnedMessageScreen,
        listOfPinnedMessages,
        photoPreview
      });
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