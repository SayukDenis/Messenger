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
  newBranchNameInput: {
    width: "90%",
    fontSize: 17,
    fontFamily: "JacquesFrancois-Regular",
  },
  doneButtonContainer: {
    position: "absolute",
    top: 0.058 * screenHeight,
    right: 0,
    width: 0.2 * screenWidth,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(92, 64, 129)",
  },
});