import React from "react";
import { View } from "react-native";
import {
  screenHeight,
  screenWidth,
} from "../ChatList/Constants/ConstantsForChatlist";
import BackGroundColorForComponents from "./BackGroundColorForComponents";

interface ContainerForButtonForSettingsProps {
  children?: React.ReactNode;
}

const ContainerForButtonForSettings: React.FC<
  ContainerForButtonForSettingsProps
> = ({ children }) => {
  const heightOfContainer = screenHeight * 0.06;
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
        justifyContent: "space-between",
      }}
    >
      {children}
      <BackGroundColorForComponents
        height={heightOfContainer}
        width={widthOfContainer}
      />
    </View>
  );
};

export default ContainerForButtonForSettings;
