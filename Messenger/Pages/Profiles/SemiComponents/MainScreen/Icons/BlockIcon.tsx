// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

interface BlockIconProps {
  style: ViewStyle;
}

const BlockIcon: React.FC<BlockIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke="red" stroke-width="10" />
      <Path d="M18 18L6 6" stroke="red" stroke-width="10" />
    </Svg>
  );
};

export default BlockIcon;
