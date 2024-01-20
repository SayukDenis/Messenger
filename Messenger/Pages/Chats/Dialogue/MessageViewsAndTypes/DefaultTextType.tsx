import { View, Text, TouchableOpacity, Alert, PanResponder, Dimensions, ScrollView, PixelRatio } from 'react-native';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { styles } from './Styles/DefaultTextType';
import React from 'react';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './HelperFunctions/wrapText';
import { screenHeight, screenWidth } from '../../../ChatList/Constants/ConstantsForChatlist';
import MessageItemSwipeToReplyIcon from '../SVG/MessageItemSwipeToReplyIcon';
import MessageItemStatusMessageReviewed from '../SVG/MessageItemStatusMessageReviewed';
import MessageItemStatusMessageNotReviewed from '../SVG/MessageItemStatusMessageNotReviewed';
import ILastWatchedMessage from '../../../../dao/Models/Chats/ILastWatchedMessage';

const {width, height} = Dimensions.get('window');

interface DefaultTextMessageProps {
  message:MessageProps;
  setMessageMenuVisible:(arg0: {ID:number, componentPageX:number, componentPageY:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean)=>void;
  id:number;
  author: User;
  userMessageLastWatched: ILastWatchedMessage | undefined;
}

let size:any[] = [];

const FONT_SIZE = 14 * PixelRatio.getFontScale();
const CHARS_PER_LINE = Math.round(width*1 / FONT_SIZE);
const DefaultTextType = ({ message, setMessageMenuVisible, id, author, userMessageLastWatched }:DefaultTextMessageProps) => {

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: id, layout: { width, height }}];
  };

  const measureHandler = async () => {
    return new Promise((resolve) => {
      if (componentRef.current) {
        componentRef.current.measure(
          async (pageX: number, pageY: number) => {
            resolve({ X: pageX, Y: pageY });
          }
        );
      } else {
        resolve({ X: 0, Y: 0 });
      }
    });
  };
  
  interface componentPageProps {
    X: number;
    Y: number;
  }
  const handlePress = useCallback(async (event:({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if(!event) return { ID: id, componentPageX:0, componentPageY: 0, pageX: 0, pageY: 0, width: 0, height: 0, message: undefined };

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
      message: message
    };
  }, []);


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

  interface coordProps {
    locationX_In: number;
    locationY_In: number;
  }
  const [pressCoordinations, setPressCoordinations] = useState({} as coordProps);
  const componentRef = useRef<TouchableOpacity>(null);

  return (
    <ScrollView 
      ref={scrollViewRef}
      horizontal={true} 
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      bounces={false}
      overScrollMode={'never'}
      onScrollEndDrag={onScrollEndDrag}
      showsHorizontalScrollIndicator={false}
      style={styles.swipeableContainer}
    >
      <TouchableOpacity 
        ref={componentRef}
        style={styles.mainContainer} 
        activeOpacity={1} 
        onPressIn={(event) => {
          const { locationX, locationY } = event.nativeEvent;
          setPressCoordinations({ locationX_In: locationX, locationY_In: locationY })
        }}
        onPressOut={async (event) => {
          const { locationX, locationY } = event.nativeEvent;
          const { locationX_In, locationY_In } = pressCoordinations;
          
          if(Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3) {
            await handlePress(event).then((layout) => {
              setMessageMenuVisible(layout, true);
            });
          }
        }}
      >
        <View style={[styles.messageBlockContainer, message.author.userId==author.userId&&{ justifyContent:'flex-end' }]}>
          <View style={styles.messageContainer}>
            <View 
              onLayout={onLayout}
              style={[message.author.userId==author.userId?styles.messageTypeTextUser:styles.messageTypeTextNotUser, message.content.length>CHARS_PER_LINE&&styles.longMessage, { overflow: 'hidden' }]}
            >
              <View style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: -1, opacity: 0.4, backgroundColor:message.author.userId===author.userId?'#E09EFF':'#fff' }} /> 
              <Text>{wrapText(message.content, CHARS_PER_LINE)}</Text>
              <Text style={message.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.isEdited?'edited ':''}
                {message.sendingTime.getHours().toString().padStart(2, '0')}:
                {message.sendingTime.getMinutes().toString().padStart(2, '0')}
              </Text>
            </View> 
          </View>
          { message.author.userId==author.userId && 
            <View style={{ position: 'absolute', right: 0, bottom: 10 , marginRight: -2.5 }}>
              { message.messageId!<=userMessageLastWatched?.value?.messageId!?<MessageItemStatusMessageReviewed />:<MessageItemStatusMessageNotReviewed /> }
            </View> }
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 55, paddingRight: 10 }}>
          <MessageItemSwipeToReplyIcon />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default memo(DefaultTextType);