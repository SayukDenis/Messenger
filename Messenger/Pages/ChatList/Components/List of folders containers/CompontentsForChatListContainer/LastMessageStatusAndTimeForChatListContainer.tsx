import React from "react";
import { Text, View } from "react-native";
import LastMessageStatus from "./LastMessageStatus";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";
import Chat from "../../../../../dao/Models/Chats/Chat";

interface LastMessageStatusAndTimeProps {
  chat: Chat;
  time: string;
}

const LastMessageStatusAndTimeForChatListContainer: React.FC<
  LastMessageStatusAndTimeProps
> = ({ chat, time }) => {
  return (
    <View style={[listOfChatsStyle.rightContainer]}>
      <LastMessageStatus chat={chat} />
      <Text style={listOfChatsStyle.timeStyle}>{time}</Text>
    </View>
  );
};

export default connect(null)(LastMessageStatusAndTimeForChatListContainer);
