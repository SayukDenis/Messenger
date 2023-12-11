import React, { Ref, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import { listOfChatsStyle } from "../../Styles/ListOfChatsStyle";

import LastMessageStatus from "./LastMessageStatus";
import ModeActivity from "../Status Content/ModeActivity";
import { BlurView } from "expo-blur";
import Chat from "../../../../dao/Models/Chats/Chat";
import Message from "../../../../dao/Models/Message";

interface CentralChatContainerProps {
  chat: Chat;
  handlePress: any;
  onLongPressChat: any;
}

const { width: screenWidth,height:screenHeight } = Dimensions.get("window");

const CentralChatContainer: React.FC<CentralChatContainerProps> = ({
  chat,
  handlePress,
  onLongPressChat,
}) => {
  const currentBranch=0;
  console.log(chat);
  return
  const lastMessage: Message | undefined =
    chat.branches[currentBranch].messages[chat.branches.length - 1];
    //console.log(chat);
    
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

  return (
    <TouchableOpacity
          onPress={handlePress.current}
          onLongPress={onLongPressChat.current}
          pressRetentionOffset={{ top: 0, left: 0, right: 0, bottom: 0 }}
          activeOpacity={1}
        >

          
          <View style={[listOfChatsStyle.chatcontainer,{}]}>
          
            <View style={[listOfChatsStyle.imageContainer]}>
              <Image
                source={{ uri: "https://pzks.fpm.kpi.ua/images/vykladachi/liushenko.jpg", }}
                style={listOfChatsStyle.image}
              ></Image>
              <ModeActivity
                style={listOfChatsStyle.modeOfActivity}
                status={1}
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
                    {chat.schema.name}
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
