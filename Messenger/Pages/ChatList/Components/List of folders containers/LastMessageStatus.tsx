import React, { ReactNode } from "react";
import { View, Text, Dimensions, ViewStyle } from "react-native";

import ViewedMessageIcon from "./ViewedMessageIcon";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import UnViewedMessage from "./UnViewedMessage";
import Chat from "../../../../dao/Models/Chats/Chat";
import Message from "../../../../dao/Models/Message";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import { useSelector } from "react-redux";
interface LastMessageStatusProps {
  chat: Chat;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LastMessageStatus: React.FC<LastMessageStatusProps> = ({ chat }) => {
  const selfProfile:SelfProfile=useSelector((state:any)=>{
    const self:SelfProfile=state.selfProfileUser;
    return self
 })
 const currentBranch:number=0;
  const lastMessage: Message | undefined =
    chat.branches[currentBranch].messages[chat.branches[currentBranch].messages.length - 1];
  if (!lastMessage) {
    return null;
  }
  let content: ReactNode;
  const id: number | undefined = 0//chat..?.get(selfPro.id);
  if (lastMessage.author.userI ===selfProfile.userId) {
    if (id && lastMessage.author.userI < id) {
      content = (
        <View style={listOfChatsStyle.checkMarkercontainerStyle}>
          <UnViewedMessage/>
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
    let countOfMessage: number = chat.branches[currentBranch].messages.length - id;
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
      <View style={{position:"absolute",backgroundColor:"#FFFFFF",opacity:0.6,height:screenHeight,width:screenWidth}}/>
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
