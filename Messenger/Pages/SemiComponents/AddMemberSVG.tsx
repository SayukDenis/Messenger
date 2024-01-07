import React from "react";
import { Svg, Path } from "react-native-svg";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";

const AddMemberSVG: React.FC = () => {
  const widthOfStroke = 1.8;
  const width = screenWidth * 0.05;
  const kef=1.3
  return (
    <Svg
      width={width * kef}
      height={width * kef}
      viewBox={`0 -2 ${width} ${width}`}
    >
      <Path
        d="M16 9.06677L1 9.06677"
        stroke="#5C4081"
        strokeWidth={widthOfStroke}
        strokeLinecap="round"
      />
      <Path
        d="M8.5 16.5668V1.56677"
        stroke="#5C4081"
        strokeWidth={widthOfStroke}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AddMemberSVG;
