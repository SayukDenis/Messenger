import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function DeleteButton({ size = screenHeight*0.016 }:{ size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 9 11"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.077c0-.12.05-.216.11-.216h8.78c.06 0 .11.097.11.216 0 .118-.05.215-.11.215H.11c-.06 0-.11-.097-.11-.215z"
        fill="red"
      />
      <Path
        d="M2.833 2.052c1.524-1.906 2.857-.794 3.333 0"
        stroke="red"
        strokeWidth={0.7}
      />
      <Path
        transform="matrix(.13085 -.9914 .99307 .11756 7.277 10.47)"
        stroke="red"
        strokeWidth={0.6}
        d="M0 -0.3L8.49131 -0.3"
      />
      <Path
        transform="matrix(.13094 .99139 -.99306 .11764 .611 2.052)"
        stroke="red"
        strokeWidth={0.6}
        d="M0 -0.3L8.49132 -0.3"
      />
      <Path
        stroke="red"
        strokeWidth={0.5}
        d="M1.72266 10.2207L7.27821 10.2207"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.524 9.07c-.121 0-.22-.126-.22-.282l-.03-5.666c-.002-.156.096-.284.217-.284.122 0 .22.126.222.282l.03 5.666c0 .156-.097.284-.219.284zM6.017 9.071c-.121-.008-.21-.141-.198-.297l.422-5.655c.012-.156.12-.276.24-.268.122.008.21.141.2.297l-.423 5.655c-.012.156-.12.276-.24.268zM2.527 2.86c.12-.009.229.111.24.267l.423 5.655c.012.157-.077.29-.198.298-.121.008-.229-.112-.24-.268l-.423-5.655c-.012-.156.077-.29.198-.298z"
        fill="red"
      />
    </Svg>
  );
}

export default DeleteButton;
