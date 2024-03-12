import { View, DimensionValue } from 'react-native';
import React, { Component } from 'react';

interface LineSeparatorProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  marginHorizontal?: number;
}

class LineSeparator extends Component<LineSeparatorProps> {
  render(): React.ReactNode {
    const { color='#fff', width=1, height='100%', marginHorizontal = 0 } = this.props;

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
}

export default LineSeparator;