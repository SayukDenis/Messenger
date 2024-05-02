import React, { ReactNode } from "react";
import { View, Text, Dimensions, ViewStyle } from "react-native";
import ViewedMessageIcon from "../../SVG/ViewedMessageIcon";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";

import Chat from "../../../../../dao/Models/Chats/Chat";
import Message from "../../../../../dao/Models/Message";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";

import LastMessageStatusContent from "./LastMessageStatusContent";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import Group from "../../../../../dao/Models/Chats/Group";
import Channel from "../../../../../dao/Models/Chats/Channel";
interface LastMessageStatusProps {
  chat: Dialogue | Group | Channel;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat }) => {
  if(!(chat && chat.branches && chat.branches[0] && chat.branches[0].messages)) {
    return <></>;
  }
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser.selfProfile;
    return self;
  });
  const lastMessage: Message | undefined = chat?.branches[0].messages[chat.branches[0].messages.length - 1];
  if (!lastMessage) {
    return null;
  }

  return (
    <View style={listOfChatsStyle.lastMessageStatusContainer}>
      <LastMessageStatusContent selfProfile={selfProfile} chat={chat} />
    </View>
  );
};

export default LastMessageStatus;
