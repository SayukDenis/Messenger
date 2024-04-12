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
import EmojiAndColorButtons from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/EmojiAndColorButtons";
import ColorSelection from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/ColorSelection";
import EmojiSelection from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/EmojiSelection";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import BranchColorPicker from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/BranchColorPicker";
import {
  Contact,
  Role,
} from "../../SemiComponents/DatabaseSimulation/DBClasses";
import { channel } from "../../SemiComponents/DatabaseSimulation/DBChannel";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import { LinearGradient } from "expo-linear-gradient";
import { tempRole } from "../../SemiComponents/DatabaseSimulation/DBVariables";
import SettingOption from "../../SemiComponents/GeneralComponents/SettingOption";

interface NewRoleScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const NewRoleScreen: React.FC<NewRoleScreenProps> = (props) => {
  var isValid: boolean = true;

  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [color, setColor] = useState("black");
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  const makeDefaultData = () => {
    tempRole.removeMembersPermission = true;
    tempRole.blockMembersPermission = true;
    tempRole.manageRolesPermission = true;
    tempRole.manageBranchesPermission = true;
    tempRole.seeTheAuditLogPermission = true;
    tempRole.considerChannelsPermission = true;
    tempRole.considerBranchPermission = true;
    tempRole.manageTheServerPermission = true;
    tempRole.sendAMessagePermission = true;
    tempRole.sendAVoiceMessagePermission = true;
  };

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
      />

      <Header
        primaryTitle="New role"
        onGoBackPress={() => {
          makeDefaultData();
          props.navigation.goBack();
        }}
      />

      <TouchableOpacity
        style={styles.doneButtonContainer}
        onPress={() => {
          if (name.length == 0) {
            isValid = false;
            alert("You have to enter a name");
          }

          channel.roles.map((role) => {
            if (role.name == name) {
              isValid = false;
              alert("This name is already taken");
            }
          });

          if (isValid) {
            channel.roles.push(
              new Role(
                name,
                emoji,
                color,
                tempRole.removeMembersPermission,
                tempRole.blockMembersPermission,
                tempRole.manageRolesPermission,
                tempRole.manageBranchesPermission,
                tempRole.seeTheAuditLogPermission,
                tempRole.considerChannelsPermission,
                tempRole.considerBranchPermission,
                tempRole.manageTheServerPermission,
                tempRole.sendAMessagePermission,
                tempRole.sendAVoiceMessagePermission,
                new Array<Contact>()
              )
            );

            makeDefaultData();

            channel.roles.sort((a, b) => a.name.localeCompare(b.name));

            props.navigation.goBack();
          }
        }}
      >
        <Text style={styles.doneButtonTitle}>Done</Text>
      </TouchableOpacity>

      <BranchColorPicker
        isVisible={isSpecialColorSelectionVisible}
        pickedColor={color}
        onColorChange={(color) => {
          setColor(color);
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
          <View style={[styles.settingOption, { top: 0.04 * screenHeight }]}>
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={styles.linearGradient}
            />
            <TextInput
              style={styles.newRoleNameInput}
              onChangeText={(text: string) => {
                setName(text);
              }}
              value={name}
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
              setColor(color);
            }}
            onClosePress={() => {
              setIsColorSelectionVisible(false);
            }}
            pickedColor={color}
            pickedSpecialColor={color}
          />

          {/* Choosing emoji menu */}
          <EmojiSelection
            isVisible={isEmojiSelectionVisible}
            onEmojiClick={(emoji) => {
              setEmoji(emoji);
            }}
            pickedEmoji={emoji}
            onCloseClick={() => {
              setIsEmojiSelectionVisible(false);
            }}
          />

          {/* Role appearance */}
          <View
            style={[
              styles.roleAppearanceContainer,
              {
                top:
                  !isEmojiSelectionVisible && !isColorSelectionVisible
                    ? 0.08 * screenHeight
                    : 0.04 * screenHeight,
              },
            ]}
          >
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={styles.linearGradient}
            />
            <View
              style={[
                styles.roleTitleContainerWhileCreating,
                { left: 0.04 * screenWidth },
              ]}
            >
              <Text style={{ fontSize: 28 }}>{emoji}</Text>
            </View>
            <View style={styles.roleTitleContainerWhileCreating}>
              <Text
                numberOfLines={1}
                style={[styles.roleTitle, { color: color }]}
              >
                {name}
              </Text>
            </View>
          </View>

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
            <LinearGradient
              colors={["#cf9b95", "#c98bb8", "#c37adb"]}
              style={styles.linearGradient}
            />
            <Text style={styles.settingOptionTitle}>Permission role</Text>
            <RightArrow style={styles.settingOptionRightArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NewRoleScreen;
