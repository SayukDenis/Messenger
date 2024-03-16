import React from 'react';
import { View, StyleSheet } from 'react-native';
import { screenHeight,screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import Svg, { Path, Line } from 'react-native-svg';

const SearchButton = () => {
  return (
      <Svg width={screenWidth*0.06} height={screenHeight*0.05}  viewBox="0 0 13 17" fill="none">
        <Path
          d="M8.47883 4.72178C8.47883 6.90105 6.74665 8.64355 4.63941 8.64355C2.53218 8.64355 0.8 6.90105 0.8 4.72178C0.8 2.54251 2.53218 0.8 4.63941 0.8C6.74665 0.8 8.47883 2.54251 8.47883 4.72178Z"
          stroke="#2B1D1D"
          strokeWidth={1.6}
        />
        <Line
          y1="-0.8"
          x2="7.19244"
          y2="-0.8"
          transform="matrix(0.700858 0.713301 -0.700858 0.713301 6.95898 7.86963)"
          stroke="#2B1D1D"
          strokeWidth={1.6}
        />
      </Svg>
  );
};



export default SearchButton;