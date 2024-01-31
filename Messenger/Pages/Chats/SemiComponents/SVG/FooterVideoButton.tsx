import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

function FooterVideoButton() {
  return (
    <Svg
      width={screenHeight*0.03}
      height={screenHeight*0.03}
      viewBox="-1.5 0 15 9"
      fill="none"
    >
      <Path
        d="M0 1.833C0 1.098.648.5 1.444.5h5.778c.797 0 1.445.598 1.445 1.333v5.334c0 .735-.648 1.333-1.445 1.333H1.444C.648 8.5 0 7.902 0 7.167V1.833zm12.619-.587a.662.662 0 01.381.587v5.334c0 .245-.147.47-.381.587a.772.772 0 01-.743-.033L9.709 6.388l-.32-.198V2.81l.32-.198 2.167-1.333a.777.777 0 01.743-.033z"
        fill="#AF59CE"
      />
    </Svg>
  );
}

export default FooterVideoButton;
