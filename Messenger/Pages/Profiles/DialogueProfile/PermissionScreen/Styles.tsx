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
  settingOption: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.07 * screenHeight,
    backgroundColor: "rgb(218, 182, 113)",
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  settingOptionTitle: {
    position: "absolute",
    left: 0.05 * screenWidth,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(92, 64, 129)",
  },
  settingOptionRightArrow: {
    position: "absolute",
    right: 0.045 * screenWidth,
    width: 11 * figmaWidthPixelConverter,
    height: 17 * figmaWidthPixelConverter,
    color: "rgb(111, 111, 111)",
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
    color: "rgb(41, 121, 179)",
  },
  toggleButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0.05 * screenWidth,
  },
  toggleButtonBackground: {
    width: 0.16 * screenWidth,
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
