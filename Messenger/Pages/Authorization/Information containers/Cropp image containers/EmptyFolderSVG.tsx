import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ClippedFolderSVG = () => {
  return (
    <View>
      <Svg width={356} height={409} viewBox="0 0 356 409" fill="none">
        <Path
          d="M0 0H178V85C178 85 127.641 83.5 93.2381 119.5C58.8347 155.5 57.8375 195 57.8375 195C57.8375 195 50.3585 248.5 96.2297 293C129.817 325.583 178 325 178 325V409H0V0Z"
          fill="black"
          fillOpacity="0.6"
        />
        <Path
          d="M356 0H178V84.5V85C178 85 228.359 83.5 262.762 119.5C297.165 155.5 298.162 195 298.162 195C298.162 195 305.641 248.5 259.77 293C226.183 325.583 178 325 178 325V409H356V0Z"
          fill="black"
          fillOpacity="0.6"
        />
      </Svg>
    </View>
  );
};

export default ClippedFolderSVG;
