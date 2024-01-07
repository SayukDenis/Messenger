// NotificationStatusContainerForRightContainerForSwipe.tsx
import React, { MutableRefObject, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import MuteForSwipeableSvg from "../../SVG/MuteForSwipeableSvg";
import UnMuteForSwipeableSvg from "../../SVG/UnMuteForSwipeableSvg";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";

interface NotificationStatusContainerProps {
  procentOfSwipe: number;
  scaleForNotRender:any
}

const NotificationStatusContainerForRightContainerForSwipe: React.FC<NotificationStatusContainerProps> = ({
  procentOfSwipe,
  scaleForNotRender,

}) => {
  const   randomBoolean:MutableRefObject<boolean>=useRef(false)
  useEffect(() => {
    randomBoolean.current = Math.random() < 0.5;
  }, []);
  return (
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
        colors={["rgba(255, 135, 35, 1)", "rgba(255, 135, 35, 0.1)"]}
        start={{
          x: 0.2,
          y: -2 * procentOfSwipe,
        }}
        end={{
          x: 0,
          y: 1.2 * procentOfSwipe,
        }}
        style={{
          position: "absolute",
          width: screenWidth * 0.2,
          height: screenHeight * 0.08,
        }}
      />
      <Animated.View
        style={{
          width: screenWidth * 0.2,
          height: screenHeight * 0.08,
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Animated.View
            style={{
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
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
            <Animated.Text
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              Notification
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default connect(null)(NotificationStatusContainerForRightContainerForSwipe);
