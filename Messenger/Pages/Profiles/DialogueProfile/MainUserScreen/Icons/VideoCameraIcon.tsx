// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface VideoCameraIconProps {
  style?: ViewStyle;
}

const VideoCameraIcon: React.FC<VideoCameraIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 29 17" fill="none">
      <Path
        d="M0 2.83333C0 1.27057 1.44497 0 3.22222 0H16.1111C17.8884 0 19.3333 1.27057 19.3333 2.83333V14.1667C19.3333 15.7294 17.8884 17 16.1111 17H3.22222C1.44497 17 0 15.7294 0 14.1667V2.83333ZM28.1491 1.5849C28.6727 1.83281 29 2.31094 29 2.83333V14.1667C29 14.6891 28.6727 15.1672 28.1491 15.4151C27.6255 15.663 26.9911 15.6365 26.4927 15.3443L21.6594 12.5109L20.9444 12.0904V11.3333V5.66667V4.90964L21.6594 4.48906L26.4927 1.65573C26.9861 1.36797 27.6205 1.33698 28.1491 1.5849Z"
        fill="black"
      />
    </Svg>
  );
};

export default VideoCameraIcon;
