import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { DEFAULT_CHARS_PER_LINE, FONT_SCALE } from '../../ChatConstants';
import DialogueMessagesPinnedMessageIcon from '../../SVG/DialogueMessagesPinnedMessageIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import LineSeparator from '../General/LineSeparator';
import { styles } from './Styles/PinnedMessageView';
import { PinnedMessageViewProps } from './Interfaces/IPinnedMessageView';

class PinnedMessageView extends Component<PinnedMessageViewProps> {

  shouldComponentUpdate(nextProps: Readonly<PinnedMessageViewProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('shouldComponentUpdate total:', this.props.total);
    if(this.props.pinnedMessage.messageId !== nextProps.pinnedMessage.messageId) {
      return true;
    } else if(this.props.pinnedMessage.content !== nextProps.pinnedMessage.content) {
      return true;
    } else if(this.props.total !== nextProps.total) {
      return true;
    } else if(this.props.current !== nextProps.current) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps: Readonly<PinnedMessageViewProps>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('PinnedMessageView updated');
  }
  
  scrollToPinedMessage = () => {
    const { pinnedMessage, dispatch } = this.props;
    dispatch(setScrollStateForPinnedMessage(true, pinnedMessage?.messageId!));
    dispatch(setAnimationOfBackgroundForScrolledMessage(pinnedMessage?.messageId!));
  }

  render(): React.ReactNode {
    const { pinnedMessage, total, current, propsForPinnedMessageScreen } = this.props;

    console.log(total);
    if(total <= 0) return null;

    return (
      <View style={styles.mainContainer}>
        <LinearGradient
            colors={["#cf9b95", "#c98bb8", "#c37adb"]}
            locations={[0.25, 0.5, 0.75]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
          <TouchableOpacity 
            activeOpacity={1}
            onPress={this.scrollToPinedMessage}
            style={styles.container}
          >
            <Text>Pinned message: {pinnedMessage?.content?.length>DEFAULT_CHARS_PER_LINE?pinnedMessage?.content.slice(0,DEFAULT_CHARS_PER_LINE*0.55/FONT_SCALE).trim()+'...':pinnedMessage?.content}</Text>
            <View style={{ flexDirection: 'row' }}>
              { total>1&&
                <View style={styles.trackCurrentAndTotal}>
                  <Text>{current}</Text>
                  <LineSeparator width={1.4} height={'100%'} color='black' marginHorizontal={5} />
                  <Text>{total}</Text>
                </View>
              }
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => propsForPinnedMessageScreen.navigation.navigate('PinnedMessages', propsForPinnedMessageScreen)}
              >
                <DialogueMessagesPinnedMessageIcon />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default PinnedMessageView;