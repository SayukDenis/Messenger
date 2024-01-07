import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

function FooterVideoButton() {
  return (
    <Svg
      width={screenWidth * 0.1} 
      height={screenHeight * 0.02}
      viewBox="0 0 15 10"
      fill="none"
    >
      <Path d="M7.637 5l5.318-3.778V8.78L7.637 5z" fill="#AF59CE" />
      <Path fill="#AF59CE" d="M0.545898 0.636719H9.409538V9.363989H0.545898z" />
    </Svg>
  );
}

export default FooterVideoButton;
