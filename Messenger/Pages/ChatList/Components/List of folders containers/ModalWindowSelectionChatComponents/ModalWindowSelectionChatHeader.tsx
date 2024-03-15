import React from "react";
import { View } from "react-native";
import { modalWindowSelectionChatStyles } from "../../../Styles/ModalWindowSelectionChatStyles";
import ChatsControlContainer from "./HeaderComponets/ChatsControlContainer";
import SelectAllButton from "./HeaderComponets/SelectAllButton";
import CancelButton from "./HeaderComponets/CancelButton";

interface ModalWindowSelectionChatHeaderProps {
  unsetSelectChatMode: React.MutableRefObject<() => void>;
}

const ModalWindowSelectionChatHeader: React.FC<
  ModalWindowSelectionChatHeaderProps
> = ({ unsetSelectChatMode }) => {
  return (
    <View style={modalWindowSelectionChatStyles.headerContainer}>
      <ChatsControlContainer />
      <SelectAllButton />
      <CancelButton unsetSelectChatMode={unsetSelectChatMode} />
    </View>
  );
};

export default ModalWindowSelectionChatHeader;
