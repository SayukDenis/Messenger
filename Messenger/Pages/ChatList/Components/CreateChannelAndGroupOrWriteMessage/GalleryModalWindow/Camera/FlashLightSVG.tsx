import React from "react";
import Svg, { Path } from "react-native-svg";
import {
  screenHeight,
  screenWidth,
} from "../../../../Constants/ConstantsForChatlist";

interface FlashLightSVGProps {
  color?: string;
}
const FlashLightSVG: React.FC<FlashLightSVGProps> = ({ color = "white" }) => {
  return (
    <Svg
      width={screenWidth * 0.025}
      height={screenHeight * 0.02}
      viewBox="0 0 8 13"
      fill="none"
    >
      <Path
        d="M6.61194 1.13261C6.73483 0.784772 6.64318 0.378537 6.39115 0.155107C6.13912 -0.0683226 5.79544 -0.0480108 5.56008 0.200809L0.227898 5.88811C0.0196094 6.11154 -0.0553745 6.46953 0.0425211 6.78437C0.140417 7.0992 0.390363 7.31247 0.667386 7.31247H2.9898L1.38806 11.8674C1.26517 12.2152 1.35682 12.6215 1.60885 12.8449C1.86088 13.0683 2.20455 13.048 2.43992 12.7992L7.7721 7.11189C7.98039 6.88846 8.05537 6.53047 7.95748 6.21564C7.85958 5.9008 7.61172 5.69007 7.33261 5.69007H5.0102L6.61194 1.13261Z"
        fill={color}
      />
    </Svg>
  );
};

export default FlashLightSVG;
