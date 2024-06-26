import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function SelectButtonMarkIcon() {
  return (
    <Svg
      width={screenHeight*0.014}
      height={screenHeight*0.012}
      viewBox="0 0 11 8"
      fill="none"
    >
      <Path stroke="#000" d="M0.528638 2.50685L4.3554 6.70344" />
      <Path stroke="#000" d="M3.65273 6.61489L9.84163 0.640149" />
    </Svg>
  )
}

export default SelectButtonMarkIcon;
