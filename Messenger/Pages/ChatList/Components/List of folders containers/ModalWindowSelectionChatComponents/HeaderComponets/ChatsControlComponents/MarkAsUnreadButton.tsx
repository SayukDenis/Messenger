import React from "react";
import { TouchableOpacity } from "react-native";
import ModalWindowSelectionChatMarkAsUnreadSVG from "../../../../SVG/ModalWindowSelectionChatMarkAsUnreadSVG";
import { modalWindowSelectionChatStyles } from "../../../../../Styles/ModalWindowSelectionChatStyles";

interface MarkAsUnreadButtonProps {}

const MarkAsUnreadButton: React.FC<MarkAsUnreadButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.markAsUnreadButton}>
      <ModalWindowSelectionChatMarkAsUnreadSVG />
    </TouchableOpacity>
  );
};

export default MarkAsUnreadButton;
