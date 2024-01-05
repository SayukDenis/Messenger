// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(227, 192, 124)",
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  subscribersButtonMainContainer: {
    backgroundColor: "rgb(218, 182, 113)",
    width: 0.85 * screenWidth,
    height: 0.06 * screenHeight,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 7,
    borderWidth: 0.4,
    top: 0.015 * screenHeight,
    borderColor: "rgb(161, 156, 145)",
  },
  subscribersButtonTitle: {
    position: "absolute",
    left: 0.05 * screenWidth,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 17,
    color: "rgb(92, 64, 129)",
  },
  subscribersButtonRightArrow: {
    position: "absolute",
    right: 0.045 * screenWidth,
    width: 11 * figmaWidthPixelConverter,
    height: 17 * figmaWidthPixelConverter,
    color: "rgb(111, 111, 111)",
  },
  subscribersButtonSubscribersQuantityTitle: {
    position: "absolute",
    right: 0.1 * screenWidth,
    fontSize: 16,
    color: "rgb(92, 64, 129)",
  },
});
