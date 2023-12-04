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
  mainAvatarImage: {
    width: 120 * figmaHeightPixelConverter,
    height: 120 * figmaHeightPixelConverter,
    borderRadius: 100,
    alignSelf: "center",
    top: 0.015 * screenHeight,
  },
  horizontalContainerForCalling: {
    flexDirection: "row",
    justifyContent: "center",
    top: 0.04 * screenHeight,
    gap: 90,
  },
  phone: {
    width: 34 * figmaWidthPixelConverter,
    height: 34 * figmaWidthPixelConverter,
  },
  videoCamera: {
    width: 34 * figmaWidthPixelConverter,
    height: 34 * figmaWidthPixelConverter,
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
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
  headerTitle: {
    fontSize: 27,
    fontFamily: "JacquesFrancois-Regular",
  },
  zoomedPhoto: {
    width: 0.8 * screenWidth,
    height: 0.4 * screenHeight,
    zIndex: 3,
    position: "absolute",
    left: 0.1 * screenWidth,
    top: 0.2 * screenHeight,
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.03 * screenWidth,
    top: 0.033 * screenHeight,
    width: 40 * figmaWidthPixelConverter,
    height: 40 * figmaWidthPixelConverter,
  },
  elseFeaturesButtonsContainer: {
    position: "absolute",
    right: 0.06 * screenWidth,
    top: 0.065 * screenHeight,
    width: 0.51 * screenWidth,
    zIndex: 2,
  },
  additionalFeatureButton: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgb(231, 230,	228)",
    borderWidth: 0.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 4.5 * figmaWidthPixelConverter,
    paddingLeft: 17 * figmaWidthPixelConverter,
  },
  additionalFeatureTitle: {
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
  },
  additionalFeatureIcon: {
    width: 18 * figmaWidthPixelConverter,
    height: 18 * figmaWidthPixelConverter,
    color: "black",
  },
  addingPhotoMenuMainContainer: {
    width: 0.95 * screenWidth,
    height: 0.29 * screenHeight,
    borderRadius: 13,
    backgroundColor: "rgb(206, 211, 237)",
    zIndex: 1,
    alignSelf: "center",
    bottom: 0.2 * screenHeight,
    overflow: "hidden",
  },
  galleryButton: {
    width: "100%",
    height: 0.06 * screenHeight,
    backgroundColor: "rgb(220, 220, 220)",
    justifyContent: "center",
    alignItems: "center",
  },
  galleryTitle: {
    fontFamily: "JacquesFrancois-Regular",
    fontSize: 18,
    color: "rgb(92, 64, 129)",
  },
  photoContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  photo: {
    width: 0.18 * screenWidth,
    height: 0.11 * screenHeight,
    borderRadius: 10,
    alignSelf: "center",
  },
  cancelButton: {
    position: "absolute",
    width: "30%",
    alignSelf: "center",
    height: 0.05 * screenHeight,
    backgroundColor: "rgb(220, 220, 220)",
    justifyContent: "center",
    alignItems: "center",
    top: 0.85 * screenHeight,
    zIndex: 1,
    borderRadius: 13,
  },
  photoElseFeaturesButtonsContainer: {
    position: "absolute",
    right: 0.2 * screenWidth,
    top: 0.62 * screenHeight,
    width: 0.6 * screenWidth,
    zIndex: 3,
  },
  doneButtonContainer: {
    position: "absolute",
    top: 0.058 * screenHeight,
    right: 0,
    width: 0.3 * screenWidth,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(92, 64, 129)",
  },
});
