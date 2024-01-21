import { View, Text } from 'react-native';
import { styles } from './../MessageViewsAndTypes/Styles/DefaultTextType';
import React from 'react';
import { wrapText } from './../MessageViewsAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { DefaultTextMessageProps } from './Interfaces/IDefaultText';
import { CHARS_PER_LINE } from '../DialogueConstants';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
const DefaultTextDummyMessage = ({ message, isUser, height, userMessageLastWatched}:DefaultTextMessageProps) => {
  if(!message) return null;
  return (
    <View style={[styles.messageBlockContainer, isUser&&{ justifyContent:'flex-end' }]}>
      <View style={[styles.messageContainer, isUser&&{ marginRight: 15 }]}>
        <View 
          style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, message.content.length>CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden' }]}
        >
          <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
          <Text style={{ height: Math.floor(height-11)-(message.content.length>CHARS_PER_LINE?9.3:0) }}>{wrapText(message.content, CHARS_PER_LINE)}</Text>
          <Text style={message.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
            {message.isEdited?'edited ':''}
            {message.sendingTime.getHours().toString().padStart(2, '0')}:
            {message.sendingTime.getMinutes().toString().padStart(2, '0')}
          </Text>
          {/* Add 'watched' indicator */}
        </View> 
      </View>
      { isUser && 
      <View style={{ position: 'absolute', right: 0, bottom: 0 ,marginRight: 2.5 }}>
        { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
      </View> }
    </View>
  );
};

export default DefaultTextDummyMessage;