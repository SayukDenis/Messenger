import BranchesButtonContainer from "./ChatInfoComponets/BranchesButtonContainer";
import React, { useMemo } from "react";
import { View } from "react-native";
import { listOfChatsStyle } from "../../../../Styles/ListOfChatsStyle";
import { connect } from "react-redux";
import Message from "../../../../../../dao/Models/Message";
import formattedTime from "../../Functions/TimeOfLastMessage";
import Chat from "../../../../../../dao/Models/Chats/Chat";
import LastMessageStatusAndTimeContainer from "./ChatInfoComponets/LastMessageStatusAndTimeContainer";

interface ChatInfoContainerProps {
  chat: Chat;
  onBranchPress: () => void;
}

const ChatInfoContainer: React.FC<ChatInfoContainerProps> = ({
  chat,
  onBranchPress,
}) => {
  const lastMessage: Message | undefined = chat?.messages
    ? chat?.messages[chat.messages.length - 1]
    : undefined;

  const time = useMemo(
    () => formattedTime(lastMessage),
    [lastMessage?.sendingTime]
  );

  return (
    <View style={listOfChatsStyle.chatInfoContainer}>
      <LastMessageStatusAndTimeContainer chat={chat} time={time} />
      <BranchesButtonContainer
        isBranches={chat.branches.length > 0}
        onBranchPress={onBranchPress}
      />
    </View>
  );
};
export default connect(null)(ChatInfoContainer);
