import { View, Text } from 'react-native';
import { functionalStyles, styles } from '../MessageViewAndTypes/Styles/ReplyTextType';
import React, { Component } from 'react';
import { wrapText } from '../MessageViewAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ReplyTextType } from './Interfaces/IReplyText';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, width } from '../ChatConstants';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import PinButton from '../SVG/PinButton';
import LineSeparator from '../HelperComponents/General/LineSeparator';

class ReplyTextDummyMessage extends Component<ReplyTextType> {
  render(): React.ReactNode {
    const { messages, message, isUser, height, userMessageLastWatched, pinned, userName } = this.props;
    const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

    let text = '';
    replyMessage?.content.split('\n').forEach(m => text += `${m.trim()} `);
    text.trimEnd();

    return (
      <View style={styles.replyContainer} >
        <View style={styles.innerReplyContainer} >
          <Text style={[styles.replyUserNameFont, isUser&&{ alignSelf: 'flex-end' }]}>
            {isUser?'You':userName /* Replace with data from DB */}
          </Text>
          <View style={[styles.replyMessageContainer, !isUser&&{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }]}>
            <View>
              <View style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content?.length>=DEFAULT_CHARS_PER_LINE?text.slice(0,DEFAULT_CHARS_PER_LINE)+'...':replyMessage?.content}
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
              <Text style={{ fontSize: DEFAULT_FONT_SIZE, maxWidth: width * 0.6 }}>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
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
    );
  }
}

export default ReplyTextDummyMessage;