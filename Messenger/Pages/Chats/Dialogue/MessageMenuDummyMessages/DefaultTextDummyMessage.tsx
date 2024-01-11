import { View, Text, Dimensions } from 'react-native';
import { styles } from './../MessageViewsAndTypes/Styles/DefaultTextType';
import React from 'react';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './../MessageViewsAndTypes/HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';

const {width, height} = Dimensions.get('window');

interface DefaultTextMessageProps {
  message:MessageProps|undefined;
  id:number|undefined;
  isUser: boolean;
}

const FONT_SIZE = 10;
const CHARS_PER_LINE = Math.round(height*0.5 / FONT_SIZE);
const DefaultTextDummyMessage = ({ message, id, isUser}:DefaultTextMessageProps) => {
  if(!message) return null;
  return (
    <View style={[styles.messageBlockContainer, isUser&&{ justifyContent:'flex-end' }]}>
      <View style={styles.messageContainer}>
        <View 
          style={[isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, message.content.length>CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden' }]}
        >
          <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 1, backgroundColor:isUser?'#E09EFF':'#fff' }} /> 
          <Text style={message.content.length<=CHARS_PER_LINE&&{ height: 16 }}>{wrapText(message.content, CHARS_PER_LINE)}</Text>
          <Text style={message.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
            {message.isEdited?'edited ':''}
            {message.sendingTime.getHours().toString().padStart(2, '0')}:
            {message.sendingTime.getMinutes().toString().padStart(2, '0')}
          </Text>
          {/* Add 'watched' indicator */}
        </View> 
      </View>
    </View>
  );
};

export default DefaultTextDummyMessage;