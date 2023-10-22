import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Polyline } from "react-native-svg";

interface ExitDoorIconProps {
  style?: ViewStyle;
}

const ExitDoorIcon: React.FC<ExitDoorIconProps> = (props) => {
  return (
    <Svg
      style={props.style}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M5 21.5L12 18.5L19 21.5"
        stroke="red" // Змінено колір на червоний
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="5 9 12 3 19 9"
        stroke="red" // Змінено колір на червоний
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3V23"
        stroke="red" // Змінено колір на червоний
        strokeWidth={2}
      />
    </Svg>
  );
};

export default ExitDoorIcon;
