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
import ColorList from "./ColorList";
import EmojiAndColorButtons from "./EmojiAndColorButtons";
import ColorSelection from "./ColorSelection";
import EmojiSelection from "./EmojiSelection";
import Blur from "../../../SemiComponents/MainScreen/Blur";
import BranchColorPicker from "./BranchColorPicker";

type BranchesProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const screenWidth: number = Dimensions.get("screen").width;

const NewBranchScreen: React.FC<BranchesProps> = ({ navigation }) => {
  const newBranchTitle: string = "New Branch";
  const nameTitle: string = "Name";
  const branchNamePlaceHolder: string = "Name Branch";
  const designBranchTitle: string = "Design branch";

  const [branchName, setBranchName] = useState("");
  const [pickedEmoji, setPickedEmoji] = useState("");
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState("rgb(62, 62, 62)");
  const [pickedSpecialColor, setPickedSpecialColor] =
    useState("rgb(255, 255, 255)");
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isSpecialColorSelectionVisible === true}
        onPress={() => {
          setIsSpecialColorSelectionVisible(false);
        }}
        style={styles.blurEffect}
      />

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
            }}
            value={branchName}
            placeholder={branchNamePlaceHolder}
          />
        </View>

        {/* Title for designing branch */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>{designBranchTitle}</Text>
        </View>

        <EmojiAndColorButtons
          isVisible={!isEmojiSelectionVisible && !isColorSelectionVisible}
          onColorClick={() => setIsColorSelectionVisible(true)}
          onEmojiClick={() => setIsEmojiSelectionVisible(true)}
        />

        {/* Choosing color menu */}
        <ColorSelection
          isVisible={isColorSelectionVisible}
          onSpecialColorPress={() => {
            setIsSpecialColorSelectionVisible(true);
          }}
          onColorClick={(color) => {
            setPickedColor(color);
          }}
          onCloseClick={() => {
            setIsColorSelectionVisible(false);
          }}
          pickedColor={pickedColor}
          pickedSpecialColor={pickedSpecialColor}
        />

        <BranchColorPicker isVisible={isSpecialColorSelectionVisible} />

        {/* Choosing emoji menu */}
        <EmojiSelection
          isVisible={isEmojiSelectionVisible}
          onEmojiClick={(emoji) => {
            setPickedEmoji(emoji);
          }}
          pickedEmoji={pickedEmoji}
          onCloseClick={() => {
            setIsEmojiSelectionVisible(false);
          }}
        />
      </View>
    </View>
  );
};

export default React.memo(NewBranchScreen);
