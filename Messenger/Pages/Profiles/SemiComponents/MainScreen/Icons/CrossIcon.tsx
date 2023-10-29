// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CrossIconProps {
  style: ViewStyle;
}

const CrossIcon: React.FC<CrossIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 34 34" fill="none">
      <Path
        d="M17 1.5V32.5"
        stroke="white"
        stroke-width="2.2"
        stroke-linecap="round"
      />
      <Path
        d="M1.5 17L32.5 17"
        stroke="white"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default CrossIcon;
