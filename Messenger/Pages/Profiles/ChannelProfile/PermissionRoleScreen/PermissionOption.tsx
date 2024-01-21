// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import ToggleButton from "../../SemiComponents/GeneralComponents/ToggleButton";
import { LinearGradient } from "expo-linear-gradient";

interface PermissionOptionProps {
  onPress: () => void;
  isEnabled: boolean;
  text: string;
}

const PermissionOption: React.FC<PermissionOptionProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.settingOption}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={styles.linearGradient}
      />
      <Text style={styles.settingOptionTitle}>{props.text}</Text>
      <ToggleButton
        isEnabled={props.isEnabled}
        Toggle={() => {
          props.onPress();
        }}
      />
    </TouchableOpacity>
  );
};

export default PermissionOption;
