import { View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import { DEFAULT_CHARS_PER_LINE } from '../../ChatConstants';
import { styles } from '../Styles/ReplyTextType';
import LineSeparator from '../../HelperComponents/General/LineSeparator';
import { ReplyMessageProps } from './Interfaces/IReplyMessage';

class ReplyMessage extends PureComponent<ReplyMessageProps> {
  isUser = this.props.message.author.userId == this.props.author.userId;
  render(): React.ReactNode {
    return (
      <View 
        onLayout={(event) => this.props.onLayout(event)}
        style={[styles.replyMessageContainer, !this.isUser&&{ alignSelf: 'flex-start' }]}
      >
        { !this.isUser&&<LineSeparator height={'175%'} color='blue' /> }
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={(event) => { 
            if(!this.props.pinnedMessageScreen)
              this.props.handleLinkTo(this.props.message!.messageResponseId!);
            else
              this.props.handleLinkTo(event);
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
        >
          <View style={[this.isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
            <View style={[styles.replyMessageBackground, { opacity: this.props.selecting&&this.props.selected?1:0.4, backgroundColor: this.isUser?'#E09EFF':'#fff' }]} /> 
            <Text style={styles.replyMessageFont}>
              {this.props.replyMessage != undefined && this.props.replyMessage?.content?.length >= DEFAULT_CHARS_PER_LINE ? this.props.replyMessage?.content.replace('\n', '').slice(0, DEFAULT_CHARS_PER_LINE) + '...' : this.props.replyMessage?.content}
            </Text>
          </View>
        </TouchableOpacity>
        { this.isUser&&<LineSeparator height={'175%'} color='blue' /> }
      </View>
    )
  }
}

export default ReplyMessage;