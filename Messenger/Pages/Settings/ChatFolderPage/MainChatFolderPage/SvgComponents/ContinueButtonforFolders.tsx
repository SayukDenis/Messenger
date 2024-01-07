import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ContineButtForFolders = () => {
  return (
    <Svg width={screenWidth * 0.17} height={screenHeight * 0.044} viewBox="0 0 12 22" fill="none">
    <Path
      d="M10.502 10.8105L1.18641 20.7676"
      stroke="#2B1D1D"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <Path
      d="M10.501 10.8105L1.18877 0.856697"
      stroke="#2B1D1D"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
  );
};

export default ContineButtForFolders;