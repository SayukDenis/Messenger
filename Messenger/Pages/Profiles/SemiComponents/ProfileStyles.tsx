// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";

import * as Font from "expo-font";

let customFonts = {
  JacquesFrancois: require("./Assets/JacquesFrancois-Regular.ttf"),
};

// Component for making text with Jacques-Fancois font
export class JacquesFrancoisText extends React.Component<
  { text?: string; style?: any; numberOfLines?: number },
  { fontsLoaded: boolean }
> {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    const { style } = this.props;
    return (
      <Text
        numberOfLines={this.props.numberOfLines}
        style={{ fontFamily: "JacquesFrancois", ...style }}
      >
        {this.props.text}
      </Text>
    );
  }
}

// Coefficients for transmitting sizes from Figma to user's device
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
const figmaHeightPixelConverter = screenHeight / 648;
const figmaWidthPixelConverter = screenWidth / 356;

// Main styles for main user page
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(227, 192, 124)",
  },
  topToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 75 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  profileTitle: {
    fontSize: 20,
    fontFamily: "JacquesFrancois",
  },
  onlineStatusTitle: {
    fontSize: 14,
    color: "#808080",
    alignSelf: "center",
    fontFamily: "JacquesFrancois",
    top: 28 * figmaHeightPixelConverter,
  },
  blockStatus: {
    fontSize: 14,
    color: "red",
    alignSelf: "center",
    fontFamily: "JacquesFrancois",
    position: "absolute",
    top: 46 * figmaHeightPixelConverter,
  },
  mainAvatarImage: {
    width: 120 * figmaHeightPixelConverter,
    height: 120 * figmaHeightPixelConverter,
    borderRadius: 100,
    alignSelf: "center",
    top: 0.02 * screenHeight,
  },
  goBackFromProfileButton: {
    position: "absolute",
    top: 0.045 * screenHeight,
    alignSelf: "flex-start",
    left: 0.045 * screenWidth,
    width: 30 * figmaWidthPixelConverter,
    height: 30 * figmaWidthPixelConverter,
  },
  searchMessagesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.155 * screenWidth,
    top: 0.045 * screenHeight,
    width: 25 * figmaWidthPixelConverter,
    height: 25 * figmaWidthPixelConverter,
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.03 * screenWidth,
    top: 0.0225 * screenHeight,
    width: 40 * figmaWidthPixelConverter,
    height: 40 * figmaWidthPixelConverter,
  },
  horizontalContainerForCalling: {
    flexDirection: "row",
    justifyContent: "center",
    top: 0.04 * screenHeight,
    gap: 90,
  },
  multimediaBar: {
    top: 0.1 * screenHeight,
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    height: 30 * figmaHeightPixelConverter,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20 * figmaHeightPixelConverter,
    gap: screenWidth / 8.5,
  },
  multimediaTitle: {
    color: "rgb(124, 79, 145)",
    fontSize: 16.5,
    alignSelf: "center",
  },
  rectangleUnderMultimediaButton: {
    backgroundColor: "rgb(124, 79, 145)",
    height: 6,
    width: "100%",
    position: "absolute",
    top: 18 * figmaHeightPixelConverter,
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
    top: 18 * figmaHeightPixelConverter,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignSelf: "center",
  },
  albumsOrPhotosAppearingButton: {
    backgroundColor: "rgb(231, 230,	228)",
    width: 0.237 * screenWidth,
    height: 30 * figmaHeightPixelConverter,
    borderRadius: 100,
    bottom: 30 * figmaHeightPixelConverter,
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    position: "absolute",
  },
  photosOrAlbumsSelectedName: {
    width: 80,
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  phone: {
    width: 34 * figmaWidthPixelConverter,
    height: 34 * figmaWidthPixelConverter,
  },
  videoCamera: {
    width: 34 * figmaWidthPixelConverter,
    height: 34 * figmaWidthPixelConverter,
  },
  multimediaQuantitiesContainer: {
    position: "absolute",
    bottom: 28 * figmaHeightPixelConverter,
    backgroundColor: "rgb(124, 79, 145)",
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
    color: "white",
  },
  elseFeaturesButtonsContainer: {
    position: "absolute",
    right: 0.06 * screenWidth,
    top: 0.065 * screenHeight,
    width: 200,
    height: 200,
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
  },
  additionalFeatureIcon: {
    width: 18 * figmaWidthPixelConverter,
    height: 18 * figmaWidthPixelConverter,
    color: "black",
  },
  blockButtonTitle: {
    color: "red",
    fontSize: 16,
  },
  containerForProfiteTitleLongVersion: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0.04 * screenHeight,
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
    top: 0.04 * screenHeight,
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
  clearChatApproval: {
    position: "absolute",
    alignSelf: "center",
    width: 269 * figmaWidthPixelConverter,
    top: (screenHeight - 108 * figmaHeightPixelConverter) / 2.75,
    height: 108 * figmaHeightPixelConverter,
    backgroundColor: "rgb(231, 230,	228)",
    zIndex: 4,
    borderRadius: 30,
    borderWidth: 1.3,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  clearChatApprovalText: {
    fontSize: 16,
    alignSelf: "center",
    bottom: 0.045 * screenHeight,
  },
  clearChatAgreeButton: {
    backgroundColor: "rgb(220, 220, 220)",
    width: "50%",
    height: 27 * figmaHeightPixelConverter,
    alignSelf: "flex-start",
    bottom: 0,
    borderTopWidth: 1.3,
    borderRightWidth: 1.3,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  clearChatDisagreeButton: {
    backgroundColor: "rgb(220, 220, 220)",
    width: "50%",
    height: 27 * figmaHeightPixelConverter,
    alignSelf: "flex-end",
    bottom: 0,
    borderTopWidth: 1.3,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  agreeTitle: { fontSize: 16, alignSelf: "center" },
  disagreeTitle: {
    fontSize: 16,
    alignSelf: "center",
    color: "rgb(179, 17, 17)",
  },
  headerTitle: {
    fontSize: 27,
  },
  settingsOption: {
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
  settingsOptionTitle: {
    position: "absolute",
    left: 0.05 * screenWidth,
    fontFamily: "JacquesFrancois",
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
  settingTitle: {
    fontFamily: "JacquesFrancois",
    fontSize: 20,
  },
  containerForSettingTitle: {
    top: 0.04 * screenHeight,
    width: 0.9 * screenWidth,
    height: 0.04 * screenHeight,
    justifyContent: "center",
    alignSelf: "center",
  },
  checkMark: {
    width: 20 * figmaWidthPixelConverter,
    height: 13 * figmaHeightPixelConverter,
    position: "absolute",
    right: 0.05 * screenWidth,
    color: "rgb(41, 121, 179)",
  },
  toggleButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0.05 * screenWidth,
  },
  toggleButtonBackground: {
    width: 0.15 * screenWidth,
    height: 0.034 * screenHeight,
    backgroundColor: "rgb(161, 156, 145)",
    borderRadius: 20,
    justifyContent: "center",
    padding: 0.003 * screenHeight,
  },
  toggleButtonCircle: {
    height: 0.027 * screenHeight,
    width: 0.027 * screenHeight,
    borderRadius: 20,
    backgroundColor: "white",
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
    fontFamily: "JacquesFrancois",
    fontSize: 20,
    color: "rgb(92, 64, 129)",
  },
  newBranchNameInput: {
    width: "90%",
    fontSize: 17,
    fontFamily: "JacquesFrancois",
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
  pickColorButtonText: { fontSize: 29 },
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
  },
  specialSelectedColorIcon: {
    width: 0.16 * screenWidth,
    height: 0.16 * screenWidth,
  },
  colorPickerOuterContainer: {
    width: "75%",
    height: "41%",
    backgroundColor: "white",
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
    fontFamily: "JacquesFrancois",
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
    alignSelf: "center",
  },
  circleAroundColorPicker: {
    borderRadius: 100,
    height: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
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
  branchTitle: { fontSize: 16, fontFamily: "JacquesFrancois" },
  branchTitleContainer: {
    left: 0.02 * screenHeight,
  },
});
