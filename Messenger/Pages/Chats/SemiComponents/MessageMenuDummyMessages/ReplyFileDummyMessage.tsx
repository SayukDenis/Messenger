import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import { ChatConstants } from '../ChatConstants';
import { functionalStyles, styles } from './../MessageViewAndTypes/Styles/ReplyFileType';
import ReplyMessage from './HelperComponents/ReplyMessage';
import { wrapText } from './../MessageViewAndTypes/HelperFunctions/wrapText';
import * as SVG from './../SVG';
import { IReplyFileType } from './Interfaces/IReplyFile';

const { DEFAULT_CHARS_PER_LINE, getCustomFontSize, width } = ChatConstants.getInstance();

class ReplyFileType extends Component<IReplyFileType> {
  render() {
    const { message, messages, userMessageLastWatched, fullHeight, isUser, pinned, userName } = this.props;

    return (
        <View style={[styles.replyContainer, { height: fullHeight }]} >
          <View style={styles.innerReplyContainer}>
            <ReplyMessage 
              message={message}
              replyMessage={messages.find(m => m.messageId === message.messageResponseId)!}
              userName={userName}
              isUser={isUser}
            />
            <View style={{ alignSelf: isUser?'flex-end':'flex-start', flexDirection: 'row' }}>
              <View style={functionalStyles.messageContainer(isUser, message.content.length)}>
                <View style={functionalStyles.backgroundWithShadeEffect(true, true, isUser)} />
                <Image source={{ uri: 'data:image/png;base64,' + message.fileContent }} style={{ width: 250, height: 250, borderRadius: 9 }} />
                { message.content &&
                  <Text style={{ fontSize: getCustomFontSize(14), maxWidth: width * 0.6, paddingHorizontal: 5 }}>
                    {wrapText(message.content, DEFAULT_CHARS_PER_LINE)}
                  </Text>
                }
                <View style={[styles.messageTimeStampNoText, message.content.length > 0 && styles.messageTimeStampText]}>
                  { pinned && 
                    <SVG.PinButton
                      color={message.content.length > 0 ? '#000' : '#fff'} 
                      style={styles.messageInfoContainer} 
                      size={screenHeight*0.014}
                    />
                  }
                  <Text style={[styles.messageTimeStampFontStylesNoText, message.content.length > 0 && styles.messageTimeStampFontStylesText]}>
                    {message.isEdited ? 'edited ' : ''}
                    {message.sendingTime.getHours().toString().padStart(2, '0')}:
                    {message.sendingTime.getMinutes().toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {isUser && (
            <View style={styles.messageViewStatus}>
              { message.sent ? (message.messageId! <= (userMessageLastWatched?.messageId || 0) ? (
                <SVG.MessageItemStatusMessageReviewed />
              ) : (
                <SVG.MessageItemStatusMessageNotReviewed />
              )) :
                <SVG.MessageItemStatusSending />
              }
            </View>
          )}
        </View>
    );
  }
}

export default ReplyFileType;