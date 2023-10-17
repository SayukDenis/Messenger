import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const Camera = () => {
  return (
    <TouchableOpacity>
      <Svg width={18} height={18} viewBox="0 0 18 18">
        <Rect width={18} height={18} rx={2} fill="black" />
        <Circle cx={5.5} cy={4.5} r={1.5} fill="#E7E6E4" />
        <Path d="M12.125 6L16.3469 13.5H7.90313L12.125 6Z" fill="#E7E6E4" />
        <Path d="M7.25 9L10.0646 13.5H4.43542L7.25 9Z" fill="#E7E6E4" />
      </Svg>
    </TouchableOpacity>
  );
};

export default Camera;