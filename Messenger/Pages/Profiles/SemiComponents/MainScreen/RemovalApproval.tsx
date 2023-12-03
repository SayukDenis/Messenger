// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";

interface RemovalApprovalProps {
  onAnyPress: () => void;
  isVisible: boolean;
  onAgreePress: () => void;
  text: string;
}

const RemovalApproval: React.FC<RemovalApprovalProps> = (props) => {
  const agreeButtonText: string = "Agree";
  const disagreeButtonText: string = "Disagree";

  return (
    <>
      {props.isVisible && (
        <View style={styles.clearChatApproval}>
          <Text style={styles.clearChatApprovalText}>{props.text}</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                props.onAgreePress();
                props.onAnyPress();
              }}
              style={styles.clearChatAgreeButton}
            >
              <Text style={styles.agreeTitle}>{agreeButtonText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.onAnyPress();
              }}
              style={styles.clearChatDisagreeButton}
            >
              <Text style={styles.disagreeTitle}>{disagreeButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default RemovalApproval;
