import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { MutableRefObject, memo, useCallback, useEffect, useRef, useState } from 'react';
import { styles } from './Styles/ReplyTextType';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import MessageItemSwipeToReplyIcon from '../SVG/MessageItemSwipeToReplyIcon';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import ILastWatchedMessage from '../../../../dao/Models/Chats/ILastWatchedMessage';
import { Layout } from '../GeneralInterfaces/ILayout';
import { CHARS_PER_LINE, FONT_SIZE } from '../DialogueConstants';
import SelectButton from './SemiComponents/SelectButton';
import { decrementNumberOfSelectedMessages, incrementNumberOfSelectedMessages } from '../../../../ReducersAndActions/Actions/ChatActions/ChatActions';
import { useDispatch } from 'react-redux';

interface ReplyTextTypeProps {
  messages: MessageProps[];
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean)=>void;
  id: number;
  scrollView: MutableRefObject<any>;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
  selecting: boolean;
}

interface coordProps {
  locationX_In: number;
  locationY_In: number;
}

interface componentPageProps {
  X: number;
  Y: number;
}

let size:any[] = [];

class ReplyTextType extends PureComponent<ReplyTextTypeProps> {
  state = {
    sizeOfMessageContainer: [0, 0],
    widthOfMessage: 0,
    widthOfReply: 0,
    selected: false,
    pressCoordinations: {} as coordProps,
  };

  componentDidMount() {
    const { selecting } = this.props;
    if (!selecting) {
      this.setState({ selected: false });
    }
  }

  componentDidUpdate(prevProps: ReplyTextTypeProps) {
    const { selecting } = this.props;
    if (!selecting && prevProps.selecting) {
      this.setState({ selected: false });
    }
  }

  setSelectedCallback = () => {
    this.setState({ selected: true });
    this.dispatch(incrementNumberOfSelectedMessages());
  }

  onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: this.props.id, layout: { width, height } }];
    this.setState({ widthOfMessage: width });
  };

  componentRef = useRef<TouchableOpacity>(null);
  measureHandler = async () => {
    return new Promise((resolve) => {
      if (this.componentRef) {
        this.componentRef.current!.measure(
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

  dispatch = useDispatch();
  handlePress = useCallback(async (event: ({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
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
  }, []);

  scrollViewRef = useRef<ScrollView>(null);
  onScrollEndDrag = async (event:any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;

    if (Math.round(contentOffsetX + scrollViewWidth) >= Math.round(contentWidth)) {
      this.scrollViewRef.current!.scrollTo({y:0,animated:true})
      await this.handlePress(null).then((layout:any) => {
        this.props.setMessageMenuVisible(layout, false);
      });
    }
  };

  handleLinkTo = useCallback((messageID:any) => {
    const { selecting } = this.props;
    const { selected } = this.state;
    if (selecting) {
      this.setState({ selected: !selected });
      this.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
      return;
    }

    this.props.scrollView.current.scrollToIndex({ index: this.props.messages.length - messageID, animated: true, viewPosition: 0.5 });
  }, []);
  
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
      this.dispatch(selected ? decrementNumberOfSelectedMessages() : incrementNumberOfSelectedMessages());
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
        ref={this.props.scrollView}
        alwaysBounceHorizontal={false} 
        pagingEnabled 
        bounces={false}
        overScrollMode={'never'}
        showsHorizontalScrollIndicator={false}
        style={[styles.swipeableContainer, { paddingBottom: 5 }, selecting && selected && { backgroundColor: 'rgba(32, 83, 44, 0.2)' }]}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        <View style={styles.replyContainer} >
          <TouchableOpacity 
            ref={this.componentRef}
            onLayout={(event) => this.setState({ sizeOfMessageContainer: [event.nativeEvent.layout.width, event.nativeEvent.layout.height] })}
            style={styles.innerReplyContainer}
            activeOpacity={1} 
            onPressIn={this.onPressIn}
            onPressOut={this.onPressOut}
          >
            <Text style={[styles.replyUserNameFont, this.props.message.author.userId==this.props.author.userId && { alignSelf: 'flex-end' }]}>
              {this.props.message.author.userId == this.props.author.userId ? 'You' : 'Denis'}
            </Text>
            {this.props.message.author.userId == this.props.author.userId ?
              <View 
                onLayout={(event) => this.setState({ widthOfReply: event.nativeEvent.layout.width })}
                style={styles.replyMessageContainer}>
                <TouchableOpacity 
                  activeOpacity={1} 
                  onPress={() => { this.handleLinkTo(this.props.message!.messageResponseId) }}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
                >
                  <View style={[styles.messageTypeTextUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                    <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting && selected ? 1 : 0.4, backgroundColor: '#E09EFF' }} /> 
                    <Text style={styles.replyMessageFont}>
                      {this.replyMessage != undefined && this.replyMessage?.content?.length >= CHARS_PER_LINE ? this.replyMessage?.content.replace('\n', '').slice(0, CHARS_PER_LINE) + '...' : this.replyMessage?.content}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.replyMessageLine}/>
              </View>
              :
              <View style={styles.replyMessageContainer}>
                <View style={styles.replyMessageLine}/>
                <TouchableOpacity 
                  activeOpacity={1}
                  style={{ flex:1 }}
                  onPress={() => { this.handleLinkTo(this.props.message!.messageResponseId) }}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
                >
                  <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                    <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting && selected ? 1 : 0.4, backgroundColor: '#fff' }} /> 
                    <Text style={styles.replyMessageFont}>
                      {this.replyMessage != undefined && this.replyMessage?.content.length >= CHARS_PER_LINE ? this.replyMessage?.content.replace('\n', '').slice(0, CHARS_PER_LINE) + '...' : this.replyMessage?.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>}
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

export default memo(ReplyTextType);