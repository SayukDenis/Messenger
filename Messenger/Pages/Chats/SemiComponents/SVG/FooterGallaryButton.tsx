import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

function FooterGallaryButton() {
  return (
    <Svg
      width={screenHeight * 0.026} 
      height={screenHeight * 0.026}
      viewBox="0 0 12.5 12.5"
      fill="none"
    >
      <Circle cx={1.5} cy={1.5} r={1.5} fill="#2B1D1D" />
      <Path d="M8.125 3l4.222 7.5H3.903L8.125 3z" fill="#2B1D1D" />
      <Path d="M3.25 6l2.815 4.5H.435L3.25 6z" fill="#2B1D1D" />
    </Svg>
  );
}

export default FooterGallaryButton;
