import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function MessageMenuCopyButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 10 11"
      fill="none"
    >
      <Path
        d="M8.571 7.219H4.286a.352.352 0 01-.357-.344v-5.5c0-.19.16-.344.357-.344h3.127L8.929 2.49v4.385c0 .19-.161.344-.358.344zM4.286 8.25H8.57C9.36 8.25 10 7.633 10 6.875V2.49c0-.273-.114-.535-.315-.728L8.172.302A1.093 1.093 0 007.415 0h-3.13c-.787 0-1.428.617-1.428 1.375v5.5c0 .758.64 1.375 1.429 1.375zm-2.857-5.5C.64 2.75 0 3.367 0 4.125v5.5C0 10.383.64 11 1.429 11h4.285c.788 0 1.429-.617 1.429-1.375v-.688H6.07v.688c0 .19-.16.344-.357.344H1.43a.352.352 0 01-.358-.344v-5.5c0-.19.161-.344.358-.344h.714V2.75h-.714z"
        fill="#000"
      />
    </Svg>
  );
}

export default MessageMenuCopyButton;
