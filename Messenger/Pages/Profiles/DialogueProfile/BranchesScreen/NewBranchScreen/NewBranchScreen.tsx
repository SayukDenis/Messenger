// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../../SemiComponents/Header";
import GoBackButton from "../../../SemiComponents/GoBackButton";
import { styles } from "../Styles";
import EmojiAndColorButtons from "./EmojiAndColorButtons";
import ColorSelection from "./ColorSelection";
import EmojiSelection from "./EmojiSelection";
import Blur from "../../../SemiComponents/MainScreen/Blur";
import BranchColorPicker from "./BranchColorPicker";
import BranchAppearance from "./BranchAppearance";
import { user, Branch } from "../../../SemiComponents/DBUser";
import { update } from "../BranchesScreen";

type BranchesProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const NewBranchScreen: React.FC<BranchesProps> = ({ navigation }) => {
  const newBranchTitle: string = "New Branch";
  const nameTitle: string = "Name";
  const branchNamePlaceHolder: string = "Name Branch";
  const designBranchTitle: string = "Design branch";
  const doneTitle: string = "Done";
  const noNameWarningTitle: string = "You have to enter a name";
  const nameIsBusyTitle: string = "This name is already taken";
  var isValid: boolean = true;

  const [branchName, setBranchName] = useState("");
  const [pickedEmoji, setPickedEmoji] = useState("");
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState("rgb(62, 62, 62)");
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isSpecialColorSelectionVisible}
        onPress={() => {
          setIsSpecialColorSelectionVisible(false);
        }}
        style={styles.blurEffect}
      />

      <Header primaryTitle={newBranchTitle} />

      <GoBackButton onPress={() => navigation.goBack()} />

      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          if (branchName.length == 0) {
            isValid = false;
            alert(noNameWarningTitle);
          }

          user.branches.map((branch) => {
            if (branch.name == branchName) {
              isValid = false;
              alert(nameIsBusyTitle);
            }
          });

          if (isValid) {
            user.branches.push(
              new Branch(branchName, pickedEmoji, pickedColor)
            );

            user.branches.sort((a, b) => a.name.localeCompare(b.name));

            update.digit += 1;

            navigation.goBack();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>{doneTitle}</Text>
      </TouchableOpacity>

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
        <View style={styles.settingOption}>
          <TextInput
            style={styles.newBranchNameInput}
            onChangeText={(text: string) => {
              setBranchName(text);
            }}
            value={branchName}
            placeholder={branchNamePlaceHolder}
            maxLength={25}
          />
        </View>

        {/* Title for designing branch */}
        <View style={styles.containerForSettingTitle}>
          <Text style={styles.settingTitle}>{designBranchTitle}</Text>
        </View>
        <EmojiAndColorButtons
          isVisible={!isEmojiSelectionVisible && !isColorSelectionVisible}
          onColorPress={() => setIsColorSelectionVisible(true)}
          onEmojiPress={() => setIsEmojiSelectionVisible(true)}
        />

        {/* Choosing color menu */}
        <ColorSelection
          isVisible={isColorSelectionVisible}
          onSpecialColorPress={() => {
            setIsSpecialColorSelectionVisible(true);
          }}
          onColorPress={(color) => {
            setPickedColor(color);
          }}
          onClosePress={() => {
            setIsColorSelectionVisible(false);
          }}
          pickedColor={pickedColor}
          pickedSpecialColor={pickedColor}
        />

        <BranchColorPicker
          isVisible={isSpecialColorSelectionVisible}
          pickedColor={pickedColor}
          onColorChange={(color) => {
            setPickedColor(color);
          }}
        />
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

        <BranchAppearance
          emoji={pickedEmoji}
          name={branchName}
          color={pickedColor}
          style={{
            top:
              !isEmojiSelectionVisible && !isColorSelectionVisible
                ? 0.08 * screenHeight
                : isSpecialColorSelectionVisible
                ? -0.3 * screenHeight
                : 0.04 * screenHeight,
          }}
        />
      </View>
    </View>
  );
};

export default NewBranchScreen;
