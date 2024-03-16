import React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

const ChatMenuAddToFolderSvg = () => {
  return (
    <Svg
      width={screenHeight * 0.019}
      height={screenHeight * 0.019}
      viewBox="0 0 10 9"
      fill="none"
    >
      <Path
        d="M0 1.28571C0 0.576563 0.560547 0 1.25 0H3.83008C4.20312 0 4.56055 0.152679 4.82422 0.423884L5.66211 1.28571H8.75C9.43945 1.28571 10 1.86228 10 2.57143V7.71429C10 8.42344 9.43945 9 8.75 9H1.25C0.560547 9 0 8.42344 0 7.71429V1.28571ZM1.25 0.964286C1.07812 0.964286 0.9375 1.10893 0.9375 1.28571V7.71429C0.9375 7.89107 1.07812 8.03571 1.25 8.03571H8.75C8.92188 8.03571 9.0625 7.89107 9.0625 7.71429V2.57143C9.0625 2.39464 8.92188 2.25 8.75 2.25H5.59766C5.39062 2.25 5.19141 2.16563 5.04492 2.01496L4.16211 1.10491C4.07422 1.01451 3.95508 0.964286 3.83008 0.964286H1.25Z"
        fill="black"
      />
      <Path
        d="M5 3.5V6.5"
        stroke="black"
        stroke-width="0.7"
        stroke-linecap="round"
      />
      <Path
        d="M3.5 5H6.5"
        stroke="black"
        stroke-width="0.7"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default ChatMenuAddToFolderSvg;
