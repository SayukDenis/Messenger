// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";
import { user } from "../../DatabaseSimulation/DBUser";

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
  photoToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 0.1 * screenHeight,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },
  profileTitle: {
    fontSize: 20,
    fontFamily: "JacquesFrancois-Regular",
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.03 * screenWidth,
    top: 0.033 * screenHeight,
    width: 40 * figmaWidthPixelConverter,
    height: 40 * figmaWidthPixelConverter,
  },
  leftOpacityToSeePreviousPhoto: {
    position: "absolute",
    height: screenHeight,
    width: 0.17 * screenWidth,
    left: 0,
  },
  rightOpacityToSeePreviousPhoto: {
    position: "absolute",
    height: screenHeight,
    width: 0.17 * screenWidth,
    right: 0,
  },
  elseFeaturesButtonsContainer: {
    position: "absolute",
    right: 0.06 * screenWidth,
    top: 0.065 * screenHeight,
    width: 0.51 * screenWidth,
    zIndex: 2,
  },
  additionalFeatureButton: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgb(231, 230,	228)",
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 4.5 * figmaWidthPixelConverter,
    paddingLeft: 17 * figmaWidthPixelConverter,
  },
  additionalFeatureTitle: {
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
  },
  additionalFeatureIcon: {
    width: 18 * figmaWidthPixelConverter,
    height: 18 * figmaWidthPixelConverter,
    color: "black",
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
});

export default styles;
