// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, Line } from "react-native-svg";

interface BinIconProps {
  style: ViewStyle;
  color?: string;
}

const BinIcon: React.FC<BinIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 9 11" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.07657C0 1.95769 0.0491395 1.86133 0.109756 1.86133L8.89024 1.86133C8.95086 1.86133 9 1.95769 9 2.07657C9 2.19544 8.95086 2.29181 8.89024 2.29181L0.109756 2.29181C0.0491395 2.29181 0 2.19544 0 2.07657Z"
        fill={props.color ? props.color : "red"}
      />
      <Path
        d="M2.83203 2.05229C4.35584 0.146493 5.68917 1.25821 6.16536 2.05229"
        stroke={props.color ? props.color : "red"}
        strokeWidth="0.7"
      />
      <Line
        y1="-0.3"
        x2="8.49131"
        y2="-0.3"
        transform="matrix(0.130853 -0.991402 0.993066 0.117561 7.27734 10.4707)"
        stroke={props.color ? props.color : "red"}
        strokeWidth="0.6"
      />
      <Line
        y1="-0.3"
        x2="8.49132"
        y2="-0.3"
        transform="matrix(0.130944 0.99139 -0.993056 0.117643 0.611328 2.05176)"
        stroke={props.color ? props.color : "red"}
        strokeWidth="0.6"
      />
      <Line
        x1="1.72266"
        y1="10.2207"
        x2="7.27821"
        y2="10.2207"
        stroke={props.color ? props.color : "red"}
        strokeWidth="0.5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.52432 9.07025C4.40302 9.07082 4.30402 8.94445 4.30319 8.78799L4.2733 3.12205C4.27247 2.96559 4.37013 2.83828 4.49143 2.83771C4.61273 2.83713 4.71173 2.96351 4.71255 3.11997L4.74245 8.78591C4.74328 8.94237 4.64561 9.06968 4.52432 9.07025Z"
        fill={props.color ? props.color : "red"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.01621 9.07134C5.89508 9.06322 5.80633 8.93005 5.818 8.77389L6.24044 3.11887C6.25211 2.96272 6.35977 2.84271 6.4809 2.85082C6.60204 2.85894 6.69078 2.99212 6.67912 3.14827L6.25667 8.80329C6.245 8.95945 6.13735 9.07946 6.01621 9.07134Z"
        fill={props.color ? props.color : "red"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.52676 2.85943C2.64789 2.85131 2.75556 2.97132 2.76723 3.12748L3.19001 8.78247C3.20168 8.93863 3.11295 9.07181 2.99181 9.07993C2.87068 9.08805 2.76301 8.96805 2.75134 8.81189L2.32856 3.15689C2.31689 3.00073 2.40562 2.86756 2.52676 2.85943Z"
        fill={props.color ? props.color : "red"}
      />
    </Svg>
  );
};

export default BinIcon;
