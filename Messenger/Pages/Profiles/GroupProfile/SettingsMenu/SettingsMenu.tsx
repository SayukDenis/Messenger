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

export default function SettingsMenu() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <SettingsHead />
        <AuditLogButton />
        <BranchesButton />
        <RoleButton />
        <GroupButton />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
