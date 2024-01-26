import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { styles } from './Styles/ReplyTextType';
import { wrapText } from './HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import MessageItemSwipeToReplyIcon from '../SVG/MessageItemSwipeToReplyIcon';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import { CHARS_PER_LINE, FONT_SIZE, height, width } from '../DialogueConstants';
import SelectButton from './SemiComponents/SelectButton';
import { decrementNumberOfSelectedMessages, incrementNumberOfSelectedMessages, resetNumberOfSelectedMessages, setAnimationOfBackgroundForScrolledMessage } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { connect } from 'react-redux';
import { ReplyTextTypeProps, ReplyTextTypeState, componentPageProps, coordProps } from './Interfaces/IReplyTextType';
import ReplyMessage from './HelperComponents/ReplyMessage';

let size:any[] = [];

class ReplyTextType extends Component<ReplyTextTypeProps> {
  state = {
    sizeOfMessageContainer: [0, 0],
    widthOfMessage: 0,
    widthOfReply: 0,
    selected: false,
    animate: false,
    pressCoordinations: {} as coordProps,
  };

  componentDidMount() { }

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

    if (!selecting && prevProps.selecting) {
      this.resetSelected();
    }
  }

  shouldComponentUpdate(nextProps: Readonly<ReplyTextTypeProps>, nextState: Readonly<ReplyTextTypeState>, nextContext: any): boolean {
    if(nextProps.idForAnimation === this.props.message.messageId) {
      this.state.animate = true;
      return true;
    } else if(nextProps.selecting != this.props.selecting) {
      this.setState({ selecting: nextProps.selecting });
      return true;
    } else if(nextState.selected != this.state.selected) {
      this.setState({ selected: nextState.selected })
      return true;
    } else {
      return false;
    }
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
            resolve({ X: pageX, Y: pageY });
          }
        );
      } else {
        resolve({ X: 0, Y: 0 });
      }
    });
  };

  handlePress = async (event: ({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if (!event) return { ID: this.props.id, componentPageX:0, componentPageY: 0, pageX: 0, pageY: 0, width: 0, height: 0, message: undefined, selectionCallback: undefined };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === this.props.id);

    const componentPage = await this.measureHandler();

    return { 
      ID: this.props.id,
      componentPageX: (componentPage as componentPageProps).X,
      componentPageY: (componentPage as componentPageProps).Y,
      pageX: pageX,
      pageY: pageY,
      width: component.layout.width,
      height: component.layout.height,
      message: this.props.message,
      selectionCallback: this.setSelectedCallback,
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
    
    if (selecting && Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
      this.setState({ selected: !selected });
      this.props.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      return;
    }

    if (Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
      await this.handlePress(event).then((layout) => {
        this.props.setMessageMenuVisible(layout, true);
      });
    }
  }

  getSelectOffsetHorizontal = () => {
    const { widthOfMessage, widthOfReply } = this.state;
    return widthOfMessage > widthOfReply ? this.state.sizeOfMessageContainer[0] - (20 + 5) - widthOfMessage : this.state.sizeOfMessageContainer[0] - (20 + 5) - widthOfReply;
  }

  getSelectOffsetVertical = () => {
    return this.state.sizeOfMessageContainer[1] / 2 - 10;
  }

  replyMessage = this.props.messages.find(m => m.messageId==this.props.message.messageResponseId);
  render() {
    const { selecting } = this.props;
    const { selected } = this.state;

    return (
      <ScrollView 
        horizontal={true} 
        ref={(ref) => this.scrollViewRef = ref}
        alwaysBounceHorizontal={false} 
        pagingEnabled 
        bounces={false}
        overScrollMode={'never'}
        showsHorizontalScrollIndicator={false}
        style={[styles.swipeableContainer, { paddingBottom: 5 }, selecting && selected && { backgroundColor: 'rgba(32, 83, 44, 0.2)' }]}
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
              {this.props.message.author.userId == this.props.author.userId ? 'You' : 'Denis'}
            </Text>
            <ReplyMessage 
              message={this.props.message}
              replyMessage={this.replyMessage!}
              author={this.props.author}
              selecting={selecting}
              selected={selected}
              handleLinkTo={this.handleLinkTo}
            />
            <TouchableOpacity 
              activeOpacity={1} 
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
            >
              <View 
                onLayout={(event) => this.onLayout(event)}
                style={[this.props.message.author.userId == this.props.author.userId ? styles.messageTypeTextUser : styles.messageTypeTextNotUser, {marginTop:Math.ceil(FONT_SIZE)+1}, this.props.message?.content.length > CHARS_PER_LINE && styles.longMessage, { overflow: 'hidden' }]}
              >
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting && selected ? 1 : 0.4, backgroundColor: this.props.message.author.userId === this.props.author.userId ? '#E09EFF' : '#fff' }} /> 
                <Text>{wrapText(this.props.message.content, CHARS_PER_LINE)}</Text>
                <Text style={this.props.message?.content.length > CHARS_PER_LINE ? [styles.messageTimeStamp, styles.longMessageTimeStamp] : styles.messageTimeStamp}>
                  {this.props.message.isEdited ? 'edited ' : ''}
                  {new Date(this.props.message.sendingTime).getHours().toString().padStart(2, '0')}:
                  {new Date(this.props.message.sendingTime).getMinutes().toString().padStart(2, '0')}
                </Text>
              </View>
              {selecting && <SelectButton 
                selected={selected}
                isUser={this.props.message.author.userId == this.props.author.userId}
                verticalOffset={this.getSelectOffsetVertical()}
                horizontalOffset={this.getSelectOffsetHorizontal()}
              />}
            </TouchableOpacity>
          </TouchableOpacity>
          { this.props.message.author.userId == this.props.author.userId && 
            <View style={{ position: 'absolute', right: 0, bottom: 5 , marginRight: -2.5 }}>
              { this.props.message.messageId! <= this.props.userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
            </View> }
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 55 }}>
          <MessageItemSwipeToReplyIcon />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  idForAnimation: state.ChatReducer.activateAnimationOfBackgroundForScrolledMessage.id,
});

export default connect(mapStateToProps)(ReplyTextType);