// Oleksii Kovalenko telegram - @traewe

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { JacquesFrancoisText, styles } from "./Styles.tsx";

interface ClearChatApprovalProps {
  setIsClearChatButtonClicked: (value: boolean) => void;
  isClearChatButtonClicked: boolean;
  AgreeClick: () => void;
  DisagreeClick: () => void;
}

const ClearChatApproval: React.FC<ClearChatApprovalProps> = (props) => {
  const approvalText: string = "Do you really want to clear the chat?";
  const agreeButtonText: string = "Agree";
  const disagreeButtonText: string = "Disagree";

  return (
    <>
      {props.isClearChatButtonClicked && (
        <View style={styles.clearChatApproval}>
          <JacquesFrancoisText
            text={approvalText}
            style={styles.clearChatApprovalText}
          />

          <View style={{ flexDirection: "row" }}>
            <TouchableWithoutFeedback
              onPress={() => {
                props.AgreeClick();
                props.setIsClearChatButtonClicked(false);
              }}
            >
              <View style={styles.clearChatAgreeButton}>
                <JacquesFrancoisText
                  text={agreeButtonText}
                  style={styles.agreeTitle}
                />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                props.DisagreeClick();
                props.setIsClearChatButtonClicked(false);
              }}
            >
              <View style={styles.clearChatDisagreeButton}>
                <JacquesFrancoisText
                  text={disagreeButtonText}
                  style={styles.disagreeTitle}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </>
  );
};

export default ClearChatApproval;
