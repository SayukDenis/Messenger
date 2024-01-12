
import React from "react";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import ReadForSwipeableSvg from "../../SVG/ReadForSwipeableSvg";
import UnReadMessageSvg from "../../SVG/UnReadMessageSvg";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";

interface ReadOrUnreadForSwipeForContainerProps {
  procentOfSwipe: number;
  haveUnreadMessagesBool: boolean;
  scale1ForLeft: any;
}

const ReadOrUnreadForSwipeForContainer: React.FC<ReadOrUnreadForSwipeForContainerProps> = ({
  procentOfSwipe,
  haveUnreadMessagesBool,
  scale1ForLeft,
}) => {
  return (
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
        colors={["rgba(15, 255, 197, 1)", "rgba(15, 255, 197, 0.1)"]}
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
          flexDirection: "row",
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
          }}
        >
          {haveUnreadMessagesBool ? (
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
          <Animated.Text
            style={{
              color: "white",
              alignSelf: "center",
            }}
          >
            Unread
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default connect(null)(ReadOrUnreadForSwipeForContainer);
