// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
  branchAppearanceContainer: {
    top: 0.04 * screenHeight,
    left: 0.05 * screenWidth,
    width: 0.9 * screenWidth,
    height: 0.07 * screenHeight,
    backgroundColor: "rgb(218, 182, 113)",
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  branchAvatar: {
    width: 0.055 * screenHeight,
    height: 0.055 * screenHeight,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    left: 0.01 * screenHeight,
  },
  branchTitle: { fontSize: 16, fontFamily: "JacquesFrancois-Regular" },
  branchTitleContainer: {
    left: 0.02 * screenHeight,
  },
  colorPickerOuterContainer: {
    width: "75%",
    height: "41%",
    zIndex: 2,
    alignSelf: "center",
    bottom: 0.3 * screenHeight,
    borderRadius: 17,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
  },
  colorPickerTitleContainer: {
    width: "100%",
    height: "12%",
    top: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  colorPickerTitle: {
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(161, 118, 217)",
    fontSize: 18,
  },
  colorPickerInnerContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  inputColorOuterContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    top: "-1%",
  },
  inputColorInnerContainer: {
    width: "60%",
    height: "60%",
    backgroundColor: "rgb(32, 32, 32)",
    justifyContent: "flex-start",
    paddingLeft: 0.01 * screenWidth,
    alignItems: "center",
    flexDirection: "row",
  },
  inputColorTextHashTag: {
    color: "rgb(185, 185, 185)",
    fontSize: 18,
  },
  inputColorText: {
    color: "rgb(185, 185, 185)",
    fontSize: 18,
    width: "100%",
  },
  colorPickerElement: {
    width: "100%",
    height: "100%",
  },
  circleAroundColorPicker: {
    borderRadius: 100,
    height: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedColorInnerContainer: {
    width: 0.18 * screenWidth,
    height: 0.18 * screenWidth,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "rgb(161, 156, 145)",
    left: 0.013 * screenWidth,
    position: "absolute",
  },
  selectedColorOuterContainer: {
    width: "100%",
    height: "40%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    bottom: (0.12 * screenHeight - 0.18 * screenWidth) / 2,
  },
  specialSelectedColorContainer: {
    width: 0.18 * screenWidth,
    height: 0.18 * screenWidth,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "rgb(161, 156, 145)",
    alignItems: "center",
    justifyContent: "center",
    right: 0.013 * screenWidth,
    backgroundColor: "white",
  },
  specialSelectedColorIcon: {
    width: 0.16 * screenWidth,
    height: 0.16 * screenWidth,
  },
  basicColorsContainer: {
    width: "100%",
    height: "40%",
    flexWrap: "wrap",
    gap: 0.013 * screenWidth,
    flexDirection: "row",
    justifyContent: "center",
  },
  oneColorContainer: {
    width: 0.075 * screenWidth,
    height: 0.075 * screenWidth,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
  },
  pickEmojiButtonContainer: {
    backgroundColor: "rgb(218, 182, 113)",
    width: 0.13 * screenWidth,
    height: 0.13 * screenWidth,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
  },
  pickEmojiButtonText: { fontSize: 29 },
  emojiSelectionContainer: {
    width: "90%",
    height: 0.2 * screenHeight,
    top: 0.01 * screenHeight,
    alignSelf: "center",
    borderRadius: 9,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    backgroundColor: "rgb(218, 182, 113)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeEmojiSelectionButtonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    top: 0.011 * screenHeight,
  },
  closeEmojiSelectionButton: {
    width: 0.1 * screenWidth,
    height: 30,
    backgroundColor: "rgb(218, 182, 113)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
    alignItems: "center",
  },
  crossIcon: {
    width: 0.05 * screenWidth,
    height: 0.05 * screenWidth,
  },
  blueBackgroundForPickedEmoji: {
    borderRadius: 4.5,
  },
  redCrossIcon: {
    width: 0.035 * screenWidth,
    height: 0.035 * screenWidth,
    position: "absolute",
    zIndex: 3,
    top: -2,
    right: 0,
  },
  plusIcon: {
    position: "absolute",
    left: 0.045 * screenWidth,
    width: 22 * figmaWidthPixelConverter,
    height: 22 * figmaWidthPixelConverter,
    color: "rgb(92, 64, 129)",
  },
  plusBranchTitle: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 20,
    color: "rgb(92, 64, 129)",
  },
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
  doneButtonContainer: {
    position: "absolute",
    top: 0.0579 * screenHeight - 7.09,
    right: 0,
    width: 0.2 * screenWidth,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(92, 64, 129)",
  },
  pickColorButtonText: { fontSize: 29 },
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
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  newBranchNameInput: {
    width: "90%",
    fontSize: 17,
    fontFamily: "JacquesFrancois-Regular",
  },
});

export default styles;