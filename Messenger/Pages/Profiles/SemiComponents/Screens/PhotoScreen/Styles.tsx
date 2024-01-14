// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";
import { user } from "../../DatabaseSimulation/DBUser";

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

export const styles = StyleSheet.create({
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
});

export default styles;
