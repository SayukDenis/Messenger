import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Message from "../../../../../dao/Models/Message";

interface LastMessageContentProps {
  lastMessage: Message|undefined; 
  content: string|undefined;
}

const LastMessageContentForChatListContainer: React.FC<LastMessageContentProps> = ({ content }) => {
  return (
    <View style={listOfChatsStyle.containerForContent}>
      <Text
        style={listOfChatsStyle.contentStyle}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {content}
      </Text>
    </View>
  );
}

export default connect(null)(LastMessageContentForChatListContainer);
