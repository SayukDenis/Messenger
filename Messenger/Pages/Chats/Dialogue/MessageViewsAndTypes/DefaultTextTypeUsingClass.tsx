import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import {
  decrementNumberOfSelectedMessages,
  incrementNumberOfSelectedMessages,
  resetNumberOfSelectedMessages,
  setAnimationOfBackgroundForScrolledMessage,
  setScrollStateForPinnedMessage,
} from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { styles } from './Styles/DefaultTextType';
import { wrapText } from './HelperFunctions/wrapText';
import ReplyIcon from '../../SemiComponents/SVG/ReplyIcon';
import MessageItemStatusMessageReviewed from '../../SemiComponents/SVG/MessageItemStatusMessageReviewed';
import MessageItemStatusMessageNotReviewed from '../../SemiComponents/SVG/MessageItemStatusMessageNotReviewed';
import { heightOfHeader, screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import User from '../../../../dao/Models/User';
import ILastWatchedMessage from '../../../../dao/Models/Chats/ILastWatchedMessage';
import SelectButton from './SemiComponents/SelectButton';
import { DEFAULT_CHARS_PER_LINE, height, width } from '../../SemiComponents/ChatConstants';
import { Dispatch } from 'redux';
import PinButton from '../../SemiComponents/SVG/PinButton';
import { MessageProps } from '../../SemiComponents/Interfaces/GeneralInterfaces/IMessage';
import { Layout } from '../../SemiComponents/Interfaces/GeneralInterfaces/ILayout';
import ScrollButton from './SemiComponents/ScrollButton';

interface DefaultTextMessageNavigationProps {
  dispatch: Dispatch;
  navigation: any;
}

interface DefaultTextMessageProps extends DefaultTextMessageNavigationProps {
  idForAnimation: number;
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean) => void;
  id: number;
  flatList: React.MutableRefObject<any>;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
  pinnedMessageScreen: boolean;
  messages: MessageProps[];
  listOfPinnedMessages: Array<number>
}

interface DefaultTextMessageState {
  animate: boolean;
  heightOfMessage: number;
  selected: boolean;
  message: string;
}

interface componentPageProps {
  X: number;
  Y: number;
}

interface coordProps {
  locationX_In: number;
  locationY_In: number;
}

let size: any[] = [];

class DefaultTextType extends Component<DefaultTextMessageProps> {
  state: DefaultTextMessageState = {
    animate: false,
    heightOfMessage: 0,
    selected: false,
    message: this.props.message.content,
  };

  resetSelected = () => {
    this.props.dispatch(resetNumberOfSelectedMessages());
    this.setState({ selected: false });
  };

  setSelectedCallback = () => {
    const { dispatch } = this.props;
    this.setState({ selected: true });
    console.log('this state selected', this.state.selected);
    dispatch(incrementNumberOfSelectedMessages());
  };

  onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: this.props.id, layout: { width, height } }];
  };

  measureHandler = async () => {
    return new Promise((resolve) => {
      if (this.componentRef) {
        this.componentRef.measure(
          async (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number
          ) => {
            resolve({ X: pageX, Y: pageY });
          }
        );
      } else {
        resolve({ X: 0, Y: 0 });
      }
    });
  };

  handlePress = async (event: { nativeEvent: { pageX: number; pageY: number } } | null) => {
    if (!event)
      return {
        ID: this.props.id,
        componentPageX: 0,
        componentPageY: 0,
        pageX: 0,
        pageY: 0,
        width: 0,
        height: 0,
        message: undefined,
        selectionCallback: undefined,
        pinned: false,
      };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find((c) => c.ID === this.props.id);

    const componentPage = (await this.measureHandler() as componentPageProps);

    const { flatList } = this.props;
    // Make this with animation
    if(heightOfHeader > componentPage.Y) {
      if(flatList.current) {
        flatList.current.scrollToOffset({ offset: flatList.current._listRef._scrollMetrics.offset + (heightOfHeader - componentPage.Y), animated: false });
      }
    }

    return {
      ID: this.props.id,
      componentPageX: componentPage.X,
      componentPageY: heightOfHeader > componentPage.Y ? heightOfHeader : componentPage.Y,
      pageX: pageX,
      pageY: pageY,
      width: component.layout.width,
      height: component.layout.height,
      message: this.props.message,
      selectionCallback: this.setSelectedCallback,
      pinned: this.props.listOfPinnedMessages.findIndex(m => m === this.props.message.messageId) >= 0,
    };
  };

  onScrollEndDrag = async (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;

    if (Math.round(contentOffsetX + scrollViewWidth) >= Math.round(contentWidth)) {
      this.scrollViewRef!.scrollTo({ y: 0, animated: true });
      await this.handlePress(null).then((layout) => {
        this.props.setMessageMenuVisible(layout, false);
      });
    }
  };

  scrollViewRef: ScrollView | null = null;
  pressCoordinations = {} as coordProps;
  componentRef: TouchableOpacity | null = null;
  fadeAnimTranslate = new Animated.Value(0);

  fadeIn = Animated.timing(this.fadeAnimTranslate, {
    toValue: 1,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  fadeOut = Animated.timing(this.fadeAnimTranslate, {
    toValue: 0,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  shouldComponentUpdate(nextProps: Readonly<DefaultTextMessageProps>, nextState: Readonly<DefaultTextMessageState>, nextContext: any): boolean {
    if(nextProps.idForAnimation === this.props.message.messageId) {
      this.state.animate = true;
      return true;
    } else if(nextProps.selecting != this.props.selecting) {
      this.setState({ selecting: nextProps.selecting });
      if(!nextProps.selecting) this.resetSelected();
      return true;
    } else if(nextState.selected != this.state.selected) {
      this.setState({ selected: nextState.selected })
      return true;
    } else if(this.state.selected !== nextState.selected) {
      return true;
    } else if(this.props.message.content !== nextProps.message.content) {
      return true;
    } else if(this.messageCompareHandler(nextProps.messages)) {
      this.setState({ message: nextProps.messages.find(m => m.messageId === this.props.message.messageId)?.content })
      return true;
    } else if(this.props.listOfPinnedMessages.find(m => m === this.props.message.messageId) !== nextProps.listOfPinnedMessages.find(m => m === nextProps.message.messageId)) {
      return true;
    }

    return false;
  }

  messageCompareHandler = (list: MessageProps[]) => {
    const nextMessage = list.find(m => m.messageId === this.props.message.messageId);

    if(this.state.message && this.state.message !== nextMessage?.content) {
      return true;
    }

    return false;
  }
  
  componentDidUpdate(prevProps: DefaultTextMessageProps) {
    const { animate } = this.state;
    if (!animate) return;
    Animated.sequence([this.fadeIn, this.fadeOut]).start(() => {
      this.setState({ animate: false });
      this.props.dispatch(setAnimationOfBackgroundForScrolledMessage());
    });

    const { idForAnimation, selecting } = this.props;
    if (idForAnimation !== prevProps.idForAnimation) {
      this.setState({ animate: idForAnimation === this.props.message.messageId });
    }

    // if (!selecting && prevProps.selecting) {
    //   this.resetSelected();
    // }
  }

  render() {
    const { message, author, userMessageLastWatched, selecting, pinnedMessageScreen } = this.props;
    const { animate, heightOfMessage, selected } = this.state;

    const isUser = message.author.userId == author.userId;

    return (
      <ScrollView
        key={this.props.message.content}
        ref={(ref) => (this.scrollViewRef = ref)}
        horizontal={true}
        alwaysBounceHorizontal={false}
        pagingEnabled
        scrollEnabled={!pinnedMessageScreen}
        //contentOffset={pinnedMessageScreen?{ x: 5, y: 0 }:{ x: 0, y: 0 }}
        bounces={false}
        overScrollMode={'never'}
        onScrollEndDrag={this.onScrollEndDrag}
        showsHorizontalScrollIndicator={false}
        style={[
          styles.swipeableContainer,
          selecting && selected && { backgroundColor: 'rgba(32, 83, 44, 0.2)' },
        ]}
      >
        <Animated.View
          style={{
            position: 'absolute',
            width: width,
            height: height,
            backgroundColor: '#fff',
            opacity: this.fadeAnimTranslate,
          }}
        />
        <TouchableOpacity
          ref={(ref) => (this.componentRef = ref)}
          style={styles.mainContainer}
          activeOpacity={1}
          onPressIn={(event) => {
            const { locationX, locationY } = event.nativeEvent;
            this.pressCoordinations = { locationX_In: locationX, locationY_In: locationY };
          }}
          onPressOut={async (event) => {
            const { locationX, locationY } = event.nativeEvent;
            const { locationX_In, locationY_In } = this.pressCoordinations;

            if (selecting && Math.abs(locationX - locationX_In) < 0.3 && Math.abs(locationY - locationY_In) < 0.3) {
              this.props.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
              this.setState({ selected: !selected });
              return;
            }

            if (Math.abs(locationX - locationX_In) < 0.3 && Math.abs(locationY - locationY_In) < 0.3) {
              await this.handlePress(event).then((layout) => {
                this.props.setMessageMenuVisible(layout, true);
              });
            }
          }}
        >
          <View style={[styles.messageBlockContainer, isUser && { justifyContent: 'flex-end' }]}>
            <View onLayout={(event) => this.setState({ heightOfMessage: event.nativeEvent.layout.height })} style={styles.messageContainer}>
              { this.props.pinnedMessageScreen && isUser &&
                <ScrollButton 
                  navigation={this.props.navigation}
                  dispatch={this.props.dispatch}
                  messageId={this.props.message.messageId!}
                  isUser={isUser}
                />
              }
              <View
                onLayout={this.onLayout}
                style={[
                  isUser ? styles.messageTypeTextUser : styles.messageTypeTextNotUser,
                  message.content.length > DEFAULT_CHARS_PER_LINE && styles.longMessage,
                  { overflow: 'hidden' },
                ]}
              >
                <View
                  style={{
                    position: 'absolute',
                    height: screenHeight,
                    width: screenWidth,
                    zIndex: -1,
                    opacity: selecting && selected ? 1 : 0.4,
                    backgroundColor: message.author.userId === author.userId ? '#E09EFF' : '#fff',
                  }}
                />
                <Text>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
                <Text
                  style={
                    message.content.length > DEFAULT_CHARS_PER_LINE
                      ? [styles.messageTimeStamp, styles.longMessageTimeStamp]
                      : styles.messageTimeStamp
                  }
                >
                  {this.props.listOfPinnedMessages.findIndex(m=>m===this.props.message.messageId)>=0&&<PinButton size={screenHeight*0.008}/>}
                  {message.isEdited ? 'edited ' : ''}
                  {message.sendingTime.getHours().toString().padStart(2, '0')}:
                  {message.sendingTime.getMinutes().toString().padStart(2, '0')}
                </Text>
              </View>
              { this.props.pinnedMessageScreen && !isUser &&
                <ScrollButton 
                  navigation={this.props.navigation}
                  dispatch={this.props.dispatch}
                  messageId={this.props.message.messageId!}
                  isUser={isUser}
                />
              }
              {selecting && (
                <SelectButton selected={selected} isUser={isUser} verticalOffset={heightOfMessage / 2 - 10} horizontalOffset={-(20 + 5)} />
              )}
            </View>
            {isUser && (
              <View style={{ position: 'absolute', right: 0, bottom: 10, marginRight: -2.5 }}>
                {message.messageId! <= (userMessageLastWatched?.value?.messageId || 0) ? (
                  <MessageItemStatusMessageReviewed />
                ) : (
                  <MessageItemStatusMessageNotReviewed />
                )}
              </View>
            )}
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: 55 }}>
            <ReplyIcon />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  idForAnimation: state.ChatReducer.activateAnimationOfBackgroundForScrolledMessage.id,
});

export default connect(mapStateToProps)(DefaultTextType);
