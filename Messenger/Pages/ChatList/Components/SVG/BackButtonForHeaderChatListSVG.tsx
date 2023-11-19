import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const BackButtonForHeaderChatListSVG = () => (
  <Svg width="40" height="50" viewBox="0 0 12 23" fill="none" >
    <Rect
      width="1.61477"
      height="14.7084"
      rx="0.807384"
      transform="matrix(-0.556114 -0.831106 -0.674407 0.73836 11.1057 11.2341)"
      fill="#434343"
    />
    <Path
      d="M9.58051 11.5391C9.88742 11.8625 10.3315 11.8206 10.5724 11.4453C10.8133 11.0701 10.7598 10.5037 10.4529 10.1802L1.44047 0.681731C1.13355 0.358259 0.689464 0.400222 0.448569 0.775458C0.207674 1.15069 0.261196 1.71711 0.568114 2.04058L9.58051 11.5391Z"
      fill="#434343"
    />
  </Svg>
);

export default connect(null)(BackButtonForHeaderChatListSVG);
