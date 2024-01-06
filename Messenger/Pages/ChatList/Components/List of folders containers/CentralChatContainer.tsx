import ChatContentForCentralChat from "./CompontentsForChatListContainer/ChatContentForCentralChat";
import BackgroundColorForBranchInChatList from "./CompontentsForChatListContainer/BackgroundColorForBranchInChatList";
import ImageContainerForChatListContiner from "./CompontentsForChatListContainer/ImageContainerForChatListContiner";
import React from "react";
import { TouchableOpacity } from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";

import Chat from "../../../../dao/Models/Chats/Chat";
import User from "../../../../dao/Models/User";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import Channel from "../../../../dao/Models/Chats/Channel";
import Group from "../../../../dao/Models/Chats/Group";
import { getUrlToPhoto } from "./Functions/GetUrlToPhoto";

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
      <ImageContainerForChatListContiner urlToPhoto={getUrlToPhoto(chat)} />
      <ChatContentForCentralChat chat={chat} onBranchPress={onBranchPress} />
      <BackgroundColorForBranchInChatList nesting={nesting} />
    </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
