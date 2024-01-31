import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import ReplyIcon from '../../../SemiComponents/SVG/ReplyIcon';
import { Dispatch } from 'redux';

interface ScrollButtonProps { 
  navigation: any;
  dispatch: Dispatch;
  messageId: number;
  isUser: boolean;
}

const ScrollButton = ({ navigation, dispatch, messageId, isUser }: ScrollButtonProps) => {
  return (
    <TouchableOpacity 
      style={{ alignSelf: 'center', marginRight: isUser?10:0, marginLeft: !isUser?10:0, backgroundColor: 'blue' }}
      activeOpacity={1}
      onPress={() => {
        navigation.goBack();
        dispatch(setScrollStateForPinnedMessage(true, messageId));
        dispatch(setAnimationOfBackgroundForScrolledMessage(messageId));
      }}
    >
      <ReplyIcon />
    </TouchableOpacity>
  )
}

export default ScrollButton