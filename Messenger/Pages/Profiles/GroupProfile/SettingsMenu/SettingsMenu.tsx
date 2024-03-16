import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GroupButton from "./SettingsEditGroupButton";
import AuditLogButton from "./SettingsAuditLogButton";
import RoleButton from "./SettingsRoleButton";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import SettingsBranchesButton from "./SettingsBranchesButton";
import { branchMode } from "../../SemiComponents/DatabaseSimulation/DBUser";

interface SettingsMenuProps {
  navigation: StackNavigationProp<{}>;
}

const SettingsMenu: React.FC<SettingsMenuProps> = (props) => {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Header
          primaryTitle="Settings"
          onGoBackPress={() => {
            props.navigation.goBack();
          }}
        />
        <AuditLogButton />
        <SettingsBranchesButton
          onPress={() => {
            branchMode.mode = "group";

            props.navigation.navigate("BranchesScreen" as never);
          }}
        />
        <RoleButton />
        <GroupButton />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SettingsMenu;
