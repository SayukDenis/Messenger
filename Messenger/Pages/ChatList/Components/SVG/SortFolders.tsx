import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  width: number;
  height: number;
}

const SortFoldersSvg: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 10 7">
        <Path d="M1 6H4" stroke="black" stroke-linecap="round" />
        <Path d="M1 3.5H7" stroke="black" stroke-linecap="round" />
        <Path d="M1 1H9" stroke="black" stroke-linecap="round" />
      </Svg>
    </View>
  );
};

export default SortFoldersSvg;
