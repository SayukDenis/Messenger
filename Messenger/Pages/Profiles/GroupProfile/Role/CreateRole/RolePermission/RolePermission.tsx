import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../../../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PermissionRoleHead } from "./RolePermissionHead";

export default function RolePermission() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <PermissionRoleHead />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
