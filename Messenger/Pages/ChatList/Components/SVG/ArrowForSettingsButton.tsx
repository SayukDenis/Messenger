import React from "react";
import { Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";
import {
  screenHeight,
  screenWidth,
} from "../../Constants/ConstantsForChatlist";

interface ArrowForSettingsButtonProps {
  color?: string;
  arrowHeight?:number;
  arrowWidth?:number;
}

const ArrowForSettingsButton: React.FC<ArrowForSettingsButtonProps> = ({
  color = "#6A38AD",
  arrowHeight = screenHeight * 0.018,
  arrowWidth = screenWidth * 0.02
}) => {


  return (
    <Svg
      width={arrowWidth}
      height={arrowHeight}
      viewBox="0 0 12 22"
      fill="none"
    >
      <Path
        d="M10.502 10.8105L1.18641 20.7676"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M10.501 10.8105L1.18877 0.856697"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowForSettingsButton;
