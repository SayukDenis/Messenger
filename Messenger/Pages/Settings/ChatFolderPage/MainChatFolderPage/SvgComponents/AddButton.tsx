import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const AddButton = () => {
  return (
    <View>
      <Svg width={windowHeight*0.015} height={windowHeight*0.015} viewBox="0 0 8 8" fill="none">
        <Line x1={4.01465} x2={4.01465} y2={8} stroke="#2B1D1D" strokeWidth={0.5} />
        <Line x1={8} y1={3.9834} y2={3.9834} stroke="#2B1D1D" strokeWidth={0.5} />
      </Svg>
    </View>
  );
};

export default AddButton;