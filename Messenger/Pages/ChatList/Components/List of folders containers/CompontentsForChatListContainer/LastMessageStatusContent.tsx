import React, { ReactNode } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import UnViewedMessage from "../../SVG/UnViewedMessage";
import ViewedMessageIcon from "../../SVG/ViewedMessageIcon";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../dao/Models/Chats/Chat";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import { CountOfMessages } from "../Functions/CountOfMessages";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import Group from "../../../../../dao/Models/Chats/Group";
import Channel from "../../../../../dao/Models/Chats/Channel";



interface LastMessageStatusProps {
  chat: Dialogue | Group | Channel;
  selfProfile: SelfProfile;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({
  chat,
  selfProfile,
}) => {
  const listOfLastWatchedMessage : ILastWatchedMessage[] = chat.branches[0].lastWatchedMessage;
  const ILastMessage: ILastWatchedMessage | undefined = (listOfLastWatchedMessage === undefined ? null : listOfLastWatchedMessage)?.find(
    (value: ILastWatchedMessage) => {
      return value.userId == selfProfile.userId;
    }
  );
  const lastMessageId : number | undefined = ILastMessage?.messageId
  
  let content: ReactNode;
  const lastMessage = chat.branches[0].messages[chat.branches[0].messages.length - 1];
  if (lastMessage.author.userId === selfProfile.userId) {
    if (lastMessageId && lastMessage.author.userId !== undefined && lastMessage?.author.userId < lastMessageId) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <UnViewedMessage />
        </View>
      );
    } else{
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
          />
        </View>
      );
    }
  } else if (lastMessageId) {
    const countOfMessage: number = chat.branches[0].messages.length - lastMessageId;
    if (countOfMessage === 0) return null;
    content = CountOfMessages(countOfMessage,"#FFFFFF","black",0.6,13);
  }

  return content;
};

export default connect(null)(LastMessageStatus);
