// Oleksii Kovalenko telegram - @traewe

import { StyleSheet, Dimensions } from "react-native";
import { GetProfile } from "../../DatabaseSimulation/DBFunctions";

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
  linearGradientForQuantitiesContainer: {
    opacity: 0.7,
    position: "absolute",
    width: 165 * figmaWidthPixelConverter,
    height: 18 * figmaHeightPixelConverter,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(227, 192, 124)",
  },
  topToolBar: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    height: 77 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  profileTitle: {
    fontSize: 20,
    fontFamily: "JacquesFrancois-Regular",
  },
  secondaryTitle: {
    fontSize: 14,
    color: "rgb(43, 29, 29)",
    alignSelf: "center",
    fontFamily: "JacquesFrancois-Regular",
    top: 29 * figmaHeightPixelConverter,
  },
  blockStatus: {
    fontSize: 14,
    color: "red",
    alignSelf: "center",
    fontFamily: "JacquesFrancois-Regular",
    position: "absolute",
    top: 50.5 * figmaHeightPixelConverter,
  },
  searchMessagesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.155 * screenWidth,
    top: 0.055 * screenHeight,
    width: 25 * figmaWidthPixelConverter,
    height: 25 * figmaWidthPixelConverter,
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.03 * screenWidth,
    top: 0.033 * screenHeight,
    width: 40 * figmaWidthPixelConverter,
    height: 40 * figmaWidthPixelConverter,
  },
  multimediaBar: {
    top: 25 * figmaHeightPixelConverter,
    backgroundColor: "white",
    width: "100%",
    height: 30 * figmaHeightPixelConverter,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20 * figmaHeightPixelConverter,
    gap: screenWidth / 8.5,
  },
  multimediaTitle: {
    color: "rgb(43, 29, 29)",
    fontSize: 16.5,
    alignSelf: "center",
    fontFamily: "JacquesFrancois-Regular",
  },
  rectangleUnderMultimediaButton: {
    backgroundColor: "rgb(124, 79, 145)",
    height: 6,
    width: "100%",
    position: "absolute",
    top: 19 * figmaHeightPixelConverter,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rectangleUnderPhotosOrAlbumsButton: {
    backgroundColor: "rgb(124, 79, 145)",
    height: 6,
    width: "70%",
    position: "absolute",
    top: 19 * figmaHeightPixelConverter,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignSelf: "center",
  },
  albumsOrPhotosAppearingButton: {
    backgroundColor: "white",
    width: 0.24 * screenWidth,
    height: 25 * figmaHeightPixelConverter,
    borderRadius: 100,
    bottom: 25 * figmaHeightPixelConverter,
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
  photosOrAlbumsSelectedName: {
    width: 80,
  },
  multimediaQuantitiesContainer: {
    position: "absolute",
    bottom: 30 * figmaHeightPixelConverter,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 165 * figmaWidthPixelConverter,
    height: 18 * figmaHeightPixelConverter,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  filesButton: {
    right: 10.5 * figmaWidthPixelConverter,
  },
  multimediaQuantityTitle: {
    alignSelf: "center",
    color: "rgb(43, 29, 29)",
  },
  elseFeaturesButtonsContainer: {
    position: "absolute",
    right: 0.06 * screenWidth,
    top: 0.065 * screenHeight,
    width: 0.51 * screenWidth,
    zIndex: 2,
  },
  elseFeatureButton: {
    width: "100%",
    height: 40,
    borderRadius: 18,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 4.5 * figmaWidthPixelConverter,
    paddingLeft: 17 * figmaWidthPixelConverter,
  },
  elseFeatureTitle: {
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(43, 29, 29)",
  },
  elseFeatureIcon: {
    width: 18 * figmaWidthPixelConverter,
    height: 18 * figmaWidthPixelConverter,
    color: "rgb(43, 29, 29)",
  },
  blockButtonTitle: {
    color: "red",
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
  },
  containerForProfiteTitleLongVersion: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0.05 * screenHeight,
    gap: 0.02 * screenWidth,
    width: screenWidth * 0.6,
  },
  innerContainerForLongProfileTitle: {
    overflow: "hidden",
    borderBottomWidth: 0.2,
    borderRadius: 2,
  },
  containerForProfiteTitleShortVersion: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0.05 * screenHeight,
    gap: 0.015 * screenWidth,
  },
  mutedIcon: {
    width: 25,
    height: 25,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mediaContainer: {
    width: "100%",
    height: "100%",
    top: 25 * figmaHeightPixelConverter,
    flex: 1,
    opacity: 0.75,
  },
  photo: {
    width: 0.33 * screenWidth,
    height: 0.16 * screenHeight,
  },
  fileContainer: {
    width: "100%",
    height: 0.05 * screenHeight,
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  fileFormatContainer: {
    width: "13%",
    height: 0.05 * screenHeight,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "black",
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  fileFormatText: {
    fontSize: 16,
    fontFamily: "JacquesFrancois-Regular",
  },
  fileNameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    left: "17%",
    width: "65%",
  },
  fileVoiceOrLinkTitle: {
    fontSize: 15,
    fontFamily: "Rubik-Regular",
  },
  downloadFileIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0.04 * screenWidth,
  },
  downloadFileIcon: { width: 0.04 * screenWidth, height: 0.04 * screenHeight },
  microphoneIcon: {
    width: 0.09 * screenWidth,
    height: 0.09 * screenHeight,
  },
  allAlbumsContainer: {
    paddingBottom: 0.5 * screenHeight,
    gap: 0.01 * screenHeight,
    height: Math.ceil(GetProfile()?.albums.length / 2) * 0.305 * screenHeight,
  },
  albumContainer: {
    width: 0.5 * screenWidth,
    height: 0.195 * screenHeight,
    top: 0.02 * screenHeight,
    left: 0.075 * screenWidth,
  },
  albumMainPhoto: {
    width: 0.35 * screenWidth,
    height: 0.15 * screenHeight,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  albumInfoContainer: {
    width: "70%",
  },
  albumNameText: { fontSize: 16, fontFamily: "JacquesFrancois-Regular" },
  albumPhotosAndVideosQuantityText: { fontSize: 13, color: "dimgrey" },
  plusAlbumIcon: { width: 0.12 * screenWidth, height: 0.12 * screenWidth },
  checkMarkContainerForPhoto: {
    width: 0.055 * screenWidth,
    height: 0.055 * screenWidth,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "rgb(102, 191, 255)",
    position: "absolute",
    right: 0.025 * screenWidth,
    bottom: 0.025 * screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  checkMarkIcon: { width: 0.037 * screenWidth, height: 0.037 * screenWidth },
  checkMarkContainerForAlbum: {
    width: 0.055 * screenWidth,
    height: 0.055 * screenWidth,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "rgb(102, 191, 255)",
    position: "absolute",
    right: 0.01 * screenHeight,
    bottom: 0.055 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomToolBar: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    height: 0.08 * screenHeight,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  binIcon: {
    width: 0.06 * screenWidth,
    height: 0.06 * screenHeight,
  },
  arrowEastIcon: {
    width: 0.09 * screenWidth,
    height: 0.04 * screenHeight,
  },
  photoToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 0.1 * screenHeight,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
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
    paddingTop: 0.045 * screenHeight,
    gap: 0.25 * screenWidth,
  },
  phone: {
    width: 34 * figmaWidthPixelConverter,
    height: 34 * figmaWidthPixelConverter,
  },
  videoCamera: {
    width: 38 * figmaWidthPixelConverter,
    height: 38 * figmaWidthPixelConverter,
  },
  doneButtonContainer: {
    position: "absolute",
    top: 0.064 * screenHeight - 7.09,
    right: 0,
    width: 0.3 * screenWidth,
  },
  doneButtonTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois-Regular",
    color: "rgb(43, 29, 29)",
  },
  checkMarkContainerForFile: {
    width: 0.055 * screenWidth,
    height: 0.055 * screenWidth,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "rgb(102, 191, 255)",
    position: "absolute",
    right: 0.025 * screenWidth,
    bottom: 0.025 * screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
