// Oleksii Kovalenko telegram - @traewe

import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import PermissionOption from "./PermissionOption";
import { tempRole } from "../../SemiComponents/DBUser";

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
      state: tempRole.removeMembersPermission,
      toggle: () => togglePermission(0),
      text: "Remove members",
    },
    {
      state: tempRole.blockMembersPermission,
      toggle: () => togglePermission(1),
      text: "Block members",
    },
    {
      state: tempRole.manageRolesPermission,
      toggle: () => togglePermission(2),
      text: "Manage roles",
    },
    {
      state: tempRole.manageBranchesPermission,
      toggle: () => togglePermission(3),
      text: "Manage branches",
    },
    {
      state: tempRole.seeTheAuditLogPermission,
      toggle: () => togglePermission(4),
      text: "See the audit log",
    },
    {
      state: tempRole.considerChannelsPermission,
      toggle: () => togglePermission(5),
      text: "Consider channels",
    },
    {
      state: tempRole.considerBranchPermission,
      toggle: () => togglePermission(6),
      text: "Consider branch",
    },
    {
      state: tempRole.manageTheServerPermission,
      toggle: () => togglePermission(7),
      text: "Manage the server",
    },
    {
      state: tempRole.sendAMessagePermission,
      toggle: () => togglePermission(8),
      text: "Send a message",
    },
    {
      state: tempRole.sendAVoiceMessagePermission,
      toggle: () => togglePermission(9),
      text: "Send a voice message",
    },
  ]);

  const togglePermission = (index: number) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index].state = !updatedPermissions[index].state;
    setPermissions(updatedPermissions);
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        primaryTitle="Permission"
        onGoBackPress={() => {
          tempRole.removeMembersPermission = permissions[0].state;
          tempRole.blockMembersPermission = permissions[1].state;
          tempRole.manageRolesPermission = permissions[2].state;
          tempRole.manageBranchesPermission = permissions[3].state;
          tempRole.seeTheAuditLogPermission = permissions[4].state;
          tempRole.considerChannelsPermission = permissions[5].state;
          tempRole.considerBranchPermission = permissions[6].state;
          tempRole.manageTheServerPermission = permissions[7].state;
          tempRole.sendAMessagePermission = permissions[8].state;
          tempRole.sendAVoiceMessagePermission = permissions[9].state;

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
              <View key={index ^ 2} style={styles.containerForSettingTitle}>
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
