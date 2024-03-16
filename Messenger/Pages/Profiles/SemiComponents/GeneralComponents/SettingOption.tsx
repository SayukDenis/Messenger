// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";
import RightArrow from "../Assets/Icons/RightArrow";

interface SettingOptionProps {
  text: string;
  onPress: () => void;
}

const SettingOption: React.FC<SettingOptionProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.settingOption}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[styles.linearGradient, { opacity: 0.7 }]}
      />
      <Text style={styles.settingOptionTitle}>{props.text}</Text>
      <RightArrow style={styles.settingOptionRightArrow} />
    </TouchableOpacity>
  );
};

export default SettingOption;
