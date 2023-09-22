//Oleksii Kovalenko telegram - @traewe

import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";

import * as Font from "expo-font";

let customFonts = {
  JacquesFrancois: require("./Assets/JacquesFrancois-Regular.ttf"),
};

export class JacquesFrancoisText extends React.Component<
  { text: string; style?: any },
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

    const { text, style } = this.props;
    return (
      <Text style={{ fontFamily: "JacquesFrancois", ...style }}>
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
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    justifyContent: "center",
  },
  profileTitle: {
    fontSize: 28,
    alignSelf: "center",
    position: "absolute",
    fontFamily: "JacquesFrancois",
  },
  onlineStatusTitle: {
    fontSize: 14,
    color: "#808080",
    alignSelf: "center",
    fontFamily: "JacquesFrancois",
    top: 27,
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
  },
  searchMessagesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.175 * Dimensions.get("screen").width,
    top: 0.045 * Dimensions.get("screen").height,
  },
  elseFeaturesButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 0.06 * Dimensions.get("screen").width,
    top: 0.045 * Dimensions.get("screen").height,
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1.5,
    borderColor: "rgb(161, 156, 145)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Dimensions.get("screen").width / 8.5,
    zIndex: 2,
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rectangleUnderPhotosOrAlbumsButton: {
    backgroundColor: "rgb(124, 79, 145)",
    height: 6,
    width: "80%",
    position: "absolute",
    top: 18 * figmaHeightPixelConverter,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
    width: 70,
  },
  blurEffect: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
});
