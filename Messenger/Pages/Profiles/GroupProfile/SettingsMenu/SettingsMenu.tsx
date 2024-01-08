import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SettingsHead } from "./SettingsMenuHead";
import GroupButton from "./SettingsEditGroupButton";
import AuditLogButton from "./SettingsAuditLogButton";
import BranchesButton from "./SettingsBranchesButton";
import RoleButton from "./SettingsRoleButton";
import Svg, { Path, Rect } from "react-native-svg";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";

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
        <BranchesButton />
        <RoleButton />
        <GroupButton />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SettingsMenu;
