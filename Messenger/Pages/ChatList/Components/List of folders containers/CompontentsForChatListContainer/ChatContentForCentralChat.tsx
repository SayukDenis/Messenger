import BranchesButtonIfExistForChatListContainer  from './BranchesButtonIfExistForChatListContainer';
import LastMessageContentForChatListContainer  from './LastMessageContentForChatListContainer';
import HighContainerForChatListCentralContainer from "./HighContainerForChatListCentralContainer";
import React, { useMemo } from "react";
import { View } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { connect, useSelector } from "react-redux";
import getNameOfChat from "../Functions/GetNameOfChat";
import Message from "../../../../../dao/Models/Message";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import formattedTime from "../Functions/TimeOfLastMessage";
import Chat from '../../../../../dao/Models/Chats/Chat';
interface ChatContentForCentralChatProps {
  chat: Chat;
  onBranchPress: () => void;
}

const ChatContentForCentralChat: React.FC<ChatContentForCentralChatProps> = ({ chat, onBranchPress }) => {
  const lastMessage: Message | undefined = chat?.messages
    ? chat?.messages[chat.messages.length - 1]
    : undefined;
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const nameOfChat = useMemo(() => getNameOfChat(chat, selfProfile), [chat]);
  const time = useMemo(
    () => formattedTime(lastMessage),
    [lastMessage?.sendingTime]
  );
  return (
    <View style={listOfChatsStyle.containerForOther}>
      <HighContainerForChatListCentralContainer   nameOfChat={nameOfChat} chat={chat} time={time}  />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <LastMessageContentForChatListContainer   lastMessage={lastMessage} content={lastMessage?.content}  />
        <BranchesButtonIfExistForChatListContainer moreThan0Branches={chat.branches.length>0}  onBranchPress={onBranchPress}  />
      </View>
    </View>
  );
}
export default connect(null)(ChatContentForCentralChat)