import React from 'react';
import { View, StyleProp, ViewStyle,Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface LineProps {
  style?: StyleProp<ViewStyle>; // Оголошуємо пропс для стилю
}
const { width: screenWidth ,height:screenHeight} = Dimensions.get('window');
const Line: React.FC<LineProps> = ({ style }) => {
  return (
      <Svg width={screenWidth*0.11} height={screenHeight*0.01} viewBox="0 0 30 3"  fill="none" style={[style]}>
        <Rect width={screenWidth*0.07} height={screenHeight*0.003} rx={1.3} fill="#A19C91" />
      </Svg>
    
  );
};

export default Line;
