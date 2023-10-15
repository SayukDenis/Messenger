// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

const RightArrow = (props: any) => {
  return (
    <Svg style={props.style} viewBox="0 0 5 11" fill="none">
      <Rect
        width="0.786046"
        height="7.05171"
        rx="0.393023"
        transform="matrix(-0.511892 0.859077 -0.646015 -0.763291 5 5.38281)"
        fill="#6F6F6F"
      />
      <Path
        d="M4.30079 5.24191C4.44101 5.07622 4.64476 5.09305 4.75587 5.27951C4.86698 5.46597 4.84338 5.75145 4.70316 5.91714L0.655454 10.7001C0.51523 10.8658 0.311482 10.849 0.20037 10.6625C0.0892583 10.476 0.112859 10.1906 0.253083 10.0249L4.30079 5.24191Z"
        fill="#6F6F6F"
      />
    </Svg>
  );
};

export default RightArrow;
