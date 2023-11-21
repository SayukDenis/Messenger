import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { connect } from 'react-redux';

const screenWidth = Dimensions.get('window').width; // Ширина екрану

const HamburgerSVG = () => {
  // Розрахунок ширини та висоти у відсотках від ширини екрану
  const width = screenWidth * 0.12; // 10% від ширини екрану
  const height = width * (13 / 30); // Зберегти пропорції
  const rectHeight = height * (2.6 / 13); // Висота однієї смужки

  return (
    <Svg width={width} height={height} viewBox="0 0 30 13" fill="none">
      <Rect width="30" height="2.6" rx="1.3" fill="#A19C91"/>
      <Rect y="5" width="30" height="2.6" rx="1.3" fill="#A19C91"/>
      <Rect y="10" width="30" height="2.6" rx="1.3" fill="#A19C91"/>
    </Svg>
  );
};

export default connect(null)(HamburgerSVG);
