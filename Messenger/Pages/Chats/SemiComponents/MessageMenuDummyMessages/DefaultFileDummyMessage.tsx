import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import { DEFAULT_CHARS_PER_LINE, getCustomFontSize, screenHeight, screenWidth, width } from '../ChatConstants';
import { styles, functionalStyles } from './../MessageViewAndTypes/Styles/DefaultFileType';
import { wrapText } from './../MessageViewAndTypes/HelperFunctions/wrapText';
import * as SVG from './../SVG';
import { IDefaultFile } from './Interfaces/IDefaultFile';

class DefaultFileType extends Component<IDefaultFile> {
  render() {
    const { message, userMessageLastWatched, height, isUser, pinned } = this.props;

    return (
        <View style={styles.mainContainer}>
          <View style={[styles.messageBlockContainer, isUser && { justifyContent: 'flex-end' }]}>
            <View style={styles.messageContainer}>
              <View style={[styles.message, { height: height }]}>
                <View style={functionalStyles.backgroundWithShadeEffect(true, true, isUser)} />
                <View>
                  <Image source={{ uri: 'data:image/png;base64,' + message?.fileContent }} style={{ width: 250, height: 250, borderRadius: 9 }} />
                </View>
                { message?.content &&
                  <Text style={{ fontSize: getCustomFontSize(14), maxWidth: width * 0.6, paddingHorizontal: 5 }}>
                    {wrapText(message.content, DEFAULT_CHARS_PER_LINE)}
                  </Text>
                }
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  { pinned && <SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/> }
                  <Text
                    style={[styles.messageTimeStampNoText, message?.content.length! > 0 && styles.messageTimeStampText]}
                  >
                    {message?.isEdited ? 'edited ' : ''}
                    {message?.sendingTime.getHours().toString().padStart(2, '0')}:
                    {message?.sendingTime.getMinutes().toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
            </View>
            {isUser && (
              <View style={styles.messageViewStatus}>
                { message?.sent ? (message.messageId! <= (userMessageLastWatched?.messageId || 0) ? (
                  <SVG.MessageItemStatusMessageReviewed />
                ) : (
                  <SVG.MessageItemStatusMessageNotReviewed />
                )) :
                  <SVG.MessageItemStatusSending />
                }
              </View>
            )}
          </View>
        </View>
    )
  }
}

export default DefaultFileType;