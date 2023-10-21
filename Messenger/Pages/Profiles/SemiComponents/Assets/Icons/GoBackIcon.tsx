// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Rect } from "react-native-svg";

interface GoBackIconProps {
  style?: ViewStyle;
}

const GoBackIcon: React.FC<GoBackIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 12 23" fill="none">
      <Rect
        width="1.61477"
        height="14.7084"
        rx="0.807384"
        transform="matrix(0.556114 -0.831106 0.674407 0.73836 0.101562 11.2339)"
        fill="#434343"
      />
      <Path
        d="M1.62799 11.5388C1.32107 11.8623 0.876982 11.8203 0.636087 11.4451C0.395192 11.0699 0.448714 10.5034 0.755632 10.18L9.76803 0.681486C10.0749 0.358015 10.519 0.399978 10.7599 0.775214C11.0008 1.15045 10.9473 1.71686 10.6404 2.04033L1.62799 11.5388Z"
        fill="#434343"
      />
    </Svg>
  );
};

export default GoBackIcon;
