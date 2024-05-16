import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  GestureResponderEvent,
} from 'react-native';
import { connect } from 'react-redux';
import {
  addSelectedMessage,
  decrementNumberOfSelectedMessages,
  incrementNumberOfSelectedMessages,
  removeSelectedMessage,
  resetNumberOfSelectedMessages,
  resetSelectedMessage,
  setAnimationOfBackgroundForScrolledMessage,
} from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, MESSAGE_PADDING_VERTICAL, SIZE_OF_SELECT_BUTTON, height, width } from '../ChatConstants';
import { MessageProps } from '../Interfaces/GeneralInterfaces/IMessage';
import { functionalStyles, styles } from './Styles/DefaultTextType';
import ScrollButton from './SemiComponents/ScrollButton';
import { wrapText } from './HelperFunctions/wrapText';
import SelectButton from './SemiComponents/SelectButton';
import { componentPageProps, coordProps, sizeProps } from './Interfaces/IGeneralInterfaces';
import { DefaultTextMessageWithNavigationProps, DefaultTextMessageState } from './Interfaces/IDefaultTextType';
import * as SVG from './../SVG';

let size: sizeProps[] = [];

class DefaultTextType extends Component<DefaultTextMessageWithNavigationProps> {
  state: DefaultTextMessageState = {
    animate: false,
    heightOfMessage: 0,
    selected: false,
    message: this.props.message.content,
  };

  resetSelected = () => {
    const { dispatch } = this.props;
    dispatch(resetNumberOfSelectedMessages());
    dispatch(resetSelectedMessage());
    this.setState({ selected: false });
  };

  setSelectedCallback = () => {
    const { dispatch, id } = this.props;
    this.setState({ selected: true });
    dispatch(incrementNumberOfSelectedMessages());
    dispatch(addSelectedMessage(id));
  };

  onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    const idx = size.findIndex(m => m.ID === this.props.id);
    if(idx >= 0) {
      if(size[idx].layout.height !== height || size[idx].layout.width !== width) {
        size[idx].layout.height = height;
        size[idx].layout.width = width;
      }
    } else {
      size = [...size, { ID: this.props.id, layout: { width, height } }];
    }
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

    return {
      ID: this.props.id,
      componentPageX: componentPage.X,
      componentPageY: componentPage.Y,
      pageX: pageX,
      pageY: pageY,
      width: component!.layout.width,
      height: component!.layout.height,
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

  shouldComponentUpdate(nextProps: Readonly<DefaultTextMessageWithNavigationProps>, nextState: Readonly<DefaultTextMessageState>, nextContext: any): boolean {
    const { message, listOfPinnedMessages, selecting, userMessageLastWatched } = this.props;
    const { heightOfMessage, selected } = this.state;

    if(nextProps.idForAnimation === message.messageId) {
      this.state.animate = true;
      return true;
    } else if(nextProps.selecting != selecting) {
      this.setState({ selecting: nextProps.selecting });
      if(!nextProps.selecting) this.resetSelected();
      return true;
    } else if(nextState.selected != selected) {
      this.setState({ selected: nextState.selected })
      return true;
    } else if(selected !== nextState.selected) {
      return true;
    } else if(message.content !== nextProps.message.content) {
      return true;
    } else if(this.messageCompareHandler(nextProps.messages)) {
      this.setState({ message: nextProps.messages.find(m => m.messageId === message.messageId)?.content })
      return true;
    } else if(listOfPinnedMessages.find(m => m === message.messageId) !== nextProps.listOfPinnedMessages.find(m => m === nextProps.message.messageId)) {
      return true;
    } else if(userMessageLastWatched?.messageId !== nextProps.userMessageLastWatched?.messageId) {
      return true;
    } else if(message.sent !== nextProps.message.sent) {
      return true;
    } else if(heightOfMessage !== nextState.heightOfMessage) {
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
  
  componentDidUpdate(prevProps: DefaultTextMessageWithNavigationProps) {
    // console.log(`DefaultTextType updated\t#${++tmpUpdateCounter}`);

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

  pressInTime: number = 0;
  render() {
    const { message, author, userMessageLastWatched, selecting, pinnedMessageScreen, messagesWithCoords } = this.props;
    const { animate, heightOfMessage, selected } = this.state;

    const isUser = message.author.userId === author.userId;

    return (
      <ScrollView
        key={this.props.message.content}
        ref={(ref) => (this.scrollViewRef = ref)}
        horizontal={true}
        alwaysBounceHorizontal={false}
        pagingEnabled
        scrollEnabled={!pinnedMessageScreen&&!selecting}
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
            this.pressInTime = (new Date()).getTime();
            //console.log('pressInTime: ', this.pressInTime);

            const { locationX, locationY } = event.nativeEvent;
            this.pressCoordinations = { locationX_In: locationX, locationY_In: locationY };
          }}
          onPressOut={(event: GestureResponderEvent) => {
            const pressOutTime = (new Date()).getTime();
            //console.log('pressOutTime:', pressOutTime);
            //console.log('Differecne in time:', pressOutTime - this.pressInTime);

            //console.log('DefaultTextType:', this.props.id, this.props.message.messageId);
            const { locationX, locationY } = event.nativeEvent;
            const { locationX_In, locationY_In } = this.pressCoordinations;
            const { dispatch, setMessageMenuVisible, id } = this.props;

            //console.log('\npressIn  coords:', locationX_In, locationY_In, '\npressOut coords:', locationX, locationY);

            if (selecting && pressOutTime - this.pressInTime > 30 && locationX === locationX_In && locationY === locationY_In) {
              dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
              dispatch(selected ? removeSelectedMessage(id) : addSelectedMessage(id));
              this.setState({ selected: !selected });
              return;
            }



            if (pressOutTime - this.pressInTime > 30 && locationX === locationX_In && locationY === locationY_In) {
              this.handlePress(event).then((layout) => {
                setMessageMenuVisible(layout, true);
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
                  verticalOffset={(messagesWithCoords.find(m => m.id === message.messageId)?.height! - MESSAGE_PADDING_VERTICAL/2)} 
                  horizontalOffset={0} 
                />
              }
              <View
                onLayout={this.onLayout}
                style={functionalStyles.messageContainer(isUser, message.content.length)}
              >
                <View style={functionalStyles.backgroundWithShadeEffect(selecting, selected, isUser) } />
                <Text style={{ fontSize: DEFAULT_FONT_SIZE, maxWidth: width * 0.6 }}>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  { this.props.listOfPinnedMessages.findIndex(m=>m===this.props.message.messageId)>=0&&<SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.012}/>}
                  <Text
                    style={
                      message.content.length > DEFAULT_CHARS_PER_LINE
                        ? [styles.messageTimeStamp, styles.longMessageTimeStamp]
                        : styles.messageTimeStamp
                    }
                  >
                    {message.isEdited ? 'edited ' : ''}
                    {message.sendingTime.getHours().toString().padStart(2, '0')}:
                    {message.sendingTime.getMinutes().toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
              { this.props.pinnedMessageScreen && !isUser &&
                <ScrollButton 
                  navigation={this.props.navigation}
                  dispatch={this.props.dispatch}
                  messageId={this.props.message.messageId!}
                  isUser={isUser}
                  verticalOffset={(messagesWithCoords.find(m => m.id === message.messageId)?.height! - MESSAGE_PADDING_VERTICAL - SIZE_OF_SELECT_BUTTON) / 2} 
                  horizontalOffset={-(SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL)} 
                />
              }
              {selecting && (
                <SelectButton 
                  selected={selected} 
                  isUser={isUser} 
                  verticalOffset={(heightOfMessage-SIZE_OF_SELECT_BUTTON) / 2} 
                  horizontalOffset={-(SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL)} 
                />
              )}
            </View>
            {isUser && (
              <View style={styles.messageViewStatus}>
                { message.sent ? (message.messageId! <= (userMessageLastWatched?.messageId || 0) ? (
                  <SVG.MessageItemStatusMessageReviewed />
                ) : (
                  <SVG.MessageItemStatusMessageNotReviewed />
                )) :
                  <SVG.MessageItemStatusSending />
                }
              </View>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.messageSwipeToReply}>
          <SVG.ReplyIcon />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  idForAnimation: state.ChatReducer.activateAnimationOfBackgroundForScrolledMessage.id,
  messagesWithCoords: state.ChatReducer.setCoordinationsOfMessage.messagesWithCoords,
});

export default connect(mapStateToProps)(DefaultTextType);
