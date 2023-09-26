//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { Svg, Path } from "react-native-svg";

const ForwardContactIcon = (props: any) => {
  return (
    <Svg style={props.style} viewBox="0 0 8 11" fill="none">
      <Path
        d="M3.5 10C3.5 10.2761 3.72386 10.5 4 10.5C4.27614 10.5 4.5 10.2761 4.5 10L3.5 10ZM4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.97631 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 10L4.5 1L3.5 1L3.5 10L4.5 10Z"
        fill="black"
      />
    </Svg>
  );
};

export default ForwardContactIcon;
