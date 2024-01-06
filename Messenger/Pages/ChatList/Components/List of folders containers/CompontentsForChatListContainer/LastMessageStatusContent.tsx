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
  selfProfile: SelfProfile;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({
  chat,
  selfProfile,
}) => {
  const lastMessageId: number =0/* chat.lastWathedMessage.find(
    (value: ILastWathedMessage) => {
      return value.user.userId === selfProfile.userId;
    }
  )?.value.messageId;
  console.log(
    selfProfile.userId + " " + chat?.lastWathedMessage[0]?.user.userId
  );
  console.log(lastMessageId);
  let content: ReactNode;
  if (chat instanceof Dialogue) {
    let dialogue: Dialogue = chat as Dialogue;
    console.log(
      selfProfile.userId + " " + dialogue?.lastWathedMessage[0]?.user.userId
    );
  }*/
  let content: ReactNode;
  const lastMessage = chat.messages[chat.messages.length - 1];

  if (lastMessage.author.userId === selfProfile.userId) {
    if (lastMessageId && lastMessage.author.userId!==undefined && lastMessage?.author.userId < lastMessageId) {
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
  } else if (lastMessageId) {
    const countOfMessage: number = chat.messages.length - lastMessageId;
    if (countOfMessage === 0) return null;
    content = CountOfMessages(countOfMessage);
  }

  return content;
};

export default connect(null)(LastMessageStatus);
