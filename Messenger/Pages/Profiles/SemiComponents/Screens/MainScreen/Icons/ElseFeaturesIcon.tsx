// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";

interface ElseFeaturesIconProps {
  style?: ViewStyle;
  fill?: string;
}

const ElseFeaturesIcon: React.FC<ElseFeaturesIconProps> = (props) => {
  return (
    <Svg style={props.style} viewBox="0 0 16 21" fill="none">
      <Path
        d="M2.25781 14.2734C2.38802 14.2734 2.51302 14.2995 2.63281 14.3516C2.7526 14.4036 2.85677 14.474 2.94531 14.5625C3.03385 14.651 3.10417 14.7552 3.15625 14.875C3.20833 14.9948 3.23438 15.1198 3.23438 15.25C3.23438 15.3802 3.20833 15.5052 3.15625 15.625C3.10938 15.7396 3.04167 15.8438 2.95312 15.9375C2.86458 16.026 2.76042 16.0964 2.64062 16.1484C2.52083 16.2005 2.39323 16.2266 2.25781 16.2266C2.1224 16.2266 1.99479 16.2005 1.875 16.1484C1.75521 16.1016 1.65104 16.0339 1.5625 15.9453C1.47396 15.8568 1.40365 15.7526 1.35156 15.6328C1.30469 15.513 1.28125 15.3854 1.28125 15.25C1.28125 15.1146 1.30729 14.987 1.35938 14.8672C1.41146 14.7474 1.48177 14.6432 1.57031 14.5547C1.65885 14.4661 1.76042 14.3984 1.875 14.3516C1.99479 14.2995 2.1224 14.2734 2.25781 14.2734ZM6.77344 14.2734C6.90365 14.2734 7.02865 14.2995 7.14844 14.3516C7.26823 14.4036 7.3724 14.474 7.46094 14.5625C7.54948 14.651 7.61979 14.7552 7.67188 14.875C7.72396 14.9948 7.75 15.1198 7.75 15.25C7.75 15.3802 7.72396 15.5052 7.67188 15.625C7.625 15.7396 7.55729 15.8438 7.46875 15.9375C7.38021 16.026 7.27604 16.0964 7.15625 16.1484C7.03646 16.2005 6.90885 16.2266 6.77344 16.2266C6.63802 16.2266 6.51042 16.2005 6.39062 16.1484C6.27083 16.1016 6.16667 16.0339 6.07812 15.9453C5.98958 15.8568 5.91927 15.7526 5.86719 15.6328C5.82031 15.513 5.79688 15.3854 5.79688 15.25C5.79688 15.1146 5.82292 14.987 5.875 14.8672C5.92708 14.7474 5.9974 14.6432 6.08594 14.5547C6.17448 14.4661 6.27604 14.3984 6.39062 14.3516C6.51042 14.2995 6.63802 14.2734 6.77344 14.2734ZM11.2891 14.2734C11.4193 14.2734 11.5443 14.2995 11.6641 14.3516C11.7839 14.4036 11.888 14.474 11.9766 14.5625C12.0651 14.651 12.1354 14.7552 12.1875 14.875C12.2396 14.9948 12.2656 15.1198 12.2656 15.25C12.2656 15.3802 12.2396 15.5052 12.1875 15.625C12.1406 15.7396 12.0729 15.8438 11.9844 15.9375C11.8958 16.026 11.7917 16.0964 11.6719 16.1484C11.5521 16.2005 11.4245 16.2266 11.2891 16.2266C11.1536 16.2266 11.026 16.2005 10.9062 16.1484C10.7865 16.1016 10.6823 16.0339 10.5938 15.9453C10.5052 15.8568 10.4349 15.7526 10.3828 15.6328C10.3359 15.513 10.3125 15.3854 10.3125 15.25C10.3125 15.1146 10.3385 14.987 10.3906 14.8672C10.4427 14.7474 10.513 14.6432 10.6016 14.5547C10.6901 14.4661 10.7917 14.3984 10.9062 14.3516C11.026 14.2995 11.1536 14.2734 11.2891 14.2734Z"
        fill={props.fill ? props.fill : "rgb(43, 29, 29)"}
      />
    </Svg>
  );
};

export default ElseFeaturesIcon;
