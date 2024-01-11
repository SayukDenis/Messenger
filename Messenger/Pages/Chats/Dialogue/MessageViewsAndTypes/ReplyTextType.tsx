import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MutableRefObject, memo, useCallback, useEffect, useRef, useState, } from 'react';
import { styles } from './Styles/ReplyTextType';
import React from 'react';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './HelperFunctions/wrapText';

const { width, height } = Dimensions.get('window');

interface ReplyTextType {
  messages: MessageProps[];
  message: MessageProps;
  setMessageMenuVisible: (arg0: {ID:number, pageX:number, pageY:number, width:number, height:number}, arg1: boolean)=>void;
  id: number;
  scrollView: MutableRefObject<any>;
  cordsY: any;
  author: User;
}

let size:any[] = [];

const FONT_SIZE = 10;
const CHARS_PER_LINE = Math.round(height*0.5 / FONT_SIZE);
const replyTextType = ({messages, message, setMessageMenuVisible, id, scrollView, cordsY, author}:ReplyTextType) => {

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: id, layout: { width, height }}];
  };
  
  const handlePress = useCallback((event:({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if(!event) return { ID: id, pageX: 0, pageY: 0, width: 0, height: 0, message: undefined };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === id);

    return { 
      ID: id,
      pageX: pageX, //(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX
      pageY: pageY, //(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY
      width: component.layout.width,
      height: component.layout.height,
      message: message
    };
  }, []);

  const handleLinkTo = useCallback((messageID:any) => {
    scrollView.current.scrollToIndex({ index: messages.length - messageID, animated: true, viewPosition: 0.5 });
  }, []);
 
  const replyMessage = messages.find(m => m.messageId==message.messageResponseId);



  const onScrollEndDrag = (event:any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;

    if (Math.round(contentOffsetX + scrollViewWidth) >= Math.round(contentWidth)) {
      scrollViewRef.current!.scrollTo({y:0,animated:true})
      setMessageMenuVisible(handlePress(null), false);
    }
  };
  const scrollViewRef = useRef<ScrollView>(null);

  interface coordProps {
    locationX_In: number;
    locationY_In: number;
  }
  const [pressCoordinations, setPressCoordinations] = useState({} as coordProps);
  return (
    <ScrollView 
      horizontal={true} 
      ref={scrollViewRef}
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      bounces={false}
      overScrollMode={'never'}
      showsHorizontalScrollIndicator={false}
      style={styles.swipeableContainer}
      onScrollEndDrag={onScrollEndDrag}
    >
      <View style={styles.replyContainer} >
        <TouchableOpacity 
          style={styles.innerReplyContainer}
          activeOpacity={1}
          onPressIn={(event) => {
            const { locationX, locationY } = event.nativeEvent;
            setPressCoordinations({ locationX_In: locationX, locationY_In: locationY })
          }}
          onPressOut={(event) => {
            const { locationX, locationY } = event.nativeEvent;
            const { locationX_In, locationY_In } = pressCoordinations;
            
            if(Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3)
              setMessageMenuVisible(handlePress(event), true)
          }} 
        >
          <Text style={[styles.replyUserNameFont, message.author.userId==author.userId&&{ alignSelf: 'flex-end' }]}>
            {message.author.userId==author.userId?'You':'Denis'}
          </Text>
          {message.author.userId==author.userId?
          <View style={styles.replyMessageContainer}>
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={() => {handleLinkTo(message!.messageResponseId)}}
              hitSlop={{ top: 10 }}
            >
              <View style={[styles.messageTypeTextUser, styles.replyMessagePos]}>
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
            <TouchableOpacity style={{flex:1}} activeOpacity={1}>
              <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos]}>
                <Text style={styles.replyMessageFont}>
                  {replyMessage!=undefined&&replyMessage?.content.length>=CHARS_PER_LINE?replyMessage?.content.replace('\n', '').slice(0,CHARS_PER_LINE)+'...':replyMessage?.content}
                </Text>
              </View>
            </TouchableOpacity>
          </View>}
          <TouchableOpacity 
            activeOpacity={1} 
            onPressIn={(event) => {
              const { locationX, locationY } = event.nativeEvent;
              setPressCoordinations({ locationX_In: locationX, locationY_In: locationY })
            }}
            onPressOut={(event) => {
              const { locationX, locationY } = event.nativeEvent;
              const { locationX_In, locationY_In } = pressCoordinations;
              
              if(Math.abs(locationX-locationX_In) < 3 && Math.abs(locationY-locationY_In) < 3)
                setMessageMenuVisible(handlePress(event), true)
            }}
          >
            <View 
              onLayout={(event) => onLayout(event)}
              style={[message.author.userId==author.userId?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginVertical:5}, message?.content.length>CHARS_PER_LINE&&styles.longMessage]}
            >
              <Text>{wrapText(message.content, CHARS_PER_LINE)}</Text>
              <Text style={message?.content.length>CHARS_PER_LINE?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.isEdited?'edited ':''}
                {new Date(message.sendingTime).getHours().toString().padStart(2, '0')}:
                {new Date(message.sendingTime).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={{width:50, backgroundColor:'pink'}}>
        <Text>Reply</Text>
      </View>
    </ScrollView>
)};

export default memo(replyTextType);