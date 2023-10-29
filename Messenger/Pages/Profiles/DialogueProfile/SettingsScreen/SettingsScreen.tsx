// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";

type SettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const settingsTitle: string = "Settings";
  const branchesTitle: string = "Branches";
  const editWallpaperTitle: string = "Edit wallpaper";
  const permissionTitle: string = "Permission";

  return (
    <View style={styles.mainContainer}>
      <Header primaryTitle={settingsTitle} />

      {/* Going back button */}
      <GoBackButton onPress={() => navigation.goBack()} />

      <TouchableOpacity
        onPress={() => navigation.navigate("BranchesScreen" as never)}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>{branchesTitle}</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("Edit wallpaper");
        }}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>{editWallpaperTitle}</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("PermissionScreen" as never)}
        style={styles.settingOption}
      >
        <Text style={styles.settingOptionTitle}>{permissionTitle}</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;