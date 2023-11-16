// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface SortIconProps {
  style?: ViewStyle;
}

const SortIcon: React.FC<SortIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 2L7.29289 1.29289L8 0.585786L8.70711 1.29289L8 2ZM9 17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17L9 17ZM2.29289 6.29289L7.29289 1.29289L8.70711 2.70711L3.70711 7.70711L2.29289 6.29289ZM8.70711 1.29289L13.7071 6.29289L12.2929 7.70711L7.29289 2.70711L8.70711 1.29289ZM9 2L9 17L7 17L7 2L9 2Z"
        fill="#33363F"
      />
      <Path
        d="M16 22L15.2929 22.7071L16 23.4142L16.7071 22.7071L16 22ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44771 15 7L17 7ZM10.2929 17.7071L15.2929 22.7071L16.7071 21.2929L11.7071 16.2929L10.2929 17.7071ZM16.7071 22.7071L21.7071 17.7071L20.2929 16.2929L15.2929 21.2929L16.7071 22.7071ZM17 22L17 7L15 7L15 22L17 22Z"
        fill="#33363F"
      />
    </Svg>
  );
};

export default SortIcon;
