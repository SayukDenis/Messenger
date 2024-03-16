import { View, DimensionValue } from 'react-native';
import React, { Component } from 'react';
import { LineSeparatorProps } from './Interfaces/ILineSeparator';

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