import React, { ReactNode } from "react";
import { View, Text, Dimensions, ViewStyle } from "react-native";
import Chat from "../../1HelpFullFolder/Chat";
import Message from "../../1HelpFullFolder/Message";
import { mySelfUser } from "../../1HelpFullFolder/Initialization";
import ViewedMessageIcon from "./ViewedMessageIcon";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
interface LastMessageStatusProps {
  chat: Chat;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat }) => {
  const lastMessage: Message | undefined =
    chat.listOfMessages[chat.listOfMessages.length - 1];
  if (!lastMessage) {
    return null;
  }
  let content: ReactNode;
  const id: number | undefined = chat.dictionary?.get(mySelfUser.id);
  if (lastMessage.sender === mySelfUser) {
    if (id && lastMessage.id < id) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
          />
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfSecondCheckMarkStyle}
          />
        </View>
      );
    } else {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <ViewedMessageIcon
            stylePosition={listOfChatsStyle.positionOfFirstCheckMarkStyle}
          />
        </View>
      );
    }
  } else if (id) {
    let countOfMessage: number = chat.listOfMessages.length - id;
    if (countOfMessage === 0) return null;
    content = CountOfMessages(countOfMessage);
  }
  return (
    <View style={listOfChatsStyle.lastMessageStatusContainer}>{content}</View>
  );
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
