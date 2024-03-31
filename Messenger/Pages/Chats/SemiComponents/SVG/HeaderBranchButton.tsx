import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { screenHeight } from "../../../ChatList/Constants/ConstantsForChatlist";

function HeaderBranchButton() {
  return (
    <Svg
      width={screenHeight * 0.035} 
      height={screenHeight * 0.035}
      viewBox="0 0 23 24"
      fill="none"
    >
      <Path
        d="M7.705 4.824c0 1.628-1.308 2.936-2.908 2.936-1.6 0-2.909-1.308-2.909-2.936s1.309-2.937 2.909-2.937c1.6 0 2.908 1.309 2.908 2.937z"
        stroke="#222"
        strokeWidth={1.8}
      />
      <Path
        d="M4.799 8.02v8.952M4.799 16.973c1.27-9.591 13.329.64 13.964-9.591"
        stroke="#222"
        strokeWidth={2}
      />
      <Path
        d="M21.67 4.824c0 1.628-1.309 2.936-2.909 2.936-1.6 0-2.908-1.308-2.908-2.936s1.309-2.937 2.908-2.937c1.6 0 2.909 1.309 2.909 2.937zM7.705 20.17c0 1.629-1.308 2.937-2.908 2.937-1.6 0-2.909-1.308-2.909-2.936 0-1.629 1.309-2.937 2.909-2.937 1.6 0 2.908 1.308 2.908 2.936z"
        stroke="#222"
        strokeWidth={1.8}
      />
    </Svg>
  );
}

export default HeaderBranchButton;