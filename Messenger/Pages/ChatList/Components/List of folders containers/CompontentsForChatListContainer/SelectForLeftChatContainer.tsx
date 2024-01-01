// SelectForLeftChatContainer.tsx
import React from "react";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import SelectForSwipeableSvg from "../../SVG/SelectForSwipeableSvg";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";

interface SelectForLeftChatContainerProps {
  procentOfSwipe: number;
  scaleForNotRender: any;
}

const SelectForLeftChatContainer: React.FC<SelectForLeftChatContainerProps> = ({
  procentOfSwipe,
  scaleForNotRender,
}) => {
  return (
    <Animated.View
      style={{
        position: "absolute",
        overflow: "hidden",
        width: screenWidth * 0.2 * scaleForNotRender.__getValue(),
        height: screenHeight * 0.08,
        justifyContent: "flex-start",
        direction: "rtl",
      }}
    >
      <LinearGradient
        colors={["rgba(46, 117, 255, 1)", "rgba(46, 117, 255, 0.1)"]}
        start={{
          x: 1 - 0.2,
          y: -2 * procentOfSwipe,
        }}
        end={{
          x: 1,
          y: 1.2 * procentOfSwipe,
        }}
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
          position: "absolute",
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
            flexDirection: "row-reverse",
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
              <SelectForSwipeableSvg
                width={screenWidth * 0.085}
                height={screenHeight * 0.05}
                color="white"
              />
            </Animated.View>
            <Animated.Text
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              Select
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default connect(null)(SelectForLeftChatContainer);
