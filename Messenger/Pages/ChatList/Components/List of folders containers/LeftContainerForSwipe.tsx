// LeftContainerForSwipe.tsx
import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

import ReadForSwipeableSvg from "../SVG/ReadForSwipeableSvg";
import UnReadMessageSvg from "../SVG/UnReadMessageSvg";
import SelectForSwipeableSvg from "../SVG/SelectForSwipeableSvg";
import { Dimensions } from "react-native";
import { connect } from "react-redux";

interface LeftContainerForSwipeProps {
    leftDragXposition: any;
  haveUnreadMessagesBoolf: React.MutableRefObject<boolean>;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LeftContainerForSwipe: React.FC<LeftContainerForSwipeProps> = ({
  leftDragXposition,
  haveUnreadMessagesBoolf,
}) => {
    const scale1ForLeft = useRef(
        leftDragXposition.interpolate({
          inputRange: [0, screenWidth * 0.4, screenWidth * 0.6, screenWidth],
          outputRange: [screenWidth * 0.2, screenWidth * 0.2, 0, screenWidth * 0.2],
        }));
  
  return (
    <Animated.View
      style={{
        width: screenWidth,
        backgroundColor: "#7C9FE3",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: screenHeight * 0.08,
      }}
    >
      <Animated.View
        style={{
          width: screenWidth,
          backgroundColor: "#9FA1AD",
          justifyContent: "flex-end",
          flexDirection: "row",
          zIndex: 1,
          transform: [
            {
              translateX: scale1ForLeft.current,
            },
          ],
        }}
      >
        <Animated.View
          style={{
            width: screenWidth * 0.2,
            height: screenHeight * 0.08,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Animated.View
            style={{
              justifyContent: "center",
            }}
          >
            {!haveUnreadMessagesBoolf.current ? (
              <ReadForSwipeableSvg
                width={screenWidth * 0.085}
                height={screenHeight * 0.05}
                color="white"
              />
            ) : (
              <UnReadMessageSvg
                width={screenWidth * 0.085}
                height={screenHeight * 0.05}
                color="white"
              />
            )}
            <Animated.Text style={{ color: "white", alignSelf: "center" }}>
              Read
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          width: screenWidth * 0.2,
          height: screenHeight * 0.08,
          justifyContent: "center",
          // flexDirection:"row"
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
            //backgroundColor:"blue",
            flexDirection: "row",
          }}
        >
          <Animated.View
            style={{
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <SelectForSwipeableSvg
                width={screenWidth * 0.085}
                height={screenHeight * 0.05}
                color="white"
              />
            </Animated.View>
            <Animated.Text style={{ color: "white", alignSelf: "center" }}>
              Select
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default connect(null) (LeftContainerForSwipe);
