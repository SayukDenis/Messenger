//Oleksii Kovalenko telegram - @traewe

import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const UnblockIcon = (props: any) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke="red" stroke-width="10" />
      <Path d="M10 10L6 6" stroke="red" stroke-width="10" />
      <Path d="M18 18L14 14" stroke="red" stroke-width="10" />
    </Svg>
  );
};

export default UnblockIcon;
