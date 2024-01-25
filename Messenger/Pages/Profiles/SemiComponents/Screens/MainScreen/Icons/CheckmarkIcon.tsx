// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Line } from "react-native-svg";

interface CheckMarkIcon {
  style: ViewStyle;
}

const CheckMarkIcon: React.FC<CheckMarkIcon> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 -1 11 8" fill="none">
      <Line
        x1="0.527661"
        y1="2.50661"
        x2="4.35442"
        y2="6.7032"
        stroke="white"
      />
      <Line
        x1="3.65273"
        y1="6.61513"
        x2="9.84163"
        y2="0.640394"
        stroke="white"
      />
    </Svg>
  );
};

export default CheckMarkIcon;
