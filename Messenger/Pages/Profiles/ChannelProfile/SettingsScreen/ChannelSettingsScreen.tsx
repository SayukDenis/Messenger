// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import { branchMode } from "../../SemiComponents/DBUser";
import { LinearGradient } from "expo-linear-gradient";

type ChannelSettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const ChannelSettingsScreen: React.FC<ChannelSettingsScreenProps> = ({
  navigation,
}) => {
  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{ flex: 1 }}
    >
      <Header
        primaryTitle="Settings"
        onGoBackPress={() => {
          navigation.goBack();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AuditLogScreen" as never);
        }}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>Audit log</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          branchMode.mode = "channel";

          navigation.navigate("BranchesScreen" as never);
        }}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>Branches</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("RolesScreen" as never)}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>Role</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert("Aboba")}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>Edit channel</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ChannelSettingsScreen;
