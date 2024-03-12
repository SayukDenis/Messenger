import { Text, View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";
import React from "react";
import AddButton from "../../SvgComponents/AddButton";
interface ButtonForSettingsProps {
  text: string;
}

const RecommendFolderButt: React.FC<ButtonForSettingsProps> = ({ text }) => {
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
      <View style={{alignSelf:"center",marginRight:10,position:"relative"}}><AddButton/></View>
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
export default RecommendFolderButt;