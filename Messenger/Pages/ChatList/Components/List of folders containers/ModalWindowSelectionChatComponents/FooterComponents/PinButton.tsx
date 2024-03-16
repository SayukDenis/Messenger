import React from "react";
import { TouchableOpacity } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";
import ModalWindowSelectionChatPinSVG from "../../../SVG/ModalWindowSelectionChatPinSVG";

interface PinButtonProps {}

const PinButton: React.FC<PinButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.pinButton}>
      <ModalWindowSelectionChatPinSVG />
    </TouchableOpacity>
  );
};

export default PinButton;
