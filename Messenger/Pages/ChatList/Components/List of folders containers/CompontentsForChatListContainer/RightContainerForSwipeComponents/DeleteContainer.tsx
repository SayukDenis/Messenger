import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Animated } from "react-native";
import DeleteForSwipeableSvg from "../../../SVG/DeleteForSwipeableSvg";
import { connect } from "react-redux";
import {
  screenHeight,
  screenWidth,
} from "../../../../Constants/ConstantsForChatlist";
interface DeleteContainerProps {
  procentOfSwipe: number;
  scale1ForRight: number;
}
const DeleteContainer: React.FC<DeleteContainerProps> = ({
  procentOfSwipe,
  scale1ForRight,
}) => {
  return (
    <Animated.View
      style={{
        width: screenWidth,
        justifyContent: "center",
        transform: [
          {
            translateX: scale1ForRight,
          },
        ],
      }}
    >
      <LinearGradient
        colors={["rgba(255, 34, 27, 1)", "rgba(255, 34, 27, 0.1)"]}
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
          width: screenWidth,
          height: screenHeight * 0.08,
        }}
      />
      <Animated.View
        style={{
          width: screenWidth * 0.2,
          height: screenHeight * 0.08,
          justifyContent: "center",
          flexDirection: "row", //backgroundColor: "red",
        }}
      >
        <Animated.View
          style={{
            justifyContent: "center",
          }}
        >
          <DeleteForSwipeableSvg
            width={screenWidth * 0.085}
            height={screenHeight * 0.05}
            color="white"
          />
          <Animated.Text
            style={{
              color: "white",
              alignSelf: "center",
            }}
          >
            Delete
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default connect(null)(DeleteContainer);
