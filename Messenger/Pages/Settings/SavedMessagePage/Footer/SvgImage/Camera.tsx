import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

const Camera = () => {
  return (
    <TouchableOpacity>
     <Svg width={24} height={24} viewBox="0 0 24 24">
        <Circle cx={12} cy={12} r={12} fill="#423D3D" />
        <Path
          d="M13.6367 11.9996L18.9549 8.22063V15.7787L13.6367 11.9996Z"
          fill="#B89191"
        />
        <Rect x={6.54492} y={7.63623} width={8.86364} height={8.72727} fill="#B89191" />
      </Svg>
    </TouchableOpacity>
  );
};

export default Camera;