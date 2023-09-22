import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ModeActivityProps {
  style?: StyleProp<ViewStyle>; // Оголошуємо пропс для стилю
}

const ModeActivity: React.FC<ModeActivityProps> = ({ style }) => {
  return (
    <View style={{position:"absolute"}}>
      <Svg viewBox="0 0 7 7" fill="none" style={[style]}>
        <Circle cx={3.5} cy={3.5} r={3.5} fill="#1DB50F" />
        <Circle cx={3.5} cy={3.5} r={1.5} fill="#D9D9D9" />
      </Svg>
    </View>
  );
};

export default ModeActivity;
