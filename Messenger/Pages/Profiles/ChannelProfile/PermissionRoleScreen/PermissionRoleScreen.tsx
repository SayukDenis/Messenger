// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import PermissionOption from "./PermissionOption";
import {
  addFunction,
  roleCharacter,
  selectedRole,
} from "../../SemiComponents/DatabaseSimulation/DBUser";

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
      state: roleCharacter().removeMembersPermission,
      toggle: () => togglePermission(0),
      text: "Remove members",
    },
    {
      state: roleCharacter().blockMembersPermission,
      toggle: () => togglePermission(1),
      text: "Block members",
    },
    {
      state: roleCharacter().manageRolesPermission,
      toggle: () => togglePermission(2),
      text: "Manage roles",
    },
    {
      state: roleCharacter().manageBranchesPermission,
      toggle: () => togglePermission(3),
      text: "Manage branches",
    },
    {
      state: roleCharacter().seeTheAuditLogPermission,
      toggle: () => togglePermission(4),
      text: "See the audit log",
    },
    {
      state: roleCharacter().considerChannelsPermission,
      toggle: () => togglePermission(5),
      text: "Consider channels",
    },
    {
      state: roleCharacter().considerBranchPermission,
      toggle: () => togglePermission(6),
      text: "Consider branch",
    },
    {
      state: roleCharacter().manageTheServerPermission,
      toggle: () => togglePermission(7),
      text: "Manage the server",
    },
    {
      state: roleCharacter().sendAMessagePermission,
      toggle: () => togglePermission(8),
      text: "Send a message",
    },
    {
      state: roleCharacter().sendAVoiceMessagePermission,
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
          selectedRole.selectedRole.removeMembersPermission =
            !selectedRole.selectedRole.removeMembersPermission;
          break;
        case 1:
          selectedRole.selectedRole.blockMembersPermission =
            !selectedRole.selectedRole.blockMembersPermission;
          break;
        case 2:
          selectedRole.selectedRole.manageRolesPermission =
            !selectedRole.selectedRole.manageRolesPermission;
          break;
        case 3:
          selectedRole.selectedRole.manageBranchesPermission =
            !selectedRole.selectedRole.manageBranchesPermission;
          break;
        case 4:
          selectedRole.selectedRole.seeTheAuditLogPermission =
            !selectedRole.selectedRole.seeTheAuditLogPermission;
          break;
        case 5:
          selectedRole.selectedRole.considerChannelsPermission =
            !selectedRole.selectedRole.considerChannelsPermission;
          break;
        case 6:
          selectedRole.selectedRole.considerBranchPermission =
            !selectedRole.selectedRole.considerBranchPermission;
          break;
        case 7:
          selectedRole.selectedRole.manageTheServerPermission =
            !selectedRole.selectedRole.manageTheServerPermission;
          break;
        case 8:
          selectedRole.selectedRole.sendAMessagePermission =
            !selectedRole.selectedRole.sendAMessagePermission;
          break;
        case 9:
          selectedRole.selectedRole.sendAVoiceMessagePermission =
            !selectedRole.selectedRole.sendAVoiceMessagePermission;
          break;
      }
      updatedPermissions[index].state = !updatedPermissions[index].state;
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Permission"
        onGoBackPress={() => {
          roleCharacter().removeMembersPermission = permissions[0].state;
          roleCharacter().blockMembersPermission = permissions[1].state;
          roleCharacter().manageRolesPermission = permissions[2].state;
          roleCharacter().manageBranchesPermission = permissions[3].state;
          roleCharacter().seeTheAuditLogPermission = permissions[4].state;
          roleCharacter().considerChannelsPermission = permissions[5].state;
          roleCharacter().considerBranchPermission = permissions[6].state;
          roleCharacter().manageTheServerPermission = permissions[7].state;
          roleCharacter().sendAMessagePermission = permissions[8].state;
          roleCharacter().sendAVoiceMessagePermission = permissions[9].state;

          props.navigation.goBack();
        }}
      />

      <View style={styles.containerForSettingTitle}>
        <Text style={styles.settingTitle}>Basic permissions</Text>
      </View>

      {permissions.map((permission, index) => {
        return (
          <>
            <PermissionOption
              key={index}
              onPress={permission.toggle}
              isEnabled={permission.state}
              text={permission.text}
            />
            {index === 6 && (
              <View key={-index} style={styles.containerForSettingTitle}>
                <Text style={styles.settingTitle}>For members</Text>
              </View>
            )}
          </>
        );
      })}
    </View>
  );
};

export default PermissionRoleScreen;
