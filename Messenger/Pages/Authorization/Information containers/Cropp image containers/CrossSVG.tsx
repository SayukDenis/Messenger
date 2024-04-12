import React from "react";
import { Svg, Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

interface CrossSVGProps {
  radius?: number;
}
const CrossSVG: React.FC<CrossSVGProps> = ({
  radius = screenHeight * 0.03,
}) => {
  return (
    <Svg width={radius} height={radius} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1.5 1.5L14.5 14.5"
        stroke="#2B1D1D"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <Path
        d="M14.5 1.5L1.5 14.5"
        stroke="#2B1D1D"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CrossSVG;
