import React from "react";
import { View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";

interface ConteinerForAddFolderComp {
  children?: React.ReactNode;
}

const ConteinerForAddFolderComp: React.FC<
ConteinerForAddFolderComp
> = ({ children }) => {
  const heightOfContainer = screenHeight * 0.05;
  const widthOfContainer = screenWidth * 0.94;
  return (
    <View
      style={{
        height: heightOfContainer,
        width: widthOfContainer,
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <View style ={{marginLeft:'4%',justifyContent:'center', flexDirection:'row'}}>{children}</View>
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

export default ConteinerForAddFolderComp;
