import React from "react";
import { Svg, Path } from "react-native-svg";

const UnViewedMessage = () => {
  return (
    <Svg width={14} height={14} viewBox="0 0 11 8" fill="none">
      <Path
        d="M0.355713 3.06128L3.6395 6.6024"
        stroke="white"
        strokeOpacity={0.95}
      />
      <Path
        d="M2.97266 6.60522L8.46407 0.686168"
        stroke="white"
        strokeOpacity={0.95}
      />
      <Path
        d="M5.0022 6.69995L10.4936 0.780894"
        stroke="white"
        strokeOpacity={0.95}
      />
    </Svg>
  );
};

export default UnViewedMessage;
