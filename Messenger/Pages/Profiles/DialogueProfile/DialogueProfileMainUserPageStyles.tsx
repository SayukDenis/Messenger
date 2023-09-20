import React, { Component, useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  View,
  Text,
} from "react-native";

import * as Font from "expo-font";

let customFonts = {
  JacquesFrancois: require("./DialogueProfileAssets/JacquesFrancois-Regular.ttf"),
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
    height: 73 * figmaHeightPixelConverter,
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
    height: 36 * figmaHeightPixelConverter,
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
  },
  multimediaTitle: {
    color: "rgb(124, 79, 145)",
    fontSize: 17,
  },
});
