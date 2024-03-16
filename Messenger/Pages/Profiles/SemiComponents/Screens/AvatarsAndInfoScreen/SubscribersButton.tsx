// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./Styles";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import RightArrow from "../../Assets/Icons/RightArrow";
import { LinearGradient } from "expo-linear-gradient";
import { channel } from "../../DatabaseSimulation/DBChannel";

interface SubscribersButtonProps {
  onPress: () => void;
}

const SubscribersButton: React.FC<SubscribersButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={[
        styles.subscribersButtonMainContainer,
        { top: 0.02 * Dimensions.get("screen").height },
      ]}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[
          styles.linearGradient,
          { opacity: 0.7, top: -0.4 * Dimensions.get("screen").height },
        ]}
      />
      <Text style={styles.subscribersButtonTitle}>Subscribers</Text>
      <Text style={styles.subscribersButtonSubscribersQuantityTitle}>
        {channel.subscribers.length}
      </Text>
      <RightArrow
        style={styles.subscribersButtonRightArrow}
        fill="rgb(115, 76, 165)"
      />
    </TouchableOpacity>
  );
};

export default SubscribersButton;
