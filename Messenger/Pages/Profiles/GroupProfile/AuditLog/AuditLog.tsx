//Viktor Hraboviuk

import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuditLogHead } from "./AuditLogHead";
import { ShowLogs } from "./ShowLogs";

export default function AuditLog() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <AuditLogHead />
        <ShowLogs />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
