import SelectContainer from "./LeftContainerForSwipeComponents/SelectContainer";
import ReadOrUnreadContainer from "./LeftContainerForSwipeComponents/ReadOrUnreadContainer";
import React, { useRef } from "react";
import { Animated } from "react-native";
import { Dimensions } from "react-native";
import { connect } from "react-redux";

interface LeftContainerForSwipeProps {
  leftDragXposition: any;
  leftDragXpositionForRerender: number;
  haveUnreadMessagesBool: boolean;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LeftContainerForSwipe: React.FC<LeftContainerForSwipeProps> = ({
  leftDragXposition,
  haveUnreadMessagesBool,
  leftDragXpositionForRerender,
}) => {
  const procentOfSwipe = 1 - leftDragXpositionForRerender / screenWidth;
  const scale1ForLeft = useRef(
    leftDragXposition.interpolate({
      inputRange: [0, screenWidth * 0.4, screenWidth * 0.6, screenWidth],
      outputRange: [0, 0, -screenWidth * 0.2, 0],
    })
  );
  const scaleForNotRender = leftDragXposition.interpolate({
    inputRange: [0, screenWidth * 0.4, screenWidth * 0.6, screenWidth],
    outputRange: [0, 0, 1, 0],
  });

  return (
    <Animated.View
      style={{
        width: screenWidth,
        flexDirection: "row",
        justifyContent: "flex-end",
        height: screenHeight * 0.08,
      }}
    >
      <ReadOrUnreadContainer
        scale1ForLeft={scale1ForLeft}
        procentOfSwipe={procentOfSwipe}
        haveUnreadMessagesBool={haveUnreadMessagesBool}
      />
      <SelectContainer
        scaleForNotRender={scaleForNotRender}
        procentOfSwipe={procentOfSwipe}
      />
    </Animated.View>
  );
};

export default connect(null)(LeftContainerForSwipe);
