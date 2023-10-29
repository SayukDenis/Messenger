// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface RedCrossIconProps {
  style?: ViewStyle;
}

const RedCrossIcon: React.FC<RedCrossIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 6 6" fill="none">
      <Path d="M5.5 0.5L1 5" stroke="#FF0000" />
      <Path d="M1 0.5L5.5 5" stroke="#FF0000" />
    </Svg>
  );
};

export default RedCrossIcon;
