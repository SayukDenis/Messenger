// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
  eventContainer: {
    width: screenWidth,
    height: 0.059 * screenHeight,
    borderBottomWidth: 0.2,
    flexDirection: "row",
  },
  eventIconContainer: {
    height: "80%",
    width: 0.11 * screenWidth,
    alignSelf: "center",
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventIcon: {
    width: 0.028 * screenHeight,
    height: 0.028 * screenHeight,
  },
  eventInfoMainContainer: {
    height: "100%",
    width: 0.89 * screenWidth,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  eventAuthorAvatar: {
    width: 0.046 * screenHeight,
    height: 0.046 * screenHeight,
    borderRadius: 100,
    alignSelf: "flex-start",
    top: 0.0065 * screenHeight,
    left: 0.03 * screenWidth,
  },
  eventInfoContainer: {
    height: "100%",
    width: 0.8 * screenWidth,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column",
    left: 0.05 * screenWidth,
  },
  eventAuthorTitle: {
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
    width: "85%",
  },
  eventText: {
    fontSize: 15,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(73, 73, 73)",
    width: "85%",
  },
});
