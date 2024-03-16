import React from "react";
import Svg, { Line } from "react-native-svg";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

const TickMarkSelectChatSVG = () => {
  return (
    <Svg
      width={screenHeight * 0.019}
      height={screenHeight * 0.019}
      viewBox="0 0 8 6"
      fill="none"
    >
      <Line x1="1.1429" y1="2.55959" x2="3.69407" y2="5.35731" stroke="white" />
      <Line
        x1="2.98671"
        y1="5.29067"
        x2="7.11265"
        y2="1.30751"
        stroke="white"
      />
    </Svg>
  );
};

export default TickMarkSelectChatSVG;
