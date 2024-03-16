// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface MicrophoneIconProps {
  style?: ViewStyle;
}

const MicrophoneIcon: React.FC<MicrophoneIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="-3 0 18 17" fill="none">
      <Path
        d="M6 0C4.19318 0 2.72727 1.42773 2.72727 3.1875V8.5C2.72727 10.2598 4.19318 11.6875 6 11.6875C7.80682 11.6875 9.27273 10.2598 9.27273 8.5V3.1875C9.27273 1.42773 7.80682 0 6 0ZM1.63636 7.17188C1.63636 6.73027 1.27159 6.375 0.818182 6.375C0.364773 6.375 0 6.73027 0 7.17188V8.5C0 11.4584 2.25682 13.9021 5.18182 14.2906V15.4062H3.54545C3.09205 15.4062 2.72727 15.7615 2.72727 16.2031C2.72727 16.6447 3.09205 17 3.54545 17H6H8.45455C8.90796 17 9.27273 16.6447 9.27273 16.2031C9.27273 15.7615 8.90796 15.4062 8.45455 15.4062H6.81818V14.2906C9.74318 13.9021 12 11.4584 12 8.5V7.17188C12 6.73027 11.6352 6.375 11.1818 6.375C10.7284 6.375 10.3636 6.73027 10.3636 7.17188V8.5C10.3636 10.8475 8.41023 12.75 6 12.75C3.58977 12.75 1.63636 10.8475 1.63636 8.5V7.17188Z"
        fill="#AF59CE"
      />
    </Svg>
  );
};

export default MicrophoneIcon;
