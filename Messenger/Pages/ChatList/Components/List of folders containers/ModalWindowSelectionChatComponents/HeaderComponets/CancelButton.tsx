import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";

interface CancelButtonProps {
  unsetSelectChatMode: React.MutableRefObject<() => void>;
}

const CancelButton: React.FC<CancelButtonProps> = ({ unsetSelectChatMode }) => {
  return (
    <TouchableOpacity
      style={modalWindowSelectionChatStyles.cancelButton}
      onPress={unsetSelectChatMode.current}
    >
      <Text style={modalWindowSelectionChatStyles.cancelButtonText}>
        Cancel
      </Text>
    </TouchableOpacity>
  );
};

export default CancelButton;
