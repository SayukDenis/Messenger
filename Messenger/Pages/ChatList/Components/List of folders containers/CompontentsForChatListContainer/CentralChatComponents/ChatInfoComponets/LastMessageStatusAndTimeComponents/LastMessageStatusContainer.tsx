import React from "react";
import { View } from "react-native";
import { listOfChatsStyle } from "../../../../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../../../../dao/Models/Chats/Chat";
import SelfProfile from "../../../../../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
import LastMessageStatusContent from "./LastMessageStatusContent";

interface LastMessageStatusContainerProps {
  chat: Chat;
}

const LastMessageStatusContainer: React.FC<LastMessageStatusContainerProps> = ({
  chat,
}) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });

  return (
    <View style={listOfChatsStyle.lastMessageStatusContainer}>
      <LastMessageStatusContent selfProfile={selfProfile} chat={chat} />
    </View>
  );
};

export default LastMessageStatusContainer;
