import { View, Text, TouchableOpacity, Alert, PanResponder, Dimensions, ScrollView } from 'react-native';
import { memo, useCallback, useRef, useState } from 'react';
import {Message, messages} from '../tmpdata';
import { styles } from './Styles/DefaultTextType';
import React from 'react';

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

  //console.log('DefaultTextType-arr:', arr);

  const wrapText = (text, maxLength) => {
    const words = text.split(' ');
    let currentLine = '';
    const lines = [];
  
    words.forEach((word) => {
      if (word.length > maxLength) {
        // Break the long word into chunks of maxLength characters
        if(currentLine.length)
          lines.push(currentLine.trim());
        currentLine = '';
        for (let i = 0; i < word.length; i += maxLength) {
          lines.push(word.slice(i, i + maxLength).trim());
        }
      } else if ((currentLine + word).length > maxLength) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    });
  
    lines.push(currentLine.trim());

    return lines.join('\n').trim();
  };

  return (
    <ScrollView 
      horizontal={true} 
      alwaysBounceHorizontal={false} 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      style={styles.swipeableContainer}
      onScrollEndDrag={() => console.log('end')}
    >
      <TouchableOpacity 
        style={styles.mainContainer} 
        activeOpacity={1} 
        onPress={(event) => {setMessageMenuVisible(handlePress(event))}}
      >
        <View style={[styles.messageBlockContainer, message.isUser&&{ justifyContent:'flex-end' }]}>
          <View style={styles.messageContainer}>
            <View style={[message.isUser?styles.messageTypeTextUser:styles.messageTypeTextNotUser, message.text.length>40&&styles.longMessage]}>
              <Text>{wrapText(message.text, 40)}</Text>
              <Text style={message.text.length>40?[styles.messageTimeStamp, styles.longMessageTimeStamp]:styles.messageTimeStamp}>
                {message.edited?'edited ':''}
                {new Date(message.timeStamp).getHours().toString().padStart(2, '0')}:
                {new Date(message.timeStamp).getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
        </View>
        <View style={{width:50, backgroundColor:'pink'}}>
          <Text>Reply</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
});

export default DefaultTextType;