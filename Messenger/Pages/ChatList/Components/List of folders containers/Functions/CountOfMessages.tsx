import { View, ViewStyle,Text } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";
import React, { ReactNode } from "react";
import { formatNumber } from "./FormatNumberOfUnreadMessages";
export function CountOfMessages(countOfMessage: number): ReactNode {
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