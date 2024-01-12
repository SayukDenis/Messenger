// Oleksii Kovalenko telegram - @traewe

import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { styles } from "./Styles";
import EmojiAndColorButtons from "../../SemiComponents/BranchesScreen/NewBranchScreen/EmojiAndColorButtons";
import ColorSelection from "../../SemiComponents/BranchesScreen/NewBranchScreen/ColorSelection";
import EmojiSelection from "../../SemiComponents/BranchesScreen/NewBranchScreen/EmojiSelection";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import BranchColorPicker from "../../SemiComponents/BranchesScreen/NewBranchScreen/BranchColorPicker";
import {
  Role,
  channel,
  clearFunctions,
  executeFunctions,
  selectedRole,
} from "../../SemiComponents/DBUser";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import PlusIcon from "../../SemiComponents/BranchesScreen/Icons/PlusIcon";
import BinIcon from "../../SemiComponents/MainScreen/Icons/BinIcon";
import { LinearGradient } from "expo-linear-gradient";

interface ChangeBranchParentScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const ChangeBranchParentScreen: React.FC<ChangeBranchParentScreenProps> = (
  props
) => {
  var isValid: boolean = true;

  const previousPermissions: boolean[] = [
    selectedRole.selectedRole.removeMembersPermission,
    selectedRole.selectedRole.blockMembersPermission,
    selectedRole.selectedRole.manageRolesPermission,
    selectedRole.selectedRole.manageBranchesPermission,
    selectedRole.selectedRole.seeTheAuditLogPermission,
    selectedRole.selectedRole.considerChannelsPermission,
    selectedRole.selectedRole.considerBranchPermission,
    selectedRole.selectedRole.manageTheServerPermission,
    selectedRole.selectedRole.sendAMessagePermission,
    selectedRole.selectedRole.sendAVoiceMessagePermission,
  ];

  const [name, setName] = useState(selectedRole.selectedRole.name);
  const [emoji, setEmoji] = useState(selectedRole.selectedRole.emoji);
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [color, setColor] = useState(selectedRole.selectedRole.color);
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  const [subscribers, setSubscribers] = useState(
    selectedRole.selectedRole.subscribers
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    setSubscribers(selectedRole.selectedRole.subscribers);
  }, [isFocused]);

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
          selectedRole.selectedRole.removeMembersPermission =
            previousPermissions[0];
          selectedRole.selectedRole.blockMembersPermission =
            previousPermissions[1];
          selectedRole.selectedRole.manageRolesPermission =
            previousPermissions[2];
          selectedRole.selectedRole.manageBranchesPermission =
            previousPermissions[3];
          selectedRole.selectedRole.seeTheAuditLogPermission =
            previousPermissions[4];
          selectedRole.selectedRole.considerChannelsPermission =
            previousPermissions[5];
          selectedRole.selectedRole.considerBranchPermission =
            previousPermissions[6];
          selectedRole.selectedRole.manageTheServerPermission =
            previousPermissions[7];
          selectedRole.selectedRole.sendAMessagePermission =
            previousPermissions[8];
          selectedRole.selectedRole.sendAVoiceMessagePermission =
            previousPermissions[9];

          executeFunctions();
          clearFunctions();

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
            if (
              role.name == name &&
              role.name != selectedRole.selectedRole.name
            ) {
              isValid = false;
              alert("This name is busy");
            }
          });

          if (isValid) {
            const roleToRemove = channel.roles.find(
              (role) => role.name === selectedRole.selectedRole.name
            );

            if (roleToRemove) {
              channel.roles.splice(channel.roles.indexOf(roleToRemove), 1);
            }

            channel.roles.push(
              new Role(
                name,
                emoji,
                color,
                selectedRole.selectedRole.removeMembersPermission,
                selectedRole.selectedRole.blockMembersPermission,
                selectedRole.selectedRole.manageRolesPermission,
                selectedRole.selectedRole.manageBranchesPermission,
                selectedRole.selectedRole.seeTheAuditLogPermission,
                selectedRole.selectedRole.considerChannelsPermission,
                selectedRole.selectedRole.considerBranchPermission,
                selectedRole.selectedRole.manageTheServerPermission,
                selectedRole.selectedRole.sendAMessagePermission,
                selectedRole.selectedRole.sendAVoiceMessagePermission,
                subscribers
              )
            );

            channel.roles.sort((a, b) => a.name.localeCompare(b.name));

            selectedRole.selectedRole = null;

            clearFunctions();
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
            height:
              1.1 * Dimensions.get("screen").height +
              0.05 *
                Dimensions.get("screen").height *
                selectedRole.selectedRole.subscribers.length,
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
            <Text style={styles.settingOptionTitle}>Permission role</Text>
            <RightArrow style={styles.settingOptionRightArrow} />
          </TouchableOpacity>

          {/* Title for subscribers */}
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
            <Text style={styles.settingTitle}>Role for subscribers</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              selectedRole.selectedRole.subscribers = subscribers;
              props.navigation.navigate("AddSubscriberRoleScreen" as never);
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
            <PlusIcon style={styles.plusIcon} />
            <Text style={styles.plusRoleTitle}>Add subscriber role</Text>
          </TouchableOpacity>

          {subscribers.map((item, index) => {
            return (
              <View
                key={index}
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
                <Image
                  style={styles.avatarInList}
                  source={{ uri: item.avatar }}
                />

                <Text
                  numberOfLines={1}
                  style={[styles.plusRoleTitle, { width: "70%" }]}
                >
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setSubscribers(
                      subscribers.filter(
                        (subscriber) => subscriber.id !== item.id
                      )
                    );
                  }}
                  style={styles.binIconContainer}
                >
                  <BinIcon style={styles.binIcon} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ChangeBranchParentScreen;
