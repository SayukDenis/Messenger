import { View, Text, TouchableOpacity, Alert, PanResponder, Dimensions } from 'react-native';
import { memo, useCallback, useRef, useState } from 'react';
import {Message, messages} from '../tmpdata';
import styles from '../DialogueMessagesStyle';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const {width, height} = Dimensions.get('window');

interface DefaultTextMessageProps {
  messages:Message[];
  message:Message;
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  id:number;
}

const arr = new Array(messages.length);
for(let i = 0; i < messages.length; i++)
  arr[i] = [0];

const DefaultTextType = memo(({messages, message, setMessageMenuVisible, id}:DefaultTextMessageProps) => {
  const handlePress = useCallback((event:{ nativeEvent: { pageX: number; pageY: number } }) => {
    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;
    return { x:(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX,
             y:(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY,
             ID: id };
  }, [])

  const swipeableRef = useRef<Array<Swipeable[]>>(arr);

  //console.log('DefaultTextType-arr:', arr);

  return (
    <GestureHandlerRootView>
      <Swipeable overshootRight={false} ref={(swipeable) => {swipeableRef.current[id][0]=swipeable!}}  friction={2} onSwipeableRightOpen={()=>swipeableRef.current[id][0].close()} renderRightActions={()=><View className='h-11 w-11 bg-blue-500'></View>}>
        <TouchableOpacity className='overflow-visible' activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
          {message.isUser?
            <View className='mr-3 justify-end' style={styles.messageContainer}>
              <View className='flex self-end' style={{maxWidth:'65%'}}>
                <Swipeable overshootRight={false} containerStyle={{overflow:'visible'}} ref={(swipeable) => {swipeableRef.current[id][1]=swipeable!}} friction={2} onSwipeableRightOpen={()=>swipeableRef.current[id][1].close()} renderRightActions={()=><View className='w-6 h-6 bg-yellow-400'></View>}>
                  <View style={message.text.length>40?[styles.messageTypeTextUser, styles.longMessage]:styles.messageTypeTextUser}>
                    <Text>{message.text}</Text>
                    <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                      {message.edited?'edited ':''}
                      {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                      {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
                    </Text>
                  </View>
                </Swipeable>
              </View>
            </View> //Денис лох і вонючка
          :
          <View style={[styles.messageContainer, {marginLeft:10}]}>
            <View style={{maxWidth: '65%'}}>
              <Swipeable overshootRight={false} containerStyle={{overflow:'visible'}} ref={(swipeable) => {swipeableRef.current[id][1]=swipeable!}} friction={2} onSwipeableRightOpen={()=>swipeableRef.current[id][1].close()} renderRightActions={()=><View className='w-6 h-6 bg-yellow-400'></View>}>
                <View style={message.text.length>40?[styles.messageTypeTextNotUser, styles.longMessage]:styles.messageTypeTextNotUser}>
                  <Text>{message.text}</Text>
                  <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                    {message.edited?'edited ':''}
                    {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                    {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
                  </Text>
                </View>
              </Swipeable>
            </View>
          </View>}
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
});

export default DefaultTextType;