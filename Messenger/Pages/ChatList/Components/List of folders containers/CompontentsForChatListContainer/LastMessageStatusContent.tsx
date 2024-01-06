import React, { ReactNode } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import UnViewedMessage from "../../SVG/UnViewedMessage";
import ViewedMessageIcon from "../../SVG/ViewedMessageIcon";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import Chat from "../../../../../dao/Models/Chats/Chat";
import Dialogue from "../../../../../dao/Models/Chats/Dialogue";
import SelfProfile from "../../../../../dao/Models/SelfProfile";
import { CountOfMessages } from "../Functions/CountOfMessages";
import ILastWatchedMessage from "../../../../../dao/Models/Chats/ILastWatchedMessage";
import getNameOfChat from "../Functions/GetNameOfChat";
import Group from "../../../../../dao/Models/Chats/Group";


interface LastMessageStatusProps {
  chat: Chat;
  selfProfile: SelfProfile;
}

const LastMessageStatus: React.FC<LastMessageStatusProps> = ({
  chat,
  selfProfile,
}) => {
  const listOfLastWatchedMessage:ILastWatchedMessage[]=chat.lastWatchedMessage;
  const ILastMessage: ILastWatchedMessage | undefined = (listOfLastWatchedMessage===undefined?null:listOfLastWatchedMessage)?.find(
    (value: ILastWatchedMessage) => {
      return value.user.userId == selfProfile.userId;
    }
  );
  const  lastMessageId:number|undefined=(ILastMessage?.value!==undefined?ILastMessage.value:null)?.messageId
  
  let content: ReactNode;
  const lastMessage = chat.messages[chat.messages.length - 1];
  if (lastMessage.author.userId === selfProfile.userId) {
    if (lastMessageId && lastMessage.author.userId!==undefined && lastMessage?.author.userId < lastMessageId) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <UnViewedMessage />
        </View>
      );
    } else if (true) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
          />
        </View>
      );
    }
  } else if (lastMessageId) {
    const countOfMessage: number = chat.messages.length - lastMessageId;
    if (countOfMessage === 0) return null;
    //console.log(getNameOfChat(chat,selfProfile) +" "+lastMessageId+ ":"+chat.messages.length)
    content = CountOfMessages(countOfMessage);
  }

  return content;
};

export default connect(null)(LastMessageStatus);
