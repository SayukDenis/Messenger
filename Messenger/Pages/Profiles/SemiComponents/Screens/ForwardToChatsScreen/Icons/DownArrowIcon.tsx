// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Rect } from "react-native-svg";

interface DownArrowIconProps {
  style?: ViewStyle;
  fill?: string;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 23 12">
      <Rect
        width="1.62636"
        height="14.8713"
        rx="0.813181"
        transform="matrix(-0.825181 -0.565233 0.730275 -0.682828 11.2324 11.7246)"
        fill={"#2B1D1D"}
      />
      <Path
        d="M11.5396 10.1652C11.8618 10.4782 11.8189 10.9318 11.4436 11.1784C11.0684 11.4251 10.503 11.3712 10.1808 11.0583L0.677767 1.82792C0.355541 1.51494 0.398513 1.06131 0.773749 0.814707C1.14898 0.568104 1.71439 0.621914 2.03661 0.934895L11.5396 10.1652Z"
        fill={"#2B1D1D"}
      />
    </Svg>
  );
};

export default DownArrowIcon;
