import React, {
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";

import LastMessageStatus from "./LastMessageStatus";
import ModeActivity from "../Status Content/ModeActivity";
import Chat from "../../../../dao/Models/Chats/Chat";
import Message from "../../../../dao/Models/Message";
import Dialogue from "../../../../dao/Models/Chats/Dialogue";
import { useDispatch, useSelector } from "react-redux";
import SelfProfile from "../../../../dao/Models/SelfProfile";
import Channel from "../../../../dao/Models/Chats/Channel";
import Group from "../../../../dao/Models/Chats/Group";
import { booleanForLogging } from "../../ChatList";
import BranchesSVG from "../SVG/BranchesSVG";

interface CentralChatContainerProps {
  chat: Chat;
  handlePress: any;
  onLongPressChat: any;
  onBranchPress:()=>void;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const CentralChatContainer: React.FC<CentralChatContainerProps> = ({
  chat,
  handlePress,
  onLongPressChat,
  onBranchPress
}) => {
  useEffect(() => {
    if (booleanForLogging) {
      console.log("RERENDER CENTRAL CHAT CONTAINER " + getNameOfChat(chat));
    }
  });

  const selfProfile: SelfProfile = useSelector((state: any) => {
    const self: SelfProfile = state.selfProfileUser;
    //console.log(self.)
    return self;
  });
  const lastMessage: Message | undefined = chat?.messages
    ? chat?.messages[chat.messages.length - 1]
    : undefined;
  //console.log(lastMessage);
  
  const formattedTime = (): string => {
    if (!lastMessage) return "";
    const now: Date = new Date();
    const timeDiff: number = now.getTime() - lastMessage.sendingTime.getTime();
    const dayInMilliseconds: number = 24 * 60 * 60 * 1000;
    const weekInMilliseconds: number = 7 * dayInMilliseconds;
    const yearInMilliseconds: number = 365 * dayInMilliseconds;
    const minutes: number = lastMessage.sendingTime.getMinutes();
    const hours: number = lastMessage.sendingTime.getHours();
    const day: number = lastMessage.sendingTime.getDate();
    const month: number = lastMessage.sendingTime.getMonth();
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : minutes.toString();
    const hoursString: string = hours < 10 ? `0${hours}` : hours.toString();
    const daySting: string = day < 10 ? `0${day}` : day.toString();
    const monthString: string = month < 10 ? `0${month}` : month.toString();

    if (timeDiff < dayInMilliseconds) {
      return `${hoursString}:${minutesString}`;
    } else if (timeDiff < weekInMilliseconds) {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayOfWeek: string = daysOfWeek[lastMessage.sendingTime.getDay()];
      return dayOfWeek.slice(0, 3);
    } else if (timeDiff < yearInMilliseconds) {
      return `${daySting}.${monthString}`;
    } else {
      return `${daySting}.${monthString}.${
        lastMessage.sendingTime.getFullYear() - 2000
      }`;
    }
  };
  // console.log(chat.linkToPhoto)
  const getNameOfChat = (chat: Chat) => {
    let name = "";

    if (chat instanceof Dialogue) {
      let dialogue: Dialogue = chat as Dialogue;
      for (let i = 0; i < dialogue.users.length; i++) {
        //console.log(dialogue.users[i].name);
        if (dialogue.users[i].userId !== selfProfile.userId) {
          name = dialogue.users[i].name;
        }
      }
    } else if (chat instanceof Channel) {
      let channel: Channel = chat as Channel;
      name = channel.title;
    } else if (chat instanceof Group) {
      let group: Group = chat as Group;
      name = group.title;
    }

    return name;
  };
  return (
    <TouchableOpacity
      onPress={handlePress.current}
      onLongPress={onLongPressChat.current}
      pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
      activeOpacity={1}
    >
      <View style={[listOfChatsStyle.chatcontainer, {}]}>
        <View style={[listOfChatsStyle.imageContainer]}>
          <Image
            source={{ uri: chat.linkToPhoto }}
            style={listOfChatsStyle.image}
          />
          <ModeActivity style={listOfChatsStyle.modeOfActivity} status={1} />
        </View>
        <View style={listOfChatsStyle.containerForOther}>
          <View style={listOfChatsStyle.highcontainer}>
            <View style={listOfChatsStyle.namecontainer}>
              <Text
                style={listOfChatsStyle.nameStyle}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {getNameOfChat(chat)}
              </Text>
            </View>
            <View style={[listOfChatsStyle.rightContainer]}>
              <LastMessageStatus chat={chat} />
              <Text style={listOfChatsStyle.timeStyle}>{formattedTime()}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={listOfChatsStyle.containerForContent}>
              <Text
                style={listOfChatsStyle.contentStyle}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {lastMessage?.content}
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: "red",
                width: screenWidth * 0.15,
                height: screenHeight * 0.045,
                justifyContent: "center",
              }}
            >
              {chat.branches.length > 0 ? (
                <TouchableOpacity
                  onPress={onBranchPress}
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    height: screenHeight * 0.045,
                    width: screenWidth * 0.15,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "blue",
                      height: screenHeight * 0.045,
                      width: screenWidth * 0.15,
                    }}
                  >
                    <BranchesSVG width={screenWidth} height={screenWidth} />
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
