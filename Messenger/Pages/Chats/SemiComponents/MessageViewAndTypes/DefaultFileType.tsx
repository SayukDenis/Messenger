import { Animated, GestureResponderEvent, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import ScrollButton from './SemiComponents/ScrollButton';
import SelectButton from './SemiComponents/SelectButton';
import { componentPageProps, coordProps, sizeProps } from './Interfaces/IGeneralInterfaces';
import { Dispatch } from 'redux';
import { Layout } from '../Interfaces/GeneralInterfaces/ILayout';
import { MessageProps } from '../Interfaces/GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import ILastWatchedMessage from '../../../../dao/Models/Chats/ILastWatchedMessage';
import { addSelectedMessage, decrementNumberOfSelectedMessages, incrementNumberOfSelectedMessages, removeSelectedMessage, resetNumberOfSelectedMessages, resetSelectedMessage, setAnimationOfBackgroundForScrolledMessage } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { Easing } from 'react-native-reanimated';
import { DEFAULT_CHARS_PER_LINE, MESSAGE_PADDING_VERTICAL, SIZE_OF_SELECT_BUTTON, getCustomFontSize, height, screenHeight, width } from '../ChatConstants';
import { functionalStyles, styles } from './Styles/DefaultFileType';
import { wrapText } from './HelperFunctions/wrapText';
import { connect } from 'react-redux';
import * as SVG from './../SVG';

let size: sizeProps[] = [];

let tmpUpdateCounter = 0;

interface DefaultFileTypeProps {
  dispatch: Dispatch;
  navigation: any;

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

interface DefaultFileTypeState {
  animate: boolean;
  heightOfMessage: number;
  selected: boolean;

}

class DefaultFileType extends Component<DefaultFileTypeProps> {

  state: DefaultFileTypeState = {
    animate: false,
    heightOfMessage: 0,
    selected: false,
    // message: this.props.message.content,
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

  shouldComponentUpdate(nextProps: Readonly<DefaultFileTypeProps>, nextState: Readonly<DefaultFileTypeState>, nextContext: any): boolean {
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
    } else if(this.props.listOfPinnedMessages.find(m => m === this.props.message.messageId) !== nextProps.listOfPinnedMessages.find(m => m === nextProps.message.messageId)) {
      return true;
    } else if(this.props.userMessageLastWatched?.messageId !== nextProps.userMessageLastWatched?.messageId) {
      return true;
    } else if(this.props.message.sent !== nextProps.message.sent) {
      return true;
    }
    
    return false;
  }
  
  componentDidUpdate(prevProps: DefaultFileTypeProps) {
    // console.log(`DefaultFileType updated\t#${++tmpUpdateCounter}`);

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
    const { message, author, userMessageLastWatched, selecting, pinnedMessageScreen, navigation, dispatch, listOfPinnedMessages } = this.props;
    const { animate, heightOfMessage, selected } = this.state;

    const isUser = message.author.userId === author.userId;

    // console.log('DefaultFileType content:', message.content);

    return (
      <ScrollView
        key={message.content as string}
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
              { pinnedMessageScreen && isUser &&
                <ScrollButton 
                  navigation={navigation}
                  dispatch={dispatch}
                  messageId={message.messageId!}
                  isUser={isUser}
                  verticalOffset={(heightOfMessage-SIZE_OF_SELECT_BUTTON) / 2} 
                  horizontalOffset={-(SIZE_OF_SELECT_BUTTON + MESSAGE_PADDING_VERTICAL)} 
                />
              }
              <View
                onLayout={this.onLayout}
                style={styles.message}
              >
                <View style={functionalStyles.backgroundWithShadeEffect(selecting, selected, isUser) } />
                <Image source={{ uri: 'data:image/png;base64,' + message.fileContent }} style={{ width: 250, height: 250, borderRadius: 9 }} />
                { message.content &&
                  <Text style={{ fontSize: getCustomFontSize(14), maxWidth: width * 0.6, paddingHorizontal: 5 }}>
                    {wrapText(message.content, DEFAULT_CHARS_PER_LINE)}
                  </Text>
                }
                <View style={{ flexDirection: 'row', alignSelf:'flex-end' }}>
                  {listOfPinnedMessages.findIndex(m=>m===message.messageId)>=0&&<SVG.PinButton style={styles.messageInfoContainer} size={screenHeight*0.008}/>}
                  <Text
                    style={[styles.messageTimeStampNoText, message.content.length > 0 && styles.messageTimeStampText]}
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
                  verticalOffset={(heightOfMessage-SIZE_OF_SELECT_BUTTON) / 2} 
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
    )
  }
}

const mapStateToProps = (state: any) => ({
  idForAnimation: state.ChatReducer.activateAnimationOfBackgroundForScrolledMessage.id,
});

export default connect(mapStateToProps)(DefaultFileType);