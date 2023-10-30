import { View, Text, TouchableOpacity, Alert, PanResponder, Dimensions } from 'react-native';
import { memo, useCallback, useRef, useState } from 'react';
import {Message, messages} from '../tmpdata';
import styles from '../DialogueMessagesStyle';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

const {width, height} = Dimensions.get('window');

interface DefaultTextMessageProps {
  messages:Message[];
  message:Message;
  setMessageMenuVisible:(arg0: {x:number, y:number, ID:number})=>void;
  id:number;
}

const DefaultTextType = memo(({messages, message, setMessageMenuVisible, id}:DefaultTextMessageProps) => {
  const handlePress = useCallback((event:{ nativeEvent: { pageX: number; pageY: number } }) => {
    const { nativeEvent } = event;
    const { pageX, pageY } = nativeEvent;
    // Alert.alert('Aboba', `x:${pageX}\nphoneX:${width}\n\ny:${pageY}\nphoneY:${height}`)
    return { x:(pageX<(width/8)?(width/8):pageX)>(width*0.6)?(width*0.6):pageX,
             y:(pageY<(height/12)?(height/12):pageY)>(height*5/7)?(height*5/7):pageY,
             ID: id };
  }, [])

  const arr = new Array(messages.length);
  for(let i = 0; i < messages.length; i++)
    arr[i] = [0];

  const swipeableRef = useRef<Array<Swipeable[]>>(arr);

  return (
    <GestureHandlerRootView>
      <Swipeable ref={(swipeable) => {swipeableRef.current[id][0]=swipeable!}}  friction={5} onSwipeableOpen={()=>swipeableRef.current[id][0].close()} renderLeftActions={()=><View style={{width:50, height:50, backgroundColor:'blue'}}></View>}>
        <TouchableOpacity style={{backgroundColor:'red'}} activeOpacity={1} onPress={(event) => {setMessageMenuVisible(handlePress(event));}}>
          {message.isUser?
            <View style={[styles.messageContainer, {justifyContent:'flex-end'}]}>
              <View style={{maxWidth:'65%', alignSelf:'flex-end'}}>
                <Swipeable ref={(swipeable) => {swipeableRef.current[id][1]=swipeable!}} friction={5} onSwipeableOpen={()=>swipeableRef.current[id][1].close()} renderLeftActions={()=><View style={{width:25, height:25, backgroundColor:'yellow'}}></View>}>
                  <View style={{display:'flex', flexDirection:'row'}}>
                    <View style={message.text.length>40?[styles.messageTypeTextUser, styles.longMessage]:styles.messageTypeTextUser}>
                      <Text>{message.text}</Text>
                      <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                        {message.edited?'edited ':''}
                        {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                        {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
                      </Text>
                    </View>
                    <Text style={{alignSelf:'center'}}> -</Text>
                  </View>
                </Swipeable>
              </View>
            </View> //Денис лох і вонючка
          :
          <View style={styles.messageContainer}>
            <View style={{maxWidth:'65%', alignSelf:'stretch'}}>
              <Swipeable ref={(swipeable) => {swipeableRef.current[id][2]=swipeable!}} friction={5} onSwipeableOpen={()=>swipeableRef.current[id][2].close()} renderLeftActions={()=><View style={{width:25, backgroundColor:'yellow'}}></View>}>
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