import ChatContentContainer from "./CentralChatComponents/ChatContentContainer";
import ImageContainer from "./CentralChatComponents/ImageContainer";
import React from "react";
import { TouchableOpacity } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../dao/Models/Chats/Chat";
import { getUrlToPhoto } from "../Functions/GetUrlToPhoto";
import ChatInfoContainer from "./CentralChatComponents/ChatInfoContainer";

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
      style={[
        listOfChatsStyle.chatContainer,
        {
          backgroundColor:
            nesting == 0
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(72, 255, 232, 0.05)",
        },
      ]}
    >
      <ImageContainer urlToPhoto={getUrlToPhoto(chat)} />
      <ChatContentContainer chat={chat} />
      <ChatInfoContainer chat={chat} onBranchPress={onBranchPress} />
    </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
