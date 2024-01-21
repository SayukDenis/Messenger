import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DialogueMessagesPinnedMessageIcon() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 13 13"
      fill="none"
    >
      <Path
        d="M6.5 2.5L1.414 7.586a2 2 0 000 2.828l.672.672a2 2 0 002.828 0l7.08-7.08a1.945 1.945 0 00-.13-2.87v0a1.945 1.945 0 00-2.62.12L3 7.5a1.414 1.414 0 000 2v0a1.414 1.414 0 002 0L9.5 5"
        stroke="#2B1D1D"
        strokeWidth={0.8}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default DialogueMessagesPinnedMessageIcon;