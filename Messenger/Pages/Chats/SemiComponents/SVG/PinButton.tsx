import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function PinButton({ size = screenHeight * 0.016, style = {}, color = '#000' }:{ size?: number, style?: any, color?: string }) {
  return (
    <Svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 13 12"
      fill="none"
    >
      <Path
        d="M6.26 2.4L1.42 7.224a2 2 0 000 2.832l.538.536a2 2 0 002.824 0l6.764-6.742a1.87 1.87 0 00-.126-2.762v0a1.87 1.87 0 00-2.514.114L2.892 7.197a1.36 1.36 0 000 1.926v0a1.36 1.36 0 001.92 0L9.148 4.8"
        stroke={color}
        strokeWidth={0.7}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default PinButton;
