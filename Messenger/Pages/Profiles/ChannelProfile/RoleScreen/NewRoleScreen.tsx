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
import Header from "../../SemiComponents/GeneralComponents/Header";
import { styles } from "./Styles";
import EmojiAndColorButtons from "../../SemiComponents/BranchesScreen/NewBranchScreen/EmojiAndColorButtons";
import ColorSelection from "../../SemiComponents/BranchesScreen/NewBranchScreen/ColorSelection";
import EmojiSelection from "../../SemiComponents/BranchesScreen/NewBranchScreen/EmojiSelection";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import BranchColorPicker from "../../SemiComponents/BranchesScreen/NewBranchScreen/BranchColorPicker";
import BranchAppearance from "../../SemiComponents/BranchesScreen/NewBranchScreen/BranchAppearance";
import { Role, channel, tempRole } from "../../SemiComponents/DBUser";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";

interface NewRoleScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const NewRoleScreen: React.FC<NewRoleScreenProps> = (props) => {
  var isValid: boolean = true;

  const [roleName, setRoleName] = useState("");
  const [pickedEmoji, setPickedEmoji] = useState("");
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [pickedColor, setPickedColor] = useState("rgb(124, 79, 145)");
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  return (
    <View style={styles.mainContainer}>
      <Blur
        visibleWhen={isSpecialColorSelectionVisible}
        onPress={() => {
          setIsSpecialColorSelectionVisible(false);
        }}
      />

      <Header
        primaryTitle="New role"
        onGoBackPress={() => {
          props.navigation.goBack();
        }}
      />

      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          if (roleName.length == 0) {
            isValid = false;
            alert("You have to enter a name");
          }

          channel.roles.map((role) => {
            if (role.name == roleName) {
              isValid = false;
              alert("This name is already taken");
            }
          });

          if (isValid) {
            channel.roles.push(
              new Role(
                roleName,
                pickedEmoji,
                pickedColor,
                tempRole.removeMembersPermission,
                tempRole.blockMembersPermission,
                tempRole.manageRolesPermission,
                tempRole.manageBranchesPermission,
                tempRole.seeTheAuditLogPermission,
                tempRole.considerChannelsPermission,
                tempRole.considerBranchPermission,
                tempRole.manageTheServerPermission,
                tempRole.sendAMessagePermission,
                tempRole.sendAVoiceMessagePermission
              )
            );

            props.navigation.goBack();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
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
            <Text style={styles.settingTitle}>Name</Text>
          </View>

          {/* Role name input */}
          <View style={styles.settingOption}>
            <TextInput
              style={styles.newRoleNameInput}
              onChangeText={(text: string) => {
                setRoleName(text);
              }}
              value={roleName}
              placeholder="Name role"
              maxLength={25}
            />
          </View>

          {/* Title for designing role */}
          <View style={styles.containerForSettingTitle}>
            <Text style={styles.settingTitle}>Design role</Text>
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
            name={roleName}
            color={pickedColor}
            style={{
              top:
                !isEmojiSelectionVisible && !isColorSelectionVisible
                  ? 0.08 * screenHeight
                  : 0.04 * screenHeight,
            }}
          />

          {/* Permission */}
          <View
            style={[
              styles.containerForSettingTitle,
              {
                top:
                  !isEmojiSelectionVisible && !isColorSelectionVisible
                    ? 0.08 * screenHeight
                    : 0.04 * screenHeight,
              },
            ]}
          >
            <Text style={styles.settingTitle}>Permission</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("PermissionRoleScreen" as never);
            }}
            style={[
              styles.settingOption,
              {
                top:
                  !isEmojiSelectionVisible && !isColorSelectionVisible
                    ? 0.08 * screenHeight
                    : 0.04 * screenHeight,
              },
            ]}
          >
            <Text style={styles.settingOptionTitle}>Permission role</Text>
            <RightArrow style={styles.settingOptionRightArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewRoleScreen;
