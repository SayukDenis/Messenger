import ChatContentForCentralChat from "./CompontentsForChatListContainer/ChatContentForCentralChat";
import BackgroundColorForBranchInChatList from "./CompontentsForChatListContainer/BackgroundColorForBranchInChatList";
import ImageContainerForChatListContiner from "./CompontentsForChatListContainer/ImageContainerForChatListContiner";
import React, { useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import LastMessageStatus from "./CompontentsForChatListContainer/LastMessageStatus";
import Chat from "../../../../dao/Models/Chats/Chat";

interface CentralChatContainerProps {
  chat: Chat;
  handlePress: any;
  onLongPressChat: any;
  nesting: number;
  onBranchPress: () => void;
}

const CentralChatContainer: React.FC<CentralChatContainerProps> = ({
  chat,
  handlePress,
  onLongPressChat,
  onBranchPress,
  nesting,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress.current}
      onLongPress={onLongPressChat.current}
      pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
      activeOpacity={1}
      style={listOfChatsStyle.chatcontainer}
    >
      <ImageContainerForChatListContiner urlToPhoto={chat.linkToPhoto} />
      <ChatContentForCentralChat   chat={chat} onBranchPress={onBranchPress}  />
      <BackgroundColorForBranchInChatList nesting={nesting} />
    </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
