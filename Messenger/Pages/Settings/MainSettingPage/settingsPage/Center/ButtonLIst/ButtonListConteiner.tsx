import React from "react";
import { View } from "react-native";
import { screenHeight,screenWidth } from "../../../../../ChatList/Constants/ConstantsForChatlist";

interface ContainerForButtonForSettingsProps {
  children?: React.ReactNode;
}

const ButtonListConteiner: React.FC<
  ContainerForButtonForSettingsProps
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
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      {children}
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

export default ButtonListConteiner;
