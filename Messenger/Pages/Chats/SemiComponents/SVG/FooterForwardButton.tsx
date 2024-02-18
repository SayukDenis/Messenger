import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { height } from "../ChatConstants";

function FooterForwardButton({ size = height*0.035 }:{ size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 13"
      fill="none"
    >
      <Path
        d="M1.5 5.75a.75.75 0 000 1.5v-1.5zm17.53 1.28a.75.75 0 000-1.06l-4.773-4.773a.75.75 0 00-1.06 1.06L17.439 6.5l-4.242 4.243a.75.75 0 001.06 1.06L19.03 7.03zM1.5 7.25h17v-1.5h-17v1.5z"
        fill="#222"
      />
    </Svg>
  );
}

export default FooterForwardButton;
