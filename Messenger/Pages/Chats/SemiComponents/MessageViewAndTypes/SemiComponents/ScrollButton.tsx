import { TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import * as SVG from '../../SVG';
import { ScrollButtonProps } from './Interfaces/IScrollButton';
import { screenHeight } from '../../ChatConstants';

const GAP = 10;

class ScrollButton extends Component<ScrollButtonProps> {
  render(): React.ReactNode {
    const { navigation, dispatch, messageId, verticalOffset, isUser, horizontalOffset } = this.props;

    const ICON_SIZE = screenHeight*0.032

    return (
      <TouchableOpacity 
        style={[
          { alignSelf: 'center', position: 'absolute' }, 
          isUser?{left: -(GAP+horizontalOffset+ICON_SIZE)}:{right: (horizontalOffset - GAP)},
          { bottom: isUser ? (verticalOffset - ICON_SIZE) / 2 : verticalOffset / 2 }
        ]}
        activeOpacity={1}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={() => {
          navigation.goBack();
          dispatch(setScrollStateForPinnedMessage(true, messageId));
          dispatch(setAnimationOfBackgroundForScrolledMessage(messageId));
        }}
      >
        <SVG.ReplyIcon size={ICON_SIZE} />
      </TouchableOpacity>
    )
  }
}

export default ScrollButton;