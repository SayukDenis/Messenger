// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
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

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("BranchesScreen" as never)}
      >
        <View style={styles.settingOption}>
          <Text style={styles.settingOptionTitle}>{branchesTitle}</Text>
          <RightArrow style={styles.settingOptionRightArrow} />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          alert("Edit wallpaper");
        }}
      >
        <View style={styles.settingOption}>
          <Text style={styles.settingOptionTitle}>{editWallpaperTitle}</Text>
          <RightArrow style={styles.settingOptionRightArrow} />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PermissionScreen" as never)}
      >
        <View style={styles.settingOption}>
          <Text style={styles.settingOptionTitle}>{permissionTitle}</Text>
          <RightArrow style={styles.settingOptionRightArrow} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SettingsScreen;
