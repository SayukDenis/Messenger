// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Line } from "react-native-svg";

interface CheckmarkIconProps {
  style: ViewStyle;
  stroke?: string;
}

const CheckmarkIcon: React.FC<CheckmarkIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 13 9" fill="none">
      <Line
        y1="-0.5"
        x2="7.44938"
        y2="-0.5"
        transform="matrix(0.665768 0.746158 -0.731572 0.681764 0 3.44141)"
        stroke={props.stroke ? props.stroke : "#2979B3"}
      />
      <Line
        y1="-0.5"
        x2="11.2677"
        y2="-0.5"
        transform="matrix(0.711855 -0.702327 0.686696 0.726945 4.97852 8.91357)"
        stroke={props.stroke ? props.stroke : "#2979B3"}
      />
    </Svg>
  );
};

export default CheckmarkIcon;
