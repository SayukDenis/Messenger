import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { height } from "../ChatConstants";

function FooterExportButton({ size = height*0.035 }:{ size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 22"
      fill="none"
    >
      <Path
        d="M9.5 8H12a3 3 0 013 3v7a3 3 0 01-3 3H4a3 3 0 01-3-3v-7a3 3 0 013-3h2.5"
        stroke="#222"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M7.4 12a.6.6 0 101.2 0H7.4zM8.424.577a.6.6 0 00-.848 0L3.757 4.395a.6.6 0 10.849.849L8 1.85l3.394 3.394a.6.6 0 10.849-.849L8.424.577zM8.6 12V1.001H7.4V12h1.2z"
        fill="#222"
      />
    </Svg>
  );
}

export default FooterExportButton;
