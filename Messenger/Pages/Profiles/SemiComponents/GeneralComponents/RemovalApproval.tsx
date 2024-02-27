// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import { LinearGradient } from "expo-linear-gradient";

interface RemovalApprovalProps {
  onAnyPress: () => void;
  isVisible: boolean;
  onAgreePress: () => void;
  text: string;
}

const RemovalApproval: React.FC<RemovalApprovalProps> = (props) => {
  return (
    <>
      {props.isVisible && (
        <View style={styles.removalApprovalContainer}>
          <Text style={styles.approvalText}>{props.text}</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                props.onAgreePress();
                props.onAnyPress();
              }}
              style={styles.agreeButton}
            >
              <LinearGradient
                colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                style={[styles.linearGradient, { opacity: 0.2 }]}
              />
              <Text style={styles.agreeTitle}>Agree</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.onAnyPress();
              }}
              style={[
                styles.agreeButton,
                { borderRightWidth: 0, borderLeftWidth: 0.5 },
              ]}
            >
              <LinearGradient
                colors={["#cf9b95", "#c98bb8", "#c37adb"]}
                style={[styles.linearGradient, { opacity: 0.2 }]}
              />
              <Text style={styles.disagreeTitle}>Disagree</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default RemovalApproval;
