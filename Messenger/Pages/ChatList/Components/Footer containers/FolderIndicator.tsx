import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { footerstyles } from '../../Styles/FooterStyle';
import { useSelector } from 'react-redux';
import { Easing } from 'react-native-reanimated';

interface AnimatedFolderIndicatorProps {
  screenWidth: number;
  widths: any;
  positionsOfFolder: any;
  isVisibleForModalFolder: boolean;
}

const FolderIndicator: React.FC<AnimatedFolderIndicatorProps> = ({
  widths,
  isVisibleForModalFolder,
  positionsOfFolder,
  screenWidth,
}) => {
  const selectedFolder = useSelector((state: any) => state?.chatListReducer.selectedFolder.selectedFolder);
  const currentPosition = useSelector((state: any) => state.chatListReducer.currentPosition.currentPosition);
  
  const indicatorLeft = new Animated.Value(
    (((currentPosition - screenWidth * Math.round(currentPosition / screenWidth)) %
      screenWidth) /
      screenWidth) *
      widths.current[Math.round(currentPosition / screenWidth)] +
      positionsOfFolder.current[Math.round(currentPosition / screenWidth)]
  );

  Animated.timing(indicatorLeft, {
    toValue:
      (((currentPosition - screenWidth * Math.round(currentPosition / screenWidth)) %
        screenWidth) /
        screenWidth) *
        widths.current[Math.round(currentPosition / screenWidth)] +
      positionsOfFolder.current[Math.round(currentPosition / screenWidth)],
    duration:0,
    useNativeDriver: true, 
  }).start();

  return (
    <Animated.View style={{ transform: [{translateX:indicatorLeft}] }}>
      
        <Animated.View
          style={[
            footerstyles.selectedFolder,
            {
              width: widths.current[selectedFolder] * 0.8,
              marginLeft: widths.current[selectedFolder] * 0.1,
              opacity:!isVisibleForModalFolder ?1:0
            },
          ]}
        />
      
    </Animated.View>
  );
};

export default FolderIndicator;
