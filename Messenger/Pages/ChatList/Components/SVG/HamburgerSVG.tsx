import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import { connect } from 'react-redux';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const HamburgerSVG = () => {
  return (
    <Svg width={screenWidth * 0.15} height={screenHeight * 0.026} viewBox="0 0 32 14" fill="none">
      <Path d="M2 12H30" stroke="#A19C91" strokeWidth="2.3" strokeLinecap="round" />
      <Path d="M2 7H30" stroke="#A19C91" strokeWidth="2.3" strokeLinecap="round" />
      <Path d="M2 2H30" stroke="#A19C91" strokeWidth="2.3" strokeLinecap="round" />
    </Svg>
  );
};

export default connect(null)(HamburgerSVG);