import ChatContentContainer from "./CentralChatComponents/ChatContentContainer";
import ImageContainer from "./CentralChatComponents/ImageContainer";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../dao/Models/Chats/Chat";
import { getUrlToPhoto } from "../Functions/GetUrlToPhoto";
import ChatInfoContainer from "./CentralChatComponents/ChatInfoContainer";
import { useDispatch } from "react-redux";
import { setValueToMapForSelectedChats } from "../../../../../ReducersAndActions/Actions/ChatListActions/ChatListActions";

interface CentralChatContainerProps {
  chat: Chat;
  handlePress: any;
  onLongPressChat: any;
  nesting: number;
  onBranchPress: () => void;
  isSelectChatMode: boolean;
}

const CentralChatContainer: React.FC<CentralChatContainerProps> = ({
  chat,
  handlePress,
  onLongPressChat,
  onBranchPress,
  nesting,
  isSelectChatMode,
}) => {
  const dispatch = useDispatch();

  const [isSelectedChatState, setSelectedChatState] = useState<boolean>(false);

  const selectChat = () => {
    setSelectedChatState((prev) => !prev);
  };

  useEffect(() => {
    if (isSelectChatMode) setSelectedChatState(false);
  }, [isSelectChatMode]);

  return (
    <TouchableOpacity
      onPress={isSelectChatMode ? selectChat : handlePress.current}
      onLongPress={isSelectChatMode ? () => {} : onLongPressChat.current}
      pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
      activeOpacity={0.8}
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
      <ChatInfoContainer
        chat={chat}
        onBranchPress={onBranchPress}
        isSelectChatMode={isSelectChatMode}
        isSelectedChat={isSelectedChatState}
      />
    </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
