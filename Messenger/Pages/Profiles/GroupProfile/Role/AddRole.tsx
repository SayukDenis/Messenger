import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../EditGroup/ProfileGroupStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function AddRole() {
  const navigation = useNavigation();

  const handleEditGroupPress = () => {
    navigation.navigate("CreateRole" as never);
  };

  return (
    <TouchableOpacity style={styles.SettingsButtons}>
      <Text style={styles.SettingsText} onPress={handleEditGroupPress}>
        + Role
      </Text>
    </TouchableOpacity>
  );
}
