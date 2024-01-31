import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function MessageMenuReplyButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 13 12"
      fill="none"
    >
      <Path
        d="M5.036.438h0L5.033.437a.374.374 0 00-.425.073h0L.544 4.367h0a.474.474 0 00-.145.348c0 .135.055.26.146.348 0 0 0 0 0 0l4.06 3.855s0 0 0 0c.122.114.287.14.43.073a.457.457 0 00.252-.42V6.458H8.124c1.586 0 2.838 1.352 2.838 2.972 0 .935-.38 1.502-.681 1.804h0l-.004.003c-.094.092-.128.18-.128.236 0 .041.016.075.037.098a.086.086 0 00.074.03c.438-.253 2.339-1.504 2.339-4.314 0-2.403-1.842-4.314-4.069-4.314H5.287V.858a.462.462 0 00-.251-.42z"
        stroke="#000"
        strokeWidth={0.8}
      />
    </Svg>
  );
}

export default MessageMenuReplyButton;
