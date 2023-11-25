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
    height: 0.4 * screenHeight,
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
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    top: -77 * figmaHeightPixelConverter,
    zIndex: 1,
  },
  userInfoMainContainer: {},
});
