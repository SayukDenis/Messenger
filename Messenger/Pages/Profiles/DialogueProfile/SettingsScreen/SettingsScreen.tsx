// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/MainScreen/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import SettingsOption from "../../SemiComponents/SettingsScreen/SettingsOption";

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
      <Header primaryTitle={settingsTitle} style={styles.headerTitle} />
      {/* Going back button */}
      <GoBackButton onPress={() => navigation.goBack()} />

      <SettingsOption
        text={branchesTitle}
        onPress={() => {
          alert("BRANCHES");
        }}
      />
      <SettingsOption
        text={editWallpaperTitle}
        onPress={() => {
          alert("edit");
        }}
      />
      <SettingsOption
        text={permissionTitle}
        onPress={() => {
          alert("permission");
        }}
      />
    </View>
  );
};

export default SettingsScreen;
