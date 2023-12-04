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
import Blur from "../../../SemiComponents/MainScreen/Blur";
import Header from "../../../SemiComponents/Header";
import { user, BranchParent } from "../../../SemiComponents/DBUser";
import EmojiAndColorButtons from "../NewBranchScreen/EmojiAndColorButtons";
import BranchColorPicker from "../NewBranchScreen/BranchColorPicker";
import ColorSelection from "../NewBranchScreen/ColorSelection";
import EmojiSelection from "../NewBranchScreen/EmojiSelection";
import BranchAppearance from "../NewBranchScreen/BranchAppearance";
import BranchChildrenList from "./BranchChildrenList";
import RemovalApproval from "../../../SemiComponents/MainScreen/RemovalApproval";
import { tempUser, BranchChild } from "../../../SemiComponents/DBUser";

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
    tempUser.selectedBranchChild.name
  );
  const [pickedEmoji, setPickedEmoji] = useState(
    tempUser.selectedBranchChild.emoji
  );
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState(
    tempUser.selectedBranchChild.color
  );
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

          user.branchParents.map((branch) => {
            if (
              branch.name == branchName &&
              branch.name != tempUser.selectedBranchChild.name
            ) {
              isValid = false;
              alert(nameIsBusyTitle);
            }

            branch.children.map((child) => {
              if (
                child.name == branchName &&
                child.name != tempUser.selectedBranchChild.name
              ) {
                isValid = false;
                alert(nameIsBusyTitle);
              }
            });
          });

          if (isValid) {
            const branchToRemove = tempUser.selectedBranchParent.children.find(
              (branch) => branch.name === tempUser.selectedBranchChild.name
            );

            if (branchToRemove) {
              tempUser.selectedBranchParent.children.splice(
                tempUser.selectedBranchParent.children.indexOf(branchToRemove),
                1
              );
            }

            tempUser.selectedBranchParent.children.push(
              new BranchChild(branchName, pickedEmoji, pickedColor)
            );

            user.branchParents.sort((a, b) => a.name.localeCompare(b.name));

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
    </View>
  );
};

export default ChangeBranchChildScreen;
