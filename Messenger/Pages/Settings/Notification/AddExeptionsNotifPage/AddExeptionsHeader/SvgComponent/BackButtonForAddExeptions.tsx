import React from 'react';
import { screenHeight,screenWidth } from '../../../../../ChatList/Constants/ConstantsForChatlist';
import { Svg, Rect, Path } from 'react-native-svg';



const BackButtonForAddExeptions = () => {
  return (
    <Svg width={screenWidth * 0.09} height={screenHeight * 0.038} viewBox="0 0 22 12" fill="none">
         <Rect
        width={1.62636}
        height={14.8713}
        rx={0.813181}
        transform="matrix(-.82518 -.56523 .73028 -.68283 11.138 12)"
        fill="#2B1D1D"
      />
      <Path
        d="M11.445 10.44c.322.314.28.768-.096 1.014a1.06 1.06 0 01-1.263-.12L.583 2.104C.261 1.79.303 1.337.679 1.09a1.06 1.06 0 011.263.12l9.503 9.23z"
        fill="#2B1D1D"
      />
    </Svg>
  );
};

export default BackButtonForAddExeptions;