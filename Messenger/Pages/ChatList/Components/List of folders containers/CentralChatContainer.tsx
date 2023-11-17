import React, { Ref, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";
import Message from "../../1HelpFullFolder/Message";
import Chat from "../../1HelpFullFolder/Chat";
import LastMessageStatus from "./LastMessageStatus";
import ModeActivity from "../Status Content/ModeActivity";

interface CentralChatContainerProps {
  chat: Chat;
  handlePress: any;
  onLongPressChat: any;
}

const { width: screenWidth } = Dimensions.get("window");

const CentralChatContainer: React.FC<CentralChatContainerProps> = ({
  chat,
  handlePress,
  onLongPressChat,
}) => {
  const lastMessage: Message | undefined =
    chat.listOfMessages[chat.listOfMessages.length - 1];
    
    const formattedTime = (): string => {
        if (!lastMessage) return "";
        const now: Date = new Date();
        const timeDiff: number = now.getTime() - lastMessage.timeOfSend.getTime();
        const dayInMilliseconds: number = 24 * 60 * 60 * 1000;
        const weekInMilliseconds: number = 7 * dayInMilliseconds;
        const yearInMilliseconds: number = 365 * dayInMilliseconds;
        const minutes: number = lastMessage.timeOfSend.getMinutes();
        const hours: number = lastMessage.timeOfSend.getHours();
        const day: number = lastMessage.timeOfSend.getDate();
        const month: number = lastMessage.timeOfSend.getMonth();
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
          const dayOfWeek: string = daysOfWeek[lastMessage.timeOfSend.getDay()];
          return dayOfWeek.slice(0, 3);
        } else if (timeDiff < yearInMilliseconds) {
          return `${daySting}.${monthString}`;
        } else {
          return `${daySting}.${monthString}.${
            lastMessage.timeOfSend.getFullYear() - 2000
          }`;
        }
      };

  return (
    <TouchableOpacity
          onPress={handlePress.current}
          onLongPress={onLongPressChat.current}
          pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
          activeOpacity={1}
        >
          <View style={listOfChatsStyle.chatcontainer}>
            <View style={[listOfChatsStyle.imageContainer]}>
              <Image
                source={{ uri: chat.url }}
                style={listOfChatsStyle.image}
              ></Image>
              <ModeActivity
                style={listOfChatsStyle.modeOfActivity}
                status={chat.status}
              />
            </View>
            <View style={listOfChatsStyle.containerForOther}>
              <View style={listOfChatsStyle.highcontainer}>
                <View style={listOfChatsStyle.namecontainer}>
                  <Text
                    style={listOfChatsStyle.nameStyle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {chat.name}
                  </Text>
                </View>
                <View style={[listOfChatsStyle.rightContainer]}>
                  <LastMessageStatus chat={chat} />
                  <Text style={listOfChatsStyle.timeStyle}>
                    {formattedTime()}
                  </Text>
                </View>
              </View>
              <View style={listOfChatsStyle.containerForContent}>
                <Text
                  style={listOfChatsStyle.contentStyle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {lastMessage?.content}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
  );
};

export default React.memo(CentralChatContainer);
