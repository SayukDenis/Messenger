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
  subscriberContainer: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.05 * screenHeight,
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
    width: 18 * figmaWidthPixelConverter,
    height: 18 * figmaWidthPixelConverter,
    color: "rgb(92, 64, 129)",
  },
  plusSubscriberTitle: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 18,
    color: "rgb(92, 64, 129)",
  },
  subscriberAvatarInList: {
    width: 0.04 * screenHeight,
    height: 0.04 * screenHeight,
    borderRadius: 100,
    position: "absolute",
    left: 0.0125 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  subscriberTitleContainer: {
    position: "absolute",
    left: 0.09 * screenWidth + 22 * figmaWidthPixelConverter,
    width: "70%",
    justifyContent: "center",
  },
  subscriberTitleInList: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 18,
  },
  binIconContainer: {
    position: "absolute",
    right: 0.045 * screenWidth,
  },
  binIcon: {
    width: 0.05 * screenWidth,
    height: 0.05 * screenHeight,
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
