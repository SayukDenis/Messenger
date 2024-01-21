// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface PhoneIconProps {
  style?: ViewStyle;
  fill?: string;
}

const PhoneIcon: React.FC<PhoneIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.72935 1.15413C7.36842 0.282295 6.4169 -0.181748 5.50757 0.066679L1.38275 1.19163C0.567163 1.41662 0 2.15721 0 3.00092C0 14.5973 9.40271 24 20.9991 24C21.8428 24 22.5834 23.4328 22.8084 22.6173L23.9333 18.4924C24.1817 17.5831 23.7177 16.6316 22.8459 16.2707L18.3461 14.3957C17.582 14.077 16.6961 14.2973 16.1758 14.9395L14.2822 17.2503C10.9823 15.6894 8.31057 13.0177 6.7497 9.71782L9.06054 7.82884C9.7027 7.30386 9.923 6.42265 9.60426 5.65862L7.72935 1.15882V1.15413Z"
        fill={props.fill ? props.fill : "black"}
      />
    </Svg>
  );
};

export default PhoneIcon;
