import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgProps {
  width: number;
  height: number;
  color: string;
}

const SelectForSwipeableSvg: React.FC<SvgProps> = ({ width, height, color = "white" }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 25 25">
        <Path
          d="M12.5 2.34375C15.1936 2.34375 17.7769 3.41378 19.6816 5.31845C21.5862 7.22311 22.6562 9.80639 22.6562 12.5C22.6562 15.1936 21.5862 17.7769 19.6816 19.6816C17.7769 21.5862 15.1936 22.6562 12.5 22.6562C9.80639 22.6562 7.22311 21.5862 5.31845 19.6816C3.41378 17.7769 2.34375 15.1936 2.34375 12.5C2.34375 9.80639 3.41378 7.22311 5.31845 5.31845C7.22311 3.41378 9.80639 2.34375 12.5 2.34375ZM12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM18.0176 10.2051C18.4766 9.74609 18.4766 9.00391 18.0176 8.5498C17.5586 8.0957 16.8164 8.09082 16.3623 8.5498L10.9424 13.9697L8.64746 11.6748C8.18848 11.2158 7.44629 11.2158 6.99219 11.6748C6.53809 12.1338 6.5332 12.876 6.99219 13.3301L10.1172 16.4551C10.5762 16.9141 11.3184 16.9141 11.7725 16.4551L18.0176 10.2051Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default SelectForSwipeableSvg;
