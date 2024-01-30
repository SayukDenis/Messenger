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
import EmojiAndColorButtons from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/EmojiAndColorButtons";
import ColorSelection from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/ColorSelection";
import EmojiSelection from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/EmojiSelection";
import Blur from "../../SemiComponents/GeneralComponents/Blur";
import BranchColorPicker from "../../SemiComponents/Screens/BranchesScreen/NewBranchScreen/BranchColorPicker";
import { Role } from "../../SemiComponents/DatabaseSimulation/DBClasses";
import {
  clearFunctions,
  executeFunctions,
} from "../../SemiComponents/DatabaseSimulation/DBFunctions";
import { channel } from "../../SemiComponents/DatabaseSimulation/DBChannel";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import PlusIcon from "../../SemiComponents/Assets/Icons/PlusIcon";
import BinIcon from "../../SemiComponents/Screens/MainScreen/Icons/BinIcon";
import { LinearGradient } from "expo-linear-gradient";

interface ChangeRoleScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const screenWidth: number = Dimensions.get("screen").width;
const screenHeight: number = Dimensions.get("screen").height;

const ChangeRoleScreen: React.FC<ChangeRoleScreenProps> = (props) => {
  var isValid: boolean = true;

  const previousPermissions: boolean[] = [
    channel.selectedRole.removeMembersPermission,
    channel.selectedRole.blockMembersPermission,
    channel.selectedRole.manageRolesPermission,
    channel.selectedRole.manageBranchesPermission,
    channel.selectedRole.seeTheAuditLogPermission,
    channel.selectedRole.considerChannelsPermission,
    channel.selectedRole.considerBranchPermission,
    channel.selectedRole.manageTheServerPermission,
    channel.selectedRole.sendAMessagePermission,
    channel.selectedRole.sendAVoiceMessagePermission,
  ];

  const [name, setName] = useState(channel.selectedRole.name);
  const [emoji, setEmoji] = useState(channel.selectedRole.emoji);
  const [isEmojiSelectionVisible, setIsEmojiSelectionVisible] = useState(false);
  const [isColorSelectionVisible, setIsColorSelectionVisible] = useState(false);
  const [color, setColor] = useState(channel.selectedRole.color);
  const [isSpecialColorSelectionVisible, setIsSpecialColorSelectionVisible] =
    useState(false);

  const [subscribers, setSubscribers] = useState(
    channel.selectedRole.subscribers
  );

  const isFocused = useIsFocused();

  const Gradient = () => (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={styles.linearGradient}
    />
  );

  useEffect(() => {
    setSubscribers(channel.selectedRole.subscribers);
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
          channel.selectedRole.removeMembersPermission = previousPermissions[0];
          channel.selectedRole.blockMembersPermission = previousPermissions[1];
          channel.selectedRole.manageRolesPermission = previousPermissions[2];
          channel.selectedRole.manageBranchesPermission =
            previousPermissions[3];
          channel.selectedRole.seeTheAuditLogPermission =
            previousPermissions[4];
          channel.selectedRole.considerChannelsPermission =
            previousPermissions[5];
          channel.selectedRole.considerBranchPermission =
            previousPermissions[6];
          channel.selectedRole.manageTheServerPermission =
            previousPermissions[7];
          channel.selectedRole.sendAMessagePermission = previousPermissions[8];
          channel.selectedRole.sendAVoiceMessagePermission =
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
            if (role.name == name && role.name != channel.selectedRole.name) {
              isValid = false;
              alert("This name is busy");
            }
          });

          if (isValid) {
            const roleToRemove = channel.roles.find(
              (role) => role.name === channel.selectedRole.name
            );

            if (roleToRemove) {
              channel.roles.splice(channel.roles.indexOf(roleToRemove), 1);
            }

            channel.roles.push(
              new Role(
                name,
                emoji,
                color,
                channel.selectedRole.removeMembersPermission,
                channel.selectedRole.blockMembersPermission,
                channel.selectedRole.manageRolesPermission,
                channel.selectedRole.manageBranchesPermission,
                channel.selectedRole.seeTheAuditLogPermission,
                channel.selectedRole.considerChannelsPermission,
                channel.selectedRole.considerBranchPermission,
                channel.selectedRole.manageTheServerPermission,
                channel.selectedRole.sendAMessagePermission,
                channel.selectedRole.sendAVoiceMessagePermission,
                subscribers
              )
            );

            channel.roles.sort((a, b) => a.name.localeCompare(b.name));

            channel.selectedRole = null;

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
                channel.selectedRole.subscribers.length,
          }}
        >
          {/* Title for name input */}
          <View style={styles.containerForSettingTitle}>
            <Text style={styles.settingTitle}>Name</Text>
          </View>

          {/* Role name input */}
          <View style={[styles.settingOption, { top: 0.04 * screenHeight }]}>
            {Gradient()}
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
            {Gradient()}
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
            {Gradient()}
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
              channel.selectedRole.subscribers = subscribers;
              props.navigation.navigate("ForwardToChatsScreen" as never);
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
            {Gradient()}
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

export default ChangeRoleScreen;
