import React from "react";
import { TouchableOpacity } from "react-native";
import ModalWindowSelectionChatMuteSVG from "../../../../SVG/ModalWindowSelectionChatMuteSVG";
import { modalWindowSelectionChatStyles } from "../../../../../Styles/ModalWindowSelectionChatStyles";

interface MuteButtonProps {}

const MuteButton: React.FC<MuteButtonProps> = () => {
  return (
    <TouchableOpacity style={modalWindowSelectionChatStyles.muteButton}>
      <ModalWindowSelectionChatMuteSVG />
    </TouchableOpacity>
  );
};

export default MuteButton;
