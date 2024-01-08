import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../ChannelProfile/SettingsScreen/Styles";
import Header from "../../SemiComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import Group from "../../../../dao/Models/Chats/Group";
import { branchMode } from "../../SemiComponents/DBUser";

type GroupSettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const GroupSettingsScreen: React.FC<GroupSettingsScreenProps> = ({
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        branchMode.mode = "group";
        alert("aboba");
        navigation.navigate("AuditLog" as never);
      }}
      style={styles.settingOption}
    >
      <Text style={styles.settingOptionTitle}>Branches</Text>
      <RightArrow style={styles.settingOptionRightArrow} />
    </TouchableOpacity>
  );
};

export default GroupSettingsScreen;
