import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function MessageMenuSelectButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M6 1.125a4.875 4.875 0 110 9.75 4.875 4.875 0 010-9.75zM6 12A6 6 0 106 0a6 6 0 000 12zm2.648-7.102a.562.562 0 00-.795-.795l-2.6 2.602L4.15 5.604a.562.562 0 00-.795.795l1.5 1.5c.22.22.577.22.795 0l2.997-3z"
        fill="#000"
      />
    </Svg>
  );
}

export default MessageMenuSelectButton;
