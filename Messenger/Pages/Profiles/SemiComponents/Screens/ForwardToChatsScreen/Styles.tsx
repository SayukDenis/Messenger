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
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
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
  searchInChatContainer: {
    width: 0.63 * screenWidth,
    height: 0.05 * screenHeight,
    borderRadius: 40,
    backgroundColor: "rgb(39, 39, 39)",
    top: 0.012 * screenHeight,
    left: -0.05 * screenWidth,
    justifyContent: "center",
    paddingLeft: 0.02 * screenWidth,
  },
  contactNameInput: {
    width: "90%",
    fontSize: 17,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(136, 130, 130)",
  },
  contactContainer: {
    width: screenWidth,
    height: 0.065 * screenHeight,
    justifyContent: "center",
  },
  contactAvatarInList: {
    width: 0.05 * screenHeight,
    height: 0.05 * screenHeight,
    borderRadius: 100,
    position: "absolute",
    left: 0.01 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  contactTitleContainer: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    width: "70%",
    justifyContent: "center",
  },
  contactTitleInList: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 18,
  },
  contactCheckMarkContainer: {
    position: "absolute",
    backgroundColor: "#c98bb8",
    borderRadius: 100,
    width: 0.06 * screenWidth,
    height: 0.06 * screenWidth,
    borderWidth: 0.2,
    right: 0.0125 * screenHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkIcon: {
    width: 0.037 * screenWidth,
    height: 0.037 * screenWidth,
  },
  doneButtonContainer: {
    position: "absolute",
    top: 0.058 * screenHeight,
    right: 0,
    width: 0.2 * screenWidth,
  },
  goBackButton: {
    position: "absolute",
    top: 0.055 * screenHeight,
    alignSelf: "flex-start",
    left: 0.035 * screenWidth,
    width: 30 * figmaWidthPixelConverter,
    height: 30 * figmaWidthPixelConverter,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(43, 29, 29)",
  },
  separatingLine: {
    height: 0.7,
    width: screenWidth,
    backgroundColor: "rgb(43, 29, 29)",
  },
});
