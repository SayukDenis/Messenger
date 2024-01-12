// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Rect, Path } from "react-native-svg";

interface MicrophoneIconProps {
  style?: ViewStyle;
}

const MicrophoneIcon: React.FC<MicrophoneIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Rect
        x="9"
        y="3"
        width="6"
        height="11"
        rx="3"
        stroke="#222222"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <Path
        d="M5 11C5 12.8565 5.7375 14.637 7.05025 15.9497C8.36301 17.2625 10.1435 18 12 18C13.8565 18 15.637 17.2625 16.9497 15.9497C18.2625 14.637 19 12.8565 19 11"
        stroke="#222222"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path d="M12 21V19" stroke="#222222" stroke-width="2" />
    </Svg>
  );
};

export default MicrophoneIcon;
