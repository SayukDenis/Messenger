//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import MainUserPage from "./MainUserPage";

import * as Font from "expo-font";

let customFonts = {
  JacquesFrancois: require("./Assets/JacquesFrancois-Regular.ttf"),
};

export class JacquesFrancoisText extends React.Component<
  { text: string; style?: any; numberOfLines?: number },
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

const figmaHeightPixelConverter = Dimensions.get("screen").height / 648;
const figmaWidthPixelConverter = Dimensions.get("screen").width / 356;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgb(218, 182, 113)",
  },
  topToolBar: {
    backgroundColor: "rgb(231, 230,	228)",
    width: "100%",
    alignItems: "center",
    height: 72.5 * figmaHeightPixelConverter,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 37,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  profileTitle: {
    fontSize: 21,
    fontFamily: "JacquesFrancois",
  },
  onlineStatusTitle: {
    fontSize: 14,
    color: "#808080",
    alignSelf: "center",
    fontFamily: "JacquesFrancois",
    top: 23 * figmaHeightPixelConverter,
  },
  mainAvatarImage: {
    width: 120 * figmaHeightPixelConverter,
    height: 120 * figmaHeightPixelConverter,
    borderRadius: 100,
    alignSelf: "center",
    top: 0.02 * Dimensions.get("screen").height,
  },
  goBackFromProfileButton: {
    position: "absolute",
    top: 0.045 * Dimensions.get("screen").height,
    alignSelf: "flex-start",
    left: 0.045 * Dimensions.get("screen").width,
    width: 30 * figmaWidthPixelConverter,
    height: 30 * figmaWidthPixelConverter,
  },
  searchMessagesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.175 * Dimensions.get("screen").width,
    top: 0.045 * Dimensions.get("screen").height,
    width: 25 * figmaWidthPixelConverter,
    height: 25 * figmaWidthPixelConverter,
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.035 * Dimensions.get("screen").width,
    top: 0.0225 * Dimensions.get("screen").height,
    width: 40 * figmaWidthPixelConverter,
    height: 40 * figmaWidthPixelConverter,
  },
  horizontalContainerForCalling: {
    flexDirection: "row",
    justifyContent: "center",
    top: 0.04 * Dimensions.get("screen").height,
    gap: 90,
  },
  multimediaBar: {
    top: 0.1 * Dimensions.get("screen").height,
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
    gap: Dimensions.get("screen").width / 8.5,
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
    width: 90,
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
  blurEffectPhotosAlbumButton: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  blurEffectElseFeaturesButton: {
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
    right: 0.06 * Dimensions.get("screen").width,
    top: 0.065 * Dimensions.get("screen").height,
    width: 200,
    height: 200,
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
  blockButton: {
    color: "red",
    fontSize: 16,
  },
  containerForProfiteTitle: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 0.04 * Dimensions.get("screen").height,
    borderBottomWidth: 0.2,
    borderRadius: 2,
  },
  mutedIcon: {
    width: 25,
    height: 25,
    left: 4 * figmaWidthPixelConverter,
    top: 2 * figmaHeightPixelConverter,
  },
});
