// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
  settingOption: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.07 * screenHeight,
    backgroundColor: "white",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    overflow: "hidden",
  },
  settingOptionTitle: {
    position: "absolute",
    left: 0.05 * screenWidth,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(43, 29, 29)",
  },
  settingOptionRightArrow: {
    position: "absolute",
    right: 0.045 * screenWidth,
    width: 11 * figmaWidthPixelConverter,
    height: 17 * figmaWidthPixelConverter,
    color: "rgb(43, 29, 29)",
  },
  settingTitle: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
  },
  containerForSettingTitle: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.04 * screenHeight,
    justifyContent: "center",
    alignSelf: "center",
  },
  checkMark: {
    width: 20 * figmaWidthPixelConverter,
    height: 13 * figmaHeightPixelConverter,
    position: "absolute",
    right: 0.05 * screenWidth,
  },
  linearGradient: {
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: screenHeight,
    width: screenWidth,
    opacity: 0.7,
  },
});
