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
    width: "65%",
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
  topToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 77 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
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
  separatingLine: {
    width: screenWidth,
    height: 0.017 * screenHeight,
    backgroundColor: "rgb(196, 165, 104)",
    top: 0.017 * screenHeight,
    zIndex: 1,
  },
  contactsTitleContainer: {
    justifyContent: "center",
    top: 0.027 * screenHeight,
  },
  contactsTitle: {
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(39, 39, 39)",
    fontSize: 20,
  },
  contactContainer: {
    width: screenWidth,
    height: 0.055 * screenHeight,
    justifyContent: "center",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
  },
  contactAvatarInList: {
    width: 0.045 * screenHeight,
    height: 0.045 * screenHeight,
    borderRadius: 100,
    position: "absolute",
    left: 0.0125 * screenHeight,
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
    backgroundColor: "rgb(254, 224, 163)",
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
});
