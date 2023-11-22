// RightContainersForSwipe.tsx
import React, { useRef, useEffect, useState } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import MuteForSwipeableSvg from "../SVG/MuteForSwipeableSvg";
import UnMuteForSwipeableSvg from "../SVG/UnMuteForSwipeableSvg";
import DeleteForSwipeableSvg from "../SVG/DeleteForSwipeableSvg";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

interface RightContainersForSwipeProps {
  rightDragXposition: any;
  rightDragXpositionForRerender:number;
  randomBoolean: React.MutableRefObject<boolean>;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const RightContainersForSwipe: React.FC<RightContainersForSwipeProps> = ({
  randomBoolean,
  rightDragXposition,
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
    //extrapolateLeft: "clamp",
  });
  useEffect(() => {
   // console.log(scaleForNotRender.__getValue())
    //console.log(rightDragXposition.__getValue())
    //console.log(Number.parseInt(JSON.stringify(scaleForNotRender)))
    //console.log(10)
  });
  useEffect(() => {
    randomBoolean.current = Math.random() < 0.5;
  }, []);

  return (
    <View
      style={{
        height: screenHeight * 0.08,
        width: screenWidth,

        flexDirection: "row",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          width: screenWidth * 0.2 * scaleForNotRender.__getValue(),
          overflow: "hidden",
          zIndex: 0,
          top: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <LinearGradient
           colors={["rgba(255, 135, 35, 1)", "rgba(255, 135, 35, 0)"]}
          //locations={[0.5, 0.5]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: "absolute",
            width: screenWidth,
            height: screenHeight * 0.08,
          }}
        />
        <Animated.View
          style={{
           // backgroundColor: "#F79747",
            width: screenWidth * 0.2,
            height: screenHeight * 0.08,
            justifyContent: "center",
            position: "absolute",
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
      </Animated.View>
      <Animated.View
        style={{
          width: screenWidth,
          justifyContent: "center",

          transform: [{ translateX: scale1ForRight }],
        }}
      >
        <LinearGradient
          colors={["rgba(255, 34, 27, 1)", "rgba(255, 34, 27, 0)"]}
          //locations={[0.5, 0.5]}
          end={{ x: 0, y: 0.3 }}
          start={{ x: 0.7, y: 0 }}
          style={{
            position: "absolute",
            width: screenWidth,
            height: screenHeight * 0.08,
          }}
        />
        <Animated.View
          style={{
            width: screenWidth * 0.2,
            height: screenHeight * 0.08,
            justifyContent: "center",
            flexDirection: "row",
            //backgroundColor: "red",
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

export default connect(null)(RightContainersForSwipe);
