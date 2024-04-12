// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface PlusIconProps {
  style?: ViewStyle;
}

const CrossIcon: React.FC<PlusIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 9 9" fill="none">
      <Path
        d="M8.73364 1.53701C9.08504 1.18562 9.08504 0.614946 8.73364 0.263548C8.38224 -0.0878494 7.81157 -0.0878494 7.46017 0.263548L4.5 3.22653L1.53701 0.266359C1.18562 -0.0850383 0.614946 -0.0850383 0.263548 0.266359C-0.0878494 0.617757 -0.0878494 1.18843 0.263548 1.53982L3.22653 4.5L0.26636 7.46299C-0.0850382 7.81438 -0.0850382 8.38505 0.26636 8.73645C0.617757 9.08785 1.18843 9.08785 1.53982 8.73645L4.5 5.77346L7.46299 8.73364C7.81438 9.08504 8.38505 9.08504 8.73645 8.73364C9.08785 8.38224 9.08785 7.81157 8.73645 7.46017L5.77347 4.5L8.73364 1.53701Z"
        fill="#6A5B3E"
      />
    </Svg>
  );
};

export default CrossIcon;
