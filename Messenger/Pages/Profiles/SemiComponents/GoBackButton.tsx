// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./ProfileStyles";
import { View, TouchableWithoutFeedback } from "react-native";
import GoBackIcon from "./Assets/Icons/GoBackIcon";

interface GoBackButtonProps {
  onPress: any;
}

const GoBackButton: React.FC<GoBackButtonProps> = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={styles.goBackFromProfileButton}>
        <GoBackIcon />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GoBackButton;
