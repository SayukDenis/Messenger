import React from "react";
import { View } from "react-native";
import LastMessageStatusContainer from "./LastMessageStatusAndTimeComponents/LastMessageStatusContainer";
import { listOfChatsStyle } from "../../../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";
import Chat from "../../../../../../../dao/Models/Chats/Chat";
import Message from "../../../../../../../dao/Models/Message";
import TimeContainer from "./LastMessageStatusAndTimeComponents/TimeContainer";

interface LastMessageStatusAndTimeProps {
  chat: Chat;
  time: string;
}

const LastMessageStatusAndTimeContainer: React.FC<
  LastMessageStatusAndTimeProps
> = ({ chat, time }) => {
  const lastMessage: Message | undefined =
    chat?.messages[chat.messages.length - 1];

  const lastMessageStatusComponent = () => {
    if (lastMessage) {
      return <LastMessageStatusContainer chat={chat} />;
    } else {
      return null;
    }
  };

  return (
    <View style={[listOfChatsStyle.lastMessageStatusAndTimeContainer]}>
      {lastMessageStatusComponent()}
      <TimeContainer time={time} />
    </View>
  );
};

export default connect(null)(LastMessageStatusAndTimeContainer);
