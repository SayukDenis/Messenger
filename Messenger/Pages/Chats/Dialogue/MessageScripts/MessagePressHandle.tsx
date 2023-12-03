import { Touchable, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');

const buttons = [
  {
    text: 'Reply'
  }, 
  {
    text: 'Edit'
  },
  {
    text: 'Copy'
  },
  {
    text: 'Pin'
  },
  {
    text: 'Forward'
  },
  {
    text: 'Delete'
  },
  {
    text: 'Select'
  }
];

export default function messagePressHandle() {
  return (
    <TouchableOpacity style={{width: width, height: height, zIndex:999, backgroundColor:'rgba(255,255,255,0.5)'}}> 
      <View style={{zIndex:1000}}>
        {buttons.map((but, index) => 
          <TouchableOpacity>
            <Text>{but.text}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
} 