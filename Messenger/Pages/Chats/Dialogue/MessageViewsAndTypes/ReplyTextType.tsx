import { View, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { MutableRefObject, useState, memo, useCallback, useRef } from 'react'
import {Message, messages} from '../tmpdata';
import styles from '../DialogueMessagesStyle';
import handlePress from './DefaultTextType';
import React from 'react';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

interface ReplyTextType {
  messages:Message[];
  message:Message;
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  id:number;
  scrollView:MutableRefObject<any>;
  cordsY:any;
}

  const arr = new Array(messages.length);
  for (let i = 0; i < messages.length; i++) {
    arr[i] = [undefined, undefined, undefined];
  }

const replyTextType = memo(({messages, message, setMessageMenuVisible, id, scrollView, cordsY}:ReplyTextType) => {
  const handlePress = useCallback((event:{ nativeEvent: { pageX: number; pageY: number } }) => {
    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;
    return { x:(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX,
             y:(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY,
             ID: id };
  }, []);
  const handleLinkTo = useCallback((messageID:any) => {
    const y = cordsY[--messageID][0] - ((height*0.88)/2-cordsY[messageID][1]/2);
    scrollView.current.scrollTo({y, animated:true});
  }, []);
  
  const replyMessage = messages.find(m => m.id === message.replyMessageID);
  
  // ___________________To close swipes for messages______________________
  const swipeableRef = useRef<Array<Array<Swipeable>>>(arr);
  swipeableRef.current[id] = [null, null, null];
  // _____________________________________________________________________

  return (
    <GestureHandlerRootView>
      <Swipeable overshootRight={false} 
        ref={(swipeable) => {
            if(swipeable != null && swipeable != undefined)
              swipeableRef.current[id][0]=swipeable;
          }
        } 
        friction={2} 
        renderRightActions={()=><View className='h-11 w-11 bg-blue-400'></View>} 
        onSwipeableRightOpen={()=>swipeableRef.current[id][0].close()}
      >
      {message.isUser?
        <View className='flex flex-col mr-3'>
          <View className='self-end' style={{maxWidth:'65%'}}>
            <Swipeable 
              ref={(swipeable) => {
                  if(swipeable != null && swipeable != undefined)
                    swipeableRef.current[id][1]=swipeable
                }
              } 
              onSwipeableRightOpen={()=>swipeableRef.current[id][1].close()} 
              overshootRight={false} 
              containerStyle={{overflow:'visible'}} 
              friction={2} 
              renderRightActions={()=><View className='w-6 h-6 bg-yellow-400'></View>}
            >
              <View className='flex-1 overflow-visible'>
                <Text className='self-end text-xs text-blue-700'>Denis</Text>
                <View className='flex flex-row max-h-full self-end'>
                  <TouchableOpacity activeOpacity={1} onPress={() => {handleLinkTo(message!.replyMessageID)}}>
                    <View style={[styles.messageTypeTextUser, styles.replyMessagePos]}>
                      <Text className='flex italic text-xs'>{replyMessage!.text.length>=20?replyMessage!.text.replace('\n', '').slice(0,20)+'...':replyMessage!.text}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.replyMessageLine}/>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
                  <View style={[styles.messageTypeTextUser, {marginVertical:5}]}>
                    <Text>{message.text}</Text>
                    <Text style={styles.messageTimeStamp}>
                      {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                      {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Swipeable>
          </View>
        </View>
        :
        <View style={[styles.replyContainer, {marginLeft:10}]}>
          <Swipeable 
            ref={(swipeable) => {
                if(swipeable != null && swipeable != undefined)
                  swipeableRef.current[id][1]=swipeable
              }
            } 
            onSwipeableRightOpen={()=>swipeableRef.current[id][1].close()} 
            overshootRight={false} 
            containerStyle={{overflow:'visible', alignSelf:'flex-start', maxHeight:'100%'}} 
            friction={2} 
            renderRightActions={()=><View className='w-6 h-6 bg-yellow-400'></View>}
          >
            <Text className='self-start text-xs text-blue-700'>You</Text>
            <View style={styles.replyMessageContainer}>
              <View style={styles.replyMessageLine}/>
              <TouchableOpacity style={{flex:1}} activeOpacity={1}>
                <View style={[styles.messageTypeTextNotUser, styles.replyMessagePos]}>
                  <Text style={styles.replyMessageFont}>{replyMessage!.text.length>=20?
                  replyMessage!.text.slice(0,20)+'...':replyMessage!.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
              <View style={styles.messageContainer}>
                <View style={message.text.length>40?[styles.messageTypeTextNotUser, styles.longMessage]:styles.messageTypeTextNotUser}>
                  <Text>{message.text}</Text>
                  <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                    {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                    {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Swipeable>
        </View>
      }
      </Swipeable>
    </GestureHandlerRootView>
)});

export default replyTextType;