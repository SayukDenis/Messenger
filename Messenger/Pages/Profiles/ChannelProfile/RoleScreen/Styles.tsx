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
    zIndex: 1,
  },
  plusIcon: {
    position: "absolute",
    left: 0.045 * screenWidth,
    width: 22 * figmaWidthPixelConverter,
    height: 22 * figmaWidthPixelConverter,
    color: "rgb(92, 64, 129)",
  },
  plusRoleTitle: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(92, 64, 129)",
  },
  binIconContainer: {
    position: "absolute",
    right: 0.045 * screenWidth,
  },
  binIcon: {
    width: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
  },
  roleAvatarInList: {
    width: 0.045 * screenHeight,
    height: 0.045 * screenHeight,
    borderRadius: 100,
    position: "absolute",
    left: 0.0125 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  roleTitleContainer: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    width: "65%",
    justifyContent: "center",
  },
  roleTitleInList: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
  },
  doneButtonContainer: {
    position: "absolute",
    top: 0.064 * screenHeight - 7.09,
    right: 0,
    width: 0.2 * screenWidth,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(92, 64, 129)",
  },
  containerForSettingTitle: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.04 * screenHeight,
    justifyContent: "center",
    alignSelf: "center",
  },
  settingTitle: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
  },
  newRoleNameInput: {
    width: "90%",
    fontSize: 17,
    fontFamily: "JacquesFrancois-Regular",
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
});
