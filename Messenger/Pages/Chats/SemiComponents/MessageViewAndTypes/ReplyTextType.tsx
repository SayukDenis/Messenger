import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { screenHeight } from '../../../ChatList/Constants/ConstantsForChatlist';
import { DEFAULT_CHARS_PER_LINE, DEFAULT_FONT_SIZE, FLATLIST_HEIGHT, MESSAGE_PADDING_VERTICAL, SIZE_OF_SELECT_BUTTON, width } from '../ChatConstants';
import { addSelectedMessage, decrementNumberOfSelectedMessages, incrementNumberOfSelectedMessages, removeSelectedMessage, resetNumberOfSelectedMessages, resetSelectedMessage, setAnimationOfBackgroundForScrolledMessage } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { connect } from 'react-redux';
import { MessageProps } from '../Interfaces/GeneralInterfaces/IMessage';
import { ReplyTextTypeWithReduxProps, ReplyTextTypeState } from './Interfaces/IReplyTextType';
import { functionalStyles, styles } from './Styles/ReplyTextType';
import ReplyMessage from './HelperComponents/ReplyMessage';
import ScrollButton from './SemiComponents/ScrollButton';
import { wrapText } from './HelperFunctions/wrapText';
import SelectButton from './SemiComponents/SelectButton';
import { componentPageProps, coordProps, sizeProps } from './Interfaces/IGeneralInterfaces';
import * as SVG from './../SVG';

let size: sizeProps[] = [];

let tmpUpdateCounter = 0;

class ReplyTextType extends Component<ReplyTextTypeWithReduxProps> {
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
      replyMessage: this.props.messages.find(m => m.messageId === this.props.message.messageResponseId)?.content,
      message: this.props.message.content,
    });
  }

  componentDidUpdate(prevProps: ReplyTextTypeWithReduxProps) {
    console.log(`ReplyTextType updated\t#${++tmpUpdateCounter}`);

    const { animate } = this.state;
    //console.log('animate', animate);
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

  shouldComponentUpdate(nextProps: Readonly<ReplyTextTypeWithReduxProps>, nextState: Readonly<ReplyTextTypeState>, nextContext: any): boolean {
    const nextReplyMessage = nextProps.messages.find(m => m.messageId === this.props.message.messageResponseId)?.content;
    const nextMessage = nextProps.messages.find(m => m.messageId === this.props.message.messageId)?.content;

    if(nextProps.idForAnimation === this.props.message.messageId) {
      console.log('reply #1');
      this.state.animate = true;
      return true;
    } else if(nextProps.selecting != this.props.selecting) {
      console.log('reply #2');
      this.setState({ selecting: nextProps.selecting });
      if(!nextProps.selecting) this.resetSelected();
      return true;
    } else if(nextState.selected != this.state.selected) {
      console.log('reply #3');
      this.setState({ selected: nextState.selected })
      return true;
    } else if(this.state.selected !== nextState.selected) {
      console.log('reply #4');
      return true;
    } else if(this.messageCompareHandler(nextProps.messages)) {
      console.log('reply #5');
      this.setState({ message: nextMessage })
      return true;
    } else if(this.state.replyMessage && this.state.replyMessage !== nextReplyMessage) {
      console.log('reply #6');
      this.setState({ replyMessage: nextReplyMessage })
      return true;
    } else if(this.props.listOfPinnedMessages.find(m => m === this.props.message.messageId) !== nextProps.listOfPinnedMessages.find(m => m === nextProps.message.messageId)) {
      console.log('reply #7');
      return true;
    } else if(this.state.widthOfMessage !== nextState.widthOfMessage) {
      return true;
    } else if(this.state.widthOfReply !== nextState.widthOfReply) {
      return true;
    } else if(this.state.sizeOfMessageContainer[1] !== nextState.sizeOfMessageContainer[1] || this.state.sizeOfMessageContainer[0] !== nextState.sizeOfMessageContainer[0]) {
      return true;
    } else if(this.props.userMessageLastWatched !== nextProps.userMessageLastWatched) {
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
  }

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
    console.log('widthOfMessage', this.props.message.messageId, width);
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
      width: component!.layout.width,
      height: component!.layout.height,
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
    const { selecting, dispatch, flatList, messages, message, id } = this.props;
    const { selected } = this.state;
    if (selecting) {
      this.setState({ selected: !selected });
      dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      dispatch(selected ? removeSelectedMessage(id) : addSelectedMessage(id));
      return;
    }

    if(this.props.flatList.current) {
      dispatch(setAnimationOfBackgroundForScrolledMessage(message.messageResponseId));
      const mes = this.props.messagesWithCoords.find(m => m.id === messageID);
      flatList.current.scrollToOffset({ 
        animated: true, 
        offset: mes!.coords - ((FLATLIST_HEIGHT - mes!.height) / 2)
      });
    }
  };
  
  pressInTime: number = 0;
  onPressIn = (event:any) => {
    this.pressInTime = (new Date()).getTime();
    const { locationX, locationY } = event.nativeEvent;
    this.setState({ pressCoordinations: { locationX_In: locationX, locationY_In: locationY } });
  }

  onPressOut = async (event:any) => {
    const pressOutTime = (new Date()).getTime();
    const { locationX, locationY } = event.nativeEvent;
    const { locationX_In, locationY_In } = this.state.pressCoordinations;

    const { selecting, dispatch, id } = this.props;
    const { selected } = this.state;
    
    if (selecting && pressOutTime - this.pressInTime > 30 && locationX === locationX_In && locationY === locationY_In) {
      this.setState({ selected: !selected });
      dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      dispatch(selected ? removeSelectedMessage(id) : addSelectedMessage(id));
      return;
    }

    if (pressOutTime - this.pressInTime > 30 && locationX === locationX_In && locationY === locationY_In) {
      await this.handlePress(event).then((layout) => {
        this.props.setMessageMenuVisible(layout, true);
      });
    }

    if(this.props.pinnedMessageScreen) {
      await this.handlePress(event).then((layout) => {
        this.props.setMessageMenuVisible(layout, true);
      });
    }
  }

  getSelectOffsetHorizontal = (scroll: boolean = false) => {
    const { widthOfMessage, widthOfReply } = this.state;
    console.log('\n_____________________\n', widthOfMessage, widthOfReply, '\n_____________________');
    return scroll ? (widthOfReply > widthOfMessage ? widthOfReply - widthOfMessage : 0) : -(SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL + (widthOfReply > widthOfMessage ? widthOfReply - widthOfMessage : 0));
  }

  getSelectOffsetVertical = (scroll: boolean = false) => {
    console.log('\n******************\n', this.props.id, this.state.sizeOfMessageContainer[1], '\n******************\n');
    return scroll ? this.state.sizeOfMessageContainer[1] : (this.state.sizeOfMessageContainer[1]-SIZE_OF_SELECT_BUTTON) / 2;
  }

  render() {
    const { message, author, selecting, messages, pinnedMessageScreen, userName, dispatch, navigation, listOfPinnedMessages, userMessageLastWatched } = this.props;
    const { selected, widthOfMessage, widthOfReply } = this.state;

    const isUser = message.author.userId == author.userId;

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
          selecting && selected && { backgroundColor: 'rgba(32, 83, 44, 0.2)' },
        ]}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        <Animated.View style={[styles.animatedBackground, { opacity: this.fadeAnimTranslate }]} />
        <View style={styles.replyContainer} >
          <TouchableOpacity 
            ref={(ref) => (this.componentRef = ref)}
            onLayout={(event) => {
              const { width, height } = event.nativeEvent.layout;
              if(this.props.pinnedMessageScreen) console.log('\n===========================\n', this.props.id, width, height, '\n===========================');
              if(width && height)
                this.setState({ sizeOfMessageContainer: [width, height] });
            }}
            style={styles.innerReplyContainer}
            activeOpacity={1} 
            onPressIn={this.onPressIn}
            onPressOut={this.onPressOut}
          >
            <ReplyMessage 
              message={message}
              replyMessage={messages.find(m => m.messageId === message.messageResponseId)!}
              author={author}
              userName={userName}
              selecting={selecting}
              selected={selected}
              pinnedMessageScreen={pinnedMessageScreen}
              handleLinkTo={pinnedMessageScreen ? this.onPressOut : this.handleLinkTo}
              onLayout={(event:any) => {
                const width = event.nativeEvent.layout.width;
                console.log('widthOfReply', this.props.message.messageId, width);
                if(width)
                  this.setState({ widthOfReply: width });
              }}
            />
            <TouchableOpacity 
              activeOpacity={1} 
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              style={{ alignSelf: isUser?'flex-end':'flex-start', flexDirection: 'row' }}
            >
              { pinnedMessageScreen && isUser &&
                <ScrollButton 
                  navigation={navigation}
                  dispatch={dispatch}
                  messageId={message.messageId!}
                  isUser={isUser}
                  horizontalOffset={this.getSelectOffsetHorizontal(true)}
                  verticalOffset={this.getSelectOffsetVertical(true)}
                />
              }
              <View 
                onLayout={(event) => this.onLayout(event)}
                style={functionalStyles.messageContainer(isUser, message.content.length)}
              >
                <View 
                  style={functionalStyles.backgroundWithShadeEffect(selecting, selected, isUser)} 
                /> 
                <Text style={{ fontSize: DEFAULT_FONT_SIZE, maxWidth: width * 0.6 }}>{wrapText(message.content, DEFAULT_CHARS_PER_LINE)}</Text>
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  {listOfPinnedMessages.findIndex(m=>m===message.messageId)>=0&&<SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
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
              { pinnedMessageScreen && !isUser &&
                <ScrollButton 
                  navigation={navigation}
                  dispatch={dispatch}
                  messageId={message.messageId!}
                  isUser={isUser}
                  horizontalOffset={this.getSelectOffsetHorizontal()}
                  verticalOffset={this.getSelectOffsetVertical()}
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

export default connect(mapStateToProps)(ReplyTextType);