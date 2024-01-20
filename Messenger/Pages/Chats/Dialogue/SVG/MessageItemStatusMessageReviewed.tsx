import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MessageItemStatusMessageReviewed() {
  return (
    <Svg
      width={11}
      height={7}
      viewBox="0 0 11 7"
      fill="none"
    >
      <Path
        transform="matrix(.68024 .73355 -.67766 .73482 0 3.375)"
        stroke="#fff"
        strokeOpacity={0.95}
        d="M0 -0.5L4.82739 -0.5"
      />
      <Path
        transform="matrix(.67985 -.7328 .67804 .73558 3.295 6.919)"
        stroke="#fff"
        strokeOpacity={0.95}
        d="M0 -0.5L8.0774 -0.5"
      />
      <Path
        transform="matrix(.67985 -.7328 .67804 .73558 5.491 6.919)"
        stroke="#fff"
        strokeOpacity={0.95}
        d="M0 -0.5L8.0774 -0.5"
      />
    </Svg>
  );
}

export default MessageItemStatusMessageReviewed;
