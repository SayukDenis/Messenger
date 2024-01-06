// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";
import Group from "../../../../dao/Models/Chats/Group";
import { branchMode } from "../../SemiComponents/DBUser";

type ChannelSettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const ChannelSettingsScreen: React.FC<ChannelSettingsScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
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
        onPress={() => alert("Aboba")}
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
    </View>
  );
};

export default ChannelSettingsScreen;
