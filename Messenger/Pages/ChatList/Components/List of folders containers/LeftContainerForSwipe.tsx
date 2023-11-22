// LeftContainerForSwipe.tsx
import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

import ReadForSwipeableSvg from "../SVG/ReadForSwipeableSvg";
import UnReadMessageSvg from "../SVG/UnReadMessageSvg";
import SelectForSwipeableSvg from "../SVG/SelectForSwipeableSvg";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

interface LeftContainerForSwipeProps {
  leftDragXposition: any;
  leftDragXpositionForRerender:number;
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
      outputRange: [0, 0, -screenWidth * 0.2, 0],
    })
  );
  const scaleForNotRender = leftDragXposition.interpolate({
    inputRange: [0, screenWidth * 0.4, screenWidth * 0.6, screenWidth],
    outputRange: [0, 0, 1, 0],
    //extrapolateLeft: "clamp",
  });
  useEffect(() => {
    //console.log(scaleForNotRender.__getValue());
    //console.log(leftDragXposition)
    //console.log(Number.parseInt(JSON.stringify(scaleForNotRender)))
  });
  return (
    <Animated.View
      style={{
        width: screenWidth,
        //backgroundColor: "#7C9FE3",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: screenHeight * 0.08,
      }}
    >
      <Animated.View
        style={{
          width: screenWidth,
          
          justifyContent: "flex-end",
          flexDirection: "row",
          zIndex: 1,
          opacity: 1,
          transform: [
            {
              translateX: scale1ForLeft.current,
            },
          ],
        }}
      >
        <LinearGradient
          colors={["rgba(15, 255, 197, 1)", "rgba(15, 255, 197, 0)"]}
          //locations={[0.5, 0.5]}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0.7, y: 0 }}
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
          position: "absolute",
          overflow: "hidden",
          //backgroundColor: "blue",
          width: screenWidth * 0.2 * scaleForNotRender.__getValue(),
          height: screenHeight * 0.08,
          justifyContent: "flex-start",
          direction:"rtl"
          // flexDirection:"row"
        }}
      >
        <LinearGradient
          colors={["rgba(46, 117, 255, 1)", "rgba(46, 117, 255, 0)"]}
          //locations={[0.5, 0.5]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: "absolute",
            width: screenWidth,
            height: screenHeight * 0.08,
          }}
        />
        <Animated.View style={{
            
            width: screenWidth * 0.2,
            height: screenHeight * 0.08,
            justifyContent: "center",
            position: "absolute",
          }}>
          <Animated.View
            style={{
              justifyContent: "center",

              flexDirection:"row-reverse",
  
              // top: 0,
              // bottom: 0,
              // left: 0,
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
    </Animated.View>
  );
};

export default connect(null)(LeftContainerForSwipe);
