// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../../SemiComponents/Header";
import GoBackButton from "../../../SemiComponents/MainScreen/GoBackButton";
import { styles } from "../../../SemiComponents/ProfileStyles";
import CrossIcon from "../Icons/CrossIcon";
import EmojiList from "./EmojiList";

type BranchesProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const emojis = [
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

const screenWidth: number = Dimensions.get("screen").width;

const NewBranchScreen: React.FC<BranchesProps> = ({ navigation }) => {
  const newBranchTitle: string = "New Branch";
  const nameTitle: string = "Name";
  const branchNamePlaceHolder: string = "Name Branch";
  const designBranchTitle: string = "Design branch";
  const resetTitle: string = "Reset";

  const [branchName, setBranchName] = useState("");
  const [pickedEmoji, setPickedEmoji] = useState("");
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [lengthOfAllEmojisPlusSpaces, setLengthOfAllEmojisPlusSpaces] =
    useState(0);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Header primaryTitle={newBranchTitle} />

      <GoBackButton onPress={() => navigation.goBack()} />

      <View
        style={{
          top: -0.06 * screenWidth,
        }}
      >
        {/* Title for name input */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>{nameTitle}</Text>
        </View>

        {/* Branch name input */}
        <View style={styles.settingsOption}>
          <TextInput
            style={styles.newBranchNameInput}
            onChangeText={(text: string) => {
              setBranchName(text);
              console.log(text);
            }}
            value={branchName}
            placeholder={branchNamePlaceHolder}
          />
        </View>

        {/* Title for designing branch */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>{designBranchTitle}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* Select emoji button */}
          {!isEmojiSelectionVisible && (
            <TouchableWithoutFeedback
              onPress={() => {
                setIsEmojiSelectionVisible(true);
              }}
            >
              <View
                style={[
                  styles.containerForSettingTitle,
                  { top: 0.05 * Dimensions.get("screen").height },
                ]}
              >
                <View style={styles.pickEmojiButtonContainer}>
                  <Text style={styles.selectedEmojiForBranch}>😀</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>

        {/* Choosing emoji menu */}
        {isEmojiSelectionVisible && (
          <>
            <View style={styles.closeEmojiSelectionButtonContainer}>
              {/* Close emoji selection button */}
              <TouchableOpacity
                onPress={() => {
                  setIsEmojiSelectionVisible(false);
                }}
              >
                <View style={styles.closeEmojiSelectionButton}>
                  <CrossIcon style={styles.crossIcon} />
                </View>
              </TouchableOpacity>
            </View>
            <EmojiList
              emojis={emojis}
              pickedEmoji={pickedEmoji}
              onEmojiPress={(emoji) => {
                setPickedEmoji(emoji);
              }}
              style={{
                height:
                  (lengthOfAllEmojisPlusSpaces / (screenWidth * 0.9)) *
                  Dimensions.get("screen").height *
                  0.027,
              }}
              numColumns={Math.floor(lengthOfAllEmojisPlusSpaces / screenWidth)}
            />
          </>
        )}

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
      </View>
    </View>
  );
};

export default React.memo(NewBranchScreen);
