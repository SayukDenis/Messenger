// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { Dimensions, View } from "react-native";
import Header from "../../SemiComponents/GeneralComponents/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { branchMode } from "../../SemiComponents/DBUser";
import { LinearGradient } from "expo-linear-gradient";
import SettingOption from "../../SemiComponents/GeneralComponents/SettingOption";

interface DialogueSettingsScreenProps {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
}

const DialogueSettingsScreen: React.FC<DialogueSettingsScreenProps> = (
  props
) => {
  const SettingOptions = [
    {
      text: "Branches",
      onPress: () => {
        branchMode.mode = "user";

        props.navigation.navigate("BranchesScreen" as never);
      },
    },
    {
      text: "Edit wallpaper",
      onPress: () => {
        alert("Edit wallpaper");
      },
    },
    {
      text: "Permission",
      onPress: () => {
        props.navigation.navigate("PermissionScreen" as never);
      },
    },
  ];

  return (
    <LinearGradient
      colors={["#cf9b95", "#c98bb8", "#c37adb"]}
      style={{
        flex: 1,
      }}
    >
      <Header
        primaryTitle="Settings"
        onGoBackPress={() => {
          props.navigation.goBack();
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

export default DialogueSettingsScreen;
