// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
  linearGradient: {
    opacity: 0.7,
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: screenHeight,
    width: screenWidth,
  },
  settingOption: {
    top: 0.02 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.065 * screenHeight,
    backgroundColor: "white",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    zIndex: 1,
    overflow: "hidden",
  },
  containerForSettingTitle: {
    top: 0.02 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.04 * screenHeight,
    justifyContent: "center",
    alignSelf: "center",
  },
  settingTitle: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(43, 29, 29)",
  },
  settingOptionTitle: {
    position: "absolute",
    left: 0.05 * screenWidth,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(43, 29, 29)",
  },
});
