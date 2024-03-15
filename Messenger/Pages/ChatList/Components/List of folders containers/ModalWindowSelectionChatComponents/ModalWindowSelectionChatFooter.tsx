import React from "react";
import { View } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../Styles/ModalWindowSelectionChatStyles";
import PinButton from "./FooterComponents/PinButton";
import NumberOfSelectedChats from "./FooterComponents/NumberOfSelectedChats";
import DeleteButton from "./FooterComponents/DeleteButton";

interface ModalWindowSelectionChatFooterProps {}

const ModalWindowSelectionChatFooter: React.FC<
  ModalWindowSelectionChatFooterProps
> = () => {
  return (
    <View style={modalWindowSelectionChatStyles.footerContainer}>
      <PinButton />
      <NumberOfSelectedChats />
      <DeleteButton />
    </View>
  );
};

export default ModalWindowSelectionChatFooter;
