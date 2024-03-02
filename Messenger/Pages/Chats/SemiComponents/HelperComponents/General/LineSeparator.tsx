import { View, DimensionValue } from 'react-native';
import React from 'react';

interface LineSeparatorProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  marginHorizontal?: number;
}

const LineSeparator = ({ color='#fff', width=1, height='100%', marginHorizontal=0 }:LineSeparatorProps) => {
  return (
    <View style={{ 
        backgroundColor: color, 
        width: width as DimensionValue, 
        height: height as DimensionValue, 
        marginHorizontal: marginHorizontal 
      }} 
    />
  );
}

export default LineSeparator;