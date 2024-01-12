import { View, Text, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import { styles } from './../MessageViewsAndTypes/Styles/ReplyTextType';
import React from 'react';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './../MessageViewsAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';

const { width, height } = Dimensions.get('window');

interface ReplyTextType {
  messages: MessageProps[];
  message: MessageProps;
  isUser: boolean;
  height: number;
}

const FONT_SIZE = 14 * PixelRatio.getFontScale()
const CHARS_PER_LINE = Math.round(height*0.5 / FONT_SIZE);
const ReplyTextDummyMessage = ({messages, message, isUser, height}:ReplyTextType) => {
  const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

  return (
      <View style={styles.replyContainer} >
        <View style={styles.innerReplyContainer} >
          <Text style={[styles.replyUserNameFont, isUser&&{ alignSelf: 'flex-end' }]}>
            {isUser?'You':'Denis'}
          </Text>
          {isUser?
          <View style={styles.replyMessageContainer}>
            <View>
              <View style={[styles.messageTypeTextUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:'#E09EFF' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content?.length>=CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </View>
            <View style={styles.replyMessageLine}/>
          </View>
          :
          <View style={styles.replyMessageContainer}>
            <View style={styles.replyMessageLine}/>
            <View style={{ flex:1 }} >
              <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:'#fff' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content.length>=CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </View>
          </View>}
          <View >
            <View 
              style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginTop:Math.ceil(FONT_SIZE)+1}, message?.content.length>CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden' }]}
            >
              <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
              <Text style={{ height: Math.floor(height-11)-(message.content.length>CHARS_PER_LINE?9.3:0) }}>{wrapText(message.content, CHARS_PER_LINE)}</Text>
              <Text style={message?.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.isEdited?'edited ':''}
                {new Date(message.sendingTime).getHours().toString().padStart(2, '0')}:
                {new Date(message.sendingTime).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
        </View>
      </View>
)};

export default ReplyTextDummyMessage;