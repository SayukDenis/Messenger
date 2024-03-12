import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
interface ButtonForSettingsProps {
  text: string;
}

const ButtonForAllChat: React.FC<ButtonForSettingsProps> = ({ text }) => {
  const heightOfContainer = screenHeight * 0.05;
  const widthOfContainer = screenWidth * 0.94;
  return (
    <View
      style={{
        height: heightOfContainer,
        width: widthOfContainer,
        alignSelf: "center",
        borderRadius: 5,
        flexDirection: "row",
        overflow: "hidden",
        justifyContent:"space-between"
      }}
    >
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
        style={{
          height: heightOfContainer,
          width: widthOfContainer,
          position: "absolute",
          backgroundColor: "white",
          zIndex: -1,
          opacity: 0.11,
        }}
      />
    </View>
  );
};
export default ButtonForAllChat;