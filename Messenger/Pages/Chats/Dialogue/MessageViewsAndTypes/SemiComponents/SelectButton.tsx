import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SelectButtonMarkIcon from '../../../SemiComponents/SVG/SelectButtonMarkIcon';

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
    width: 20, 
    height: 20, 
    borderRadius: 9999, 
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SelectButton;