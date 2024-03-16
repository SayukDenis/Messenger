import React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../Constants/ConstantsForChatlist";

const ChatMenuPinSvg = () => {
  return (
    <Svg
      width={screenHeight * 0.019}
      height={screenHeight * 0.019}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M5.77778 2.4L1.25816 7.28118C0.548191 8.04795 0.548191 9.23205 1.25816 9.99882L1.64359 10.4151C2.43517 11.27 3.78705 11.27 4.57863 10.4151L10.764 3.73484C11.4438 3.0007 11.3915 1.85234 10.6478 1.18303V1.18303C9.91886 0.526973 8.79813 0.578015 8.13183 1.29762L2.59839 7.27374C2.13533 7.77385 2.13533 8.54615 2.59839 9.04626V9.04626C3.11469 9.60386 3.99642 9.60386 4.51272 9.04626L8.44444 4.8"
        stroke="black"
        stroke-width="0.7"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default ChatMenuPinSvg;
