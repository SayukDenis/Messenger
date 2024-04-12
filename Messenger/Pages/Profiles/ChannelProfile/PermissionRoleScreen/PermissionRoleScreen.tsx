// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import PermissionOption from "./PermissionOption";
import {
  addFunction,
  GetRole,
} from "../../SemiComponents/DatabaseSimulation/DBFunctions";
import { channel } from "../../SemiComponents/DatabaseSimulation/DBChannel";
import { LinearGradient } from "expo-linear-gradient";

interface PermissionRoleScreenProps {
  navigation: StackNavigationProp<{}>;
}

interface Permission {
  state: boolean;
  toggle: () => void;
  text: string;
}

const PermissionRoleScreen: React.FC<PermissionRoleScreenProps> = (props) => {
  const [permissions, setPermissions] = useState<Permission[]>([
    {
      state: GetRole().removeMembersPermission,
      toggle: () => togglePermission(0),
      text: "Remove members",
    },
    {
      state: GetRole().blockMembersPermission,
      toggle: () => togglePermission(1),
      text: "Block members",
    },
    {
      state: GetRole().manageRolesPermission,
      toggle: () => togglePermission(2),
      text: "Manage roles",
    },
    {
      state: GetRole().manageBranchesPermission,
      toggle: () => togglePermission(3),
      text: "Manage branches",
    },
    {
      state: GetRole().seeTheAuditLogPermission,
      toggle: () => togglePermission(4),
      text: "See the audit log",
    },
    {
      state: GetRole().considerChannelsPermission,
      toggle: () => togglePermission(5),
      text: "Consider channels",
    },
    {
      state: GetRole().considerBranchPermission,
      toggle: () => togglePermission(6),
      text: "Consider branch",
    },
    {
      state: GetRole().manageTheServerPermission,
      toggle: () => togglePermission(7),
      text: "Manage the server",
    },
    {
      state: GetRole().sendAMessagePermission,
      toggle: () => togglePermission(8),
      text: "Send a message",
    },
    {
      state: GetRole().sendAVoiceMessagePermission,
      toggle: () => togglePermission(9),
      text: "Send a voice message",
    },
  ]);

  const togglePermission = (index: number) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index].state = !updatedPermissions[index].state;
    setPermissions(updatedPermissions);
    addFunction(() => {
      switch (index) {
        case 0:
          channel.selectedRole.removeMembersPermission =
            !channel.selectedRole.removeMembersPermission;
          break;
        case 1:
          channel.selectedRole.blockMembersPermission =
            !channel.selectedRole.blockMembersPermission;
          break;
        case 2:
          channel.selectedRole.manageRolesPermission =
            !channel.selectedRole.manageRolesPermission;
          break;
        case 3:
          channel.selectedRole.manageBranchesPermission =
            !channel.selectedRole.manageBranchesPermission;
          break;
        case 4:
          channel.selectedRole.seeTheAuditLogPermission =
            !channel.selectedRole.seeTheAuditLogPermission;
          break;
        case 5:
          channel.selectedRole.considerChannelsPermission =
            !channel.selectedRole.considerChannelsPermission;
          break;
        case 6:
          channel.selectedRole.considerBranchPermission =
            !channel.selectedRole.considerBranchPermission;
          break;
        case 7:
          channel.selectedRole.manageTheServerPermission =
            !channel.selectedRole.manageTheServerPermission;
          break;
        case 8:
          channel.selectedRole.sendAMessagePermission =
            !channel.selectedRole.sendAMessagePermission;
          break;
        case 9:
          channel.selectedRole.sendAVoiceMessagePermission =
            !channel.selectedRole.sendAVoiceMessagePermission;
          break;
      }
      updatedPermissions[index].state = !updatedPermissions[index].state;
    });
  };

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Header
        primaryTitle="Permission"
        onGoBackPress={() => {
          GetRole().removeMembersPermission = permissions[0].state;
          GetRole().blockMembersPermission = permissions[1].state;
          GetRole().manageRolesPermission = permissions[2].state;
          GetRole().manageBranchesPermission = permissions[3].state;
          GetRole().seeTheAuditLogPermission = permissions[4].state;
          GetRole().considerChannelsPermission = permissions[5].state;
          GetRole().considerBranchPermission = permissions[6].state;
          GetRole().manageTheServerPermission = permissions[7].state;
          GetRole().sendAMessagePermission = permissions[8].state;
          GetRole().sendAVoiceMessagePermission = permissions[9].state;

          props.navigation.goBack();
        }}
      />

      <View style={styles.containerForSettingTitle}>
        <Text style={styles.settingTitle}>Basic permissions</Text>
      </View>

      {permissions.map((permission, index) => {
        return (
          <View key={index}>
            <View style={{ height: 0.005 * Dimensions.get("screen").height }} />
            <PermissionOption
              onPress={permission.toggle}
              isEnabled={permission.state}
              text={permission.text}
            />
            {index === 6 && (
              <View style={styles.containerForSettingTitle}>
                <Text style={styles.settingTitle}>For members</Text>
              </View>
            )}
          </View>
        );
      })}
    </LinearGradient>
  );
};

export default PermissionRoleScreen;
