// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Dimensions } from "react-native";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import SettingOption from "../../SemiComponents/GeneralComponents/SettingOption";

type ChannelSettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const ChannelSettingsScreen: React.FC<ChannelSettingsScreenProps> = ({
  navigation,
}) => {
  const SettingOptions = [
    {
      text: "Audit log",
      onPress: () => {
        navigation.navigate("AuditLogScreen" as never);
      },
    },
    {
      text: "Branches",
      onPress: () => {
        navigation.navigate("BranchesScreen" as never);
      },
    },
    {
      text: "Role",
      onPress: () => {
        navigation.navigate("RolesScreen" as never);
      },
    },
    {
      text: "Edit channel",
      onPress: () => {
        alert("Edit channel");
      },
    },
  ];

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

      {SettingOptions.map((item, index) => (
        <View key={index}>
          <SettingOption
            text={item.text}
            onPress={() => {
              item.onPress();
            }}
          />
          <View style={{ height: 0.005 * Dimensions.get("screen").height }} />
        </View>
      ))}
    </LinearGradient>
  );
};

export default ChannelSettingsScreen;
