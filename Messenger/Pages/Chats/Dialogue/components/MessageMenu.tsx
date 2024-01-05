import { Dispatch, MutableRefObject, SetStateAction, memo } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Dimensions } from "react-native";
import React from 'react';
import { messageMenuProps } from "./interfaces/IMessageMenu";
import { styles } from './Styles/MessageMenu';

const {width, height} = Dimensions.get('window');

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

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={styles.container} 
      onPress={onOverlayPress}
    >
      <View style={[styles.buttonsContainer, { top:(coord?coord.y:0), left:(coord?coord.x:0) }]}>
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