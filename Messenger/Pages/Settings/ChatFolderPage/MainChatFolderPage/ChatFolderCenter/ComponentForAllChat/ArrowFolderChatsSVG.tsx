import React from "react";
import { Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";
import { screenHeight } from "../../../../../ChatList/Constants/ConstantsForChatlist";

const ArrowForChatFolderComp = () => {
  const screenWidth = Dimensions.get("window").width;
  const arrowHeight = screenWidth * 0.04; // Висота стрілочки (відносно ширини екрану)
  const arrowWidth = arrowHeight * 0.2; // Ширина стрілочки (відносно висоти стрілочки)

  return (
    <Svg
      width={screenWidth * 0.02}
      height={screenHeight * 0.018}
      viewBox="0 0 12 22"
      fill="none"
    >
      <Path
        d="M10.502 10.8105L1.18641 20.7676"
        stroke="#000000"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M10.501 10.8105L1.18877 0.856697"
        stroke="#000000"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowForChatFolderComp;