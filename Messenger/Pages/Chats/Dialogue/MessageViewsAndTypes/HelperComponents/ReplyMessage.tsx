import { View, Text, TouchableOpacity } from 'react-native';
import React, { PureComponent } from 'react';
import { MessageProps } from '../../GeneralInterfaces/IMessage';
import User from '../../../../../dao/Models/User';
import { DEFAULT_CHARS_PER_LINE } from '../../../SemiComponents/ChatConstants';
import { styles } from '../Styles/ReplyTextType';

interface ReplyMessageProps {
  message: MessageProps;
  replyMessage: MessageProps;
  author: User;
  selecting: boolean;
  selected: boolean;
  handleLinkTo: (messageID: number) => void;
}

class ReplyMessage extends PureComponent<ReplyMessageProps> {
  isUser = this.props.message.author.userId == this.props.author.userId;
  render(): React.ReactNode {
    return (
      <View 
        onLayout={(event) => this.setState({ widthOfReply: event.nativeEvent.layout.width })}
        style={[styles.replyMessageContainer, !this.isUser&&{ alignSelf: 'flex-start' }]}
      >
        { !this.isUser&&<View style={styles.replyMessageLine}/> }
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={() => { this.props.handleLinkTo(this.props.message!.messageResponseId!) }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
        >
          <View style={[this.isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
            <View style={[styles.replyMessageBackground, { opacity: this.props.selecting&&this.props.selected?1:0.4, backgroundColor: this.isUser?'#E09EFF':'#fff' }]} /> 
            <Text style={styles.replyMessageFont}>
              {this.props.replyMessage != undefined && this.props.replyMessage?.content?.length >= DEFAULT_CHARS_PER_LINE ? this.props.replyMessage?.content.replace('\n', '').slice(0, DEFAULT_CHARS_PER_LINE) + '...' : this.props.replyMessage?.content}
            </Text>
          </View>
        </TouchableOpacity>
        { this.isUser&&<View style={styles.replyMessageLine}/> }
      </View>
    )
  }
}

export default ReplyMessage;