// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./ProfileStyles";
import { TouchableOpacity } from "react-native";
import GoBackIcon from "./Assets/Icons/GoBackIcon";

interface GoBackButtonProps {
  onPress: any;
  fill?: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.goBackFromProfileButton}
    >
      <GoBackIcon fill={props.fill} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
