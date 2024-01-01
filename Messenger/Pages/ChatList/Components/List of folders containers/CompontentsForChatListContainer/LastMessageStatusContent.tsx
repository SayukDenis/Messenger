// LastMessageStatus.tsx
import React, { ReactNode } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import UnViewedMessage from "../../SVG/UnViewedMessage";
import ViewedMessageIcon from "../../SVG/ViewedMessageIcon";


import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../dao/Models/Chats/Chat";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import { CountOfMessages } from "../Functions/CountOfMessages";

interface LastMessageStatusProps {
  chat: Chat;
  selfProfile:SelfProfile;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat,selfProfile }) => {
  const id: number | undefined = 0;
  let content: ReactNode;

  let dialogue: Dialogue = chat as Dialogue;
  const lastMessage = chat.messages[chat.messages.length - 1];

  if (lastMessage.author.userId === selfProfile.userId) {
    if (id && lastMessage.author.userId < id) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <UnViewedMessage />
        </View>
      );
    } else if (true) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
          />
        </View>
      );
    }
  } else if (id) {
    const countOfMessage: number = chat.messages.length - id;
    if (countOfMessage === 0) return null;
    content = CountOfMessages(countOfMessage);
  }

  return content;
};

export default connect(null)(LastMessageStatus);
