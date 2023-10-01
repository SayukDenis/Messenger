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
    backgroundColor: "rgb(218, 182, 113)",
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
});
