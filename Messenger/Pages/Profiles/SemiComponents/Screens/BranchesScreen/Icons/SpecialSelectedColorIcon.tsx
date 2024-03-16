// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

interface SpecialSelectedColorIconProps {
  style?: ViewStyle;
}

const SpecialSelectedColorIcon: React.FC<SpecialSelectedColorIconProps> = (
  props
) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 7L20 7"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M4 7L8 7"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M17 17L20 17"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M4 17L12 17"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Circle
        cx="10"
        cy="7"
        r="2"
        transform="rotate(90 10 7)"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Circle
        cx="15"
        cy="17"
        r="2"
        transform="rotate(90 15 17)"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default SpecialSelectedColorIcon;
