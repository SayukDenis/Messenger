import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { heightOfHeader, screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import ReplyIcon from '../SVG/ReplyIcon';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, DISTANCE_BETWEEN_PRESS_IN_AND_OUT, MESSAGE_PADDING_VERTICAL, SIZE_OF_SELECT_BUTTON, height, width } from '../ChatConstants';
import { decrementNumberOfSelectedMessages, incrementNumberOfSelectedMessages, resetNumberOfSelectedMessages, setAnimationOfBackgroundForScrolledMessage, setScrollStateTappedMessage } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { connect } from 'react-redux';
import PinButton from '../SVG/PinButton';
import { MessageProps } from '../Interfaces/GeneralInterfaces/IMessage';
import { ReplyTextTypeProps, ReplyTextTypeState, componentPageProps, coordProps } from './Interfaces/IReplyTextType';
import { functionalStyles, styles } from './Styles/ReplyTextType';
import ReplyMessage from './HelperComponents/ReplyMessage';
import ScrollButton from './SemiComponents/ScrollButton';
import { wrapText } from './HelperFunctions/wrapText';
import SelectButton from './SemiComponents/SelectButton';

let size:any[] = [];

class ReplyTextType extends Component<ReplyTextTypeProps> {
  state: ReplyTextTypeState = {
    sizeOfMessageContainer: [0, 0],
    widthOfMessage: 0,
    widthOfReply: 0,
    selected: false,
    animate: false,
    pressCoordinations: {} as coordProps,
    replyMessage: '',
    message: '',
  };

  componentDidMount() { 
    this.setState({ 
      replyMessage: this.props.messages.find(m => m.messageId==this.props.message.messageResponseId)?.content,
      message: this.props.message.content,
    });
  }

  componentDidUpdate(prevProps: ReplyTextTypeProps) {
    const { animate } = this.state;
    console.log('animate', animate);
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

  shouldComponentUpdate(nextProps: Readonly<ReplyTextTypeProps>, nextState: Readonly<ReplyTextTypeState>, nextContext: any): boolean {
    const nextReplyMessage = nextProps.messages.find(m => m.messageId === this.props.message.messageResponseId)?.content;
    const nextMessage = nextProps.messages.find(m => m.messageId === this.props.message.messageId)?.content;

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
    } else if(this.messageCompareHandler(nextProps.messages)) {
      this.setState({ message: nextMessage })
      return true;
    } else if(this.state.replyMessage && this.state.replyMessage !== nextReplyMessage) {
      this.setState({ replyMessage: nextReplyMessage })
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

  resetSelected = () => {
    this.props.dispatch(resetNumberOfSelectedMessages());
    this.setState({ selected: false });
  };

  setSelectedCallback = () => {
    this.setState({ selected: true });
    this.props.dispatch(incrementNumberOfSelectedMessages());
  }

  onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: this.props.id, layout: { width, height } }];
    this.setState({ widthOfMessage: width });
  };

  componentRef: TouchableOpacity | null = null;
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
            resolve({ y, X: pageX, Y: pageY });
          }
        );
      } else {
        resolve({ y: 0, X: 0, Y: 0 });
      }
    });
  };

  handlePress = async (event: ({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if (!event) return { ID: this.props.id, componentPageX:0, componentPageY: 0, pageX: 0, pageY: 0, width: 0, height: 0, message: undefined, selectionCallback: undefined, pinned: false };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === this.props.id);

    const componentPage = (await this.measureHandler() as componentPageProps);

    return { 
      ID: this.props.id,
      componentPageX: componentPage.X,
      componentPageY: componentPage.Y,
      pageX: pageX,
      pageY: pageY,
      width: component.layout.width,
      height: component.layout.height,
      message: this.props.message,
      selectionCallback: this.setSelectedCallback,
      pinned: this.props.listOfPinnedMessages.findIndex(m => m === this.props.message.messageId) >= 0,
    };
  };

  scrollViewRef: ScrollView | null = null;
  onScrollEndDrag = async (event:any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;

    if (Math.round(contentOffsetX + scrollViewWidth) >= Math.round(contentWidth)) {
      this.scrollViewRef!.scrollTo({y:0,animated:true})
      await this.handlePress(null).then((layout:any) => {
        this.props.setMessageMenuVisible(layout, false);
      });
    }
  };

  handleLinkTo = (messageID:any) => {
    const { selecting } = this.props;
    const { selected } = this.state;
    if (selecting) {
      this.setState({ selected: !selected });
      this.props.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      return;
    }

    if(this.props.flatList.current) {
      this.props.dispatch(setAnimationOfBackgroundForScrolledMessage(this.props.message.messageResponseId));
      this.props.flatList.current.scrollToIndex({ index: this.props.messages.length - messageID, animated: true, viewPosition: 0.5 });
    }
  };
  
  onPressIn = (event:any) => {
    const { locationX, locationY } = event.nativeEvent;
    this.setState({ pressCoordinations: { locationX_In: locationX, locationY_In: locationY } });
  }

  onPressOut = async (event:any) => {
    const { locationX, locationY } = event.nativeEvent;
    const { locationX_In, locationY_In } = this.state.pressCoordinations;

    const { selecting } = this.props;
    const { selected } = this.state;
    
    if (selecting && Math.abs(locationX-locationX_In) < DISTANCE_BETWEEN_PRESS_IN_AND_OUT && Math.abs(locationY-locationY_In) < DISTANCE_BETWEEN_PRESS_IN_AND_OUT) {
      this.setState({ selected: !selected });
      this.props.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      return;
    }

    if (Math.abs(locationX-locationX_In) < DISTANCE_BETWEEN_PRESS_IN_AND_OUT && Math.abs(locationY-locationY_In) < DISTANCE_BETWEEN_PRESS_IN_AND_OUT) {
      await this.handlePress(event).then((layout) => {
        this.props.setMessageMenuVisible(layout, true);
      });
    }
  }

  getSelectOffsetHorizontal = () => {
    const { widthOfMessage, widthOfReply } = this.state;
    return widthOfMessage > widthOfReply ? this.state.sizeOfMessageContainer[0] - (SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL) - widthOfMessage : this.state.sizeOfMessageContainer[0] - (SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL) - widthOfReply;
  }

  getSelectOffsetVertical = () => {
    return (this.state.sizeOfMessageContainer[1]-SIZE_OF_SELECT_BUTTON) / 2;
  }

  render() {
    const { message, author, selecting, pinnedMessageScreen } = this.props;
    const { selected } = this.state;

    const isUser = this.props.message.author.userId == this.props.author.userId;

    return (
      <ScrollView 
        horizontal={true} 
        ref={(ref) => this.scrollViewRef = ref}
        alwaysBounceHorizontal={false} 
        pagingEnabled 
        scrollEnabled={!pinnedMessageScreen}
        //contentOffset={pinnedMessageScreen?{ x: 5, y: 0 }:{ x: 0, y: 0 }}
        bounces={false}
        overScrollMode={'never'}
        showsHorizontalScrollIndicator={false}
        style={[
          styles.swipeableContainer, 
          { paddingBottom: 5 }, 
          selecting && selected && { backgroundColor: 'rgba(32, 83, 44, 0.2)' },
        ]}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        <Animated.View style={[styles.animatedBackground, { opacity: this.fadeAnimTranslate }]} />
        <View style={styles.replyContainer} >
          <TouchableOpacity 
            ref={(ref) => (this.componentRef = ref)}
            onLayout={(event) => this.setState({ sizeOfMessageContainer: [event.nativeEvent.layout.width, event.nativeEvent.layout.height] })}
            style={styles.innerReplyContainer}
            activeOpacity={1} 
            onPressIn={this.onPressIn}
            onPressOut={this.onPressOut}
          >
            <Text style={[styles.replyUserNameFont, this.props.message.author.userId==this.props.author.userId && { alignSelf: 'flex-end' }]}>
              {isUser ? 'You' : this.props.userName}
            </Text>
            <ReplyMessage 
              message={this.props.message}
              replyMessage={this.props.messages.find(m => m.messageId === message.messageResponseId)!}
              author={this.props.author}
              selecting={selecting}
              selected={selected}
              handleLinkTo={this.handleLinkTo}
            />
            <TouchableOpacity 
              activeOpacity={1} 
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{ alignSelf: isUser?'flex-end':'flex-start', flexDirection: 'row' }}
            >
              { this.props.pinnedMessageScreen && isUser &&
                <ScrollButton 
                  navigation={this.props.navigation}
                  dispatch={this.props.dispatch}
                  messageId={this.props.message.messageId!}
                  isUser={isUser}
                />
              }
              <View 
                onLayout={(event) => this.onLayout(event)}
                style={functionalStyles.messageContainer(isUser, message.content.length)}
              >
                <View 
                  style={functionalStyles.backgroundWithShadeEffect(selecting, selected, isUser)} 
                /> 
                <Text style={{ fontSize: DEFAULT_FONT_SIZE }}>{wrapText(this.props.message.content, DEFAULT_CHARS_PER_LINE)}</Text>
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  {this.props.listOfPinnedMessages.findIndex(m=>m===this.props.message.messageId)>=0&&<PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
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
                />
              }
              {selecting && <SelectButton 
                selected={selected}
                isUser={isUser}
                verticalOffset={this.getSelectOffsetVertical()}
                horizontalOffset={this.getSelectOffsetHorizontal()}
              />}
            </TouchableOpacity>
          </TouchableOpacity>
          { isUser && 
            <View style={styles.messageViewStatus}>
              { this.props.message.messageId! <= this.props.userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
            </View> }
        </View>
        <View style={styles.messageSwipeToReply}>
          <ReplyIcon />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  idForAnimation: state.ChatReducer.activateAnimationOfBackgroundForScrolledMessage.id,
});

export default connect(mapStateToProps)(ReplyTextType);