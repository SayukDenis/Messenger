// RightContainersForSwipe.tsx
import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import MuteForSwipeableSvg from "../SVG/MuteForSwipeableSvg";
import UnMuteForSwipeableSvg from "../SVG/UnMuteForSwipeableSvg";
import DeleteForSwipeableSvg from "../SVG/DeleteForSwipeableSvg";
import { connect } from "react-redux";

interface RightContainersForSwipeProps {
  rightDragXposition:any;
  randomBoolean: React.MutableRefObject<boolean>;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RightContainersForSwipe: React.FC<RightContainersForSwipeProps> = ({
  randomBoolean,
  rightDragXposition
}) => {
    const scale1ForRight = rightDragXposition.interpolate({
        inputRange: [
          0,
          screenWidth,
          screenWidth * 1.4,
          screenWidth * 1.6,
          screenWidth * 2,
        ],
        outputRange: [-screenWidth * 0.2,
          -screenWidth * 0.2,
          0,
          -screenWidth * 0.2,
          -screenWidth * 0.2,
        ],
        extrapolateLeft: "clamp",
      });
  useEffect(() => {
    randomBoolean.current = Math.random() < 0.5;
  }, []);
  
  return (
    <View
      style={{
        height: screenHeight * 0.08,
        width: screenWidth,
        backgroundColor: "#F79747",
        flexDirection: "row",
      }}
    >
      <Animated.View
        style={{
          width: screenWidth * 0.2,
          height: screenHeight * 0.08,
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{ justifyContent: "center", flexDirection: "row" }}
        >
          <Animated.View style={{ justifyContent: "center" }}>
            <Animated.View
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              {randomBoolean.current ? (
                <MuteForSwipeableSvg
                  width={screenWidth * 0.085}
                  height={screenHeight * 0.05}
                  color="white"
                />
              ) : (
                <UnMuteForSwipeableSvg
                  width={screenWidth * 0.085}
                  height={screenHeight * 0.05}
                  color="white"
                />
              )}
            </Animated.View>
            <Animated.Text style={{ color: "white", alignSelf: "center" }}>
              Notification
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          width: screenWidth,
          backgroundColor: "red",
          justifyContent: "center",
          transform: [{ translateX: scale1ForRight }],
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
          <Animated.View style={{ justifyContent: "center" }}>
            <DeleteForSwipeableSvg
              width={screenWidth * 0.085}
              height={screenHeight * 0.05}
              color="white"
            />
            <Animated.Text style={{ color: "white", alignSelf: "center" }}>
              Delete
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default connect(null)( RightContainersForSwipe);
