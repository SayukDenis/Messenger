import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function MessageMenuForwardButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 8 11"
      fill="none"
    >
      <Path
        d="M3.5 10a.5.5 0 001 0h-1zM4.354.646a.5.5 0 00-.708 0L.464 3.828a.5.5 0 10.708.708L4 1.707l2.828 2.829a.5.5 0 10.708-.708L4.354.646zM4.5 10V1h-1v9h1z"
        fill="#000"
      />
    </Svg>
  );
}

export default MessageMenuForwardButton;
