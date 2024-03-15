import React from "react";
import { modalWindowSelectionChatStyles } from "../../../../Styles/ModalWindowSelectionChatStyles";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

interface NumberOfSelectedChatsProps {}

const NumberOfSelectedChats: React.FC<NumberOfSelectedChatsProps> = () => {
  const mapSelectedChats = useSelector(
    (state: any) => state.chatListReducer.mapForSelectedChats.map
  );

  return (
    <View style={modalWindowSelectionChatStyles.numberOfSelectedChatsContainer}>
      <Text style={modalWindowSelectionChatStyles.numberOfSelectedChatsText}>
        {mapSelectedChats
          ? `Select (${
              Array.from(mapSelectedChats.values()).filter((item) => item)
                .length
            })`
          : `Select`}
      </Text>
    </View>
  );
};

export default NumberOfSelectedChats;
