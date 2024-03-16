import React from "react";
import { TouchableOpacity } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";
import ModalWindowSelectionChatDeleteSVG from "../../../SVG/ModalWindowSelectionChatDeleteSVG";

interface DeleteButtonProps {}

const DeleteButton: React.FC<DeleteButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.deleteButton}>
      <ModalWindowSelectionChatDeleteSVG />
    </TouchableOpacity>
  );
};

export default DeleteButton;
