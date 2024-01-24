import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ReplyAndEditMenuCancelButton() {
  return (
    <Svg
      width={12}
      height={12}
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
