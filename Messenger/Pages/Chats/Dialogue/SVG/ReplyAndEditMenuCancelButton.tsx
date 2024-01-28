import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function ReplyAndEditMenuCancelButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M11 11L1 1M1 11L11 1"
        stroke="#4684FB"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ReplyAndEditMenuCancelButton;
