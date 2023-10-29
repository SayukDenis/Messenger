// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./ProfileStyles";
import { View, TouchableOpacity } from "react-native";
import GoBackIcon from "./Assets/Icons/GoBackIcon";

interface GoBackButtonProps {
  onPress: any;
}

const GoBackButton: React.FC<GoBackButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.goBackFromProfileButton}
    >
      <GoBackIcon />
    </TouchableOpacity>
  );
};

export default GoBackButton;
