import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SelectButtonMarkIcon from '../../SVG/SelectButtonMarkIcon';
import { SIZE_OF_SELECT_BUTTON } from '../../ChatConstants';

interface SelectButtonProps {
  selected: boolean;
  isUser: boolean;
  verticalOffset: number;
  horizontalOffset: number;
}

const SelectButton = ({ selected, isUser, verticalOffset, horizontalOffset }:SelectButtonProps) => {
  return (
    <View style={[styles.container, { bottom: verticalOffset, }, isUser?{left: horizontalOffset}:{right: horizontalOffset}]} >
      {selected && <SelectButtonMarkIcon />}  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SIZE_OF_SELECT_BUTTON, 
    height: SIZE_OF_SELECT_BUTTON, 
    borderRadius: 9999, 
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SelectButton;