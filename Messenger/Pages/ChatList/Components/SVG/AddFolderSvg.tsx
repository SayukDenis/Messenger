import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  width: number;
  height: number;
}

const AddFolderSvg: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 20 18" fill="none" >
        <Path
          d="M20 15C20 16.3789 18.8789 17.5 17.5 17.5H2.5C1.12109 17.5 0 16.3789 0 15V2.5C0 1.12109 1.12109 0 2.5 0H7.5C8.28516 0 9.02734 0.371094 9.5 1L10.25 2C10.4844 2.31641 10.8555 2.5 11.25 2.5H17.5C18.8789 2.5 20 3.62109 20 5V15ZM9.0625 13.4375C9.0625 13.957 9.48047 14.375 10 14.375C10.5195 14.375 10.9375 13.957 10.9375 13.4375V10.9375H13.4375C13.957 10.9375 14.375 10.5195 14.375 10C14.375 9.48047 13.957 9.0625 13.4375 9.0625H10.9375V6.5625C10.9375 6.04297 10.5195 5.625 10 5.625C9.48047 5.625 9.0625 6.04297 9.0625 6.5625V9.0625H6.5625C6.04297 9.0625 5.625 9.48047 5.625 10C5.625 10.5195 6.04297 10.9375 6.5625 10.9375H9.0625V13.4375Z"
          fill="#2B1D1D"
        />
      </Svg>
    </View>
  );
};

export default AddFolderSvg;
