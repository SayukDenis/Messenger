import { View, Text } from 'react-native';
import { styles } from '../MessageViewAndTypes/Styles/DefaultTextType';
import React, { Component } from 'react';
import { wrapText } from '../MessageViewAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import { DefaultTextMessageProps } from './Interfaces/IDefaultText';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, width } from '../ChatConstants';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import PinButton from '../SVG/PinButton';

class DefaultTextDummyMessage extends Component<DefaultTextMessageProps> {
  render(): React.ReactNode {
    const { message, isUser, height, userMessageLastWatched, pinned } = this.props;
    if(!message) return null;

    return (
      <View style={styles.mainContainer}>
        <View style={[styles.messageBlockContainer, isUser&&{ justifyContent:'flex-end' }]}>
          <View style={[styles.messageContainer, isUser&&{ marginRight: 15 - 5 /* Find out why I need to subtract 5 here */ }]}>
            <View 
              style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, message.content.length>DEFAULT_CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden', height: height }]}
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
          { isUser && 
          <View style={styles.messageViewStatus}>
            { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
          </View> }
        </View>
      </View>
    );
  }
}

export default DefaultTextDummyMessage;