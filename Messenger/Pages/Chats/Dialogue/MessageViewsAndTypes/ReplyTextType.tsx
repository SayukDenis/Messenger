import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MutableRefObject, memo, useCallback, useEffect, useRef, useState, } from 'react';
import { styles } from './Styles/ReplyTextType';
import React from 'react';
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

interface ReplyTextType {
  messages: MessageProps[];
  message: MessageProps;
  setMessageMenuVisible: (arg0: Layout, arg1: boolean)=>void;
  id: number;
  flatList: MutableRefObject<any>;
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

const replyTextType = ({messages, message, setMessageMenuVisible, id, flatList: scrollView, author, userMessageLastWatched, selecting}:ReplyTextType) => {

  const [sizeOfMessageContainer, setSizeOfMessageContainer] = useState([0, 0]);
  const [widthOfMessage, setWidthOfMessage] = useState(0);
  const [widthOfReply, setWidthOfReply] = useState(0);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if(!selecting) setSelected(false)
  }, [selecting]);

  const setSelectedCallback = () => {
    setSelected(true);
    dispatch(incrementNumberOfSelectedMessages());
  }

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: id, layout: { width, height }}];
    setWidthOfMessage(width);
  };

  const measureHandler = async () => {
    return new Promise((resolve) => {
      if (componentRef.current) {
        componentRef.current.measure(
          async (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
            resolve({ X: pageX, Y: pageY });
          }
        );
      } else {
        resolve({ X: 0, Y: 0 });
      }
    });
  };
  
  const dispatch = useDispatch();
  const handlePress = useCallback(async (event:({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if(!event) return { ID: id, componentPageX:0, componentPageY: 0, pageX: 0, pageY: 0, width: 0, height: 0, message: undefined, selectionCallback: undefined };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === id);

    const componentPage = await measureHandler();
    
    return { 
      ID: id,
      componentPageX: (componentPage as componentPageProps).X,
      componentPageY: (componentPage as componentPageProps).Y,
      pageX: pageX,
      pageY: pageY,
      width: component.layout.width,
      height: component.layout.height,
      message: message,
      selectionCallback: setSelectedCallback,
    };
  }, []);

  const handleLinkTo = useCallback((messageID:any) => {
    if(selecting) {
      setSelected(!selected) 
      dispatch(selected?decrementNumberOfSelectedMessages():incrementNumberOfSelectedMessages());
      return;
    }
    // if(selecting && Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
    //   setSelected(!selected) 
    //   return;
    // }
    scrollView.current.scrollToIndex({ index: messages.length - messageID, animated: true, viewPosition: 0.5 });
  }, []);
 
  const replyMessage = messages.find(m => m.messageId==message.messageResponseId);

  const onScrollEndDrag = async (event:any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;

    if (Math.round(contentOffsetX + scrollViewWidth) >= Math.round(contentWidth)) {
      scrollViewRef.current!.scrollTo({y:0,animated:true})
      await handlePress(null).then((layout) => {
        setMessageMenuVisible(layout, false);
      });
    }
  };
  const scrollViewRef = useRef<ScrollView>(null);

  const [pressCoordinations, setPressCoordinations] = useState({} as coordProps);
  const componentRef = useRef<TouchableOpacity>(null);

  const onPressIn = (event:any) => {
    const { locationX, locationY } = event.nativeEvent;
    setPressCoordinations({ locationX_In: locationX, locationY_In: locationY })
  }

  const onPressOut = async (event:any) => {
    const { locationX, locationY } = event.nativeEvent;
    const { locationX_In, locationY_In } = pressCoordinations;
    
    if(selecting && Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
      setSelected(!selected) 
      dispatch(selected?decrementNumberOfSelectedMessages():incrementNumberOfSelectedMessages());
      return;
    }
    
    if(Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
      await handlePress(event).then((layout) => {
        setMessageMenuVisible(layout, true);
      });
    }
  }

  const getSelectOffsetHorizontal = () => {
    return widthOfMessage > widthOfReply ? sizeOfMessageContainer[0] -(20+5) - widthOfMessage : sizeOfMessageContainer[0] -(20+5) - widthOfReply;
  }
  const getSelectOffsetVertical = () => {
    return sizeOfMessageContainer[1]/2-10;
  }

  return (
    <ScrollView 
      horizontal={true} 
      ref={scrollViewRef}
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      bounces={false}
      overScrollMode={'never'}
      showsHorizontalScrollIndicator={false}
      style={[styles.swipeableContainer, { paddingBottom: 5 }, selecting&&selected&&{ backgroundColor: 'rgba(32, 83, 44, 0.2)' }]}
      onScrollEndDrag={onScrollEndDrag}
    >
      <View style={styles.replyContainer} >
        <TouchableOpacity 
          ref={componentRef}
          onLayout={(event) => setSizeOfMessageContainer([event.nativeEvent.layout.width, event.nativeEvent.layout.height])}
          style={styles.innerReplyContainer}
          activeOpacity={1} 
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <Text style={[styles.replyUserNameFont, message.author.userId==author.userId&&{ alignSelf: 'flex-end' }]}>
            {message.author.userId==author.userId?'You':'Denis'}
          </Text>
          {message.author.userId==author.userId?
          <View 
            onLayout={(event) => setWidthOfReply(event.nativeEvent.layout.width)}
            style={styles.replyMessageContainer}>
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={() => {handleLinkTo(message!.messageResponseId)}}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
            >
              <View style={[styles.messageTypeTextUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting&&selected?1:0.4, backgroundColor:'#E09EFF' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content?.length>=CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,CHARS_PER_LINE)+'...':replyMessage?.content}
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
              onPress={() => {handleLinkTo(message!.messageResponseId)}}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10, }}
            >
              <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos, { overflow: 'hidden' }]}>
                <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting&&selected?1:0.4, backgroundColor:'#fff' }} /> 
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content.length>=CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </TouchableOpacity>
          </View>}
          <TouchableOpacity 
            activeOpacity={1} 
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <View 
              onLayout={(event) => onLayout(event)}
              style={[message.author.userId==author.userId?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginTop:Math.ceil(FONT_SIZE)+1}, message?.content.length>CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden' }]}
            >
              <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: selecting&&selected?1:0.4, backgroundColor:message.author.userId===author.userId?'#E09EFF':'#fff' }} /> 
              <Text>{wrapText(message.content, CHARS_PER_LINE)}</Text>
              <Text style={message?.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.isEdited?'edited ':''}
                {new Date(message.sendingTime).getHours().toString().padStart(2, '0')}:
                {new Date(message.sendingTime).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
            {selecting && <SelectButton 
              selected={selected}
              isUser={message.author.userId==author.userId}
              verticalOffset={getSelectOffsetVertical()}
              horizontalOffset={getSelectOffsetHorizontal()}
            />}
          </TouchableOpacity>
        </TouchableOpacity>
        { message.author.userId==author.userId && 
          <View style={{ position: 'absolute', right: 0, bottom: 5 , marginRight: -2.5 }}>
            { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
          </View> }
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 55 }}>
        <MessageItemSwipeToReplyIcon />
      </View>
    </ScrollView>
)};

export default memo(replyTextType);