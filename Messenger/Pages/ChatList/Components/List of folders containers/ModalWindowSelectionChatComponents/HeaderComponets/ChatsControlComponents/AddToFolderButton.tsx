import React from "react";
import { TouchableOpacity } from "react-native";
import ModalWindowSelectionChatAddToFolderSVG from "../../../../SVG/ModalWindowSelectionChatAddToFolderSVG";
import { modalWindowSelectionChatStyles } from "../../../../../Styles/ModalWindowSelectionChatStyles";

interface AddToFolderButtonProps {}

const AddToFolderButton: React.FC<AddToFolderButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.addToFolderButton}>
      <ModalWindowSelectionChatAddToFolderSVG />
    </TouchableOpacity>
  );
};

export default AddToFolderButton;
