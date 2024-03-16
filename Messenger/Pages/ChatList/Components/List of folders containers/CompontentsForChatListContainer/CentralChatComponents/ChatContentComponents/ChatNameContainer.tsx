import React from "react";
import { Text, View } from "react-native";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";

interface ChatNameContainerProps {
  nameOfChat: string;
}

const ChatNameContainer: React.FC<ChatNameContainerProps> = ({
  nameOfChat,
}) => {
  return (
    <View style={listOfChatsStyle.chatNameContainer}>
      <Text
        style={listOfChatsStyle.chatNameText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {nameOfChat}
      </Text>
    </View>
  );
};

export default connect(null)(ChatNameContainer);
