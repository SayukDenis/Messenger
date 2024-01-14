// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../GeneralComponents/Header";
import { styles } from "../Styles";
import EmojiAndColorButtons from "./EmojiAndColorButtons";
import ColorSelection from "./ColorSelection";
import EmojiSelection from "./EmojiSelection";
import Blur from "../../GeneralComponents/Blur";
import BranchColorPicker from "./BranchColorPicker";
import BranchAppearance from "./BranchAppearance";
import {
  BranchParent,
  BranchChild,
  character,
  tempCharacter,
} from "../../DBUser";
import { LinearGradient } from "expo-linear-gradient";

type NewBranchProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const NewBranchScreen: React.FC<NewBranchProps> = ({ navigation }) => {
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
  const [pickedColor, setPickedColor] = useState("rgb(124, 79, 145)");
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Blur
        visibleWhen={isSpecialColorSelectionVisible}
        onPress={() => {
          setIsSpecialColorSelectionVisible(false);
        }}
        style={styles.blurEffect}
      />

      <Header
        primaryTitle={newBranchTitle}
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          if (branchName.length == 0) {
            isValid = false;
            alert(noNameWarningTitle);
          }

          character()?.branchParents.map((branch) => {
            if (branch.name == branchName) {
              isValid = false;
              alert(nameIsBusyTitle);
            }

            branch.children.map((child) => {
              if (child.name == branchName) {
                isValid = false;
                alert(nameIsBusyTitle);
              }
            });
          });

          if (isValid) {
            if (tempCharacter()?.selectedBranchParent == null) {
              character()?.branchParents.push(
                new BranchParent(
                  branchName,
                  pickedEmoji,
                  pickedColor,
                  new Array<BranchChild>()
                )
              );

              character()?.branchParents.sort((a, b) =>
                a.name.localeCompare(b.name)
              );
            } else {
              tempCharacter()?.selectedBranchParent.children.push(
                new BranchChild(branchName, pickedEmoji, pickedColor)
              );

              tempCharacter()?.selectedBranchParent.children.sort((a, b) =>
                a.name.localeCompare(b.name)
              );
            }

            navigation.goBack();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>{doneTitle}</Text>
      </TouchableOpacity>

      <BranchColorPicker
        isVisible={isSpecialColorSelectionVisible}
        pickedColor={pickedColor}
        onColorChange={(color) => {
          setPickedColor(color);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <View
          style={{
            top: -0.04 * screenWidth,
            height: Dimensions.get("screen").height,
          }}
        >
          {/* Title for name input */}
          <View style={styles.emojiAndColorButtonsContainer}>
            <Text style={styles.settingTitle}>{nameTitle}</Text>
          </View>

          {/* Branch name input */}
          <View style={styles.settingOption}>
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={[styles.linearGradient, { opacity: 0.7 }]}
            />
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
          <View style={styles.emojiAndColorButtonsContainer}>
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
                  : 0.04 * screenHeight,
            }}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NewBranchScreen;
