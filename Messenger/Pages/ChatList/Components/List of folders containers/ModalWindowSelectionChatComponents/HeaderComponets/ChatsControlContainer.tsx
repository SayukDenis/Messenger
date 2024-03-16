import React from "react";
import { View } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";
import MuteButton from "./ChatsControlComponents/MuteButton";
import AddToFolderButton from "./ChatsControlComponents/AddToFolderButton";
import MarkAsUnreadButton from "./ChatsControlComponents/MarkAsUnreadButton";

interface ChatsControlContainerProps {}

const ChatsControlContainer: React.FC<ChatsControlContainerProps> = () => {
  return (
    <View style={modalWindowSelectionChatStyles.chatControlContainer}>
      <MuteButton />
      <AddToFolderButton />
      <MarkAsUnreadButton />
    </View>
  );
};

export default ChatsControlContainer;
