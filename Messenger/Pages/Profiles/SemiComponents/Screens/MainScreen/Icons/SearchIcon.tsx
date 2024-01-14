// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path, Line } from "react-native-svg";

interface SearchIconProps {
  style?: ViewStyle;
}

const SearchIcon: React.FC<SearchIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 14 14" fill="none">
      <Path
        d="M8.43077 4.76471C8.43077 6.97855 6.69874 8.72941 4.61538 8.72941C2.53203 8.72941 0.8 6.97855 0.8 4.76471C0.8 2.55086 2.53203 0.8 4.61538 0.8C6.69874 0.8 8.43077 2.55086 8.43077 4.76471Z"
        stroke="black"
        stroke-width="1.6"
      />
      <Line
        y1="-0.8"
        x2="7.20759"
        y2="-0.8"
        transform="matrix(0.695762 0.718272 -0.695762 0.718272 6.92383 7.94141)"
        stroke="black"
        stroke-width="1.6"
      />
    </Svg>
  );
};

export default SearchIcon;
