import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import UnViewedMessage from "../../../../../SVG/UnViewedMessage";
import ViewedMessageIcon from "../../../../../SVG/ViewedMessageIcon";
import { listOfChatsStyle } from "../../../../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../../../../dao/Models/Chats/Chat";
import SelfProfile from "../../../../../../../../dao/Models/SelfProfile";
import ILastWatchedMessage from "../../../../../../../../dao/Models/Chats/ILastWatchedMessage";
import { formatNumber } from "../../../../Functions/FormatNumberOfUnreadMessages";

interface LastMessageStatusProps {
  chat: Chat;
  selfProfile: SelfProfile;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({
  chat,
  selfProfile,
}) => {
  const listOfLastWatchedMessage: ILastWatchedMessage[] =
    chat.lastWatchedMessage;
  const ILastMessage: ILastWatchedMessage | undefined = (
    listOfLastWatchedMessage === undefined ? null : listOfLastWatchedMessage
  )?.find((value: ILastWatchedMessage) => {
    return value.user.userId == selfProfile.userId;
  });
  const lastMessageId: number | undefined = (
    ILastMessage?.value !== undefined ? ILastMessage.value : null
  )?.messageId;

  let content: ReactNode;
  const lastMessage = chat.messages[chat.messages.length - 1];
  if (lastMessage.author.userId === selfProfile.userId) {
    if (
      lastMessageId &&
      lastMessage.author.userId !== undefined &&
      lastMessage?.author.userId < lastMessageId
    ) {
      content = (
        <View style={listOfChatsStyle.checkMarkerContainer}>
          <UnViewedMessage />
        </View>
      );
    } else {
      content = (
        <View style={listOfChatsStyle.checkMarkerContainer}>
          <ViewedMessageIcon />
        </View>
      );
    }
  } else if (lastMessageId) {
    const countOfMessage: number = chat.messages.length - lastMessageId;
    if (countOfMessage === 0) return null;
    content = (
      <View style={listOfChatsStyle.countOfUnreadMessagesContainer}>
        <Text style={listOfChatsStyle.countOfUnReadMessagesText}>
          {formatNumber(countOfMessage)}
        </Text>
      </View>
    );
  }

  return content;
};

export default connect(null)(LastMessageStatus);
