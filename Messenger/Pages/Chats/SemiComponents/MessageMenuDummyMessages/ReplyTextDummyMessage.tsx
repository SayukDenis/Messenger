import { View, Text } from 'react-native';
import { functionalStyles, styles } from '../MessageViewAndTypes/Styles/ReplyTextType';
import React, { Component } from 'react';
import { wrapText } from '../MessageViewAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ReplyTextType } from './Interfaces/IReplyText';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, width } from '../ChatConstants';
import LineSeparator from '../HelperComponents/General/LineSeparator';
import * as SVG from './../SVG';
import ReplyMessage from './HelperComponents/ReplyMessage';

class ReplyTextDummyMessage extends Component<ReplyTextType> {
  render(): React.ReactNode {
    const { messages, message, isUser, height, userMessageLastWatched, pinned, fullHeight, userName } = this.props;
    const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

    let text = '';
    replyMessage?.content.split('\n').forEach(m => text += `${m.trim()} `);
    text.trimEnd();

    return (
      <View style={[styles.swipeableContainer, { height: fullHeight }]} >
        <View style={styles.replyContainer} >
          <View style={styles.innerReplyContainer} >
            <ReplyMessage 
              message={message}
              replyMessage={messages.find(m => m.messageId === message.messageResponseId)!}
              userName={userName}
              isUser={isUser}
            />
            <View style={{ alignSelf: isUser?'flex-end':'flex-start', flexDirection: 'row' }} >
              <View 
                style={[functionalStyles.messageContainer(isUser, message.content.length), { height: height }]}
              >
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
                <Text style={{ fontSize: DEFAULT_FONT_SIZE, maxWidth: width * 0.6 }}>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  {pinned&&<SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
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
              { message.messageId! <= userMessageLastWatched?.messageId! ? 
                <SVG.MessageItemStatusMessageReviewed /> : 
                <SVG.MessageItemStatusMessageNotReviewed /> 
              }
            </View> }
        </View>
      </View>
    );
  }
}

export default ReplyTextDummyMessage;