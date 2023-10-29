import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  width: number;
  height: number;
}

const OffNotificationSvg: React.FC<SvgProps> = ({ width, height }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 8 10">
        <Path
          d="M4 0C3.6839 0 3.42851 0.279297 3.42851 0.625V0.974609C2.13374 1.19922 1.14257 2.42578 1.14257 3.90625V4.55859C1.14257 5.44531 0.865758 6.30664 0.360351 6.99805L0.094253 7.36328C-0.00932881 7.50391 -0.0289736 7.69727 0.0424621 7.85938C0.113898 8.02148 0.263913 8.125 0.428215 8.125H7.57178C7.73609 8.125 7.8861 8.02148 7.95754 7.85938C8.02897 7.69727 8.00933 7.50391 7.90575 7.36328L7.63965 7C7.13424 6.30664 6.85743 5.44531 6.85743 4.55859V3.90625C6.85743 2.42578 5.86626 1.19922 4.57149 0.974609V0.625C4.57149 0.279297 4.3161 0 4 0ZM4 1.875H4.14287C5.16797 1.875 6.0002 2.78516 6.0002 3.90625V4.55859C6.0002 5.49414 6.24844 6.40625 6.7092 7.1875H1.2908C1.75156 6.40625 1.9998 5.49414 1.9998 4.55859V3.90625C1.9998 2.78516 2.83203 1.875 3.85713 1.875H4ZM5.14297 8.75H4H2.85703C2.85703 9.08203 2.97668 9.40039 3.19099 9.63477C3.4053 9.86914 3.6964 10 4 10C4.3036 10 4.5947 9.86914 4.80901 9.63477C5.02332 9.40039 5.14297 9.08203 5.14297 8.75Z"
          fill="black"
        />
      </Svg>
    </View>
  );
};

export default OffNotificationSvg;
