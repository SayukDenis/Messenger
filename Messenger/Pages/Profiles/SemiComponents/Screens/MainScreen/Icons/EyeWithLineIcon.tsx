import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

interface EyeWithLineIconProps {
  style?: ViewStyle;
}

const EyeWithLineIcon: React.FC<EyeWithLineIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="2 2 20 20" fill="none">
      <Circle cx="12" cy="12" r="3.5" stroke="#222222" />
      <Path
        d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
        stroke="#222222"
      />
      <Path d="M18 6L6 18" stroke="black" stroke-width="10" />
    </Svg>
  );
};

export default EyeWithLineIcon;