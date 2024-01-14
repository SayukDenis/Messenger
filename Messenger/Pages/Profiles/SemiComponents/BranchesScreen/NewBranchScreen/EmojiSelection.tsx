// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { styles } from "../Styles";
import CrossIcon from "../Icons/CrossIcon";
import EmojiList from "./EmojiList";
import { LinearGradient } from "expo-linear-gradient";

const emojis: string[] = [
  "😀",
  "😃",
  "😍",
  "😄",
  "😁",
  "😆",
  "🥹",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "☺️",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🤗",
  "🤔",
  "🫣",
  "🤭",
  "🫢",
  "🫡",
  "🤫",
  "🫠",
  "🤥",
  "😶",
  "🫥",
  "😐",
  "🫤",
  "😑",
  "😬",
  "🙄",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "😈",
  "👿",
  "👹",
  "👺",
  "💩",
  "👻",
  "💀",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "👍",
  "👋",
  "🎉",
  "🤯",
  "😎",
  "🦫",
  "❤️",
  "🤡",
  "😂",
  "😡",
  "😭",
  "😐",
  "🤓",
  "🤢",
  "👽",
];

interface EmojiSelectionProps {
  isVisible: boolean;
  onEmojiClick: (value: string) => void;
  onCloseClick: () => void;
  pickedEmoji: string;
}

const EmojiSelection: React.FC<EmojiSelectionProps> = (props) => {
  const [lengthOfAllEmojisPlusSpaces, setLengthOfAllEmojisPlusSpaces] =
    useState(0);

  const screenWidth: number = Dimensions.get("screen").width;

  return (
    <>
      {props.isVisible && (
        <>
          {/* Finding sizes that emoji container should consist of */}
          <Text
            style={{ fontSize: 23, position: "absolute", opacity: 0 }}
            onLayout={(event) => {
              setLengthOfAllEmojisPlusSpaces(
                event.nativeEvent.layout.width * emojis.length
              );
            }}
          >
            {emojis[0] + " "}
          </Text>

          <View style={styles.closeEmojiSelectionButtonContainer}>
            {/* Close emoji selection button */}
            <TouchableOpacity
              onPress={() => {
                props.onCloseClick();
              }}
              style={styles.closeEmojiSelectionButton}
            >
              <LinearGradient
                colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                style={[styles.linearGradient, { opacity: 0.7 }]}
              />
              <CrossIcon style={styles.crossIcon} />
            </TouchableOpacity>
          </View>

          <EmojiList
            emojis={emojis}
            pickedEmoji={props.pickedEmoji}
            onEmojiPress={props.onEmojiClick}
            style={{
              height:
                Math.floor(lengthOfAllEmojisPlusSpaces / (screenWidth * 0.9)) *
                Math.floor(lengthOfAllEmojisPlusSpaces / emojis.length),
            }}
            numColumns={Math.floor(lengthOfAllEmojisPlusSpaces / screenWidth)}
          />
        </>
      )}
    </>
  );
};

export default EmojiSelection;
