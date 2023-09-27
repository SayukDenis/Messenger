import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RoleHead } from "./RoleHead";
import AddRole from "./AddRole";

export default function Role() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <RoleHead />
        <AddRole />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
