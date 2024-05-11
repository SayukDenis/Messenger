import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { PureComponent } from 'react';
import { DEFAULT_CHARS_PER_LINE, height } from '../../ChatConstants';
import { styles } from '../Styles/ReplyTextType';
import LineSeparator from '../../HelperComponents/General/LineSeparator';
import { ReplyMessageProps } from './Interfaces/IReplyMessage';

class ReplyMessage extends PureComponent<ReplyMessageProps> {
  isUser = this.props.message.author.userId == this.props.author.userId;
  render(): React.ReactNode {
    const { handleLinkTo, message, replyMessage, onLayout, pinnedMessageScreen, selected, selecting, author, userName } = this.props;

    let text = '';
    replyMessage?.content.split('\n').forEach(m => text += `${m.trim()} `);
    text.trimEnd();
    console.log('replyMessage', replyMessage.content);

    return (
      <View>
        <Text style={[styles.replyUserNameFont, this.props.message.author.userId === author.userId && { alignSelf: 'flex-end' }]}>
          {userName}
        </Text>
        <View 
          onLayout={(event) => onLayout(event)}
          style={[styles.replyMessageContainer, !this.isUser&&{ alignSelf: 'flex-start' }]}
        >
          { !this.isUser&&<LineSeparator height={'100%'} color='blue' /> }
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={(event) => { 
              if(!pinnedMessageScreen)
                handleLinkTo(message!.messageResponseId!);
              else
                handleLinkTo(event);
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
          >
            <View style={[this.isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
              <View style={[styles.replyMessageBackground, { opacity: selecting&&selected?1:0.4, backgroundColor: this.isUser?'#E09EFF':'#fff' }]} /> 
              { replyMessage.fileContent && 
                <Image source={{ uri: 'data:image/png;base64,' + replyMessage.fileContent }} style={{ width: height * 0.015, height: height * 0.015, marginRight: 5 }} /> 
              }
              <Text style={styles.replyMessageFont}>
                {replyMessage != undefined && replyMessage?.content?.length >= DEFAULT_CHARS_PER_LINE ? text.slice(0, DEFAULT_CHARS_PER_LINE) + '...' : replyMessage?.content}
              </Text>
            </View>
          </TouchableOpacity>
          { this.isUser&&<LineSeparator height={'100%'} color='blue' /> }
        </View>
      </View>
    )
  }
}

export default ReplyMessage;