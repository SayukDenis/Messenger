import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function ReplyAndEditMenuEditIcon() {
  return (
    <Svg
      width={screenHeight*0.024}
      height={screenHeight*0.024}
      viewBox="0 0 19 18"
      fill="none"
    >
      <Path
        d="M11.45 3.14l3.393 3.395L7 14s-4 2-4.5 2-.5-.5-.5-.5C2 15 4 11 4 11l7.45-7.86zM14.121.707a1 1 0 011.414 0l1.975 1.975a1 1 0 010 1.414l-2.122 2.121L12 2.828 14.12.708z"
        fill="#4684FB"
      />
    </Svg>
  )
}

export default ReplyAndEditMenuEditIcon;
