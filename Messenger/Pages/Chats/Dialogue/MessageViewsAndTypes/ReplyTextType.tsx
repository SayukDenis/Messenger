import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MutableRefObject, useState, memo, useCallback, useRef, useEffect } from 'react';
import { styles } from './Styles/ReplyTextType';
import handlePress from './DefaultTextType';
import React from 'react';
import { MessageProps } from '../GeneralInterfaces/IMessage';
import User from '../../../../dao/Models/User';
import { wrapText } from './HelperFunctions/wrapText';

const {width, height} = Dimensions.get('window');

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
const replyTextType = ({messages, message, setMessageMenuVisible, id, scrollView, cordsY, author}:ReplyTextType) => {

  const onLayout = (event:any) => {
    const { width, height } = event.nativeEvent.layout;
    size = [...size, { ID: id, layout: { width, height }}];
  };
  
  const handlePress = useCallback((event:({ nativeEvent: { pageX: number; pageY: number } } | null)) => {
    if(!event) return { ID: id, pageX: 0, pageY: 0, width: 0, height: 0 };

    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;

    const component = size.find(c => c.ID === id);

    return { 
      ID: id,
      pageX: pageX, //(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX
      pageY: pageY, //(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY
      width: component.layout.width,
      height: component.layout.height,
    };
  }, []);

  const handleLinkTo = useCallback((messageID:any) => {
    const y = cordsY[--messageID][0] - ((height*0.88)/2-cordsY[messageID][1]/2);
    scrollView.current.scrollTo({y, animated:true});
  }, []);
  
  const replyMessage = messages.find(m => m.messageId === message.messageResponseId);

  return (
    <ScrollView 
      horizontal={true} 
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      style={styles.swipeableContainer}
      onScrollEndDrag={() => setMessageMenuVisible(handlePress(null), false)}
    >
      <View style={styles.replyContainer} >
        <TouchableOpacity 
          style={styles.innerReplyContainer}
          activeOpacity={1}
          onPress={(event) => setMessageMenuVisible(handlePress(event), true)}  
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
                  {replyMessage!=undefined&&replyMessage?.content?.length>=20?replyMessage?.content.replace('\n', '').slice(0,20)+'...':replyMessage?.content}
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
                  {replyMessage!=undefined&&replyMessage?.content.length>=20?replyMessage?.content.replace('\n', '').slice(0,20)+'...':replyMessage?.content}
                </Text>
              </View>
            </TouchableOpacity>
          </View>}
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={(event) => {setMessageMenuVisible(handlePress(event), true);}}
          >
            <View 
              onLayout={(event) => onLayout(event)}
              style={[message.author.userId==author.userId?styles.messageTypeTextUser:styles.messageTypeTextNotUser, {marginVertical:5}, message?.content.length>40&&styles.longMessage]}
            >
              <Text>{wrapText(message?.content, 40)}</Text>
              <Text style={message?.content.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
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