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
import styles from "../Styles";
import Blur from "../../../GeneralComponents/Blur";
import Header from "../../../GeneralComponents/Header";
import { GetProfile } from "../../../DatabaseSimulation/DBFunctions";
import EmojiAndColorButtons from "../NewBranchScreen/EmojiAndColorButtons";
import BranchColorPicker from "../NewBranchScreen/BranchColorPicker";
import ColorSelection from "../NewBranchScreen/ColorSelection";
import EmojiSelection from "../NewBranchScreen/EmojiSelection";
import BranchAppearance from "../NewBranchScreen/BranchAppearance";
import { BranchChild } from "../../../DatabaseSimulation/DBClasses";
import { LinearGradient } from "expo-linear-gradient";

interface ChangeBranchChildScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const ChangeBranchChildScreen: React.FC<ChangeBranchChildScreenProps> = (
  props
) => {
  const newBranchTitle: string = "New Branch";
  const nameTitle: string = "Name";
  const branchNamePlaceHolder: string = "Name Branch";
  const designBranchTitle: string = "Design branch";
  const doneTitle: string = "Done";
  const noNameWarningTitle: string = "You have to enter a name";
  const nameIsBusyTitle: string = "This name is already taken";
  var isValid: boolean = true;

  const [branchName, setBranchName] = useState(
    GetProfile().selectedBranchChild.name
  );
  const [pickedEmoji, setPickedEmoji] = useState(
    GetProfile().selectedBranchChild.emoji
  );
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState(
    GetProfile().selectedBranchChild.color
  );
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
          props.navigation.goBack();
        }}
      />

      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          if (branchName.length == 0) {
            isValid = false;
            alert(noNameWarningTitle);
          }

          GetProfile().branchParents.map((branch) => {
            if (
              branch.name == branchName &&
              branch.name != GetProfile().selectedBranchChild.name
            ) {
              isValid = false;
              alert(nameIsBusyTitle);
            }

            branch.children.map((child) => {
              if (
                child.name == branchName &&
                child.name != GetProfile().selectedBranchChild.name
              ) {
                isValid = false;
                alert(nameIsBusyTitle);
              }
            });
          });

          if (isValid) {
            const branchToRemove =
              GetProfile().selectedBranchParent.children.find(
                (branch) =>
                  branch.name === GetProfile().selectedBranchChild.name
              );

            if (branchToRemove) {
              GetProfile().selectedBranchParent.children.splice(
                GetProfile().selectedBranchParent.children.indexOf(
                  branchToRemove
                ),
                1
              );
            }

            GetProfile().selectedBranchParent.children.push(
              new BranchChild(branchName, pickedEmoji, pickedColor)
            );

            GetProfile().branchParents.sort((a, b) =>
              a.name.localeCompare(b.name)
            );

            props.navigation.goBack();
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

export default ChangeBranchChildScreen;
