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
  avatarMainContainer: {
    width: screenWidth,
    height: 0.5 * screenHeight,
  },
  profileTitle: {
    fontSize: 27,
    fontFamily: "JacquesFrancois-Regular",
    color: "white",
    zIndex: 1,
  },
  goBackContainer: {
    width: "100%",
    alignItems: "center",
    height: 77 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    borderWidth: 1.5,
    borderColor: "transparent",
    justifyContent: "center",
    zIndex: 2,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    top: -77 * figmaHeightPixelConverter,
    zIndex: 1,
  },
  userInfoMainContainer: {
    backgroundColor: "rgb(218, 182, 113)",
    width: 0.87 * screenWidth,
    height: 0.22 * screenHeight,
    alignSelf: "center",
    top: 18.5 * figmaHeightPixelConverter,
    borderRadius: 15,
    borderWidth: 0.4,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "0.5%",
  },
  infoView: {
    width: "95%",
    height: 0.0484 * screenHeight,
    flexDirection: "row",
    left: "5%",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 15,
    color: "rgb(124, 79, 145)",
    fontFamily: "JacquesFrancois-Regular",
  },
  separatingLine: {
    width: "95%",
    alignSelf: "center",
    borderBottomWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
  },
  bioInfoView: {
    width: "95%",
    flexDirection: "row",
    left: "5%",
    top: 0.011 * screenHeight,
  },
  currentAvatarBarMainContainer: {
    flexDirection: "row",
    height: 3,
    width: 0.7 * screenWidth,
    backgroundColor: "transparent",
    zIndex: 3,
    position: "absolute",
    top: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
  },
  avatarBarElement: { height: "100%", position: "absolute", borderRadius: 17 },
  opacityToSeeNextPhoto: {
    width: 0.65 * screenWidth,
    height: 0.5 * screenHeight,
    zIndex: 2,
    position: "absolute",
    alignSelf: "flex-end",
  },
  opacityToSeePreviousPhoto: {
    width: 0.35 * screenWidth,
    height: 0.4 * screenHeight,
    top: 0.1 * screenHeight,
    zIndex: 2,
    position: "absolute",
    alignSelf: "flex-start",
  },
  additionalOpacityToSeePreviousPhoto: {
    width: 0.2 * screenWidth,
    height: 0.1 * screenHeight,
    left: 0.15 * screenWidth,
    zIndex: 2,
    position: "absolute",
    alignSelf: "flex-start",
  },
  containerForAnimatedMessage: {
    backgroundColor: "rgb(231, 230, 228)",
    width: 0.6 * screenWidth,
    height: 0.05 * screenHeight,
    left: 0.2 * screenWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "row",
  },
  animatedMessageText: {
    fontSize: 17,
    fontFamily: "JacquesFrancois-Regular",
  },
  copyIcon: {
    width: 20 * figmaWidthPixelConverter,
    height: 20 * figmaWidthPixelConverter,
    color: "black",
  },
});
