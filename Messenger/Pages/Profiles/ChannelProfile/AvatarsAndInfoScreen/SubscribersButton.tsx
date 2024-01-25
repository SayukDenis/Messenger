// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./Styles";
import { TouchableOpacity, Text } from "react-native";
import RightArrow from "../../SemiComponents/Assets/Icons/RightArrow";

interface SubscribersButtonProps {
  onPress: any;
  subscribersQuantity: number;
}

const SubscribersButton: React.FC<SubscribersButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.subscribersButtonMainContainer}
    >
      <Text style={styles.subscribersButtonTitle}>Subscribers</Text>
      <Text style={styles.subscribersButtonSubscribersQuantityTitle}>
        {props.subscribersQuantity}
      </Text>
      <RightArrow style={styles.subscribersButtonRightArrow} />
    </TouchableOpacity>
  );
};

export default SubscribersButton;
