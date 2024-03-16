import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
import Message from "../../../../../../../dao/Models/Message";

interface LastMessageContainerProps {
  lastMessage: Message | undefined;
  content: string | undefined;
}

const LastMessageContainer: React.FC<LastMessageContainerProps> = ({
  content,
}) => {
  return (
    <View style={listOfChatsStyle.lastMessageContainer}>
      <Text
        style={listOfChatsStyle.lastMessageText}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {content}
      </Text>
    </View>
  );
};

export default connect(null)(LastMessageContainer);
