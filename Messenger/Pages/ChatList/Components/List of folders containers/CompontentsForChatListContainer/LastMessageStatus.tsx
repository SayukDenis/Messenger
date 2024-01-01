import React, { ReactNode } from "react";
import { View, Text, Dimensions, ViewStyle } from "react-native";
import ViewedMessageIcon from "../../SVG/ViewedMessageIcon";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";

import Chat from "../../../../../dao/Models/Chats/Chat";
import Message from "../../../../../dao/Models/Message";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";

import LastMessageStatusContent from "./LastMessageStatusContent";
interface LastMessageStatusProps {
  chat: Chat;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat }) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const lastMessage: Message | undefined =
    chat?.messages[chat.messages.length - 1];
  if (!lastMessage) {
    return null;
  }
  
  return <View style={listOfChatsStyle.lastMessageStatusContainer}><LastMessageStatusContent selfProfile={selfProfile} chat={chat} /></View>;
};




export default LastMessageStatus;
