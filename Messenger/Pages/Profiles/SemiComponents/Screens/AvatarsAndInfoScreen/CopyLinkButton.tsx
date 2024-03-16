// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { styles } from "./Styles";
import { TouchableOpacity, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { channel } from "../../DatabaseSimulation/DBChannel";

interface CopyLinkButtonProps {
  onPress: () => void;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.subscribersButtonMainContainer}
    >
      <LinearGradient
        colors={["#cf9b95", "#c98bb8", "#c37adb"]}
        style={[
          styles.linearGradient,
          { opacity: 0.7, top: -0.4 * Dimensions.get("screen").height },
        ]}
      />
      <Text
        style={[styles.subscribersButtonTitle, { color: "rgb(29, 128, 184)" }]}
      >
        Copy link channel
      </Text>
    </TouchableOpacity>
  );
};

export default CopyLinkButton;
