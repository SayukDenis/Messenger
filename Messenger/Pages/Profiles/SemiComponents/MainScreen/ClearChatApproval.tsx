// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles.tsx";

interface ClearChatApprovalProps {
  onAnyPress: () => void;
  isPressed: boolean;
  onAgreePress: () => void;
}

const ClearChatApproval: React.FC<ClearChatApprovalProps> = (props) => {
  const approvalText: string = "Do you really want to clear the chat?";
  const agreeButtonText: string = "Agree";
  const disagreeButtonText: string = "Disagree";

  return (
    <>
      {props.isPressed && (
        <View style={styles.clearChatApproval}>
          <Text style={styles.clearChatApprovalText}>{approvalText}</Text>

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

export default ClearChatApproval;
