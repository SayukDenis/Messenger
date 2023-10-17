// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Line } from "react-native-svg";

interface PlusIconProps {
  style?: ViewStyle;
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 16 16" fill="none">
      <Line
        x1="8.12734"
        x2="8.12734"
        y2="16"
        stroke="#5C4081"
        stroke-width="1.2"
      />
      <Line
        x1="16"
        y1="8.0668"
        y2="8.0668"
        stroke="#5C4081"
        stroke-width="1.2"
      />
    </Svg>
  );
};

export default PlusIcon;
