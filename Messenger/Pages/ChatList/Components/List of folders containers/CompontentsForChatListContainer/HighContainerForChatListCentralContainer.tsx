import React from "react";
import { View } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { connect } from 'react-redux';
import NameContainerForHighContainerForChatListContainer from './NameContainerForHighContainerForChatListContainer';
import LastMessageStatusAndTimeForChatListContainer from './LastMessageStatusAndTimeForChatListContainer';
import Chat from "../../../../../dao/Models/Chats/Chat";

interface HighContainerProps {
  nameOfChat: string;
  chat: Chat; 
  time: string; 
}

const HighContainerForChatListCentralContainer: React.FC<HighContainerProps> = ({
  nameOfChat,
  chat,
  time,
}) => {
  return (
    <View style={listOfChatsStyle.highcontainer}>
      <NameContainerForHighContainerForChatListContainer nameOfChat={nameOfChat} />
      <LastMessageStatusAndTimeForChatListContainer chat={chat} time={time} />
    </View>
  );
}

export default connect(null)(HighContainerForChatListCentralContainer);
