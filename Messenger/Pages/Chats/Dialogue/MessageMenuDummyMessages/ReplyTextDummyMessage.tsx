import { View, Text } from 'react-native';
import { styles } from './../MessageViewsAndTypes/Styles/ReplyTextType';
import React from 'react';
import { wrapText } from './../MessageViewsAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ReplyTextType } from './Interfaces/IReplyText';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE } from '../../SemiComponents/ChatConstants';
import MessageItemStatusMessageNotReviewed from '../../SemiComponents/SVG/MessageItemStatusMessageNotReviewed';
import MessageItemStatusMessageReviewed from '../../SemiComponents/SVG/MessageItemStatusMessageReviewed';

const ReplyTextDummyMessage = ({messages, message, isUser, height, userMessageLastWatched}:ReplyTextType) => {
  const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

  return (
      <View style={styles.replyContainer} >
        <View style={styles.innerReplyContainer} >
          <Text style={[styles.replyUserNameFont, isUser&&{ alignSelf: 'flex-end' }]}>
            {isUser?'You':'Denis'}
          </Text>
          {isUser?
          <View style={styles.replyMessageContainer}>
            <View>
              <View style={[styles.messageTypeTextUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:'#E09EFF' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content?.length>=DEFAULT_CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,DEFAULT_CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </View>
            <View style={styles.replyMessageLine}/>
          </View>
          :
          <View style={styles.replyMessageContainer}>
            <View style={styles.replyMessageLine}/>
            <View style={{ flex:1 }} >
              <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:'#fff' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content.length>=DEFAULT_CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,DEFAULT_CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </View>
          </View>}
          <View >
            <View 
              style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginTop:Math.ceil(DEFAULT_FONT_SIZE)+1}, message?.content.length>DEFAULT_CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden', height: height }]}
            >
              <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
              <Text>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
              <Text style={message?.content.length>DEFAULT_CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.isEdited?'edited ':''}
                {new Date(message.sendingTime).getHours().toString().padStart(2, '0')}:
                {new Date(message.sendingTime).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
        </View>
        { isUser && 
          <View style={{ position: 'absolute', right: 0, bottom: 5 , marginRight: -2.5 }}>
            { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
          </View> }
      </View>
)};

export default ReplyTextDummyMessage;