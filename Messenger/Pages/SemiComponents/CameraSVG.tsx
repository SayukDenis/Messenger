import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";
interface CameraSVGProps {
  kef?: number;
  strokeColor?: string;
}
const CameraSVG: React.FC<CameraSVGProps> = ({
  kef = 1,
  strokeColor = "#2B1D1D",
}) => {
  const width = screenWidth * 0.154 * kef;
  return (
    <Svg width={width} height={width} viewBox="0 0 44 40" fill="none">
      <Path
        d="M22.5 38.9999C10.5 38.9999 0.999978 39.4999 1 31.4999C1.00002 23.4999 0.999971 21.4999 1.00003 12.9999C1.00009 4.49988 9.99998 6.49988 12.5 6.49988C12.5 6.49988 13.158 5.37548 14.0001 3.00007C14.8422 0.624661 18.335 1.1264 22.5001 1"
        stroke={strokeColor}
      />
      <Path
        d="M22.0001 38.9999C34.0001 38.9999 43.5001 39.4999 43.5001 31.4999C43.5001 23.4999 43.5002 21.4999 43.5001 12.9999C43.5 4.49988 34.5001 6.49988 32.0001 6.49988C32.0001 6.49988 31.3421 5.37548 30.5 3.00007C29.6579 0.624661 26.1651 1.1264 22 1"
        stroke={strokeColor}
      />
      <Circle cx="22.5" cy="22.4999" r="7.5" stroke={strokeColor} />
    </Svg>
  );
};

export default CameraSVG;
