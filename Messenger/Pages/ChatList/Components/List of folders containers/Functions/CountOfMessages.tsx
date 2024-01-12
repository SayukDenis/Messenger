import { View, ViewStyle,Text } from "react-native";
import { listOfChatsStyle } from "../../../Styles/ListOfChatsStyle";
import { screenHeight, screenWidth } from "../../../Constants/ConstantsForChatlist";
import React, { ReactNode } from "react";
import { formatNumber } from "./FormatNumberOfUnreadMessages";
export function CountOfMessages(countOfMessage: number,backgroundColorOfContainer:string,colorOfText:string,opacityOfBackgroundContainer:number,fontSize:number): ReactNode {
    let widthOfContainerForNumberOfUnreadMessages: number =  screenHeight * 0.05;
    let formatText: string = formatNumber(countOfMessage);
    if (formatText.length == 1)
    widthOfContainerForNumberOfUnreadMessages=screenHeight * 0.018;
    else if (formatText.length == 2)
    widthOfContainerForNumberOfUnreadMessages=screenHeight * 0.03;
    else if (formatText.length == 3)
    widthOfContainerForNumberOfUnreadMessages=screenHeight * 0.04;

    return (
      <View
        style={[listOfChatsStyle.countOfUnreadMessagescontainer, {width:widthOfContainerForNumberOfUnreadMessages}]}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: backgroundColorOfContainer,
            opacity: opacityOfBackgroundContainer,
            height: screenHeight,
            width: screenWidth,
          }}
        />
        <Text style={[listOfChatsStyle.countOfUnReadMessagesContent,{color:colorOfText,fontSize}]}>
          {formatText}
        </Text>
      </View>
    );
  }