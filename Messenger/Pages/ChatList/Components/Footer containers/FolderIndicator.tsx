import React, { useEffect } from "react";
import { Animated, View } from "react-native";
import { footerstyles } from "../../Styles/FooterStyle";
import { connect, useSelector } from "react-redux";
import { Easing } from "react-native-reanimated";
import { screenWidth } from "../../Constants/ConstantsForChatlist";

interface AnimatedFolderIndicatorProps {
  widths: any;
  positionsOfFolder: any;
  isVisibleForModalFolder: boolean;
}

const FolderIndicator: React.FC<AnimatedFolderIndicatorProps> = ({
  widths,
  isVisibleForModalFolder,
  positionsOfFolder,
}) => {
  const selectedFolder = useSelector(
    (state: any) => state?.chatListReducer.selectedFolder.selectedFolder
  );
  const currentPosition = useSelector(
    (state: any) => state.chatListReducer.currentPosition.currentPosition
  );

  const indicatorLeft = new Animated.Value(
    (((currentPosition -
      screenWidth * Math.round(currentPosition / screenWidth)) %
      screenWidth) /
      screenWidth) *
      widths.current[Math.round(currentPosition / screenWidth)] +
      positionsOfFolder.current[Math.round(currentPosition / screenWidth)]
  );

  Animated.timing(indicatorLeft, {
    toValue:
      (((currentPosition -
        screenWidth * Math.round(currentPosition / screenWidth)) %
        screenWidth) /
        screenWidth) *
        widths.current[Math.round(currentPosition / screenWidth)] +
      positionsOfFolder.current[Math.round(currentPosition / screenWidth)],
    duration: 0,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View style={{ transform: [{ translateX: indicatorLeft }] }}>
      <Animated.View
        style={[
          footerstyles.selectedFolder,
          {
            width: widths.current[selectedFolder] - screenWidth * 0.04,
            opacity: !isVisibleForModalFolder ? 1 : 0,
            marginLeft: screenWidth * 0.04 + screenWidth * 0.02,
          },
        ]}
      />
    </Animated.View>
  );
};

export default connect(null)(FolderIndicator);
