import { Dispatch, SetStateAction, memo } from "react";
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
      action: onDeletePress,
    },
    {
      text: 'Select',
      action: () => {},
    },
  ]

  return (
    <TouchableOpacity activeOpacity={1} style={{...StyleSheet.absoluteFillObject, backgroundColor:'rgba(0,0,0,0.15)', flex:1, zIndex:2,}} onPress={onOverlayPress}>
      <View style={{position:'absolute', top:(coord?coord.y:0), left:(coord?coord.x:0)}}>
        {buttons.map((button, index) => 
         button.text=='Edit'&&!isUser? null: 
          <TouchableOpacity key={index} onPress={() => {button.action(); onOverlayPress()}} activeOpacity={1} style={{backgroundColor:'rgb(231,230,228)', paddingHorizontal:10, paddingVertical:5, borderRadius:15, borderWidth:0.2, borderColor:'rgb(83,83,83)', width:width*0.2}}>
            <Text style={{color:button.color}}>{button.text}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
})

export default messageMenu;