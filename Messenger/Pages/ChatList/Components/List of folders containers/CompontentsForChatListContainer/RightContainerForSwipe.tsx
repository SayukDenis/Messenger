import DeleteContainer from "./RightContainerForSwipeComponents/DeleteContainer";
import NotificationStatusContainer from "./RightContainerForSwipeComponents/NotificationStatusContainer";
import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import { connect } from "react-redux";

interface RightContainersForSwipeProps {
  rightDragXposition: any;
  rightDragXpositionForRerender: number;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RightContainersForSwipe: React.FC<RightContainersForSwipeProps> = ({
  rightDragXposition,
  rightDragXpositionForRerender,
}) => {
  const scale1ForRight = rightDragXposition.interpolate({
    inputRange: [
      0,
      screenWidth,
      screenWidth * 1.4,
      screenWidth * 1.6,
      screenWidth * 2,
    ],
    outputRange: [0, 0, screenWidth * 0.2, 0, 0],
    extrapolateLeft: "clamp",
  });
  const scaleForNotRender = rightDragXposition.interpolate({
    inputRange: [
      screenWidth,
      screenWidth * 1.4,
      screenWidth * 1.6,
      screenWidth * 2,
    ],
    outputRange: [0, 1, 0, 0],
  });
  const procentOfSwipe =
    (rightDragXpositionForRerender - screenWidth) / screenWidth;

  return (
    <View
      style={{
        height: screenHeight * 0.08,
        width: screenWidth,
        flexDirection: "row",
      }}
    >
      <NotificationStatusContainer
        scaleForNotRender={scaleForNotRender}
        procentOfSwipe={procentOfSwipe}
      />
      <DeleteContainer
        scale1ForRight={scale1ForRight}
        procentOfSwipe={procentOfSwipe}
      />
    </View>
  );
};

export default connect(null)(RightContainersForSwipe);
