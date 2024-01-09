import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight, screenWidth } from "../../../ChatList/Constants/ConstantsForChatlist";

function FooterMicrophoneButton() {
  return (
    <Svg
      width={screenHeight*0.027} 
      height={screenHeight*0.027}
      viewBox="0 0 15 20"
      fill="none"
    >
      <Path
        d="M7.5 0C5.392 0 3.682 1.68 3.682 3.75V10c0 2.07 1.71 3.75 3.818 3.75s3.818-1.68 3.818-3.75V3.75C11.318 1.68 9.608 0 7.5 0zM2.41 8.438a.944.944 0 00-.955-.938.944.944 0 00-.955.938V10c0 3.48 2.633 6.355 6.045 6.813v1.312H4.636a.944.944 0 00-.954.938c0 .519.425.937.954.937h5.728a.944.944 0 00.954-.938.944.944 0 00-.954-.937h-1.91v-1.313C11.868 16.355 14.5 13.48 14.5 10V8.437a.944.944 0 00-.954-.937.944.944 0 00-.955.938V10c0 2.762-2.28 5-5.091 5-2.812 0-5.09-2.238-5.09-5V8.437z"
        fill="#AF59CE"
      />
    </Svg>
  )
}

export default FooterMicrophoneButton;
