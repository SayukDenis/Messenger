import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../Constants/ConstantsForChatlist";

export const modalWindowChatStateStyle = StyleSheet.create({
  chatMenuContainer: {
    position: "absolute",
  },

  chatMenuButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#E7E6E4",
    width: screenWidth * 0.45,
    borderRadius: 100,
    paddingVertical: screenHeight * 0.006,
    paddingHorizontal: screenWidth * 0.03,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },

  chatMenuSvgContainer: {
    marginRight: screenWidth * 0.015,
  },

  chatMenuButtonText: {
    fontSize: screenHeight * 0.018,
  },

  chatMenuTriangle: {
    width: 0,
    height: 0,
    top: 2,
    right: 2,
    transform: [{ rotate: "-29deg" }],
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: screenWidth * 0.015,
    borderRightWidth: screenWidth * 0.015,
    borderBottomWidth: screenWidth * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E7E6E4",
    position: "relative",
  },
});
