import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function MessageMenuEditButton() {
  return (
    <Svg
      width={screenHeight*0.016}
      height={screenHeight*0.016}
      viewBox="0 0 13 13"
      fill="none"
    >
      <Path
        d="M2.856 8.432l.04-.08 5.163-5.52 1.977 2.002-5.438 5.244-.078.04a85.135 85.135 0 01-1.376.674 30.77 30.77 0 01-1.1.503c-.16.069-.296.123-.401.16a1.603 1.603 0 01-.122.039l-.022.005h-.001a.12.12 0 01-.003-.013l.003-.015c.008-.03.02-.07.038-.124.037-.106.09-.244.158-.406.134-.323.315-.723.497-1.115a77.358 77.358 0 01.665-1.394zm-1.371 3.065s0 0 0 0h0zM10.979.96l1.072 1.087a.66.66 0 010 .926l-1.119 1.134-1.985-2.012L10.066.961a.64.64 0 01.913 0z"
        stroke="#000"
        strokeWidth={0.7}
      />
    </Svg>
  );
}

export default MessageMenuEditButton;
