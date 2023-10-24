// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
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
            <TouchableWithoutFeedback
              onPress={() => {
                props.onAgreePress();
                props.onAnyPress();
              }}
            >
              <View style={styles.clearChatAgreeButton}>
                <Text style={styles.agreeTitle}>{agreeButtonText}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                props.onAnyPress();
              }}
            >
              <View style={styles.clearChatDisagreeButton}>
                <Text style={styles.disagreeTitle}>{disagreeButtonText}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </>
  );
};

export default ClearChatApproval;
