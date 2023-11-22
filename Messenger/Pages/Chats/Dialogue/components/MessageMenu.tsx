import { Dispatch, MutableRefObject, SetStateAction, memo } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Dimensions } from "react-native";
import React from 'react';

const {width, height} = Dimensions.get('window');

interface messageMenuProps {
  isVisible:boolean;
  onOverlayPress:()=>void;
  coord:{x:number;y:number};
  onReplyPress:()=>void;
  onEditPress:()=>void;
  isUser:boolean;
  onDeletePress:()=>void;
}

const messageMenu = memo(({isVisible, onOverlayPress, coord, onReplyPress, onEditPress, isUser, onDeletePress}:messageMenuProps) => {
  if(!isVisible) 
      return null;
    
  const buttons = [
    {
      text: 'Reply',
      action: onReplyPress,
    },
    {
      text: 'Edit',
      action: onEditPress,
    },
    {
      text: 'Copy',
      action: () => {},
    },
    {
      text: 'Pin',
      action: () => {},
    },
    {
      text: 'Forward',
      action: () => {},
    },
    {
      text: 'Delete',
      color: 'darkred',
      action: onDeletePress
    },
    {
      text: 'Select',
      action: () => {},
    },
  ];

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor:'transparent', 
      flex:1, 
      zIndex:5,
    },
    buttonsContainer: {
      position:'absolute', 
      top:(coord?coord.y:0), 
      left:(coord?coord.x:0),
    },
    button: {
      backgroundColor:'rgb(231,230,228)',
      paddingHorizontal:10, 
      paddingVertical:5, 
      borderRadius:15, 
      borderWidth:0.2, 
      borderColor:'rgb(83,83,83)', 
      width:width*0.2
    }
  })

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={styles.container} 
      onPress={onOverlayPress}
    >
      <View style={styles.buttonsContainer}>
        {buttons.map((button, index) => button.text=='Edit'&&!isUser? null: 
          <TouchableOpacity 
            key={index} 
            onPress={() => {button.action(); onOverlayPress()}} 
            activeOpacity={1} 
            style={styles.button}
          >
            <Text style={{color:button.color}}>{button.text}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
})

export default messageMenu;