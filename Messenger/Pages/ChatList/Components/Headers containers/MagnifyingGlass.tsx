import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';

interface MagnifyingGlassProps {
  style?: ViewStyle;
  height?:number;
  width?:number;
  color?:string 
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({ style,height,width,color="#2B1D1D" }) => {
  
  return (
    <View style={style}>
      <Svg height={height} width={width} viewBox="0 0 18 17" fill="none" >
        <Path
          d="M11.5718 6.17463C11.5718 9.14159 9.1618 11.5493 6.18588 11.5493C3.20997 11.5493 0.8 9.14159 0.8 6.17463C0.8 3.20768 3.20997 0.8 6.18588 0.8C9.1618 0.8 11.5718 3.20768 11.5718 6.17463Z"
          stroke={color}
          strokeWidth={1.6}
          
        />
        <Line
          y1={-0.8}
          x2={9.49653}
          y2={-0.8}
          transform="matrix(0.70775 0.706463 -0.70775 0.706463 9.2793 10.291)"
          stroke={color}
          strokeWidth={1.6}

        />
      </Svg>
    </View>
  );
};

export default MagnifyingGlass;
