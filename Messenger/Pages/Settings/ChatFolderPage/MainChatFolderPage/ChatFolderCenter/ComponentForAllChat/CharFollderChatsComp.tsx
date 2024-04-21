import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import ContainerForButtonForSettings from "../../../../../SemiComponents/ContainerForButtonForSettings";
import ArrowForChatFolderComp from "./ArrowFolderChatsSVG";
interface ChatFolderButtCompProps {
  text: string;
}

const ChatFolderButtComp: React.FC<ChatFolderButtCompProps> = ({ text }) => {
  return (
    <ContainerForButtonForSettings>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 15,
          alignSelf: "center",
        }}
      >
        {text}
      </Text>
      <View
        style={{ alignSelf: "center", marginRight: 10, position: "relative" }}
      >
        <ArrowForChatFolderComp/>
      </View>
    </ContainerForButtonForSettings>
  );
};
export default ChatFolderButtComp;