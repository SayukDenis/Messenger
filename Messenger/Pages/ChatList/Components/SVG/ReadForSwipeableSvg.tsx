import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  width: number;
  height: number;
  color: string;
}

const ReadForSwipeableSvg: React.FC<SvgProps> = ({ width, height, color = "white" }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 29 24">
        <Path
          d="M29 11.1429C29 17.2982 22.5094 22.2857 14.5008 22.2857C12.3996 22.2857 10.406 21.9429 8.60489 21.3268C7.93091 21.7929 6.83214 22.4304 5.52948 22.9661C4.17019 23.5232 2.53337 24 0.907877 24C0.539734 24 0.211238 23.7911 0.0696444 23.4696C-0.071949 23.1482 0.00734331 22.7839 0.262211 22.5375L0.279203 22.5214C0.296194 22.5054 0.318849 22.4839 0.352831 22.4464C0.415132 22.3821 0.511416 22.2804 0.630354 22.1411C0.862567 21.8732 1.17407 21.4768 1.49124 20.9839C2.05762 20.0946 2.59567 18.9268 2.70328 17.6143C1.00416 15.7929 0.00167959 13.5589 0.00167959 11.1429C0.00167959 4.9875 6.49232 0 14.5008 0C22.5094 0 29 4.9875 29 11.1429Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ReadForSwipeableSvg;
