import React from 'react';
import { Animated, View } from 'react-native';
import { footerstyles } from '../../Styles/FooterStyle';

interface AnimatedFolderIndicatorProps {
    currentPosition: number;
    screenWidth: number;
    widths: number[];
    positionsOfFolder: number[];
    isVisibleForModalFolder: boolean;
  }
  
const FolderIndicator: React.FC<AnimatedFolderIndicatorProps> = ({
  currentPosition,
  screenWidth,
  widths,
  positionsOfFolder,
  isVisibleForModalFolder,
}) => {
  const indicatorLeft =
    (((currentPosition - screenWidth * Math.round(currentPosition / screenWidth)) %
      screenWidth) /
      screenWidth) *
      widths[Math.round(currentPosition / screenWidth)] +
    positionsOfFolder[Math.round(currentPosition / screenWidth)];

  return (
    <Animated.View style={{ left: indicatorLeft }}>
      {!isVisibleForModalFolder ? (
        <Animated.View
          style={[
            footerstyles.selectedFolder,
            {
              width: widths[Math.round(currentPosition / screenWidth)] * 0.8,
              marginLeft: widths[Math.round(currentPosition / screenWidth)] * 0.1,
            },
          ]}
        />
      ) : null}
    </Animated.View>
  );
};

export default FolderIndicator;
