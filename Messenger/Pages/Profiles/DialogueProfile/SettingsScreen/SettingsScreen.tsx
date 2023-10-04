// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View } from "react-native";
import { styles } from "../../SemiComponents/ProfileStyles";
import Header from "../../SemiComponents/Header";
import GoBackButton from "../../SemiComponents/MainScreen/GoBackButton";
import { StackNavigationProp } from "@react-navigation/stack";

type SettingsScreenProps = {
  navigation: StackNavigationProp<{}>; // Встановіть правильний тип для navigation
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const settingsTitle: string = "Settings";

  return (
    <View style={styles.mainContainer}>
      <Header primaryTitle={settingsTitle} style={styles.headerTitle} />
      {/* Going back button */}
      <GoBackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingsScreen;
