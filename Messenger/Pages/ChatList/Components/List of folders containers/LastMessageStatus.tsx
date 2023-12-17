import React, { ReactNode } from "react";
import { View, Text, Dimensions, ViewStyle } from "react-native";

import ViewedMessageIcon from "./ViewedMessageIcon";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import UnViewedMessage from "./UnViewedMessage";
import Chat from "../../../../dao/Models/Chats/Chat";
import Message from "../../../../dao/Models/Message";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
import ILastWathedMessage from "../../../../dao/Models/Chats/ILastWathedMessage";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
interface LastMessageStatusProps {
  chat: Chat;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat }) => {
  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    return self;
  });
  const lastMessage: Message | undefined =
    chat?.messages[chat.messages.length - 1];
  if (!lastMessage) {
    return null;
  }
  const lastMessageStatus = (chat: Chat):ReactNode => {
    let content: ReactNode;
    const id: number | undefined = 0;
    let dialogue:Dialogue=chat as Dialogue;
   // console.log()
   // console.log(lastMessage.messageId)
   // console.log(chat.lastWathedMessage[1].user.name)
   // console.log(dialogue.lastWathedMessage)
    if (lastMessage.author.userId === selfProfile.userId) {
      if (id && lastMessage.author.userId < id) {
        content = (
          <View style={listOfChatsStyle.checkMarkercontainerStyle}>
            <UnViewedMessage />
          </View>
        );
      } else if (true) {
        //console.log(10)
        content = (
          <View style={listOfChatsStyle.checkMarkercontainerStyle}>
            <ViewedMessageIcon
              stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
            />
          </View>
        );
      }
    } else if (id) {
      let countOfMessage: number = chat.messages.length - id;
      if (countOfMessage === 0) return null;
      content = CountOfMessages(countOfMessage);
    }
    return content
  };
  return <View style={listOfChatsStyle.lastMessageStatusContainer}>{lastMessageStatus(chat)}</View>;
};
function CountOfMessages(countOfMessage: number): ReactNode {
  let containerStyle: ViewStyle = listOfChatsStyle.fourCharcontainer;
  let formatText: string = formatNumber(countOfMessage);
  if (formatText.length == 1)
    containerStyle = listOfChatsStyle.oneCharcontainer;
  else if (formatText.length == 2)
    containerStyle = listOfChatsStyle.twoCharcontainer;
  else if (formatText.length == 3)
    containerStyle = listOfChatsStyle.threeCharcontainer;
  else if (formatText.length == 4)
    containerStyle = listOfChatsStyle.fourCharcontainer;
  return (
    <View
      style={[listOfChatsStyle.countOfUnreadMessagescontainer, containerStyle]}
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "#FFFFFF",
          opacity: 0.6,
          height: screenHeight,
          width: screenWidth,
        }}
      />
      <Text style={listOfChatsStyle.countOfUnReadMessagesContent}>
        {formatText}
      </Text>
    </View>
  );
}

const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 100000) {
    if (num % 1000 !== 0) {
      const thousands = (num / 1000).toFixed(1);
      return thousands.endsWith(".0")
        ? thousands.slice(0, -2) + "K"
        : thousands + "K";
    } else {
      return (num / 1000).toFixed(0) + "K";
    }
  } else if (num < 1000000) {
    if (num % 1000 !== 0) {
      const thousands = (num / 1000).toFixed(0);
      return thousands.endsWith(".0")
        ? thousands.slice(0, -2) + "K"
        : thousands + "K";
    } else {
      return (num / 1000).toFixed(0) + "K";
    }
  } else if (num < 100000000) {
    if (num % 1000000 !== 0) {
      const millions = (num / 1000000).toFixed(1);
      return millions.endsWith(".0")
        ? millions.slice(0, -2) + "M"
        : millions + "M";
    } else {
      return (num / 1000).toFixed(0) + "M";
    }
  } else if (num < 1000000000) {
    if (num % 1000000 !== 0) {
      const millions = (num / 1000000).toFixed(0);
      return millions.endsWith(".0")
        ? millions.slice(0, -2) + "M"
        : millions + "M";
    } else {
      return (num / 1000000).toFixed(0) + "M";
    }
  } else {
    if (num % 1000000000 !== 0) {
      const billions = (num / 1000000000).toFixed(1);
      return billions.endsWith(".0")
        ? billions.slice(0, -2) + "B"
        : billions + "B";
    } else {
      return (num / 1000000000).toFixed(0) + "B";
    }
  }
  return "0";
};

export default LastMessageStatus;
