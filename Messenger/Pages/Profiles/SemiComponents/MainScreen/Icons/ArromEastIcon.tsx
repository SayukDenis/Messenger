// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

interface ArrowEastIconProps {
  style: ViewStyle;
}

const ArrowEastIcon: React.FC<ArrowEastIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 20 13" fill="none">
      <Path
        d="M1.5 5.75C1.08579 5.75 0.75 6.08579 0.75 6.5C0.75 6.91421 1.08579 7.25 1.5 7.25L1.5 5.75ZM19.0303 7.03033C19.3232 6.73744 19.3232 6.26256 19.0303 5.96967L14.2574 1.1967C13.9645 0.903806 13.4896 0.903806 13.1967 1.1967C12.9038 1.48959 12.9038 1.96447 13.1967 2.25736L17.4393 6.5L13.1967 10.7426C12.9038 11.0355 12.9038 11.5104 13.1967 11.8033C13.4896 12.0962 13.9645 12.0962 14.2574 11.8033L19.0303 7.03033ZM1.5 7.25L18.5 7.25V5.75L1.5 5.75L1.5 7.25Z"
        fill="#363636"
      />
    </Svg>
  );
};

export default ArrowEastIcon;
