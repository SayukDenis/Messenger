// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

// Main styles for main user page
export const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 27,
    fontFamily: "JacquesFrancois-Regular",
  },
  topToolBar: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    height: 77 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    justifyContent: "center",
  },
  goBackFromProfileButton: {
    position: "absolute",
    top: 0.05 * screenHeight,
    alignSelf: "flex-start",
    left: 0.045 * screenWidth,
    width: 30 * figmaWidthPixelConverter,
    height: 30 * figmaWidthPixelConverter,
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  linearGradient: {
    top: 0,
    position: "absolute",
    left: 0,
    right: 0,
    height: screenHeight,
    width: screenWidth,
  },
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
    color: "rgb(111, 111, 111)",
  },
  plusIcon: {
    position: "absolute",
    left: 0.045 * screenWidth,
    width: 22 * figmaWidthPixelConverter,
    height: 22 * figmaWidthPixelConverter,
  },
  buttonWithPlusTitle: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(43, 29, 29)",
  },
  toggleButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0.05 * screenWidth,
  },
  toggleButtonBackground: {
    width: 0.15 * screenWidth,
    height: 0.034 * screenHeight,
    backgroundColor: "rgb(161, 156, 145)",
    borderRadius: 20,
    justifyContent: "center",
    padding: 0.003 * screenHeight,
  },
  toggleButtonCircle: {
    height: 0.027 * screenHeight,
    width: 0.027 * screenHeight,
    borderRadius: 20,
    backgroundColor: "white",
  },
});
