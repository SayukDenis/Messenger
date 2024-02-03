import { View, Text } from 'react-native';
import { functionalStyles, styles } from '../MessageViewAndTypes/Styles/ReplyTextType';
import React from 'react';
import { wrapText } from '../MessageViewAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ReplyTextType } from './Interfaces/IReplyText';
import { DEFAULT_CHARS_PER_LINE } from '../ChatConstants';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import PinButton from '../SVG/PinButton';
import LineSeparator from '../HelperComponents/General/LineSeparator';

const ReplyTextDummyMessage = ({messages, message, isUser, height, userMessageLastWatched, pinned}:ReplyTextType) => {
  const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

  return (
      <View style={styles.replyContainer} >
        <View style={styles.innerReplyContainer} >
          <Text style={[styles.replyUserNameFont, isUser&&{ alignSelf: 'flex-end' }]}>
            {isUser?'You':'Denis' /* Replace with data from DB */}
          </Text>
          <View style={[styles.replyMessageContainer, !isUser&&{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }]}>
            <View>
              <View style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content?.length>=DEFAULT_CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,DEFAULT_CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </View>
            <LineSeparator color='blue' height={'175%'} />
          </View>
          <View >
            <View 
              style={[functionalStyles.messageContainer(isUser, message.content.length), { height: height }]}
            >
              <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
              <Text>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
              <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                {pinned&&<PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
                <Text
                  style={
                    message.content.length > DEFAULT_CHARS_PER_LINE
                      ? [styles.messageTimeStamp, styles.longMessageTimeStamp]
                      : styles.messageTimeStamp
                  }
                >
                  {message.isEdited ? 'edited ' : ''}
                  {message.sendingTime.getHours().toString().padStart(2, '0')}:
                  {message.sendingTime.getMinutes().toString().padStart(2, '0')}
                </Text>
              </View>
            </View>
          </View>
        </View>
        { isUser && 
          <View style={styles.messageViewStatus}>
            { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
          </View> }
      </View>
)};

export default ReplyTextDummyMessage;