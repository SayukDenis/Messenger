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
import { tempUser } from "../BranchesScreen";

interface ChangeBranchScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const ChangeBranchScreen: React.FC<ChangeBranchScreenProps> = (props) => {
  const newBranchTitle: string = "New Branch";
  const nameTitle: string = "Name";
  const branchNamePlaceHolder: string = "Name Branch";
  const designBranchTitle: string = "Design branch";
  const doneTitle: string = "Done";
  const noNameWarningTitle: string = "You have to enter a name";
  const nameIsBusyTitle: string = "This name is already taken";
  var isValid: boolean = true;

  const [branchName, setBranchName] = useState(tempUser.selectedBranch.name);
  const [pickedEmoji, setPickedEmoji] = useState(tempUser.selectedBranch.emoji);
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState(tempUser.selectedBranch.color);
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  const [isDeleteBranchPressed, setIsDeleteBranchPressed] = useState(false);
  const [branchNameToRemove, setBranchNameToRemove] = useState("");

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isSpecialColorSelectionVisible}
        onPress={() => {
          setIsSpecialColorSelectionVisible(false);
        }}
        style={styles.blurEffect}
      />

      <Blur
        visibleWhen={isDeleteBranchPressed}
        onPress={() => {
          setIsDeleteBranchPressed(false);
        }}
        style={styles.blurEffect}
      />

      <Header
        primaryTitle={newBranchTitle}
        onGoBackPress={() => {
          tempUser.selectedBranch = null;
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
              branch.name != tempUser.selectedBranch.name
            ) {
              isValid = false;
              alert(nameIsBusyTitle);
            }

            branch.children.map((child) => {
              if (
                child.name == branchName &&
                child.name != tempUser.selectedBranch.name
              ) {
                isValid = false;
                alert(nameIsBusyTitle);
              }
            });
          });

          if (isValid) {
            const branchToRemove = user.branchParents.find(
              (branch) => branch.name === tempUser.selectedBranch.name
            );

            if (branchToRemove) {
              user.branchParents.splice(
                user.branchParents.indexOf(branchToRemove),
                1
              );
            }

            user.branchParents.push(
              new BranchParent(
                branchName,
                pickedEmoji,
                pickedColor,
                tempUser.selectedBranch.children
              )
            );

            user.branchParents.sort((a, b) => a.name.localeCompare(b.name));

            props.navigation.goBack();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>{doneTitle}</Text>
      </TouchableOpacity>

      <RemovalApproval
        onAnyPress={() => {
          setIsDeleteBranchPressed(false);
        }}
        onAgreePress={() => {
          const branchToRemoveNow = tempUser.selectedBranch.children.find(
            (branch) => branch.name === branchNameToRemove
          );

          if (branchToRemoveNow) {
            tempUser.selectedBranch.children.splice(
              tempUser.selectedBranch.children.indexOf(branchToRemoveNow),
              1
            );
          }

          setBranchNameToRemove("");
        }}
        isVisible={isDeleteBranchPressed}
        text={user.removalText + " " + branchNameToRemove + "?"}
      />

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

          <BranchChildrenList
            onPlusBranchPress={() =>
              props.navigation.navigate("NewBranchScreen" as never)
            }
            isSomeSelectionVisible={
              isColorSelectionVisible || isEmojiSelectionVisible
            }
            onBinPress={(value: string) => {
              setIsDeleteBranchPressed(true);
              setBranchNameToRemove(value);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeBranchScreen;
