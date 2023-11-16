// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface AddNewImageIconProps {
  style?: ViewStyle;
}

const AddNewImageIcon: React.FC<AddNewImageIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 1024 1024">
      <Path
        d="M160 128A96 96 0 0 0 64 224v576A96 96 0 0 0 160 896h262.72a374.464 374.464 0 0 1-25.216-64H160a31.872 31.872 0 0 1-32-32v-59.264l227.52-256.512L430.016 562.56c10.752-19.008 23.232-36.992 37.248-53.504L353.92 389.76 128 644.224V224c0-17.728 14.272-32 32-32h704c17.728 0 32 14.272 32 32v198.72c22.72 11.776 44.48 25.536 64 41.792V224A96 96 0 0 0 864 128zM704 256c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64z m32 192C577.28 448 448 577.28 448 736S577.28 1024 736 1024s288-129.28 288-288S894.72 448 736 448z m0 64c124.032 0 224 100.032 224 224 0 124.032-100.032 224-224 224A223.616 223.616 0 0 1 512 736C512 611.968 612.032 512 736 512zM704 576v128H576v64h128v128h64v-128h128v-64h-128V576z"
        fill=""
      />
    </Svg>
  );
};

export default AddNewImageIcon;
