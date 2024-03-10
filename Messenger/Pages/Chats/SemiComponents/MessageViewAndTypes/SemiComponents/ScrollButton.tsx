import { TouchableOpacity } from 'react-native'
import React from 'react'
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import ReplyIcon from '../../SVG/ReplyIcon';
import { Dispatch } from 'redux';

interface ScrollButtonProps { 
  navigation: any;
  dispatch: Dispatch;
  messageId: number;
  isUser: boolean;
  additionalGap?: number;
}

const GAP = 10;

const ScrollButton = ({ navigation, dispatch, messageId, isUser, additionalGap = 0 }: ScrollButtonProps) => {
  return (
    <TouchableOpacity 
      style={{ alignSelf: 'center', marginRight: isUser?(GAP+additionalGap):0, marginLeft: !isUser?(GAP+additionalGap):0 }}
      activeOpacity={1}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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