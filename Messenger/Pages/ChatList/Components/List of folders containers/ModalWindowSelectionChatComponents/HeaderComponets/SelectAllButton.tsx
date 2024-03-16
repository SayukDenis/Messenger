import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";

interface SelectAllButtonProps {}

const SelectAllButton: React.FC<SelectAllButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.selectAllButton}>
      <Text style={modalWindowSelectionChatStyles.selectAllButtonText}>
        Select all
      </Text>
    </TouchableOpacity>
  );
};

export default SelectAllButton;
