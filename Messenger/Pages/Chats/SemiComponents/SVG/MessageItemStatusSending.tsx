import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../ChatConstants";

function MessageItemStatusSending() {
  return (
    <Svg
      width={screenHeight*0.014}
      height={screenHeight*0.012}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm9.828-5.243a1 1 0 011 1v4.968l3.527 1.34a1 1 0 11-.71 1.87l-4.172-1.586a1 1 0 01-.645-.935V7.757a1 1 0 011-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MessageItemStatusSending;
