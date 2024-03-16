import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
import TickMarkSelectChatSVG from "../../../../SVG/TickMarkSelectChatSVG";

interface CheckBoxSelectChatContainerProps {
  isSelectedChat: boolean;
}

const CheckBoxSelectChatContainer: React.FC<
  CheckBoxSelectChatContainerProps
> = ({ isSelectedChat }) => {
  return (
    <View
      style={[
        listOfChatsStyle.checkBoxSelectChatContainer,
        isSelectedChat && { backgroundColor: "#66BFFF" },
      ]}
    >
      {isSelectedChat && <TickMarkSelectChatSVG />}
    </View>
  );
};

export default connect(null)(CheckBoxSelectChatContainer);
