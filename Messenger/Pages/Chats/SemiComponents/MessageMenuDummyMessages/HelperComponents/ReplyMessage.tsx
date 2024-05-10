import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { DEFAULT_CHARS_PER_LINE, height } from '../../ChatConstants';
import { styles } from '../../MessageViewAndTypes/Styles/ReplyTextType';
import LineSeparator from '../../HelperComponents/General/LineSeparator';
import { MessageProps } from '../../Interfaces/GeneralInterfaces/IMessage';

interface ReplyMessageProps {
  message: MessageProps;
  replyMessage: MessageProps;
  userName: string;
  isUser: boolean;
}

class ReplyMessage extends Component<ReplyMessageProps> {
  render(): React.ReactNode {
    const { message, replyMessage, isUser, userName } = this.props;

    let text = '';
    replyMessage?.content.split('\n').forEach(m => text += `${m.trim()} `);
    text.trimEnd();

    return (
      <View>
        <Text style={[styles.replyUserNameFont, isUser && { alignSelf: 'flex-end' }]}>
          { replyMessage.author.name === userName ? 'You' : replyMessage.author.name }
        </Text>
        <View style={[styles.replyMessageContainer, !isUser && { alignSelf: 'flex-start' }]}
        >
          { !isUser && <LineSeparator height={'100%'} color='blue' /> }
          <View>
            <View style={[isUser ? styles.messageTypeTextUser : styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
              <View style={[styles.replyMessageBackground, { backgroundColor: isUser ? '#E09EFF' : '#fff' }]} /> 
              { replyMessage.fileContent && 
                <Image source={{ uri: 'data:image/png;base64,' + replyMessage.fileContent }} style={{ width: height * 0.015, height: height * 0.015, marginRight: 5 }} /> 
              }
              <Text style={styles.replyMessageFont}>
                {replyMessage != undefined && replyMessage?.content?.length >= DEFAULT_CHARS_PER_LINE ? text.slice(0, DEFAULT_CHARS_PER_LINE) + '...' : replyMessage?.content}
              </Text>
            </View>
          </View>
          { isUser && <LineSeparator height={'100%'} color='blue' /> }
        </View>
      </View>
    )
  }
}

export default ReplyMessage;