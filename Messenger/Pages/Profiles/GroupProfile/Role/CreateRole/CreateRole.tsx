import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "../../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CreateRoleHead } from "./CreateRoleHead";
import { RoleName } from "./RoleName";
import PermissionButton from "./PermissionButton";
import { RoleEmoji } from "./RoleEmoji";
import { RoleColorPicker } from "./RoleColor";

export default function CreateRole() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <CreateRoleHead />
        <RoleName selectedEmoji={selectedEmoji} />
        <RoleEmoji onSelectEmoji={setSelectedEmoji} />
        <RoleColorPicker onSelectColor={setSelectedColor} />
        <PermissionButton />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
