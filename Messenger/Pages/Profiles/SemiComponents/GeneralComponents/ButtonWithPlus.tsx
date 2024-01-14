// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { styles } from "./Styles";
import PlusIcon from "../BranchesScreen/Icons/PlusIcon";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonWithPlusProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}

const ButtonWithPlus: React.FC<ButtonWithPlusProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={[styles.settingOption, props.style]}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[styles.linearGradient, { opacity: 0.7 }]}
      />
      <PlusIcon stroke="rgb(43, 29, 29)" style={styles.plusIcon} />
      <Text style={styles.buttonWithPlusTitle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithPlus;
