import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

interface ArrowDownProps {
  style?: StyleProp<ViewStyle>; // Оголошуємо пропс для стилю
}

const ArrowDown: React.FC<ArrowDownProps> = ({ style }) => {
  return (
      <Svg viewBox="0 0 11 6" fill="none" style={[style]}>
        <Rect width={0.822345} height={7.58187} rx={0.411173} transform="matrix(-0.812167 -0.584542 0.712839 -0.700339 5.58594 5.93994)" fill="#2B1D1D" />
        <Path d="M5.74133 5.12701C5.90037 5.28932 5.87791 5.52543 5.69117 5.65438C5.50443 5.78333 5.22413 5.75629 5.06509 5.59398L0.336027 0.767571C0.176988 0.605259 0.199443 0.369143 0.386183 0.240192C0.572923 0.111241 0.853233 0.138287 1.01227 0.300599L5.74133 5.12701Z" fill="#2B1D1D" />
      </Svg>
  );
};

export default ArrowDown;
