import React, { useMemo } from "react";
import { View } from "react-native";
import { listOfChatsStyle } from "../../../../Styles/ListOfChatsStyle";
import { connect, useSelector } from "react-redux";
import getNameOfChat from "../../Functions/GetNameOfChat";
import Message from "../../../../../../dao/Models/Message";
import SelfProfile from "../../../../../../dao/Models/SelfProfile";
import Chat from "../../../../../../dao/Models/Chats/Chat";
import ChatNameContainer from "./ChatContentComponents/ChatNameContainer";
import LastMessageContainer from "./ChatContentComponents/LastMessageContainer";

interface ChatContentContainerProps {
  chat: Chat;
}

const ChatContentContainer: React.FC<ChatContentContainerProps> = ({
  chat,
}) => {
  const lastMessage: Message | undefined = chat?.messages
    ? chat?.messages[chat.messages.length - 1]
    : undefined;

  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });

  const nameOfChat = useMemo(() => getNameOfChat(chat, selfProfile), [chat]);

  return (
    <View style={listOfChatsStyle.chatContentContainer}>
      <ChatNameContainer nameOfChat={nameOfChat} />
      <LastMessageContainer
        lastMessage={lastMessage}
        content={lastMessage?.content}
      />
    </View>
  );
};
export default connect(null)(ChatContentContainer);
