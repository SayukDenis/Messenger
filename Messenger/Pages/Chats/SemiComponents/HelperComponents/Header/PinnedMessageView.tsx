import { View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ChatConstants } from '../../ChatConstants';
import * as SVG from '../../SVG';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setAnimationOfBackgroundForScrolledMessage, setScrollStateForPinnedMessage } from '../../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import LineSeparator from '../General/LineSeparator';
import { styles } from './Styles/PinnedMessageView';
import { PinnedMessageViewProps } from './Interfaces/IPinnedMessageView';

const { DEFAULT_CHARS_PER_LINE, getCustomFontSize, height, width } = ChatConstants.getInstance();

class PinnedMessageView extends Component<PinnedMessageViewProps> {

  shouldComponentUpdate(nextProps: Readonly<PinnedMessageViewProps>, nextState: Readonly<{}>, nextContext: any): boolean {
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
  
  scrollToPinedMessage = () => {
    const { pinnedMessage, dispatch } = this.props;
    dispatch(setScrollStateForPinnedMessage(true, pinnedMessage?.messageId!));
    dispatch(setAnimationOfBackgroundForScrolledMessage(pinnedMessage?.messageId!));
  }

  render(): React.ReactNode {
    const { pinnedMessage, total, current, propsForPinnedMessageScreen } = this.props;

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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: getCustomFontSize(14) }}>Pinned message: </Text>
              { pinnedMessage.fileContent && 
                <Image source={{ uri: 'data:image/png;base64,' + pinnedMessage.fileContent }} style={{ width: height * 0.03, height: height * 0.03, marginRight: 5 }} /> 
              }
              <Text
                style={{ fontSize: getCustomFontSize(14), maxWidth: width * 0.3 }}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {`${pinnedMessage?.content?.length>DEFAULT_CHARS_PER_LINE?pinnedMessage?.content.trim()+'...':pinnedMessage?.content}`}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              { total>1&&
                <View style={styles.trackCurrentAndTotal}>
                  <Text style={{ fontSize: getCustomFontSize(14) }}>{current}</Text>
                  <LineSeparator width={1.4} height={'100%'} color='black' marginHorizontal={5} />
                  <Text style={{ fontSize: getCustomFontSize(14) }}>{total}</Text>
                </View>
              }
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => propsForPinnedMessageScreen.navigation.navigate('PinnedMessages', propsForPinnedMessageScreen)}
              >
                <SVG.DialogueMessagesPinnedMessageIcon />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default PinnedMessageView;