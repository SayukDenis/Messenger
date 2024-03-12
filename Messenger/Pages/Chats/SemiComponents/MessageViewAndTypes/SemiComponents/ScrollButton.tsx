import { TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import ReplyIcon from '../../SVG/ReplyIcon';
import { ScrollButtonProps } from './Interfaces/IScrollButton';

const GAP = 10;

class ScrollButton extends Component<ScrollButtonProps> {
  render(): React.ReactNode {
    const { navigation, dispatch, messageId, isUser, additionalGap = 0 } = this.props;

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
}

export default ScrollButton;