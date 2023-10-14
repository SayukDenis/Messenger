// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "../ProfileStyles.tsx";
import RightArrow from "./Icons/RightArrow.tsx";

interface SettingsOptionProps {
  text: string;
  onPress: () => void;
}

const SettingsOption: React.FC<SettingsOptionProps> = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={styles.settingsOption}>
        <Text style={styles.settingsOptionTitle}>{props.text}</Text>
        <RightArrow style={styles.settingOptionRightArrow} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SettingsOption;
