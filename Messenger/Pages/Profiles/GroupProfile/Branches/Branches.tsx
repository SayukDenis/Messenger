import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BranhesHead } from "./BranchesHead";
import { AddBranch } from "./AddBranch";

export default function Branches() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <BranhesHead />
        <AddBranch />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
