import React from "react";
import { View, ViewStyle } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

interface EyeIconProps {
  style?: ViewStyle;
}

const EyeIcon: React.FC<EyeIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={10} stroke="black" strokeWidth={2} />
      <Path
        d="M12 7.5C12 8.88071 10.8807 10 9.5 10C8.11929 10 7 8.88071 7 7.5C7 6.11929 8.11929 5 9.5 5C10.8807 5 12 6.11929 12 7.5Z"
        fill="black"
      />
      <Path
        d="M12 16.5C12 15.1193 13.1193 14 14.5 14C15.8807 14 17 15.1193 17 16.5C17 17.8807 15.8807 19 14.5 19C13.1193 19 12 17.8807 12 16.5Z"
        fill="black"
      />
    </Svg>
  );
};

export default EyeIcon;
