import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import { DEFAULT_CHARS_PER_LINE, getCustomFontSize, width } from '../ChatConstants';
import { functionalStyles, styles } from './../MessageViewAndTypes/Styles/ReplyFileType';
import ReplyMessage from './HelperComponents/ReplyMessage';
import { wrapText } from './../MessageViewAndTypes/HelperFunctions/wrapText';
import * as SVG from './../SVG';
import { IReplyFileType } from './Interfaces/IReplyFile';

class ReplyFileType extends Component<IReplyFileType> {
  render() {
    const { message, messages, userName, userMessageLastWatched, height, isUser, pinned } = this.props;

    return (
        <View style={styles.replyContainer} >
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
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  { pinned && <SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
                  <Text
                    style={[styles.messageTimeStampNoText, message.content.length > 0 && styles.messageTimeStampText]}
                  >
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