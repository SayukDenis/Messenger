import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const BackButtonForHeaderChatListSVG = () => {
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

export default connect(null)(BackButtonForHeaderChatListSVG);