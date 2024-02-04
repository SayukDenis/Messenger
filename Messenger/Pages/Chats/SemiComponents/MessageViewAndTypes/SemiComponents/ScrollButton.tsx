import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForMessages } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import ReplyIcon from '../../SVG/ReplyIcon';
import { Dispatch } from 'redux';

interface ScrollButtonProps { 
  navigation: any;
  dispatch: Dispatch;
  messageId: number;
  isUser: boolean;
}

const GAP = 10;

const ScrollButton = ({ navigation, dispatch, messageId, isUser }: ScrollButtonProps) => {
  return (
    <TouchableOpacity 
      style={{ alignSelf: 'center', marginRight: isUser?GAP:0, marginLeft: !isUser?GAP:0 }}
      activeOpacity={1}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={() => {
        navigation.goBack();
        dispatch(setScrollStateForMessages(true, messageId));
        dispatch(setAnimationOfBackgroundForScrolledMessage(messageId));
      }}
    >
      <ReplyIcon />
    </TouchableOpacity>
  )
}

export default ScrollButton